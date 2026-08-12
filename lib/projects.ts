import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import type { ProjectCaseStudy } from "@/types/portfolio";

const metricSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
});

const projectSchema = z.object({
  title: z.string().min(1),
  eyebrow: z.string().min(1),
  description: z.string().min(1),
  role: z.string().min(1),
  status: z.enum(["live", "active", "pre-launch"]),
  year: z.string().min(1),
  order: z.number().int().positive(),
  externalUrl: z.url(),
  accent: z.enum(["violet", "blue", "amber"]),
  visual: z.enum(["study", "ideas", "market"]),
  services: z.array(z.string().min(1)).min(1),
  metrics: z.array(metricSchema).min(1),
  seoDescription: z.string().min(50),
});

const projectsDirectory = path.join(process.cwd(), "content", "projects");

function getProjectFile(slug: string) {
  return path.join(projectsDirectory, `${slug}.mdx`);
}

export function getProjectSlugs() {
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProject(slug: string): ProjectCaseStudy {
  const file = fs.readFileSync(getProjectFile(slug), "utf8");
  const { data } = matter(file);
  const parsed = projectSchema.parse(data);

  return { slug, ...parsed };
}

export function getProjectSource(slug: string) {
  const file = fs.readFileSync(getProjectFile(slug), "utf8");
  return matter(file).content;
}

export function getProjects() {
  return getProjectSlugs()
    .map(getProject)
    .sort((a, b) => a.order - b.order);
}

export function getNextProject(slug: string) {
  const projects = getProjects();
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
