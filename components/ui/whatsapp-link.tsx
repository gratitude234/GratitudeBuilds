"use client";

import type { ReactNode } from "react";
import { trackPortfolioEvent } from "@/lib/analytics";
import { createWhatsAppUrl, type ContactIntent } from "@/lib/whatsapp";

export function WhatsAppLink({
  children,
  intent = "general",
  project,
  className = "button button-primary",
}: {
  children: ReactNode;
  intent?: ContactIntent;
  project?: string;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={createWhatsAppUrl(intent, project)}
      target="_blank"
      rel="noreferrer"
      onClick={() =>
        trackPortfolioEvent("whatsapp_click", {
          intent,
          source: project ?? "site",
        })
      }
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
