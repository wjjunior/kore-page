import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { ref } from "vue";
import InvestmentOverview from "@/features/investment/ui/InvestmentOverview.vue";

vi.mock("@/features/investment/composables/useInvestmentData", () => ({
  useInvestmentData: () => ({
    loading: ref(false),
    error: ref(null),
    isDataReady: ref(true),
    getDaysLeft: ref(213),
    getTotalInvestors: ref(157),
    getFundingGoal: ref(250000),
    getFundsRaised: ref(300000),
    getMinimumInvestment: ref(100),
    getDeadline: ref("Feb, 2025"),
    getTypeOfSecurity: ref("Revenue Share Agreement"),
    getRevenueShareDuration: ref(36),
    getCategories: ref(["Fintech", "Investments"]),
    getCompanyName: ref("Kore"),
    getCompanyDescription: ref("Lorem ipsum dolor sit"),
    getWebsite: ref("https://site.com"),
    retryLoad: vi.fn(),
  }),
}));

const mountInvestmentOverview = () => {
  return mount(InvestmentOverview, {
    global: {
      components: {},
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

  it("should display the main title", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Investment Details");
  });

  it("should display funding progress section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Funding Progress");
  });

  it("should display minimum investment section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Minimum Investment");
    expect(wrapper.text()).toContain("$100.00");
  });

  it("should display days remaining section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Days Remaining");
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
    expect(wrapper.text()).toContain("Security Type");
    expect(wrapper.text()).toContain("Revenue Share Agreement");
  });

  it("should display company information section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Company Information");
    expect(wrapper.text()).toContain("Kore");
  });

  it("should display investment terms section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Investment Terms");
  });

  it("should display risk disclosure section", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Risk Disclosure");
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

  it("should have proper funding progress calculation", () => {
    const wrapper = mountInvestmentOverview();
    // With 300,000 raised and 250,000 goal, progress should be 120% (capped at 100%)
    expect(wrapper.text()).toContain("100%");
  });
});
