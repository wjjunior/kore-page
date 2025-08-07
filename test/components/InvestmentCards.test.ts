import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import InvestmentCards from "@/features/investment/ui/InvestmentCards.vue";
import type { OfferingTerm, Document } from "@/shared/lib/types";

const mountInvestmentCards = (
  props: {
    offeringTerms?: OfferingTerm[];
    documents?: Document[];
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
    global: {
      components: {},
    },
  });
};

describe("InvestmentCards", () => {
  const mockOfferingTerms = [
    {
      label: "Regulation",
      value: "Regulation Crowdfunding (RegCF)",
    },
    {
      label: "Offering Type",
      value: "Revenue Sharing Agreement",
    },
  ];

  const mockDocuments = [
    {
      id: 1,
      title: "Form C",
      filename: "FileName_GoesHere.pdf",
    },
    {
      id: 2,
      title: "Custodian and Voting Agreement",
      filename: "FileName_GoesHere.pdf",
    },
  ];

  it("should render the component", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("should display offering terms card", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
    });
    expect(wrapper.text()).toContain("Offering Terms");
  });

  it("should display documents card", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
    });
    expect(wrapper.text()).toContain("Documents");
  });

  it("should display offering terms data when not loading", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
      loading: false,
    });
    expect(wrapper.text()).toContain("Regulation");
    expect(wrapper.text()).toContain("Regulation Crowdfunding (RegCF)");
    expect(wrapper.text()).toContain("Offering Type");
    expect(wrapper.text()).toContain("Revenue Sharing Agreement");
  });

  it("should display documents data when not loading", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
      loading: false,
    });
    expect(wrapper.text()).toContain("Form C");
    expect(wrapper.text()).toContain("FileName_GoesHere.pdf");
    expect(wrapper.text()).toContain("Custodian and Voting Agreement");
  });

  it("should show loading state for offering terms when loading", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
      loading: true,
    });

    // Check that loading skeleton elements are present
    const loadingElements = wrapper.findAll(".animate-pulse");
    expect(loadingElements.length).toBeGreaterThan(0);

    // Check that actual data is not displayed
    expect(wrapper.text()).not.toContain("Regulation");
    expect(wrapper.text()).not.toContain("Regulation Crowdfunding (RegCF)");
  });

  it("should show loading state for documents when loading", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
      loading: true,
    });

    // Check that loading skeleton elements are present
    const loadingElements = wrapper.findAll(".animate-pulse");
    expect(loadingElements.length).toBeGreaterThan(0);

    // Check that actual data is not displayed
    expect(wrapper.text()).not.toContain("Form C");
    expect(wrapper.text()).not.toContain("FileName_GoesHere.pdf");
  });

  it("should have proper card structure", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
    });

    const cards = wrapper.findAll(
      ".bg-white.rounded-lg.border.border-blue-400"
    );
    expect(cards).toHaveLength(2);
  });

  it("should have proper layout structure", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
    });

    const container = wrapper.find(".flex.space-x-6");
    expect(container.exists()).toBe(true);
  });

  it("should default loading to false", () => {
    const wrapper = mountInvestmentCards({
      offeringTerms: mockOfferingTerms,
      documents: mockDocuments,
    });

    // Should display actual data since loading defaults to false
    expect(wrapper.text()).toContain("Regulation");
    expect(wrapper.text()).toContain("Form C");
  });
});
