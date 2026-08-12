export type ProjectStatus = "live" | "active" | "pre-launch";

export interface Metric {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name?: string;
  role?: string;
  consented: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  role: string;
  status: ProjectStatus;
  year: string;
  order: number;
  externalUrl: string;
  accent: "violet" | "blue" | "amber";
  visual: "study" | "ideas" | "market";
  services: string[];
  metrics: Metric[];
  seoDescription: string;
}

export interface SiteProfile {
  name: string;
  shortName: string;
  role: string;
  description: string;
  email: string;
  whatsappNumber: string;
  siteUrl: string;
  location: string;
  availability: string;
  socialLinks: SocialLink[];
}
