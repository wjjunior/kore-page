import { describe, it, expect, vi, afterEach, afterAll } from "vitest";
import { mount } from "@vue/test-utils";
import Footer from "@/widgets/footer/ui/Footer.vue";

const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

const mountFooter = (props = {}) => {
  return mount(Footer, {
    props,
    global: {
      components: {},
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
    it("renders correctly with all main sections", () => {
      const wrapper = mountFooter();

      expect(wrapper.find("footer").exists()).toBe(true);
      expect(wrapper.find("footer").classes()).toContain("bg-brand-300");
      expect(wrapper.find("footer").classes()).toContain("text-white");
    });

    it("renders the KoreLogo component", () => {
      const wrapper = mountFooter();

      const logo = wrapper.findComponent({ name: "KoreLogo" });
      expect(logo.exists()).toBe(true);
      expect(logo.props("width")).toBe("129.69");
      expect(logo.props("height")).toBe("50");
      expect(logo.props("textColor")).toBe("white");
      expect(logo.props("symbolColor")).toBe("#204496");
      expect(logo.props("backgroundColor")).toBe("white");
    });

    it("renders newsletter signup section", () => {
      const wrapper = mountFooter();

      expect(wrapper.text()).toContain(
        "Join our newsletter to stay up to date on features and releases."
      );
      expect(wrapper.find("form").exists()).toBe(true);
    });

    it("renders platform links section", () => {
      const wrapper = mountFooter();

      expect(wrapper.text()).toContain("The All-in-One Platform");
      expect(wrapper.find('[aria-labelledby="platform-title"]').exists()).toBe(
        true
      );
    });

    it("renders social media section", () => {
      const wrapper = mountFooter();

      expect(wrapper.text()).toContain("Follow Us");
    });

    it("renders copyright and footer links", () => {
      const wrapper = mountFooter();

      expect(wrapper.text()).toContain("© 2016-2025 KoreConX Inc.");
    });
  });

  describe("Newsletter Subscription Form", () => {
    it("renders form fields correctly", () => {
      const wrapper = mountFooter();

      const firstNameInput = wrapper.find("#first-name");
      const lastNameInput = wrapper.find("#last-name");
      const emailInput = wrapper.find('input[type="email"]');
      const submitButton = wrapper.find('button[type="submit"]');

      expect(firstNameInput.exists()).toBe(true);
      expect(lastNameInput.exists()).toBe(true);
      expect(emailInput.exists()).toBe(true);
      expect(submitButton.exists()).toBe(true);
      expect(submitButton.text()).toBe("Subscribe");
    });

    it("has proper labels for form inputs", () => {
      const wrapper = mountFooter();

      const firstNameLabel = wrapper.find('label[for="first-name"]');
      const lastNameLabel = wrapper.find('label[for="last-name"]');

      expect(firstNameLabel.exists()).toBe(true);
      expect(firstNameLabel.text()).toBe("First Name");
      expect(lastNameLabel.exists()).toBe(true);
      expect(lastNameLabel.text()).toBe("Last Name");
    });

    it("handles form input changes", async () => {
      const wrapper = mountFooter();

      const firstNameInput = wrapper.find("#first-name");
      const lastNameInput = wrapper.find("#last-name");
      const emailInput = wrapper.find('input[type="email"]');

      await firstNameInput.setValue("John");
      await lastNameInput.setValue("Doe");
      await emailInput.setValue("john.doe@example.com");

      expect((firstNameInput.element as HTMLInputElement).value).toBe("John");
      expect((lastNameInput.element as HTMLInputElement).value).toBe("Doe");
      expect((emailInput.element as HTMLInputElement).value).toBe(
        "john.doe@example.com"
      );
    });

    it("handles successful form submission", async () => {
      const wrapper = mountFooter();

      const firstNameInput = wrapper.find("#first-name");
      const lastNameInput = wrapper.find("#last-name");
      const emailInput = wrapper.find('input[type="email"]');
      const form = wrapper.find("form");

      await firstNameInput.setValue("John");
      await lastNameInput.setValue("Doe");
      await emailInput.setValue("john.doe@example.com");

      await form.trigger("submit");

      expect(consoleSpy).toHaveBeenCalledWith("Newsletter subscription:", {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      });

      expect(alertSpy).toHaveBeenCalledWith(
        "Thank you for subscribing to our newsletter!"
      );

      // Check if form fields are cleared after submission
      expect((firstNameInput.element as HTMLInputElement).value).toBe("");
      expect((lastNameInput.element as HTMLInputElement).value).toBe("");
      expect((emailInput.element as HTMLInputElement).value).toBe("");
    });

    it("prevents submission with empty fields", async () => {
      const wrapper = mountFooter();

      const form = wrapper.find("form");

      await form.trigger("submit");

      expect(consoleSpy).not.toHaveBeenCalled();
      expect(alertSpy).not.toHaveBeenCalled();
    });

    it("renders privacy policy text and link", () => {
      const wrapper = mountFooter();

      expect(wrapper.text()).toContain("By subscribing you agree to with our");
      expect(wrapper.text()).toContain("Privacy Policy");
      expect(wrapper.text()).toContain(
        "and provide consent to receive updates from our company."
      );

      const privacyPolicyButton = wrapper.find("button");
      expect(privacyPolicyButton.exists()).toBe(true);
    });

    it("handles privacy policy link click", async () => {
      const wrapper = mountFooter();

      const privacyButtons = wrapper.findAll("button");
      const privacyPolicyButton = privacyButtons.find((button) =>
        button.text().includes("Privacy Policy")
      );

      expect(privacyPolicyButton).toBeTruthy();
      await privacyPolicyButton!.trigger("click");

      expect(consoleSpy).toHaveBeenCalledWith("Open Privacy Policy");
    });
  });

  describe("Platform Navigation Links", () => {
    it("renders all platform links", () => {
      const wrapper = mountFooter();

      const expectedLinks = [
        "About us",
        "KoreTeam",
        "KorePartners",
        "Media",
        "GPDR Compliance",
        "Contact",
        "Pricing",
      ];

      expectedLinks.forEach((linkText) => {
        expect(wrapper.text()).toContain(linkText);
      });
    });

    it("handles platform link clicks", async () => {
      const wrapper = mountFooter();

      const platformLinks = wrapper
        .find('[aria-labelledby="platform-title"]')
        .findAll("a");

      expect(platformLinks.length).toBeGreaterThan(0);
      await platformLinks[0]!.trigger("click");
      expect(consoleSpy).toHaveBeenCalledWith("Navigate to: /about");

      const contactLink = platformLinks.find((link) =>
        link.text().includes("Contact")
      );
      if (contactLink) {
        await contactLink.trigger("click");
        expect(consoleSpy).toHaveBeenCalledWith("Navigate to: /contact");
      }
    });
  });

  describe("Social Media Links", () => {
    it("renders all social media links", () => {
      const wrapper = mountFooter();

      const expectedSocialLinks = ["Facebook", "Instagram", "X", "LinkedIn"];

      expectedSocialLinks.forEach((linkText) => {
        expect(wrapper.text()).toContain(linkText);
      });
    });

    it("renders FontAwesome icons for social links", () => {
      const wrapper = mountFooter();

      const socialIcons = wrapper.findAllComponents({
        name: "FontAwesomeIcon",
      });
      expect(socialIcons.length).toBeGreaterThanOrEqual(4); // At least 4 social icons
    });

    it("handles social media link clicks", async () => {
      const wrapper = mountFooter();

      const socialLinks = wrapper
        .findAll("a")
        .filter(
          (link) =>
            link.text().includes("Facebook") ||
            link.text().includes("Instagram") ||
            link.text().includes("X") ||
            link.text().includes("LinkedIn")
        );

      // Test clicking Facebook link
      const facebookLink = socialLinks.find((link) =>
        link.text().includes("Facebook")
      );
      if (facebookLink) {
        await facebookLink.trigger("click");
        expect(consoleSpy).toHaveBeenCalledWith("Navigate to: /facebook");
      }

      // Test clicking LinkedIn link
      const linkedinLink = socialLinks.find((link) =>
        link.text().includes("LinkedIn")
      );
      if (linkedinLink) {
        await linkedinLink.trigger("click");
        expect(consoleSpy).toHaveBeenCalledWith("Navigate to: /linkedin");
      }
    });
  });

  describe("Footer Bottom Links", () => {
    it("renders footer bottom links", () => {
      const wrapper = mountFooter();

      const expectedFooterLinks = [
        "Privacy Policy",
        "Terms of Service",
        "Cookies Settings",
      ];

      expectedFooterLinks.forEach((linkText) => {
        expect(wrapper.text()).toContain(linkText);
      });
    });

    it("handles Terms of Service link click", async () => {
      const wrapper = mountFooter();

      const buttons = wrapper.findAll("button");
      const termsButton = buttons.find((button) =>
        button.text().includes("Terms of Service")
      );

      expect(termsButton).toBeTruthy();
      await termsButton!.trigger("click");

      expect(consoleSpy).toHaveBeenCalledWith("Open Terms of Service");
    });

    it("handles Cookies Settings link click", async () => {
      const wrapper = mountFooter();

      const buttons = wrapper.findAll("button");
      const cookiesButton = buttons.find((button) =>
        button.text().includes("Cookies Settings")
      );

      expect(cookiesButton).toBeTruthy();
      await cookiesButton!.trigger("click");

      expect(consoleSpy).toHaveBeenCalledWith("Open Cookies Settings");
    });
  });

  describe("Accessibility", () => {
    it("has proper form labels", () => {
      const wrapper = mountFooter();

      const firstNameLabel = wrapper.find('label[for="first-name"]');
      const lastNameLabel = wrapper.find('label[for="last-name"]');

      expect(firstNameLabel.exists()).toBe(true);
      expect(lastNameLabel.exists()).toBe(true);
    });

    it("has proper navigation aria-labelledby", () => {
      const wrapper = mountFooter();

      const platformNav = wrapper.find('[aria-labelledby="platform-title"]');
      const platformTitle = wrapper.find("#platform-title");

      expect(platformNav.exists()).toBe(true);
      expect(platformTitle.exists()).toBe(true);
      expect(platformTitle.text()).toBe("The All-in-One Platform");
    });

    it("has required attributes on form inputs", () => {
      const wrapper = mountFooter();

      const firstNameInput = wrapper.find("#first-name");
      const lastNameInput = wrapper.find("#last-name");
      const emailInput = wrapper.find('input[type="email"]');

      expect(firstNameInput.attributes("required")).toBeDefined();
      expect(lastNameInput.attributes("required")).toBeDefined();
      expect(emailInput.attributes("required")).toBeDefined();
    });
  });
});
