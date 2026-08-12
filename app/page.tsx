import Image from "next/image";
import Link from "next/link";
import { HomeV2BuildLayers } from "@/components/home-v2-build-layers";
import { Reveal } from "@/components/ui/reveal";
import { TrackedLink } from "@/components/ui/tracked-link";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { getProjects } from "@/lib/projects";
import type { ProjectCaseStudy } from "@/types/portfolio";

const proof = [
  { value: "03", label: "products built" },
  { value: "1,500+", label: "JabuStudy users" },
  { value: "300+", label: "active Indegenius users" },
  { value: "02", label: "products founded" },
  { value: "01", label: "CTO role" },
];

const buildRhythm = [
  "Idea",
  "Research",
  "UI/UX",
  "Engineering",
  "Launch",
  "Users",
  "Iterate",
];

const process = [
  ["01", "Find the useful problem", "Start with a pressure people already feel."],
  ["02", "Shape the product", "Turn the need into a focused, useful direction."],
  ["03", "Design the experience", "Make every important next action feel obvious."],
  ["04", "Engineer the system", "Build the real product behind the interface."],
  ["05", "Put it in people’s hands", "Ship, observe, and learn from actual use."],
  ["06", "Keep making it better", "Let feedback and behaviour guide the next build."],
];

type WorldConfig = {
  index: string;
  theme: "study" | "market" | "ideas";
  statement: string;
  supporting: string;
  primaryImage: string;
  primaryAlt: string;
  secondaryImage: string;
  secondaryAlt: string;
  proof: string;
  proofLabel: string;
  externalLabel: string;
};

const worldConfig: Record<string, WorldConfig> = {
  jabustudy: {
    index: "01",
    theme: "study",
    statement: "Making exam preparation feel less uncertain.",
    supporting:
      "A focused study system that brings materials, practice, progress, and AI-assisted explanations into one clear rhythm.",
    primaryImage: "/products/approved/jabustudy-approved-crop.png",
    primaryAlt: "JabuStudy student dashboard showing practice tools and course materials",
    secondaryImage: "/products/approved/jabustudy-approved-full.png",
    secondaryAlt: "Full JabuStudy student dashboard with study tools, performance, and courses",
    proof: "1,500+",
    proofLabel: "students already using it",
    externalLabel: "Use JabuStudy",
  },
  jabumarket: {
    index: "02",
    theme: "market",
    statement: "Building the digital economy of one campus.",
    supporting:
      "A campus-first marketplace where students can discover listings, food, vendors, services, and delivery in one local product.",
    primaryImage: "/products/approved/jabumarket-approved-crop.png",
    primaryAlt: "JabuMarket home screen with listings, food vendors, and quick access categories",
    secondaryImage: "/products/approved/jabumarket-approved-full.png",
    secondaryAlt: "Full JabuMarket home screen with listings, food vendors, and campus services",
    proof: "Pre-launch",
    proofLabel: "being prepared for campus",
    externalLabel: "Preview JabuMarket",
  },
  indegenius: {
    index: "03",
    theme: "ideas",
    statement: "Giving African student ideas somewhere serious to live.",
    supporting:
      "An intellectual social network designed for publishing, reading, debate, research, and thoughtful participation.",
    primaryImage: "/products/approved/indegenius-approved-landing.png",
    primaryAlt: "Indegenius landing page inviting students to read and publish ideas",
    secondaryImage: "/products/approved/indegenius-approved-feed.png",
    secondaryAlt: "Indegenius social feed with articles, debates, and writing tools",
    proof: "300+",
    proofLabel: "active members growing ideas",
    externalLabel: "Explore Indegenius",
  },
};

function getFeaturedProjects(projects: ProjectCaseStudy[]) {
  return ["jabustudy", "jabumarket", "indegenius"].map((slug) => {
    const project = projects.find((item) => item.slug === slug);
    const world = worldConfig[slug];

    if (!project || !world) {
      throw new Error(`Missing homepage project configuration for ${slug}`);
    }

    return { project, world };
  });
}

