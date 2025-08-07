import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import InvestmentPage from "@/components/investment";

vi.mock("@/features/investment", () => ({
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
    retryLoad: vi.fn(),
  }),
}));

const MockNuxtImg = {
  name: "NuxtImg",
  template: '<img :src="$attrs.src" :alt="$attrs.alt" :class="$attrs.class" />',
};

const mountInvestmentPage = () => {
  return mount(InvestmentPage, {
    global: {
      components: {
        NuxtImg: MockNuxtImg,
      },
    },
  });
};

describe("InvestmentPage", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders the main heading correctly", () => {
    const wrapper = mountInvestmentPage();

    expect(wrapper.find("h1").text()).toBe("Investment Page");
  });

  it("renders the main container with correct styling", () => {
    const wrapper = mountInvestmentPage();

    const mainContainer = wrapper.find(".min-h-screen");
    expect(mainContainer.exists()).toBe(true);
    expect(mainContainer.classes()).toContain("bg-gradient-to-br");
    expect(mainContainer.classes()).toContain("from-blue-50");
    expect(mainContainer.classes()).toContain("to-indigo-100");
  });

  it("renders the content card with proper styling", () => {
    const wrapper = mountInvestmentPage();

    // Busca especificamente pelo div do card, não pelo botão
    const contentCard = wrapper.find("div.bg-white.rounded-lg");
    expect(contentCard.exists()).toBe(true);

    // Verifica as classes do card principal da página
    const cardClasses = contentCard.classes();
    expect(cardClasses).toContain("bg-white");
    expect(cardClasses).toContain("rounded-lg");
    expect(cardClasses).toContain("shadow-xl");
    expect(cardClasses).toContain("p-8");
    expect(cardClasses).toContain("max-w-md");
  });

  it("has the proper page structure", () => {
    const wrapper = mountInvestmentPage();

    // Verifica se a estrutura básica da página está presente
    expect(wrapper.findComponent({ name: "Header" }).exists()).toBe(true);
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find(".min-h-screen").exists()).toBe(true);
  });
});
