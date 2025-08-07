import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import InvestmentMarketingPlan from "@/features/investment/ui/InvestmentMarketingPlan.vue";

const mountInvestmentMarketingPlan = (props = {}) => {
  return mount(InvestmentMarketingPlan, {
    props,
  });
};

describe("InvestmentMarketingPlan", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("should render the component", () => {
    const wrapper = mountInvestmentMarketingPlan();
    expect(wrapper.exists()).toBe(true);
  });

  it("should display the title", () => {
    const wrapper = mountInvestmentMarketingPlan();
    expect(wrapper.text()).toContain("Performance Marketing Plan");
  });

  it("should show loading skeleton when loading is true", () => {
    const wrapper = mountInvestmentMarketingPlan({ loading: true });

    expect(wrapper.find(".animate-pulse").exists()).toBe(true);

    const skeletonItems = wrapper.findAll(".animate-pulse");
    expect(skeletonItems).toHaveLength(3);

    expect(wrapper.find(".h-8.bg-gray-200.rounded.mb-4.w-48").exists()).toBe(
      true
    );
    expect(wrapper.find(".h-4.bg-gray-200.rounded").exists()).toBe(true);
  });

  it("should show marketing plan content when loading is false", () => {
    const marketingPlanContent = "<p>This is a test marketing plan</p>";
    const wrapper = mountInvestmentMarketingPlan({
      loading: false,
      marketingPlan: marketingPlanContent,
    });

    expect(wrapper.find(".animate-pulse").exists()).toBe(false);

    expect(wrapper.find(".flex.flex-col.gap-6.max-w-4xl").exists()).toBe(true);
    expect(wrapper.html()).toContain(marketingPlanContent);
  });

  it("should render empty marketing plan when no content is provided", () => {
    const wrapper = mountInvestmentMarketingPlan({ loading: false });

    expect(wrapper.find(".flex.flex-col.gap-6.max-w-4xl").exists()).toBe(true);
    expect(wrapper.find(".flex.flex-col.gap-6.max-w-4xl").text()).toBe("");
  });

  it("should render complex HTML content in marketing plan", () => {
    const complexMarketingPlan = `
      <h3>Marketing Strategy</h3>
      <ul>
        <li>Digital advertising</li>
        <li>Social media campaigns</li>
        <li>Content marketing</li>
      </ul>
      <p>Expected ROI: <strong>150%</strong></p>
    `;

    const wrapper = mountInvestmentMarketingPlan({
      loading: false,
      marketingPlan: complexMarketingPlan,
    });

    expect(wrapper.html()).toContain("Marketing Strategy");
    expect(wrapper.html()).toContain("Digital advertising");
    expect(wrapper.html()).toContain("Social media campaigns");
    expect(wrapper.html()).toContain("Content marketing");
    expect(wrapper.html()).toContain("Expected ROI: <strong>150%</strong>");
  });

  it("should have correct default props", () => {
    const wrapper = mountInvestmentMarketingPlan();

    expect(wrapper.props("loading")).toBe(false);
    expect(wrapper.props("marketingPlan")).toBe("");
  });

  it("should apply correct CSS classes for loading state", () => {
    const wrapper = mountInvestmentMarketingPlan({ loading: true });

    expect(wrapper.find(".space-y-8").exists()).toBe(true);

    const skeletonItems = wrapper.findAll(".animate-pulse");
    skeletonItems.forEach((item, index) => {
      expect(item.find(".h-8.bg-gray-200.rounded.mb-4.w-48").exists()).toBe(
        true
      );
      expect(item.find(".space-y-3").exists()).toBe(true);
    });
  });

  it("should apply correct CSS classes for content state", () => {
    const wrapper = mountInvestmentMarketingPlan({
      loading: false,
      marketingPlan: "Test content",
    });

    expect(wrapper.find(".flex.flex-col.gap-6.max-w-4xl").exists()).toBe(true);
  });

  it("should render title with correct styling classes", () => {
    const wrapper = mountInvestmentMarketingPlan();
    const title = wrapper.find("h2");

    expect(title.exists()).toBe(true);
    expect(title.classes()).toContain("font-hanken-grotesk");
    expect(title.classes()).toContain("font-bold");
    expect(title.classes()).toContain("text-primary-200");
    expect(title.classes()).toContain("mb-6");
  });

  it("should handle different skeleton widths based on item index", () => {
    const wrapper = mountInvestmentMarketingPlan({ loading: true });
    const skeletonItems = wrapper.findAll(".animate-pulse");

    const firstItemSecondLine = skeletonItems[0]?.findAll(
      ".h-4.bg-gray-200.rounded"
    )[1];
    expect(firstItemSecondLine?.classes()).toContain("w-3/4");

    const secondItemSecondLine = skeletonItems[1]?.findAll(
      ".h-4.bg-gray-200.rounded"
    )[1];
    expect(secondItemSecondLine?.classes()).toContain("w-full");

    const thirdItemSecondLine = skeletonItems[2]?.findAll(
      ".h-4.bg-gray-200.rounded"
    )[1];
    expect(thirdItemSecondLine?.classes()).toContain("w-4/5");
  });

  it("should conditionally render third line for skeleton items", () => {
    const wrapper = mountInvestmentMarketingPlan({ loading: true });
    const skeletonItems = wrapper.findAll(".animate-pulse");

    const firstItemLines = skeletonItems[0]?.findAll(
      ".h-4.bg-gray-200.rounded"
    );
    expect(firstItemLines).toHaveLength(2);

    const secondItemLines = skeletonItems[1]?.findAll(
      ".h-4.bg-gray-200.rounded"
    );
    expect(secondItemLines).toHaveLength(3);

    const thirdItemLines = skeletonItems[2]?.findAll(
      ".h-4.bg-gray-200.rounded"
    );
    expect(thirdItemLines).toHaveLength(3);
  });
});
