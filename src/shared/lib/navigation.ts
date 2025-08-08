export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export const NavItems = {
  INVEST: "invest",
  FAQ: "faq",
  CONTACT: "contact",
  EDUCATION: "education",
} as const;

export type NavItemType = (typeof NavItems)[keyof typeof NavItems];
