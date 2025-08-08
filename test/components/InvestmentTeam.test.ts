import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import InvestmentTeam from "@/features/investment/ui/InvestmentTeam.vue";
import type { TeamMember } from "@/shared/lib/types";

const MockFontAwesomeIcon = {
  name: "FontAwesomeIcon",
  template: '<i :class="$attrs.class"><slot /></i>',
  props: ["icon", "class"],
};

const MockNuxtImg = {
  name: "NuxtImg",
  template:
    '<img :src="$attrs.src" :alt="$attrs.alt" :class="$attrs.class" :loading="$attrs.loading" :format="$attrs.format" />',
  inheritAttrs: false,
};

const mountInvestmentTeam = (props: {
  teamMembers: TeamMember[];
  teamDescription: string;
  loading?: boolean;
}) => {
  return mount(InvestmentTeam, {
    props,
    global: {
      components: {
        FontAwesomeIcon: MockFontAwesomeIcon,
        NuxtImg: MockNuxtImg,
      },
    },
  });
};

const mockTeamMembers: TeamMember[] = [
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
    description: "Technology leader with expertise in blockchain",
    socialLinks: {
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "CFO",
    image: "/images/bob-johnson.jpg",
    description: "Financial expert with strong background in investments",
    socialLinks: {
      facebook: "https://facebook.com/bobjohnson",
      twitter: "https://twitter.com/bobjohnson",
    },
  },
];

