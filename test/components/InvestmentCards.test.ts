import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import InvestmentCards from "@/features/investment/ui/InvestmentCards.vue";
import { mockOfferingTerms, mockDocuments } from "../mocks";

const mountInvestmentCards = (
  props: {
    offeringTerms?: typeof mockOfferingTerms;
    documents?: typeof mockDocuments;
    loading?: boolean;
  } = {}
) => {
  const defaultProps = {
    offeringTerms: [],
    documents: [],
    loading: false,
    ...props,
  };

  return mount(InvestmentCards, {
    props: defaultProps,
  });
};

describe("InvestmentCards", () => {
  it("should display 'Offering Terms' and 'Documents' titles", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
    });

    const titles = wrapper.findAll("h2");
    const titleTexts = titles.map((h2) => h2.text());

    expect(titleTexts).toContain("Offering Terms");
    expect(titleTexts).toContain("Documents");
  });

  it("should render offering terms data when not loading", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      loading: false,
    });

    mockOfferingTerms.forEach(({ label, value }) => {
      expect(wrapper.text()).toContain(label);
      expect(wrapper.text()).toContain(value);
    });
  });

  it("should render documents data when not loading", () => {
    const wrapper = mountInvestmentCards({
      documents: mockDocuments,
      loading: false,
    });

    mockDocuments.forEach(({ title, filename }) => {
      expect(wrapper.text()).toContain(title);
      expect(wrapper.text()).toContain(filename);
    });
  });

  it("should render document filenames as links", () => {
    const wrapper = mountInvestmentCards({
      documents: mockDocuments,
    });

    const links = wrapper.findAll("a");
    expect(links.length).toBe(mockDocuments.length);

    links.forEach((link, index) => {
      expect(link.text()).toContain(mockDocuments[index]?.filename);
    });
  });

  it("should not render offering terms when loading is true", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      loading: true,
    });

    mockOfferingTerms.forEach(({ label, value }) => {
      expect(wrapper.text()).not.toContain(label);
      expect(wrapper.text()).not.toContain(value);
    });
  });

  it("should not render documents when loading is true", () => {
    const wrapper = mountInvestmentCards({
      documents: mockDocuments,
      loading: true,
    });

    mockDocuments.forEach(({ title, filename }) => {
      expect(wrapper.text()).not.toContain(title);
      expect(wrapper.text()).not.toContain(filename);
    });
  });

  it("should show skeleton elements when loading is true", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
      loading: true,
    });

    const skeletons = wrapper.findAll(".animate-pulse");
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it("should render nothing for offeringTerms and documents when empty", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: [],
      documents: [],
    });

    expect(wrapper.findAll("h3").length).toBe(0);
    expect(wrapper.findAll("a").length).toBe(0);
  });

  it("should match snapshot", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
