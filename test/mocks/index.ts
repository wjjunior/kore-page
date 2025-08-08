import type {
  InvestmentBannerData,
  OfferingTerm,
  Document,
  TeamMember,
  FaqItem,
} from "@/shared/lib/types";

export const MockNuxtImg = {
  name: "NuxtImg",
  template:
    '<img :src="$attrs.src" :alt="$attrs.alt" :class="$attrs.class" :loading="$attrs.loading" :format="$attrs.format" />',
};

export const MockFontAwesomeIcon = {
  name: "FontAwesomeIcon",
  template: '<i :class="$attrs.class"><slot /></i>',
  props: ["icon", "class"],
};

export const MockNuxtLink = {
  name: "NuxtLink",
  props: ["to"],
  template: '<a :href="to"><slot /></a>',
};

export const mockInvestmentBannerData: InvestmentBannerData = {
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
  offeringTerms: [],
  documents: [],
  teamMembers: [],
  teamDescription: "",
  marketingPlan: "",
  faqItems: [],
};

export const mockOfferingTerms: OfferingTerm[] = [
  {
    label: "Regulation",
    value: "Regulation Crowdfunding (RegCF)",
  },
  {
    label: "Offering Type",
    value: "Revenue Sharing Agreement",
  },
];

export const mockDocuments: Document[] = [
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

export const mockTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: "/images/john-doe.jpg",
    description: "Experienced CEO with 15+ years in fintech",
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO",
    image: "/images/jane-smith.jpg",
    description: "Tech leader",
    socialLinks: {
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
];

export const mockFaqItems: FaqItem[] = [
  {
    id: "1",
    question: "What is this investment?",
    answer: "This is a revenue sharing agreement.",
  },
  {
    id: "2",
    question: "How long is the term?",
    answer: "36 months.",
  },
];

export const mockCompleteInvestmentData: InvestmentBannerData = {
  ...mockInvestmentBannerData,
  offeringTerms: mockOfferingTerms,
  documents: mockDocuments,
  teamMembers: mockTeamMembers,
  teamDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  marketingPlan:
    "Our comprehensive marketing strategy focuses on digital channels and partnerships.",
  faqItems: mockFaqItems,
};

export const createMockInvestmentData = (
  overrides: Partial<InvestmentBannerData> = {}
): InvestmentBannerData => ({
  ...mockInvestmentBannerData,
  ...overrides,
});

export const createMockOfferingTerms = (
  overrides: OfferingTerm[] = []
): OfferingTerm[] => [...mockOfferingTerms, ...overrides];

export const createMockDocuments = (overrides: Document[] = []): Document[] => [
  ...mockDocuments,
  ...overrides,
];

export const createMockTeamMembers = (
  overrides: TeamMember[] = []
): TeamMember[] => [...mockTeamMembers, ...overrides];

export const createMockFaqItems = (overrides: FaqItem[] = []): FaqItem[] => [
  ...mockFaqItems,
  ...overrides,
];

export const globalComponentStubs = {
  NuxtImg: MockNuxtImg,
  FontAwesomeIcon: MockFontAwesomeIcon,
  NuxtLink: MockNuxtLink,
};

export const createInvestmentStubs = () => ({
  InvestmentCards: {
    name: "InvestmentCards",
    props: ["offeringTerms", "documents", "loading"],
    template:
      '<div class="stub-investment-cards">Offering Terms Documents</div>',
  },
  InvestmentTeam: {
    name: "InvestmentTeam",
    props: ["teamMembers", "teamDescription", "loading"],
    template: '<div class="stub-investment-team">Team</div>',
  },
  InvestmentMarketingPlan: {
    name: "InvestmentMarketingPlan",
    props: ["marketingPlan", "loading"],
    template: '<div class="stub-investment-marketing">Marketing Plan</div>',
  },
  InvestmentFaq: {
    name: "InvestmentFaq",
    props: ["loading", "faqItems"],
    template: '<div class="stub-investment-faq">FAQ</div>',
  },
});
