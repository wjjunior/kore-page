import { describe, it, expect, vi, afterEach, afterAll } from "vitest";
import { mount } from "@vue/test-utils";
import Footer from "@/widgets/footer/ui/Footer.vue";

const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

const MockNuxtLink = {
  name: "NuxtLink",
  props: ["to"],
  template: '<a :href="to"><slot /></a>',
};

const mountFooter = (props = {}) => {
  return mount(Footer, {
    props,
    global: {
      components: { NuxtLink: MockNuxtLink },
    },
  });
};

describe("Footer", () => {
  afterEach(() => {
    consoleSpy.mockClear();
    alertSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
    alertSpy.mockRestore();
  });

  describe("Component Rendering", () => {
    it("renders all main sections and logo", () => {
      const wrapper = mountFooter();

      expect(wrapper.find("footer").exists()).toBe(true);
      expect(wrapper.findComponent({ name: "KoreLogo" }).exists()).toBe(true);
      expect(wrapper.text()).toContain("Join our newsletter");
      expect(wrapper.text()).toContain("The All-in-One Platform");
      expect(wrapper.text()).toContain("Follow Us");
      expect(wrapper.text()).toContain("© 2016-2025 KoreConX Inc.");
    });
  });

  describe("Newsletter Form", () => {
    it("submits form and resets fields", async () => {
      const wrapper = mountFooter();

      await wrapper.find("#first-name").setValue("Alice");
      await wrapper.find("#last-name").setValue("Smith");
      await wrapper.find('input[type="email"]').setValue("alice@example.com");

      await wrapper.find("form").trigger("submit");

      expect(consoleSpy).toHaveBeenCalledWith("Newsletter subscription:", {
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
      });
      expect(alertSpy).toHaveBeenCalled();
      expect(
        (wrapper.find("#first-name").element as HTMLInputElement).value
      ).toBe("");
    });

    it("prevents submission if any field is empty", async () => {
      const wrapper = mountFooter();
      await wrapper.find("form").trigger("submit");
      expect(consoleSpy).not.toHaveBeenCalled();
    });
  });

  describe("Navigation and Social Links", () => {
    it("renders platform and social links", () => {
      const wrapper = mountFooter();
      ["About us", "KoreTeam", "Facebook", "LinkedIn"].forEach((label) => {
        expect(wrapper.text()).toContain(label);
      });
    });
  });

  describe("Bottom Buttons", () => {
    it("triggers footer button clicks", async () => {
      const wrapper = mountFooter();
      const buttons = wrapper.findAll("button");

      for (const btn of buttons) {
        if (
          ["Privacy Policy", "Terms of Service", "Cookies Settings"].includes(
            btn.text()
          )
        ) {
          await btn.trigger("click");
        }
      }

      expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Open .+/));
    });
  });

  it("includes required input attributes", () => {
    const wrapper = mountFooter();
    ["#first-name", "#last-name", 'input[type="email"]'].forEach((sel) => {
      expect(wrapper.find(sel).attributes("required")).toBeDefined();
    });
  });
});