function GrowthBars({ className = "" }: { className?: string }) {
  return (
    <span className={`v2-growth-bars ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function ProjectWorld({
  project,
  world,
}: {
  project: ProjectCaseStudy;
  world: WorldConfig;
}) {
  return (
    <article
      className={`v2-world v2-world--${world.theme}`}
      aria-labelledby={`v2-world-${project.slug}`}
    >
      <div className="v2-world__inner">
        <Reveal className="v2-world__copy">
          <div className="v2-world__topline">
            <span className="v2-world__index">BUILD / {world.index}</span>
            <span className={`v2-world__status v2-world__status--${project.status}`}>
              <i aria-hidden="true" />
              {project.status === "pre-launch" ? "In the workshop · Pre-launch" : project.status}
            </span>
          </div>

          <p className="v2-world__eyebrow">{project.eyebrow}</p>
          <h3 id={`v2-world-${project.slug}`}>{project.title}</h3>
          <p className="v2-world__statement">{world.statement}</p>
          <p className="v2-world__supporting">{world.supporting}</p>

          <div className="v2-world__ownership">
            <span>My role</span>
            <strong>{project.role}</strong>
          </div>

          <div className="v2-world__proof">
            <strong>{world.proof}</strong>
            <span>{world.proofLabel}</span>
          </div>

          <div className="v2-world__actions">
            <Link className="v2-link v2-link--filled" href={`/work/${project.slug}`}>
              Read the build story <span aria-hidden="true">→</span>
            </Link>
            <TrackedLink
              className="v2-link v2-link--plain"
              href={project.externalUrl}
              event="external_product_visit"
              label={project.title}
            >
              {world.externalLabel} <span aria-hidden="true">↗</span>
            </TrackedLink>
          </div>
        </Reveal>

        <Reveal className="v2-world__visual" delay={0.08}>
          <div className="v2-world__visual-note">
            <span>REAL PRODUCT / LIVE INTERFACE</span>
            <i aria-hidden="true" />
          </div>
          <figure className="v2-world__screen v2-world__screen--primary">
            <Image
              src={world.primaryImage}
              alt={world.primaryAlt}
              fill
              sizes={world.theme === "ideas" ? "(max-width: 900px) 92vw, 58vw" : "(max-width: 900px) 52vw, 26vw"}
            />
          </figure>
          <figure className="v2-world__screen v2-world__screen--secondary">
            <Image
              src={world.secondaryImage}
              alt={world.secondaryAlt}
              fill
              sizes={world.theme === "ideas" ? "(max-width: 900px) 88vw, 52vw" : "(max-width: 900px) 48vw, 23vw"}
            />
          </figure>
          <span className="v2-world__orbit" aria-hidden="true">
            {project.services.slice(0, 3).map((service) => (
              <i key={service}>{service}</i>
            ))}
          </span>
        </Reveal>
      </div>
    </article>
  );
}

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(getProjects());

  return (
    <div className="v2-home">
      <section className="v2-hero" aria-labelledby="v2-hero-title">
        <div className="v2-hero__sun" aria-hidden="true" />
        <div className="v2-hero__grid" aria-hidden="true" />

        <div className="v2-hero__inner">
          <div className="v2-hero__copy">
            <Reveal>
              <p className="v2-kicker">
                <GrowthBars /> Gratitude Olanibi · Product Builder
              </p>
            </Reveal>

            <h1 id="v2-hero-title">
              <Reveal><span>I turn ideas into</span></Reveal>
              <Reveal delay={0.06}><span className="v2-hero__product-word">products</span></Reveal>
              <Reveal delay={0.12}><span>people actually use.</span></Reveal>
            </h1>

            <Reveal className="v2-hero__intro" delay={0.16}>
              <p>
                Founder, UI/UX designer, full-stack developer, and CTO—taking useful ideas from first thought to real users.
              </p>
              <div className="v2-hero__actions">
                <Link className="v2-button v2-button--primary" href="/work">
                  Explore my builds <span aria-hidden="true">→</span>
                </Link>
                <WhatsAppLink className="v2-button v2-button--secondary">
                  Let&apos;s build
                </WhatsAppLink>
              </div>
            </Reveal>

            <Reveal className="v2-hero__credentials" delay={0.22}>
              <span>Founder × 2</span>
              <span>CTO × 1</span>
              <span>Design + Code</span>
            </Reveal>
          </div>

          <Reveal className="v2-hero__studio" delay={0.08}>
            <GrowthBars className="v2-hero__bars" />
            <div className="v2-hero__portrait">
              <Image
                src="/brand/gratitude-portrait.jpg"
                alt="Gratitude Olanibi, founder of Gratitude Builds"
                fill
                priority
                sizes="(max-width: 760px) 78vw, 34vw"
              />
              <span>THE BUILDER</span>
            </div>

            <Link className="v2-hero-card v2-hero-card--study" href="/work/jabustudy" aria-label="See the JabuStudy case study">
              <span>JabuStudy</span>
              <figure>
                <Image
                  src="/products/approved/jabustudy-approved-crop.png"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 760px) 34vw, 12vw"
                />
              </figure>
            </Link>
            <Link className="v2-hero-card v2-hero-card--market" href="/work/jabumarket" aria-label="See the JabuMarket case study">
              <span>JabuMarket</span>
              <figure>
                <Image
                  src="/products/approved/jabumarket-approved-crop.png"
                  alt=""
                  fill
                  sizes="(max-width: 760px) 34vw, 12vw"
                />
              </figure>
            </Link>
            <Link className="v2-hero-card v2-hero-card--ideas" href="/work/indegenius" aria-label="See the Indegenius case study">
              <span>Indegenius</span>
              <figure>
                <Image
                  src="/products/approved/indegenius-approved-feed.png"
                  alt=""
                  fill
                  sizes="(max-width: 760px) 54vw, 19vw"
                />
              </figure>
            </Link>

            <span className="v2-hero__note v2-hero__note--one">from scratch</span>
            <span className="v2-hero__note v2-hero__note--two">to real use</span>
          </Reveal>
        </div>

        <div className="v2-proof" aria-label="Selected facts">
          {proof.map((item) => (
            <div className="v2-proof__item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="v2-rhythm" aria-label="My end-to-end product process">
          <div className="v2-rhythm__track">
            {[...buildRhythm, ...buildRhythm].map((step, index) => (
              <span key={`${step}-${index}`} aria-hidden={index >= buildRhythm.length}>
                {step} <i aria-hidden="true">→</i>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-projects" aria-labelledby="v2-projects-title">
        <div className="v2-section-intro">
          <p className="v2-section-number">01 / Selected builds</p>
          <Reveal>
            <h2 id="v2-projects-title">
              Three products.<br />Three real problems.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="v2-section-intro__copy">
              Each build has its own visual world because each one serves different people. The common thread is complete ownership—from product thinking to shipped software.
            </p>
          </Reveal>
        </div>

        <div className="v2-projects__worlds">
          {featuredProjects.map(({ project, world }) => (
            <ProjectWorld key={project.slug} project={project} world={world} />
          ))}
        </div>
      </section>

      <HomeV2BuildLayers />

      <section className="v2-process" aria-labelledby="v2-process-title">
        <div className="v2-process__inner">
          <div className="v2-process__heading">
            <p className="v2-section-number">03 / How ideas grow</p>
            <Reveal>
              <h2 id="v2-process-title">A clear way up from idea to impact.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p>The rising bars in Gratitude Builds are more than a logo. They describe the work: give a useful idea structure, momentum, and room to grow.</p>
            </Reveal>
          </div>

          <ol className="v2-process__staircase">
            {process.map(([number, title, description], index) => (
              <li
                className={`v2-process__step v2-process__step--${index + 1}`}
                key={number}
              >
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="v2-builder" aria-labelledby="v2-builder-title">
        <div className="v2-builder__inner">
          <Reveal className="v2-builder__portrait">
            <div className="v2-builder__portrait-frame">
              <Image
                src="/brand/gratitude-portrait.jpg"
                alt="Portrait of Gratitude Olanibi seated in a red chair"
                fill
                sizes="(max-width: 800px) 92vw, 45vw"
              />
            </div>
            <span className="v2-builder__portrait-caption">Usually behind the screen. Always inside the build.</span>
            <GrowthBars />
          </Reveal>

          <Reveal className="v2-builder__copy" delay={0.08}>
            <p className="v2-section-number">04 / Meet the builder</p>
            <h2 id="v2-builder-title">I&apos;m quiet.<br /><em>My work isn&apos;t.</em></h2>
            <p>
              I&apos;m Gratitude Olanibi. I design, engineer, and grow products from scratch because I like owning the complete outcome—not just one handoff in the middle.
            </p>
            <p>
              I care about useful ideas, thoughtful interfaces, dependable systems, and the discipline to keep improving after launch.
            </p>
            <Link className="v2-text-link" href="/about">
              More behind the screen <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="v2-closing" aria-labelledby="v2-closing-title">
        <GrowthBars className="v2-closing__bars" />
        <div className="v2-closing__inner">
          <p className="v2-section-number">05 / The next build</p>
          <h2 id="v2-closing-title">Have a useful idea?<br />Let&apos;s make it real.</h2>
          <p>Roles, client projects, and thoughtful collaborations are all welcome.</p>
          <div className="v2-closing__actions">
            <WhatsAppLink className="v2-button v2-button--light" intent="collaboration">
              Start on WhatsApp
            </WhatsAppLink>
            <Link className="v2-button v2-button--ghost" href="/contact">
              See every contact option <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <span className="v2-closing__signature" aria-hidden="true">Gratitude Builds</span>
      </section>
    </div>
  );
}
