"use client";

import { track } from "@vercel/analytics";

export type PortfolioEvent =
  | "project_open"
  | "external_product_visit"
  | "resume_view"
  | "resume_download"
  | "whatsapp_click";

export function trackPortfolioEvent(
  name: PortfolioEvent,
  properties?: Record<string, string>,
) {
  track(name, properties);
}
