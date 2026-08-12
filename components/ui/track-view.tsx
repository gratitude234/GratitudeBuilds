"use client";

import { useEffect } from "react";
import { trackPortfolioEvent, type PortfolioEvent } from "@/lib/analytics";

export function TrackView({ event, label }: { event: PortfolioEvent; label: string }) {
  useEffect(() => {
    trackPortfolioEvent(event, { label });
  }, [event, label]);

  return null;
}
