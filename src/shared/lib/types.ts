declare global {}

export {};

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
}
