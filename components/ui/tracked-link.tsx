"use client";

import type { ReactNode } from "react";
import { trackPortfolioEvent, type PortfolioEvent } from "@/lib/analytics";

export function TrackedLink({
  href,
  event,
  label,
  className,
  children,
  download,
}: {
  href: string;
  event: PortfolioEvent;
  label: string;
  className?: string;
  children: ReactNode;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      className={className}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
      download={download}
      onClick={() => trackPortfolioEvent(event, { label })}
    >
      {children}
    </a>
  );
}
