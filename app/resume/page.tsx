import type { Metadata } from "next";
import { ResumeActions } from "@/components/ui/resume-actions";
import { TrackView } from "@/components/ui/track-view";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "The product, design, engineering, and leadership experience of Gratitude Olanibi.",
};

const contactLinks = [
  { label: "gratitudebuilds.com", href: "https://gratitudebuilds.com" },
  { label: "gratitudeolanibi2020@gmail.com", href: "mailto:gratitudeolanibi2020@gmail.com" },
  { label: "+234 704 102 2336", href: "tel:+2347041022336" },
  { label: "GitHub", href: "https://github.com/gratitude234" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gratitude-olanibi-8b34a82b9/",
  },
];

const capabilities = [
  ["Product", "Product strategy, opportunity discovery, information architecture, user flows, prioritisation, iteration"],
  ["Design", "UI/UX design, interaction design, prototyping, responsive design, design systems"],
  ["Engineering", "Next.js, React, TypeScript, JavaScript, Node.js, Supabase, PostgreSQL, REST APIs, Tailwind CSS"],
  ["Delivery", "Git, GitHub, Vercel, authentication, real-time systems, database design, deployment"],
];

export default function ResumePage() {
  return (
    <div className="resume-page resume-page-v3 page-shell">
      <TrackView event="resume_view" label="resume_page" />

      <header className="resume-header resume-header-v3">
        <div className="resume-identity">
          <span className="eyebrow">Product Builder</span>
          <h1>Gratitude Olanibi</h1>
          <p className="resume-headline">UI/UX Designer <span>•</span> Full Stack Developer <span>•</span> Founder <span>•</span> CTO</p>
        </div>

        <address className="resume-contact" aria-label="Contact information">
          <span>Akure, Ondo State, Nigeria</span>
          {contactLinks.map((item) => (
            <a href={item.href} key={item.label}>{item.label}</a>
          ))}
        </address>
      </header>

      <ResumeActions />

      <section className="resume-summary" aria-labelledby="resume-summary-title">
        <div>
          <span>Founder × 2</span>
          <span>CTO × 1</span>
          <span>3 products built</span>
        </div>
        <h2 id="resume-summary-title">I turn useful ideas into products people can actually use.</h2>
        <p>
          Product builder with end-to-end experience across product strategy, UI/UX design,
          full stack engineering, deployment, and iteration. JabuStudy has reached more than
          1,500 users, while Indegenius has grown to more than 300 active users. My third
          product, JabuMarket, is currently being prepared for launch.
        </p>
      </section>

      <div className="resume-layout">
        <main className="resume-main-column">
          <section className="resume-section resume-experience" aria-labelledby="resume-experience-title">
            <h2 id="resume-experience-title"><span>01</span> Experience</h2>

            <article className="resume-role">
              <header>
                <div>
                  <h3>Founder and Product Builder</h3>
                  <p>Gratitude Builds <span>•</span> Remote</p>
                </div>
                <time>2023 to Present</time>
              </header>
              <ul>
                <li>Own the complete product journey from opportunity discovery and strategy to interface design, engineering, launch, and iteration.</li>
                <li>Built three products across education, campus commerce, and intellectual publishing, working across product decisions, frontend, backend, data, and deployment.</li>
                <li>Turn user needs and business goals into clear product direction, usable interfaces, and dependable production systems.</li>
              </ul>
            </article>

            <article className="resume-role">
              <header>
                <div>
                  <h3>CTO and Product Builder</h3>
                  <p>Indegenius <span>•</span> Remote</p>
                </div>
                <time>Present</time>
              </header>
              <ul>
                <li>Lead technical direction and translate the product vision into an intellectual social platform with more than 300 active users.</li>
                <li>Own product architecture, UI/UX, full stack implementation, system behaviour, shipping, and technical decisions required for growth.</li>
                <li>Designed focused experiences for publishing, reading, research, debates, discovery, and thoughtful participation.</li>
              </ul>
            </article>
          </section>

          <section className="resume-section resume-projects" aria-labelledby="resume-projects-title">
            <h2 id="resume-projects-title"><span>02</span> Selected Products</h2>

            <article className="resume-project">
              <header>
                <div><h3>JabuStudy</h3><p>Founder and End-to-end Product Builder</p></div>
                <strong>1,500+ users</strong>
              </header>
              <p>Built a study and CBT preparation platform that brings materials, practice, academic progress, and AI-assisted explanations into one focused experience.</p>
              <a href="https://www.jabustudy.com">jabustudy.com</a>
            </article>

            <article className="resume-project">
              <header>
                <div><h3>Indegenius</h3><p>CTO and Product Builder</p></div>
                <strong>300+ active users</strong>
              </header>
              <p>Built and lead the technology behind an intellectual social platform for student ideas, publishing, discovery, research, and debate.</p>
              <a href="https://www.indegenius.africa">indegenius.africa</a>
            </article>

            <article className="resume-project">
              <header>
                <div><h3>JabuMarket</h3><p>Founder and End-to-end Product Builder</p></div>
                <strong>Pre-launch</strong>
              </header>
              <p>Designed and developed a campus marketplace connecting product listings, food vendors, services, delivery, real-time messaging, and multi-role access.</p>
              <a href="https://www.jabumarket.com">jabumarket.com</a>
            </article>
          </section>
        </main>

        <aside className="resume-side-column">
          <section className="resume-section resume-skills" aria-labelledby="resume-skills-title">
            <h2 id="resume-skills-title"><span>03</span> Capabilities</h2>
            {capabilities.map(([title, skills]) => (
              <div key={title}><strong>{title}</strong><p>{skills}</p></div>
            ))}
          </section>

          <section className="resume-section resume-education" aria-labelledby="resume-education-title">
            <h2 id="resume-education-title"><span>04</span> Education</h2>
            <h3>B.Sc. Nursing Science</h3>
            <p>Joseph Ayo Babalola University</p>
            <span>In progress</span>
            <p className="resume-education-note">Software development and product design learned through self-directed study and hands-on product building.</p>
          </section>

          <section className="resume-section resume-strengths" aria-labelledby="resume-strengths-title">
            <h2 id="resume-strengths-title"><span>05</span> What I Bring</h2>
            <ul>
              <li>End-to-end product ownership</li>
              <li>Design and engineering in one workflow</li>
              <li>Technical leadership and founder judgement</li>
              <li>Experience shipping for real users</li>
              <li>Calm, precise, self-directed execution</li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
