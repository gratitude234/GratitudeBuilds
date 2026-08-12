import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

export const metadata: Metadata = {
  title: "About",
  description: "Behind the screen with Gratitude Olanibi — founder, designer, full-stack developer, and CTO.",
};

const principles = [
  ["01", "Useful before impressive", "A product earns attention by solving something real. The visual idea should make that usefulness clearer."],
  ["02", "One connected system", "Strategy, interface, and engineering are not hand-offs. I make decisions with the whole product in view."],
  ["03", "Finish the thought", "Ideas become valuable when they survive implementation, reach people, and improve through use."],
];

export default function AboutPage() {
  return (
    <div className="page-shell about-page">
      <header className="about-hero blueprint-grid-soft">
        <div className="page-index"><span>02</span><i /><span>BEHIND THE SCREEN</span></div>
        <div className="about-title">
          <h1>Calm at the desk.<br /><em>Ambitious in the build.</em></h1>
          <p>I&apos;m Gratitude Olanibi. Most days, I&apos;m behind my PC turning a useful idea into a clear interface, a dependable system, and eventually a product people can use.</p>
        </div>
      </header>

      <section className="about-portrait-section">
        <div className="portrait-panel portrait-large portrait-photo">
          <Image
            className="about-portrait-image"
            src="/brand/gratitude-portrait.jpg"
            alt="Gratitude Olanibi seated in a red chair"
            fill
            sizes="(max-width: 800px) 88vw, 42vw"
          />
          <span className="portrait-coordinate">SUBJECT / GRATITUDE OLANIBI</span>
          <span className="portrait-growth-bars" aria-hidden="true"><i /><i /><i /></span>
          <i className="portrait-focus focus-one" /><i className="portrait-focus focus-two" />
        </div>
        <div className="about-story">
          <span className="eyebrow">The short version</span>
          <h2>I like taking responsibility for the whole product.</h2>
          <p>Design taught me to look closely at people, friction, and clarity. Engineering gave me the ability to carry those decisions all the way into a working product. Building companies taught me that shipping is only the beginning.</p>
          <p>That combination is why I call myself a Product Builder. I can move from an early idea to product direction, UI/UX, full-stack implementation, deployment, and the next decision after users arrive.</p>
          <Link className="text-link" href="/resume">Read my résumé <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="principles-section">
        <div className="section-kicker"><span>03</span><span>Working principles</span></div>
        <div className="principle-list">
          {principles.map(([index, title, copy]) => (
            <Reveal className="principle" key={title}>
              <span>{index}</span><h3>{title}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="capabilities-section blueprint-grid-soft">
        <div><span className="eyebrow">Capabilities</span><h2>From blank page<br />to working system.</h2></div>
        <div className="capability-grid">
          <div><span>THINK</span><p>Opportunity discovery<br />Product strategy<br />Information architecture<br />User flows</p></div>
          <div><span>DESIGN</span><p>UI/UX design<br />Interaction design<br />Prototyping<br />Design systems</p></div>
          <div><span>BUILD</span><p>Frontend engineering<br />Backend systems<br />Data & integrations<br />Deployment</p></div>
          <div><span>GROW</span><p>Product iteration<br />User feedback<br />Technical leadership<br />Founder ownership</p></div>
        </div>
        <WhatsAppLink intent="collaboration">Work with me</WhatsAppLink>
      </section>
    </div>
  );
}
