declare global {}

export {};

export interface OfferingTerm {
  label: string;
  value: string;
}

export interface Document {
  id: number;
  title: string;
  filename: string;
}

export interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  twitter?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
  socialLinks: SocialLinks;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface InvestmentBannerData {
  daysLeft: number;
  totalInvestors: number;
  fundingGoal: number;
  fundsRaised: number;
  minimumInvestment: number;
  deadline: string;
  typeOfSecurity: string;
  revenueShareDuration: number;
  categories: string[];
  companyName: string;
  companyDescription: string;
  website: string;
  logoSrc?: string;
  thumbnailSrc?: string;
  offeringTerms: OfferingTerm[];
  documents: Document[];
  teamMembers: TeamMember[];
  teamDescription: string;
  marketingPlan: string;
  faqItems: FaqItem[];
}
