import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Gratitude Builds — Product Builder",
    template: "%s — Gratitude Builds",
  },
  description: siteConfig.description,
  applicationName: "Gratitude Builds",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "Gratitude Olanibi",
    "Product Builder",
    "UI UX Designer",
    "Full-stack Developer",
    "Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Gratitude Builds",
    title: "Gratitude Builds — Product Builder",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratitude Builds — Product Builder",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FFF9F2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    jobTitle: siteConfig.role,
    knowsAbout: ["Product strategy", "UI/UX design", "Full-stack engineering"],
    sameAs: siteConfig.socialLinks.map((link) => link.href),
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
