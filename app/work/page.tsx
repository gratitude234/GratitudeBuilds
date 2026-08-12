import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Products Gratitude Olanibi has founded, designed, engineered, and helped lead.",
};

export default function WorkPage() {
  const projects = getProjects();

  return (
    <div className="page-shell work-page">
      <header className="page-hero blueprint-grid-soft">
        <div className="page-index"><span>01</span><i /><span>WORK INDEX</span></div>
        <h1>Things I&apos;ve<br /><em>taken to life.</em></h1>
        <p>Three products at different stages. Each one shaped through product thinking, interface design, engineering, and the discipline to keep going after version one.</p>
      </header>
      <section className="work-index-list" aria-label="Product case studies">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </section>
    </div>
  );
}
