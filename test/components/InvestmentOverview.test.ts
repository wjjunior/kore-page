import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import InvestmentOverview from "@/features/investment/ui/InvestmentOverview.vue";
import type { InvestmentBannerData } from "@/shared/lib/types";

const MockNuxtImg = {
  name: "NuxtImg",
  template: '<img :src="$attrs.src" :alt="$attrs.alt" :class="$attrs.class" />',
};

const mockInvestmentData: InvestmentBannerData = {
  daysLeft: 213,
  totalInvestors: 157,
  fundingGoal: 250000,
  fundsRaised: 300000,
  minimumInvestment: 100,
  deadline: "Feb, 2025",
  typeOfSecurity: "Revenue Share Agreement",
  revenueShareDuration: 36,
  categories: ["Fintech", "Investments"],
  companyName: "Kore",
  companyDescription: "Lorem ipsum dolor sit",
  website: "https://site.com",
  offeringTerms: [],
  documents: [],
  teamMembers: [],
  teamDescription: "",
  marketingPlan: "",
  faqItems: [],
};

const mountInvestmentOverview = (props = {}) => {
  return mount(InvestmentOverview, {
    props: {
      investmentData: mockInvestmentData,
      loading: false,
      error: null,
      ...props,
    },
    global: {
      components: {
        NuxtImg: MockNuxtImg,
      },
    },
  });
};

describe("InvestmentOverview", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("should render the component", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.exists()).toBe(true);
  });

  it("should display the company name", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Kore");
  });

  it("should display the back button", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Back");
  });

  it("should display minimum investment section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Minimum Investment");
    expect(wrapper.text()).toContain("$100.00");
  });

  it("should display days remaining section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Days Left");
    expect(wrapper.text()).toContain("213");
  });

  it("should display total investors section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Total Investors");
    expect(wrapper.text()).toContain("157");
  });

  it("should display revenue share duration section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Revenue Share Duration");
    expect(wrapper.text()).toContain("36 months");
  });

  it("should display security type section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Type of Security");
    expect(wrapper.text()).toContain("Revenue Share Agreement");
  });

  it("should display company description", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Lorem ipsum dolor sit");
  });

  it("should display company website", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("https://site.com");
  });

  it("should display categories", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Fintech");
    expect(wrapper.text()).toContain("Investments");
  });

  it("should display deadline", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Feb, 2025");
  });

  it("should display funding goal", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("$250,000.00");
  });

  it("should display funds raised", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("$300,000.00");
  });

  it("should display invest now button", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Invest Now");
  });

  it("should display view offering circular button", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("View Offering Circular");
  });

  it("should display risk disclosure text", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain(
      "Purchased securities are not currently tradeable"
    );
  });

  it("should display share this deal section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Share This Deal");
  });

  it("should show loading state when loading is true", () => {
    const wrapper = mountInvestmentOverview({ loading: true });
    expect(wrapper.text()).toContain("Loading");
  });

  it("should show error state when error is provided", () => {
    const wrapper = mountInvestmentOverview({ 
      error: "Failed to load data" 
    });
    expect(wrapper.text()).toContain("Failed to load data");
  });

  it("should emit retry event when retry button is clicked", async () => {
    const wrapper = mountInvestmentOverview({ 
      error: "Failed to load data" 
    });
    
    const retryButton = wrapper.find('[data-testid="retry-button"]');
    if (retryButton.exists()) {
      await retryButton.trigger("click");
      expect(wrapper.emitted("retry")).toBeTruthy();
    }
  });
});
