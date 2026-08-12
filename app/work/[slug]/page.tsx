import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import { ProductVisual } from "@/components/project-visual";
import { TrackedLink } from "@/components/ui/tracked-link";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import {
  getNextProject,
  getProject,
  getProjectSlugs,
  getProjectSource,
} from "@/lib/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!getProjectSlugs().includes(slug)) return {};
  const project = getProject(slug);
  return {
    title: project.title,
    description: project.seoDescription,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title: `${project.title} — Gratitude Builds`, description: project.seoDescription },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  if (!getProjectSlugs().includes(slug)) notFound();

  const project = getProject(slug);
  const nextProject = getNextProject(slug);
  const { content } = await compileMDX({
    source: getProjectSource(slug),
    components: mdxComponents,
  });
  const status = project.status === "pre-launch" ? "In the workshop — pre-launch" : project.status;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    applicationCategory: "WebApplication",
    description: project.description,
    url: project.externalUrl,
    author: { "@type": "Person", name: "Gratitude Olanibi" },
  };

  return (
    <article className={`case-study accent-${project.accent}`}>
      <header className="case-hero blueprint-grid-soft">
        <div className="case-breadcrumb"><Link href="/work">Work</Link><span>/</span><span>{project.title}</span></div>
        <div className="case-title-row">
          <div>
            <div className={`status status-${project.status}`}><i />{status}</div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <TrackedLink
            href={project.externalUrl}
            event="external_product_visit"
            label={project.slug}
            className="round-visit"
          >
            Visit live<br />product <span aria-hidden="true">↗</span>
          </TrackedLink>
        </div>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Timeline</dt><dd>{project.year}</dd></div>
          <div><dt>Contribution</dt><dd>{project.services.join(" · ")}</dd></div>
        </dl>
      </header>

      <div className="case-visual-wrap"><ProductVisual variant={project.visual} expanded /></div>

      <div className="case-body">
        <aside className="case-rail" aria-label="Case study contents">
          <span>CASE FILE / {String(project.order).padStart(2, "0")}</span>
          <ol><li>The need</li><li>Product direction</li><li>System</li><li>Signal</li><li>Next</li></ol>
        </aside>
        <div className="case-prose">{content}</div>
      </div>

      <section className="case-next">
        <p>Next case file</p>
        <Link href={`/work/${nextProject.slug}`}>
          <span>{nextProject.eyebrow}</span>
          <strong>{nextProject.title}</strong>
          <i aria-hidden="true">→</i>
        </Link>
        <WhatsAppLink intent="project" project={project.title} className="text-link">Build something with me</WhatsAppLink>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </article>
  );
}
