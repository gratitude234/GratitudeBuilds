import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-signal">
        <span aria-hidden="true" />
        AVAILABLE FOR THE RIGHT BUILD
      </div>
      <div className="footer-main">
        <div>
          <p className="eyebrow">THE NEXT BUILD COULD BE YOURS</p>
          <h2>Have an idea<br />worth building?</h2>
        </div>
        <WhatsAppLink>Start on WhatsApp</WhatsAppLink>
      </div>
      <div className="footer-bottom">
        <Link href="/" className="footer-logo" aria-label="Gratitude Builds home">
          <Image src="/brand/gratitude-builds-logo.png" alt="Gratitude Builds" width={1018} height={331} />
        </Link>
        <div>
          <a href={`mailto:${siteConfig.email}`}>Email</a>
          <Link href="/resume">Résumé</Link>
          <Link href="/work">All work</Link>
        </div>
        <p>© {new Date().getFullYear()} · {siteConfig.location} · Working everywhere</p>
      </div>
    </footer>
  );
}
