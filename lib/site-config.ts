import type { SiteProfile } from "@/types/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gratitudebuilds.com";
const socialLinks = [
  { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "" },
  { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_URL ?? "" },
].filter((link) => Boolean(link.href));

export const siteConfig: SiteProfile = {
  name: "Gratitude Olanibi",
  shortName: "Gratitude",
  role: "Product Builder",
  description:
    "I take useful ideas through product strategy, UI/UX design, full-stack engineering, launch, and growth.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@gratitudebuilds.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2340000000000",
  siteUrl,
  location: "Nigeria",
  availability: "Open to roles, products, and collaborations",
  socialLinks,
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume" },
];
