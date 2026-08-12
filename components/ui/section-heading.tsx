import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  children,
  description,
}: {
  index: string;
  eyebrow: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading-copy">
        <h2>{children}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
