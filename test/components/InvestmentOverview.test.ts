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
    getOfferingTerms: ref([]),
    getDocuments: ref([]),
    getTeamMembers: ref([]),
    retryLoad: vi.fn(),
  }),
}));

const MockNuxtImg = {
  name: "NuxtImg",
  template: '<img :src="$attrs.src" :alt="$attrs.alt" :class="$attrs.class" />',
};

const mountInvestmentOverview = () => {
  return mount(InvestmentOverview, {
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
});
