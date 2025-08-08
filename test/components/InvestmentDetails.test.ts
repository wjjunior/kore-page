import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import InvestmentDetails from "@/features/investment/ui/InvestmentDetails.vue";
import type { InvestmentBannerData } from "@/shared/lib/types";

const mockInvestmentData: InvestmentBannerData = {
  daysLeft: 213,
  totalInvestors: 157,
  fundingGoal: 250000,
  fundsRaised: 300000,
  minimumInvestment: 100,
  deadline: "Feb, 2025",
  typeOfSecurity: "Revenue Share Agreement",
  revenueShareDuration: 36,
  categories: ["Fintech", "Investments"],
  companyName: "Kore",
  companyDescription: "Lorem ipsum dolor sit",
  website: "https://site.com",
  logoSrc: "/images/kore-logo.svg",
  thumbnailSrc: "/images/thumbnail.svg",
  offeringTerms: [
    {
      label: "Regulation",
      value: "Regulation Crowdfunding (RegCF)",
    },
    {
      label: "Offering Type",
      value: "Revenue Sharing Agreement",
    },
    {
      label: "Security Type",
      value: "Debt",
    },
    {
      label: "Target Offering",
      value: "$250,000",
    },
    {
      label: "Max Offering",
      value: "$2,000,000",
    },
    {
      label: "Min Investment",
      value: "$100",
    },
    {
      label: "Max Investment",
      value: "$50,000",
    },
    {
      label: "Minimum Hold Period",
      value: "36 months",
    },
    {
      label: "Closing Date",
      value: "Feb 28, 2025 12:59 AM GMT-3",
    },
  ],
  documents: [
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
    {
      id: 3,
      title: "Future Proof Convertible Note",
      filename: "FileName_GoesHere.pdf",
    },
    {
      id: 4,
      title: "Future Proof Convertible Note",
      filename: "FileName_GoesHere.pdf",
    },
    {
      id: 5,
      title: "Future Proof Convertible Note",
      filename: "FileName_GoesHere.pdf",
    },
  ],
  teamMembers: [
    {
      id: 1,
      name: "Jane Smith",
      position: "Director of Product Marketing",
      image: "https://example.com/jane.jpg",
      description: "Lorem ipsum dolor sit amet",
      socialLinks: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
  ],
  teamDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  marketingPlan: "Marketing plan content",
  faqItems: [],
};

const mountInvestmentDetails = async (props = {}) => {
  const wrapper = mount(InvestmentDetails, {
    props: {
      investmentData: mockInvestmentData,
      loading: false,
      ...props,
    },
    global: {
      stubs: {
        InvestmentCards: {
          name: "InvestmentCards",
          props: {
            offeringTerms: { type: Array, required: true },
            documents: { type: Array, required: true },
            loading: { type: Boolean, default: false },
          },
          template:
            '<div class="stub-investment-cards">Offering Terms Documents</div>',
        },
        InvestmentTeam: {
          name: "InvestmentTeam",
          props: {
            teamMembers: { type: Array, required: true },
            teamDescription: { type: String, required: true },
            loading: { type: Boolean, default: false },
          },
          template: '<div class="stub-investment-team">Team</div>',
        },
        InvestmentMarketingPlan: {
          name: "InvestmentMarketingPlan",
          props: {
            marketingPlan: { type: String, required: true },
            loading: { type: Boolean, default: false },
          },
          template:
            '<div class="stub-investment-marketing">Marketing Plan</div>',
        },
        InvestmentFaq: {
          name: "InvestmentFaq",
          props: {
            faqItems: { type: Array, required: true },
            loading: { type: Boolean, default: false },
          },
          template: '<div class="stub-investment-faq">FAQ</div>',
        },
      },
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

  it("should display navigation links", async () => {
    const wrapper = await mountInvestmentDetails();
    expect(wrapper.text()).toContain("Offering Terms and Documents");
    expect(wrapper.text()).toContain("Team");
    expect(wrapper.text()).toContain("Marketing Plan");
    expect(wrapper.text()).toContain("FAQ");
  });

  it("should display offering terms card", async () => {
    const wrapper = await mountInvestmentDetails();
    expect(wrapper.text()).toContain("Offering Terms");
  });

  it("should display documents card", async () => {
    const wrapper = await mountInvestmentDetails();
    expect(wrapper.text()).toContain("Documents");
  });

  it("should display offering terms data", async () => {
    const wrapper = await mountInvestmentDetails();
    const investmentCards = wrapper.findComponent({ name: "InvestmentCards" });
    expect(investmentCards.exists()).toBe(true);
  });

  it("should display documents data", async () => {
    const wrapper = await mountInvestmentDetails();
    const investmentCards = wrapper.findComponent({ name: "InvestmentCards" });
    expect(investmentCards.exists()).toBe(true);
  });

  it("should have proper navigation structure", async () => {
    const wrapper = await mountInvestmentDetails();
    const nav = wrapper.find("nav");
    expect(nav.exists()).toBe(true);
    expect(nav.classes()).toContain("space-y-2");
  });

  it("should have proper card structure", async () => {
    const wrapper = await mountInvestmentDetails();
    const investmentCards = wrapper.findComponent({ name: "InvestmentCards" });
    expect(investmentCards.exists()).toBe(true);
  });

  it("should have proper layout structure", async () => {
    const wrapper = await mountInvestmentDetails();
    const mainContainer = wrapper.find(".bg-white");
    expect(mainContainer.exists()).toBe(true);
    expect(mainContainer.classes()).toContain("bg-white");
  });

  it("should pass loading state to InvestmentCards", async () => {
    const wrapper = await mountInvestmentDetails();
    const investmentCards = wrapper.findComponent({ name: "InvestmentCards" });
    expect(investmentCards.props("loading")).toBe(false);
  });

  it("should pass loading state when loading is true", async () => {
    const wrapper = await mountInvestmentDetails({ loading: true });
    const investmentCards = wrapper.findComponent({ name: "InvestmentCards" });
    expect(investmentCards.props("loading")).toBe(true);
  });
});
