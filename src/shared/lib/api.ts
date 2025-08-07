import type { InvestmentBannerData as InvestmentData } from "./types";

export class InvestmentAPI {
  private static instance: InvestmentAPI;

  private constructor() {}

  static getInstance(): InvestmentAPI {
    if (!InvestmentAPI.instance) {
      InvestmentAPI.instance = new InvestmentAPI();
    }
    return InvestmentAPI.instance;
  }

  async fetchInvestmentsData(): Promise<InvestmentData> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockData: InvestmentData = {
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
    };

    return mockData;
  }
}

export const investmentAPI = InvestmentAPI.getInstance();
