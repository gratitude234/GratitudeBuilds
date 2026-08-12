import { siteConfig } from "@/lib/site-config";

export type ContactIntent = "general" | "role" | "project" | "collaboration";

const messages: Record<ContactIntent, string> = {
  general:
    "Hi Gratitude, I found your portfolio and would like to talk about building something together.",
  role: "Hi Gratitude, I found your portfolio and would like to discuss a product role with you.",
  project:
    "Hi Gratitude, I found your portfolio and would like to discuss a product I need help building.",
  collaboration:
    "Hi Gratitude, I found your portfolio and would like to explore a collaboration with you.",
};

export function normalisePhoneNumber(value: string) {
  return value.replace(/[^\d]/g, "");
}

export function createWhatsAppUrl(
  intent: ContactIntent = "general",
  project?: string,
) {
  const number = normalisePhoneNumber(siteConfig.whatsappNumber);
  const projectContext = project ? ` I was looking at your work on ${project}.` : "";
  const text = `${messages[intent]}${projectContext}`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
