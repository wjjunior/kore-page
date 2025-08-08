import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import InvestmentDetails from "@/features/investment/ui/InvestmentDetails.vue";
import * as scrollUtils from "@/shared/lib";
import { mockInvestmentBannerData, createInvestmentStubs } from "../mocks";

const mountInvestmentDetails = async (props = {}) => {
  const wrapper = mount(InvestmentDetails, {
    props: {
      investmentData: mockInvestmentBannerData,
      loading: false,
      ...props,
    },
    global: {
      stubs: createInvestmentStubs(),
    },
  });
  await flushPromises();
  return wrapper;
};

describe("InvestmentDetails", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the component", async () => {
    const wrapper = await mountInvestmentDetails();
    expect(wrapper.exists()).toBe(true);
  });

  it("should render all key sections", async () => {
    const wrapper = await mountInvestmentDetails();
    expect(wrapper.find(".stub-investment-cards").exists()).toBe(true);
    expect(wrapper.find(".stub-investment-team").exists()).toBe(true);
    expect(wrapper.find(".stub-investment-marketing").exists()).toBe(true);
    expect(wrapper.find(".stub-investment-faq").exists()).toBe(true);
  });

  it("should display navigation links", async () => {
    const wrapper = await mountInvestmentDetails();
    const navButtons = wrapper.findAll("nav button");
    const navTexts = navButtons.map((b) => b.text());
    expect(navTexts).toEqual([
      "Offering Terms and Documents",
      "Team",
      "Marketing Plan",
      "FAQ",
    ]);
  });

  it("should call scrollToSection on navigation click", async () => {
    const spy = vi.spyOn(scrollUtils, "scrollToSection");
    const wrapper = await mountInvestmentDetails();
    const firstButton = wrapper.find("nav button");
    await firstButton.trigger("click");
    expect(spy).toHaveBeenCalledWith("#offering-terms", expect.any(Object));
  });

  it("should pass loading state to InvestmentCards", async () => {
    const wrapper = await mountInvestmentDetails({ loading: false });
    const investmentCards = wrapper.findComponent({ name: "InvestmentCards" });
    expect(investmentCards.props("loading")).toBe(false);
  });

  it("should pass loading state to InvestmentCards when loading is true", async () => {
    const wrapper = await mountInvestmentDetails({ loading: true });
    const investmentCards = wrapper.findComponent({ name: "InvestmentCards" });
    expect(investmentCards.props("loading")).toBe(true);
  });

  it("should match snapshot", async () => {
    const wrapper = await mountInvestmentDetails();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