describe("InvestmentTeam", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("should render the component", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("should display the team title", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });
    expect(wrapper.text()).toContain("Team");
  });

  it("should display the team description", () => {
    const teamDescription = "Our experienced team of professionals";
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription,
    });
    expect(wrapper.text()).toContain(teamDescription);
  });

  it("should display all team members", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    expect(wrapper.text()).toContain("John Doe");
    expect(wrapper.text()).toContain("Jane Smith");
    expect(wrapper.text()).toContain("Bob Johnson");
  });

  it("should display team member positions", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    expect(wrapper.text()).toContain("CEO");
    expect(wrapper.text()).toContain("CTO");
    expect(wrapper.text()).toContain("CFO");
  });

  it("should display team member descriptions", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    expect(wrapper.text()).toContain(
      "Experienced CEO with 15+ years in fintech"
    );
    expect(wrapper.text()).toContain(
      "Technology leader with expertise in blockchain"
    );
    expect(wrapper.text()).toContain(
      "Financial expert with strong background in investments"
    );
  });

  it("should display team member images", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    const images = wrapper.findAll("img");
    expect(images).toHaveLength(3);

    expect(images[0]!.attributes("src")).toBe("/images/john-doe.jpg");
    expect(images[0]!.attributes("alt")).toBe("John Doe");
    expect(images[0]!.attributes("loading")).toBe("lazy");
    expect(images[0]!.attributes("format")).toBe("webp");
    expect(images[1]!.attributes("src")).toBe("/images/jane-smith.jpg");
    expect(images[1]!.attributes("alt")).toBe("Jane Smith");
    expect(images[1]!.attributes("loading")).toBe("lazy");
    expect(images[1]!.attributes("format")).toBe("webp");
    expect(images[2]!.attributes("src")).toBe("/images/bob-johnson.jpg");
    expect(images[2]!.attributes("alt")).toBe("Bob Johnson");
    expect(images[2]!.attributes("loading")).toBe("lazy");
    expect(images[2]!.attributes("format")).toBe("webp");
  });

  it("should display LinkedIn links when available", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    const linkedinLinks = wrapper.findAll('a[href*="linkedin.com"]');
    expect(linkedinLinks).toHaveLength(2);
    expect(linkedinLinks[0]!.text()).toContain("LinkedIn");
    expect(linkedinLinks[1]!.text()).toContain("LinkedIn");
  });

  it("should display Facebook links when available", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    const facebookLinks = wrapper.findAll('a[href*="facebook.com"]');
    expect(facebookLinks).toHaveLength(2);
    expect(facebookLinks[0]!.text()).toContain("Facebook");
    expect(facebookLinks[1]!.text()).toContain("Facebook");
  });

  it("should display Twitter links when available", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    const twitterLinks = wrapper.findAll('a[href*="twitter.com"]');
    expect(twitterLinks).toHaveLength(2);
    expect(twitterLinks[0]!.text()).toContain("x");
    expect(twitterLinks[1]!.text()).toContain("x");
  });

  it("should not display social links when not available", () => {
    const teamMembersWithoutSocial: TeamMember[] = [
      {
        id: 1,
        name: "John Doe",
        position: "CEO",
        image: "/images/john-doe.jpg",
        description: "Experienced CEO",
        socialLinks: {},
      },
    ];

    const wrapper = mountInvestmentTeam({
      teamMembers: teamMembersWithoutSocial,
      teamDescription: "Our experienced team",
    });

    expect(wrapper.text()).not.toContain("LinkedIn");
    expect(wrapper.text()).not.toContain("Facebook");

    expect(wrapper.findAll('a[href*="linkedin.com"]')).toHaveLength(0);
    expect(wrapper.findAll('a[href*="facebook.com"]')).toHaveLength(0);
    expect(wrapper.findAll('a[href*="twitter.com"]')).toHaveLength(0);
  });

  it("should display loading skeleton when loading is true", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
      loading: true,
    });

    const skeletonCards = wrapper.findAll(".animate-pulse");
    expect(skeletonCards.length).toBeGreaterThan(0);

    expect(wrapper.text()).not.toContain("John Doe");
    expect(wrapper.text()).not.toContain("Jane Smith");
  });

  it("should display 4 skeleton cards when loading", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
      loading: true,
    });

    const skeletonCards = wrapper.findAll(".animate-pulse");
    expect(skeletonCards).toHaveLength(4);
  });

  it("should display actual team members when not loading", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
      loading: false,
    });

    expect(wrapper.text()).toContain("John Doe");
    expect(wrapper.text()).toContain("Jane Smith");
    expect(wrapper.text()).toContain("Bob Johnson");
  });

  it("should handle empty team members array", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: [],
      teamDescription: "Our experienced team",
    });

    expect(wrapper.text()).toContain("Team");
    expect(wrapper.text()).toContain("Our experienced team");
    expect(wrapper.findAll("img")).toHaveLength(0);
  });

  it("should apply correct CSS classes to team member cards", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    const cardsWithBasicClasses = wrapper.findAll(
      ".bg-white.rounded-lg.border.border-primary-200"
    );
    expect(cardsWithBasicClasses).toHaveLength(3);

    const hasResponsivePadding = cardsWithBasicClasses.some((card) =>
      card
        .classes()
        .some(
          (cls) =>
            cls.includes("p-4") || cls.includes("p-5") || cls.includes("p-6")
        )
    );
    expect(hasResponsivePadding).toBe(true);
  });

  it("should apply correct CSS classes to team member images", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    const images = wrapper.findAll("img");
    images.forEach((img) => {
      expect(img.classes()).toContain("w-24");
      expect(img.classes()).toContain("h-24");
      expect(img.classes()).toContain("rounded-full");
      expect(img.classes()).toContain("object-cover");
    });
  });

  it("should apply correct CSS classes to team member names", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    const nameElements = wrapper.findAll("h3");
    nameElements.forEach((name) => {
      expect(name.classes()).toContain("font-bold");
      expect(name.classes()).toContain("text-primary-200");
    });
  });

  it("should apply correct CSS classes to team member positions", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Our experienced team",
    });

    const positionElements = wrapper
      .findAll("p")
      .filter(
        (p) =>
          (p.text().includes("CEO") ||
            p.text().includes("CTO") ||
            p.text().includes("CFO")) &&
          !p.text().includes("Experienced") &&
          !p.text().includes("Technology") &&
          !p.text().includes("Financial")
      );

    positionElements.forEach((position) => {
      expect(position.classes()).toContain("font-medium");
      expect(position.classes()).toContain("text-gray-6");
    });
  });
});
