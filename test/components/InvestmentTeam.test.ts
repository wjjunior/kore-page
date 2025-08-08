import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import InvestmentTeam from "@/features/investment/ui/InvestmentTeam.vue";
import { mockTeamMembers } from "../mocks";

const mountInvestmentTeam = (props: {
  teamMembers: typeof mockTeamMembers;
  teamDescription: string;
  loading?: boolean;
}) =>
  mount(InvestmentTeam, {
    props,
  });

describe("InvestmentTeam", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("renders the section title and description", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Meet our experienced team",
    });
    expect(wrapper.text()).toContain("Team");
    expect(wrapper.text()).toContain("Meet our experienced team");
  });

  it("renders all team members with name, position, and description", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Team",
    });

    for (const member of mockTeamMembers) {
      expect(wrapper.text()).toContain(member.name);
      expect(wrapper.text()).toContain(member.position);
      expect(wrapper.text()).toContain(member.description);
    }
  });

  it("renders team member images with correct attributes", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Team",
    });

    const images = wrapper.findAll("img");
    expect(images).toHaveLength(mockTeamMembers.length);
    mockTeamMembers.forEach((member, index) => {
      const img = images[index];
      expect(img?.attributes("src")).toBe(member.image);
      expect(img?.attributes("alt")).toBe(member.name);
      expect(img?.attributes("loading")).toBe("lazy");
      expect(img?.attributes("format")).toBe("webp");
    });
  });

  it("renders LinkedIn, Facebook, and Twitter links when available", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Team",
    });

    expect(wrapper.findAll('a[href*="linkedin.com"]')).toHaveLength(2);
    expect(wrapper.findAll('a[href*="facebook.com"]')).toHaveLength(1);
    expect(wrapper.findAll('a[href*="twitter.com"]')).toHaveLength(1);
  });

  it("does not render social links if not provided", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: [
        {
          id: 3,
          name: "No Social",
          position: "Analyst",
          image: "/img.jpg",
          description: "Test desc",
          socialLinks: {},
        },
      ],
      teamDescription: "Team",
    });

    expect(wrapper.findAll("a")).toHaveLength(0);
  });

  it("renders loading skeleton when loading is true", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Loading test",
      loading: true,
    });

    expect(wrapper.findAll(".animate-pulse")).toHaveLength(4);
    expect(wrapper.text()).not.toContain("John Doe");
  });

  it("renders empty state gracefully with no team members", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: [],
      teamDescription: "No one yet",
    });

    expect(wrapper.text()).toContain("Team");
    expect(wrapper.text()).toContain("No one yet");
    expect(wrapper.findAll("img")).toHaveLength(0);
  });

  it("matches snapshot for loaded state", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Snapshot test",
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot for loading state", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: mockTeamMembers,
      teamDescription: "Snapshot loading",
      loading: true,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot for empty state", () => {
    const wrapper = mountInvestmentTeam({
      teamMembers: [],
      teamDescription: "Snapshot empty",
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
