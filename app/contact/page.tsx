import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk with Gratitude Olanibi about a product role, client project, or collaboration.",
};

const contactPaths = [
  { index: "01", title: "A product role", copy: "You need someone who can think across product, design, and engineering.", intent: "role" as const, cta: "Discuss the role" },
  { index: "02", title: "A product to build", copy: "You have a useful idea and need a thoughtful path from concept to shipped product.", intent: "project" as const, cta: "Tell me about it" },
  { index: "03", title: "A collaboration", copy: "You are building something ambitious and our skills or ideas could work well together.", intent: "collaboration" as const, cta: "Explore a collaboration" },
];

export default function ContactPage() {
  return (
    <div className="contact-page page-shell">
      <header className="contact-hero blueprint-grid">
        <div className="page-index"><span>04</span><i /><span>OPEN CHANNEL</span></div>
        <div className="contact-status"><i /><span>Available for the right build</span></div>
        <h1>Good ideas deserve<br /><em>a proper build.</em></h1>
        <p>Tell me what you are trying to make, improve, or bring to life. WhatsApp is the fastest way to reach me.</p>
      </header>

      <section className="contact-paths" aria-label="Ways to work together">
        {contactPaths.map((path) => (
          <article key={path.index}>
            <span>{path.index}</span>
            <h2>{path.title}</h2>
            <p>{path.copy}</p>
            <WhatsAppLink intent={path.intent} className="text-link">{path.cta}</WhatsAppLink>
          </article>
        ))}
      </section>

      <section className="contact-fallback">
        <span className="eyebrow">Prefer email?</span>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <p>Based in {siteConfig.location}. Available for thoughtful work across borders and time zones.</p>
        {siteConfig.socialLinks.length ? (
          <div className="contact-socials">
            {siteConfig.socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}
