import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import InvestmentDetails from "@/features/investment/ui/InvestmentDetails.vue";

vi.mock("@/features/investment/composables/useInvestmentData", () => ({
  useInvestmentData: () => ({
    loading: ref(false),
    error: ref(null),
    isDataReady: ref(true),
    getOfferingTerms: ref([
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
    ]),
    getDocuments: ref([
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
    ]),
    getTeamMembers: ref([
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
    ]),
    getTeamDescription: ref(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ),
    loadData: vi.fn(),
  }),
}));

const mountInvestmentDetails = () => {
  return mount(InvestmentDetails, {
    global: {
      components: {},
    },
  });
};

describe("InvestmentDetails", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the component", () => {
    const wrapper = mountInvestmentDetails();
    expect(wrapper.exists()).toBe(true);
  });

  it("should display navigation links", () => {
    const wrapper = mountInvestmentDetails();
    expect(wrapper.text()).toContain("Offering Terms and Documents");
    expect(wrapper.text()).toContain("Team");
    expect(wrapper.text()).toContain("Marketing Plan");
    expect(wrapper.text()).toContain("FAQ");
  });

  it("should display offering terms card", () => {
    const wrapper = mountInvestmentDetails();
    expect(wrapper.text()).toContain("Offering Terms");
  });

  it("should display documents card", () => {
    const wrapper = mountInvestmentDetails();
    expect(wrapper.text()).toContain("Documents");
  });

  it("should display offering terms data", () => {
    const wrapper = mountInvestmentDetails();
    expect(wrapper.text()).toContain("Regulation");
    expect(wrapper.text()).toContain("Regulation Crowdfunding (RegCF)");
    expect(wrapper.text()).toContain("Offering Type");
    expect(wrapper.text()).toContain("Revenue Sharing Agreement");
    expect(wrapper.text()).toContain("Security Type");
    expect(wrapper.text()).toContain("Debt");
  });

  it("should display documents data", () => {
    const wrapper = mountInvestmentDetails();
    expect(wrapper.text()).toContain("Form C");
    expect(wrapper.text()).toContain("FileName_GoesHere.pdf");
    expect(wrapper.text()).toContain("Custodian and Voting Agreement");
    expect(wrapper.text()).toContain("Future Proof Convertible Note");
  });

  it("should have proper navigation structure", () => {
    const wrapper = mountInvestmentDetails();
    const nav = wrapper.find("nav");
    expect(nav.exists()).toBe(true);
    expect(nav.classes()).toContain("flex");
    expect(nav.classes()).toContain("flex-col");
    expect(nav.classes()).toContain("gap-4");
  });

  it("should have proper card structure", () => {
    const wrapper = mountInvestmentDetails();
    const investmentCards = wrapper.findComponent({ name: "InvestmentCards" });
    expect(investmentCards.exists()).toBe(true);
  });

  it("should have proper layout structure", () => {
    const wrapper = mountInvestmentDetails();
    const mainContainer = wrapper.find(".min-h-screen");
    expect(mainContainer.exists()).toBe(true);
    expect(mainContainer.classes()).toContain("bg-white");
    expect(mainContainer.classes()).toContain("pt-[93px]");
    expect(mainContainer.classes()).toContain("px-40");
  });

  it("should pass loading state to InvestmentCards", () => {
    const wrapper = mountInvestmentDetails();
    const investmentCards = wrapper.findComponent({ name: "InvestmentCards" });
    expect(investmentCards.props("loading")).toBe(false);
  });
});
