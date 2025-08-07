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
  offeringTerms: OfferingTerm[];
  documents: Document[];
}
