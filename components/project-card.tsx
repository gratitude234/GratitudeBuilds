"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ProjectCaseStudy } from "@/types/portfolio";
import { ProductVisual } from "@/components/project-visual";
import { trackPortfolioEvent } from "@/lib/analytics";

export function ProjectCard({ project, index }: { project: ProjectCaseStudy; index: number }) {
  const reduceMotion = useReducedMotion();
  const status = project.status === "pre-launch" ? "In the workshop" : project.status;

  return (
    <motion.article
      className={`project-card accent-${project.accent}`}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        onClick={() => trackPortfolioEvent("project_open", { project: project.slug, source: "card" })}
      >
        <div className="project-card-meta">
          <span>0{index + 1}</span>
          <span className={`status status-${project.status}`}><i />{status}</span>
        </div>
        <ProductVisual variant={project.visual} />
        <div className="project-card-copy">
          <div>
            <p>{project.eyebrow}</p>
            <h3>{project.title}</h3>
          </div>
          <p>{project.description}</p>
          <span className="round-arrow" aria-hidden="true">↗</span>
        </div>
      </Link>
    </motion.article>
  );
}
