import type { ReactNode } from "react";
import { ProductVisual } from "@/components/project-visual";
import type { Metric } from "@/types/portfolio";

export function DecisionCallout({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <aside className="decision-callout">
      <span>{label}</span>
      <p>{children}</p>
    </aside>
  );
}

export function FlowDiagram({ items = "" }: { items?: string[] | string }) {
  const flowItems = Array.isArray(items) ? items : items.split("|").filter(Boolean);
  return (
    <div className="flow-diagram" aria-label={`Product flow: ${flowItems.join(", then ")}`}>
      {flowItems.map((item, index) => (
        <div key={item}>
          <span>0{index + 1}</span>
          <strong>{item}</strong>
          {index < flowItems.length - 1 ? <i aria-hidden="true">→</i> : null}
        </div>
      ))}
    </div>
  );
}

export function MetricGrid({ items = "" }: { items?: Metric[] | string }) {
  const metricItems = Array.isArray(items)
    ? items
    : items.split("|").filter(Boolean).map((item) => {
        const [value, label] = item.split("::");
        return { value, label };
      });
  return (
    <div className="case-metric-grid">
      {metricItems.map((item) => (
        <div key={`${item.value}-${item.label}`}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export const mdxComponents = {
  DecisionCallout,
  FlowDiagram,
  MetricGrid,
  ProductVisual,
};
