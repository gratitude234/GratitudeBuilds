import { describe, expect, it } from "vitest";
import { getNextProject, getProject, getProjects } from "@/lib/projects";

describe("project content", () => {
  it("loads and validates all projects in display order", () => {
    const projects = getProjects();
    expect(projects.map((project) => project.slug)).toEqual([
      "jabustudy",
      "indegenius",
      "jabumarket",
    ]);
    expect(projects.every((project) => project.metrics.length > 0)).toBe(true);
  });

  it("keeps user and active-user metrics distinct", () => {
    expect(getProject("jabustudy").metrics[0]).toEqual({
      value: "1,500+",
      label: "students reached",
    });
    expect(getProject("indegenius").metrics[0]).toEqual({
      value: "300+",
      label: "active users",
    });
  });

  it("cycles to the next case study", () => {
    expect(getNextProject("jabumarket").slug).toBe("jabustudy");
  });
});
