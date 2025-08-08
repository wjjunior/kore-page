import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import InvestmentMarketingPlan from "@/features/investment/ui/InvestmentMarketingPlan.vue";

const mountInvestmentMarketingPlan = (props = {}) => {
  return mount(InvestmentMarketingPlan, { props });
};

describe("InvestmentMarketingPlan", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("renders the section title", () => {
    const wrapper = mountInvestmentMarketingPlan();
    expect(wrapper.find("h2").text()).toBe("Performance Marketing Plan");
  });

  it("shows loading skeletons when loading is true", () => {
    const wrapper = mountInvestmentMarketingPlan({ loading: true });
    const skeletons = wrapper.findAll(".animate-pulse");
    expect(skeletons).toHaveLength(3);
    skeletons.forEach((skeleton) => {
      expect(skeleton.find(".bg-gray-200").exists()).toBe(true);
    });
  });

  it("does not show skeletons when loading is false", () => {
    const wrapper = mountInvestmentMarketingPlan({
      loading: false,
      marketingPlan: "<p>Content</p>",
    });
    expect(wrapper.findAll(".animate-pulse")).toHaveLength(0);
  });

  it("renders marketing plan HTML when loading is false", () => {
    const content = "<p>This is <strong>safe</strong> content</p>";
    const wrapper = mountInvestmentMarketingPlan({
      loading: false,
      marketingPlan: content,
    });

    expect(wrapper.html()).toContain("This is <strong>safe</strong> content");
  });

  it("renders empty state when marketingPlan is not provided", () => {
    const wrapper = mountInvestmentMarketingPlan({ loading: false });
    expect(wrapper.find(".flex.flex-col.gap-6").text()).toBe("");
  });

  it("sanitizes potentially unsafe HTML", () => {
    const unsafeContent = `<p>Safe</p><script>alert('x')</script>`;
    const wrapper = mountInvestmentMarketingPlan({
      loading: false,
      marketingPlan: unsafeContent,
    });

    expect(wrapper.html()).toContain("Safe");
    expect(wrapper.html()).not.toContain("<script>");
  });

  it("renders complex HTML structure correctly", () => {
    const complex = `
      <h3>Marketing Strategy</h3>
      <ul><li>Digital</li><li>Social</li></ul>
      <p><strong>150%</strong></p>
    `;
    const wrapper = mountInvestmentMarketingPlan({
      loading: false,
      marketingPlan: complex,
    });

    expect(wrapper.html()).toContain("Marketing Strategy");
    expect(wrapper.html()).toContain("Digital");
    expect(wrapper.html()).toContain("150%");
  });

  it("has correct default props", () => {
    const wrapper = mountInvestmentMarketingPlan();
    expect(wrapper.props("loading")).toBe(false);
    expect(wrapper.props("marketingPlan")).toBe("");
  });

  it("matches snapshot", () => {
    const wrapper = mountInvestmentMarketingPlan({
      loading: false,
      marketingPlan: "<p>Snapshot content</p>",
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
