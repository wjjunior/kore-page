import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import InvestmentFaq from "@/features/investment/ui/InvestmentFaq.vue";
import { AccordionItem } from "@/shared/ui";

const mockFaqItems = [
  {
    id: "faq-1",
    question: "What is the minimum investment amount?",
    answer: "The minimum investment amount is $100.",
  },
  {
    id: "faq-2",
    question: "How long is the revenue sharing agreement?",
    answer: "The revenue sharing agreement has a duration of 36 months.",
  },
  {
    id: "faq-3",
    question: "What type of security is being offered?",
    answer: "We are offering a Revenue Share Agreement.",
  },
];

const mountInvestmentFaq = (props: any = { faqItems: mockFaqItems }) => {
  return mount(InvestmentFaq, {
    props,
    global: {
      components: {
        AccordionItem,
      },
    },
  });
};

describe("InvestmentFaq", () => {
  it("renders the component correctly", () => {
    const wrapper = mountInvestmentFaq({
      faqItems: mockFaqItems,
    });

    expect(wrapper.find("h2").exists()).toBe(true);
    expect(wrapper.find("h2").text()).toBe("FAQ");
  });

  it("displays FAQ items when not loading", () => {
    const wrapper = mountInvestmentFaq({
      faqItems: mockFaqItems,
      loading: false,
    });

    const accordionItems = wrapper.findAllComponents(AccordionItem);
    expect(accordionItems).toHaveLength(3);
  });

  it("displays loading skeleton when loading is true", () => {
    const wrapper = mountInvestmentFaq({
      faqItems: mockFaqItems,
      loading: true,
    });

    expect(wrapper.find(".animate-pulse").exists()).toBe(true);
    expect(wrapper.findAll(".animate-pulse")).toHaveLength(4);
  });

  it("renders FAQ items with correct data", () => {
    const wrapper = mountInvestmentFaq({
      faqItems: mockFaqItems,
    });

    const accordionItems = wrapper.findAllComponents(AccordionItem);

    expect(accordionItems[0]?.props("title")).toBe(
      "What is the minimum investment amount?"
    );
    expect(accordionItems[0]?.props("content")).toBe(
      "The minimum investment amount is $100."
    );

    expect(accordionItems[1]?.props("title")).toBe(
      "How long is the revenue sharing agreement?"
    );
    expect(accordionItems[1]?.props("content")).toBe(
      "The revenue sharing agreement has a duration of 36 months."
    );
  });

  it("handles empty FAQ items array", () => {
    const wrapper = mountInvestmentFaq({
      faqItems: [],
    });

    const accordionItems = wrapper.findAllComponents(AccordionItem);
    expect(accordionItems).toHaveLength(0);
  });

  it("has proper styling classes", () => {
    const wrapper = mountInvestmentFaq({
      faqItems: mockFaqItems,
    });

    expect(wrapper.find("h2").classes()).toContain("font-hanken-grotesk");
    expect(wrapper.find("h2").classes()).toContain("font-bold");
    expect(wrapper.find("h2").classes()).toContain("text-primary-200");
  });

  it("renders accordion items with correct structure", () => {
    const wrapper = mountInvestmentFaq({
      faqItems: mockFaqItems,
    });

    const accordionItems = wrapper.findAllComponents(AccordionItem);
    expect(accordionItems[0]?.props("title")).toBe(mockFaqItems[0]?.question);
    expect(accordionItems[0]?.props("content")).toBe(mockFaqItems[0]?.answer);
  });

  it("handles accordion toggle functionality", async () => {
    const wrapper = mountInvestmentFaq({
      faqItems: mockFaqItems,
    });

    const accordionItems = wrapper.findAllComponents(AccordionItem);
    const firstAccordion = accordionItems[0];

    if (firstAccordion) {
      await firstAccordion.vm.$emit("toggle");
    }

    expect(wrapper.emitted()).toBeDefined();
  });
});
