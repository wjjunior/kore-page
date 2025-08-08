import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { InvestmentPage } from "@/pages/investment";

vi.mock("@/features/investment", async () => {
  const actual = await vi.importActual<typeof import("@/features/investment")>(
    "@/features/investment"
  );
  return {
    ...actual,
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
    useInvestmentPageController: () => ({
      loading: { value: false },
      errorMessage: "",
      isDataReady: { value: true },
      investmentData: {
        value: {
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
        },
      },
      refresh: vi.fn(),
    }),
  };
});

vi.mock("@/features/investment/composables/useInvestmentDataSSR", () => ({
  useInvestmentDataSSR: () => ({
    loading: { value: false },
    error: { value: null },
    isDataReady: { value: true },
    refresh: vi.fn(),
    investmentInfo: {
      value: {
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
      },
    },
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

// Mock ClientOnly component
vi.mock("#app", () => ({
  ClientOnly: {
    name: "ClientOnly",
    template: "<div><slot /></div>",
  },
}));

const mountInvestmentPage = () => {
  return mount(InvestmentPage, {
    global: {
      stubs: {
        ClientOnly: { template: "<div><slot /></div>" },
      },
    },
  });
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
