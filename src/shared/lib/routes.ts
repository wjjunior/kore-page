export const ROUTES = {
  HOME: "/",
  INVEST: "/invest",
  FAQ: "/faq",
  CONTACT: "/contact",
  EDUCATION: "/education",
} as const;

export type RouteKey = keyof typeof ROUTES;
