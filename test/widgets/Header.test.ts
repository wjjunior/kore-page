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

  it("renders correctly with default props", () => {
    const wrapper = mountHeader();

    expect(wrapper.find("header").exists()).toBe(true);
    expect(wrapper.find("nav").exists()).toBe(true);
    expect(wrapper.find("svg").exists()).toBe(true);
  });

  it("renders navigation links", () => {
    const wrapper = mountHeader();

    expect(wrapper.text()).toContain("INVEST");
    expect(wrapper.text()).toContain("FAQ");
    expect(wrapper.text()).toContain("CONTACT US");
    expect(wrapper.text()).toContain("EDUCATION");
  });

  it("renders auth buttons", () => {
    const wrapper = mountHeader();

    expect(wrapper.text()).toContain("Login");
    expect(wrapper.text()).toContain("Sign Up");
  });

  it("handles login button click", async () => {
    const wrapper = mountHeader();

    const loginButtons = wrapper.findAll("button");
    const loginButton = loginButtons.find((button) =>
      button.text().includes("Login")
    );
    expect(loginButton).toBeTruthy();
    await loginButton!.trigger("click");

    expect(consoleSpy).toHaveBeenCalledWith("Login clicked");
  });

  it("handles signup button click", async () => {
    const wrapper = mountHeader();

    const signupButtons = wrapper.findAll("button");
    const signupButton = signupButtons.find((button) =>
      button.text().includes("Sign Up")
    );
    expect(signupButton).toBeTruthy();
    await signupButton!.trigger("click");

    expect(consoleSpy).toHaveBeenCalledWith("Sign Up clicked");
  });

  it("toggles mobile menu when hamburger button is clicked", async () => {
    const wrapper = mountHeader();

    expect(wrapper.find(".md\\:hidden.border-t").exists()).toBe(false);

    const mobileMenuButton = wrapper.find(".md\\:hidden button");
    expect(mobileMenuButton.exists()).toBe(true);
    await mobileMenuButton.trigger("click");

    expect(wrapper.find(".md\\:hidden.border-t").exists()).toBe(true);
  });
});
