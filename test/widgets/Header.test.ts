import { describe, it, expect, vi, afterEach, afterAll } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "@/widgets/header/ui/Header.vue";

const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

const MockNuxtLink = {
  name: "NuxtLink",
  props: ["to"],
  template: '<a :href="to"><slot /></a>',
};

const mountHeader = (props = {}) => {
  return mount(Header, {
    props,
    global: {
      components: { NuxtLink: MockNuxtLink },
    },
  });
};

describe("Header", () => {
  afterEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  describe("Basic rendering", () => {
    it("renders the header wrapper", () => {
      const wrapper = mountHeader();
      expect(wrapper.find("header").exists()).toBe(true);
    });

    it("renders navigation links", () => {
      const wrapper = mountHeader();
      const text = wrapper.text();
      expect(text).toContain("INVEST");
      expect(text).toContain("FAQ");
      expect(text).toContain("CONTACT US");
      expect(text).toContain("EDUCATION");
    });

    it("renders auth buttons", () => {
      const wrapper = mountHeader();
      const text = wrapper.text();
      expect(text).toContain("Login");
      expect(text).toContain("Sign Up");
    });
  });

  describe("Button interaction", () => {
    it("handles login button click", async () => {
      const wrapper = mountHeader();
      const loginButton = wrapper
        .findAll("button")
        .find((b) => b.text().includes("Login"));
      expect(loginButton).toBeTruthy();
      await loginButton!.trigger("click");
      expect(consoleSpy).toHaveBeenCalledWith("Login clicked");
    });

    it("handles signup button click", async () => {
      const wrapper = mountHeader();
      const signupButton = wrapper
        .findAll("button")
        .find((b) => b.text().includes("Sign Up"));
      expect(signupButton).toBeTruthy();
      await signupButton!.trigger("click");
      expect(consoleSpy).toHaveBeenCalledWith("Sign Up clicked");
    });
  });

  describe("Mobile menu", () => {
    it("is hidden by default", () => {
      const wrapper = mountHeader();
      expect(wrapper.find(".md\\:hidden.border-t").exists()).toBe(false);
    });

    it("toggles mobile menu when button is clicked", async () => {
      const wrapper = mountHeader();
      const mobileMenuButton = wrapper.find(".md\\:hidden button");
      expect(mobileMenuButton.exists()).toBe(true);
      await mobileMenuButton.trigger("click");
      expect(wrapper.find(".md\\:hidden.border-t").exists()).toBe(true);
    });
  });
});
