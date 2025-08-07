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
          image:
            "https://i.postimg.cc/KvMRHGh4/73350dca466c03ce4e13b8398184ca610f015d69.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          socialLinks: {
            facebook: "#",
            linkedin: "#",
            twitter: "#",
          },
        },
        {
          id: 2,
          name: "Dr. Carlos Nguyen",
          position: "Lead Game Designer",
          image:
            "https://i.postimg.cc/t4GY0K9k/9f0f3cb05cfe27298de8750b0852c4baea79a752.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          socialLinks: {
            facebook: "#",
            linkedin: "#",
            twitter: "#",
          },
        },
        {
          id: 3,
          name: "David Lee",
          position: "Data Scientist",
          image:
            "https://i.postimg.cc/t4GY0K9k/9f0f3cb05cfe27298de8750b0852c4baea79a752.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          socialLinks: {
            facebook: "#",
            linkedin: "#",
            twitter: "#",
          },
        },
        {
          id: 4,
          name: "Alicia Brown",
          position: "Esports & Community Manager",
          image:
            "https://i.postimg.cc/KvMRHGh4/73350dca466c03ce4e13b8398184ca610f015d69.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          socialLinks: {
            facebook: "#",
            linkedin: "#",
            twitter: "#",
          },
        },
      ],
      teamDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus erat velit, non interdum lorem efficitur eu. Etiam hendrerit tortor at libero auctor hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus erat velit, non interdum lorem efficitur eu. Etiam hendrerit tortor at libero auctor hendrerit.",
    };

    return mockData;
  }
}

export const investmentAPI = InvestmentAPI.getInstance();
