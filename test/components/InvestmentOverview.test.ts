import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import InvestmentOverview from "@/features/investment/ui/InvestmentOverview.vue";
import { mockInvestmentBannerData } from "../mocks";

const mountInvestmentOverview = (props = {}) => {
  return mount(InvestmentOverview, {
    props: {
      investmentData: mockInvestmentBannerData,
      loading: false,
      error: null,
      ...props,
    },
  });
};

describe("InvestmentOverview", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("renders company info", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Kore");
    expect(wrapper.text()).toContain("Lorem ipsum dolor sit");
    expect(wrapper.text()).toContain("https://site.com");
  });

  it("renders share buttons and labels", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Share This Deal");
    const shareButtons = wrapper.findAll("button[aria-label^='Share on']");
    expect(shareButtons.length).toBe(4);
  });

  it("renders company stats and financials", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("213");
    expect(wrapper.text()).toContain("157");
    expect(wrapper.text()).toContain("Feb, 2025");
    expect(wrapper.text()).toContain("Revenue Share Agreement");
    expect(wrapper.text()).toContain("36 months");
    expect(wrapper.text()).toContain("$250,000.00");
    expect(wrapper.text()).toContain("$300,000.00");
    expect(wrapper.text()).toContain("Minimum Investment");
    expect(wrapper.text()).toContain("$100.00");
  });

  it("renders company category badges", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Fintech");
    expect(wrapper.text()).toContain("Investments");
  });

  it("renders logo and thumbnail", () => {
    const wrapper = mountInvestmentOverview();
    const imgs = wrapper.findAll("img");
    expect(
      imgs.find((i) => i.attributes("alt") === "Kore Logo")?.attributes("src")
    ).toBe("/images/kore-logo.svg");
    expect(
      imgs
        .find((i) => i.attributes("alt") === "Video thumbnail")
        ?.attributes("src")
    ).toBe("/images/thumbnail.svg");
  });

  it("renders action buttons", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain("Invest Now");
    expect(wrapper.text()).toContain("View Offering Circular");
  });

  it("renders disclosure text", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.text()).toContain(
      "Purchased securities are not currently tradeable"
    );
  });

  it("displays loading state", () => {
    const wrapper = mountInvestmentOverview({ loading: true });
    expect(wrapper.text()).toContain("Loading...");
  });

  it("displays error state", () => {
    const wrapper = mountInvestmentOverview({ error: "Failed to load" });
    expect(wrapper.text()).toContain("Failed to load");
  });

  it("emits retry when ErrorMessage emits retry", async () => {
    const wrapper = mountInvestmentOverview({ error: "Failed to load" });
    wrapper.findComponent({ name: "ErrorMessage" }).vm.$emit("retry");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("retry")).toBeTruthy();
  });

  it("matches snapshot", () => {
    const wrapper = mountInvestmentOverview();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
