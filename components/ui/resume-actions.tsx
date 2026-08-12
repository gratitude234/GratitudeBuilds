"use client";

import { trackPortfolioEvent } from "@/lib/analytics";

export function ResumeActions() {
  function printResume() {
    trackPortfolioEvent("resume_download", { format: "print" });
    window.print();
  }

  return (
    <div className="resume-actions print-hidden">
      <a
        className="button button-primary"
        href="/gratitude-olanibi-resume.pdf"
        download
        onClick={() => trackPortfolioEvent("resume_download", { format: "pdf" })}
      >
        Download PDF <span aria-hidden="true">↓</span>
      </a>
      <button className="button button-secondary" type="button" onClick={printResume}>
        Print résumé <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}
