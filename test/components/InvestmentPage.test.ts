import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { InvestmentPage } from "@/pages/investment";
import { mockInvestmentBannerData } from "../mocks";

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
        value: mockInvestmentBannerData,
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
      value: mockInvestmentBannerData,
    },
  }),
}));

vi.mock("@/widgets/header", () => ({
  Header: {
    name: "Header",
    template: '<header class="header-mock">Header Component</header>',
  },
}));

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
        Footer: { template: '<footer class="footer-mock">Footer</footer>' },
        LoadingSpinner: {
          template: '<div class="loading-spinner-mock">Loading...</div>',
        },
      },
    },
  });
};

describe("InvestmentPage", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders header and footer", () => {
    const wrapper = mountInvestmentPage();
    expect(wrapper.find(".header-mock").exists()).toBe(true);
    expect(wrapper.find(".footer-mock").exists()).toBe(true);
  });

  it("renders investment overview and details components when data is ready", () => {
    const wrapper = mountInvestmentPage();
    expect(wrapper.find(".investment-overview-mock").exists()).toBe(true);
    expect(wrapper.find(".investment-details-mock").exists()).toBe(true);
  });

  it("matches snapshot when data is ready", () => {
    const wrapper = mountInvestmentPage();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
