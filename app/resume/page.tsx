import type { Metadata } from "next";
import { ResumeActions } from "@/components/ui/resume-actions";
import { TrackView } from "@/components/ui/track-view";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Résumé",
  description: "The experience, selected products, and capabilities of product builder Gratitude Olanibi.",
};

export default function ResumePage() {
  return (
    <div className="resume-page page-shell">
      <TrackView event="resume_view" label="resume_page" />
      <header className="resume-header">
        <div>
          <span className="eyebrow">Résumé / 2026</span>
          <h1>Gratitude<br />Olanibi</h1>
        </div>
        <div className="resume-intro">
          <strong>Product Builder</strong>
          <p>{siteConfig.description}</p>
          <p>{siteConfig.location}<br /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
        </div>
      </header>

      <ResumeActions />

      <div className="resume-grid">
        <section className="resume-section">
          <h2><span>01</span>Experience</h2>
          <div className="resume-entry">
            <div><strong>Gratitude Builds</strong><span>Founder & Product Builder</span></div>
            <time>Present</time>
            <p>Taking digital products from opportunity and strategy through UI/UX design, full-stack engineering, deployment, and iteration.</p>
          </div>
          <div className="resume-entry">
            <div><strong>Indegenius</strong><span>CTO & Product Builder</span></div>
            <time>Present</time>
            <p>Leading the technical direction and building the product experience behind an intellectual-growth platform with more than 300 active users.</p>
          </div>
        </section>

        <section className="resume-section">
          <h2><span>02</span>Selected products</h2>
          <div className="resume-entry compact"><div><strong>JabuStudy</strong><span>Founder · 1,500+ users</span></div><p>Study and CBT preparation tools for students.</p></div>
          <div className="resume-entry compact"><div><strong>Indegenius</strong><span>CTO · 300+ active users</span></div><p>A platform for ideas and intellectual growth.</p></div>
          <div className="resume-entry compact"><div><strong>JabuMarket</strong><span>Founder · Pre-launch</span></div><p>A connected marketplace for campus commerce.</p></div>
        </section>

        <section className="resume-section resume-skills">
          <h2><span>03</span>Capabilities</h2>
          <div><strong>Product</strong><p>Product strategy, opportunity discovery, information architecture, prioritisation, iteration</p></div>
          <div><strong>Design</strong><p>UI/UX, interaction design, prototyping, responsive systems, design systems</p></div>
          <div><strong>Engineering</strong><p>Frontend development, backend systems, data, integrations, deployment</p></div>
          <div><strong>Leadership</strong><p>Founder ownership, technical direction, product decision-making, shipping</p></div>
        </section>

        <section className="resume-section resume-note">
          <h2><span>04</span>Working style</h2>
          <blockquote>Calm in the process. Precise in the details. Responsible for the outcome.</blockquote>
        </section>
      </div>
    </div>
  );
}
