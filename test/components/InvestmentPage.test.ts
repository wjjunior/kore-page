import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { InvestmentPage } from "@/pages/investment";

vi.mock("@/features/investment", () => ({
  InvestmentOverview: {
    name: "InvestmentOverview",
    template:
      '<div class="investment-overview-mock">Investment Overview Component</div>',
  },
  InvestmentDetails: {
    name: "InvestmentDetails",
    template:
      '<div class="investment-details-mock">Investment Details Component</div>',
  },
  useInvestmentData: () => ({
    loadData: vi.fn().mockResolvedValue(undefined),
    loading: { value: false },
    error: { value: null },
    isDataReady: { value: true },
    getDaysLeft: { value: 213 },
    getTotalInvestors: { value: 157 },
    getFundingGoal: { value: 250000 },
    getFundsRaised: { value: 300000 },
    getMinimumInvestment: { value: 100 },
    getDeadline: { value: "Feb, 2025" },
    getTypeOfSecurity: { value: "Revenue Share Agreement" },
    getRevenueShareDuration: { value: 36 },
    getCategories: { value: ["Fintech", "Investments"] },
    getCompanyName: { value: "Kore" },
    getCompanyDescription: { value: "Lorem ipsum dolor sit" },
    getWebsite: { value: "https://site.com" },
    getOfferingTerms: { value: [] },
    getDocuments: { value: [] },
    getTeamMembers: { value: [] },
    retryLoad: vi.fn(),
  }),
}));

vi.mock("@/widgets/header", () => ({
  Header: {
    name: "Header",
    template: '<header class="header-mock">Header Component</header>',
  },
}));

vi.mock("@/widgets/footer", () => ({
  Footer: {
    name: "Footer",
    template: '<footer class="footer-mock">Footer Component</footer>',
  },
}));

const mountInvestmentPage = () => {
  return mount(InvestmentPage);
};

describe("InvestmentPage", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders the component correctly", () => {
    const wrapper = mountInvestmentPage();
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the header component", () => {
    const wrapper = mountInvestmentPage();
    expect(wrapper.findComponent({ name: "Header" }).exists()).toBe(true);
  });

  it("renders the investment overview component", () => {
    const wrapper = mountInvestmentPage();
    expect(wrapper.findComponent({ name: "InvestmentOverview" }).exists()).toBe(
      true
    );
  });

  it("renders the investment details component", () => {
    const wrapper = mountInvestmentPage();
    expect(wrapper.findComponent({ name: "InvestmentDetails" }).exists()).toBe(
      true
    );
  });

  it("has the proper page structure", () => {
    const wrapper = mountInvestmentPage();

    // Verifica se a estrutura básica da página está presente
    expect(wrapper.findComponent({ name: "Header" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "InvestmentOverview" }).exists()).toBe(
      true
    );
    expect(wrapper.findComponent({ name: "InvestmentDetails" }).exists()).toBe(
      true
    );
  });
});
