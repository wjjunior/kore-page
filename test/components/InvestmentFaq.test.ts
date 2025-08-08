import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import InvestmentFaq from "@/features/investment/ui/InvestmentFaq.vue";
import { AccordionItem } from "@/shared/ui";
import { mockFaqItems } from "../mocks";

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
  it("renders the FAQ title", () => {
    const wrapper = mountInvestmentFaq();
    const heading = wrapper.find("h2");
    expect(heading.exists()).toBe(true);
    expect(heading.text()).toBe("FAQ");
  });

  it("displays all AccordionItems when not loading", () => {
    const wrapper = mountInvestmentFaq({
      faqItems: mockFaqItems,
      loading: false,
    });
    const accordionItems = wrapper.findAllComponents(AccordionItem);
    expect(accordionItems).toHaveLength(mockFaqItems.length);
  });

  it("does not render AccordionItems when loading", () => {
    const wrapper = mountInvestmentFaq({
      faqItems: mockFaqItems,
      loading: true,
    });
    expect(wrapper.findAllComponents(AccordionItem)).toHaveLength(0);
  });

  it("displays loading skeletons when loading", () => {
    const wrapper = mountInvestmentFaq({
      faqItems: mockFaqItems,
      loading: true,
    });
    const skeletons = wrapper.findAll(".animate-pulse");
    expect(skeletons).toHaveLength(4);
  });

  it("renders AccordionItems with correct props", () => {
    const wrapper = mountInvestmentFaq({ faqItems: mockFaqItems });
    const accordionItems = wrapper.findAllComponents(AccordionItem);

    accordionItems.forEach((itemWrapper, index) => {
      expect(itemWrapper.props("title")).toBe(mockFaqItems[index]?.question);
      expect(itemWrapper.props("content")).toBe(mockFaqItems[index]?.answer);
    });
  });

  it("renders no AccordionItems if faqItems is empty", () => {
    const wrapper = mountInvestmentFaq({ faqItems: [] });
    expect(wrapper.findAllComponents(AccordionItem)).toHaveLength(0);
  });

  it("toggles accordion item open state", () => {
    const wrapper = mountInvestmentFaq({ faqItems: mockFaqItems });
    const firstItem = wrapper.findComponent(AccordionItem);

    expect(firstItem.props("isOpen")).toBeFalsy();

    firstItem.vm.$emit("toggle");

    expect(firstItem.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = mountInvestmentFaq({ faqItems: mockFaqItems });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
