import Image from "next/image";

const visuals = {
  study: {
    name: "JabuStudy",
    primary: "/products/jabustudy-admin.jpg",
    secondary: "/products/jabustudy-exam.jpg",
    primaryAlt: "JabuStudy student dashboard",
    secondaryAlt: "JabuStudy practice and explanation interface",
  },
  ideas: {
    name: "Indegenius",
    primary: "/products/indegenius-landing.png",
    secondary: "/products/indegenius-feed.jpg",
    primaryAlt: "Indegenius public landing page",
    secondaryAlt: "Indegenius intellectual social feed",
  },
  market: {
    name: "JabuMarket",
    primary: "/products/jabumarket-live.png",
    secondary: "/products/jabumarket-explore.png",
    primaryAlt: "JabuMarket campus marketplace dashboard",
    secondaryAlt: "JabuMarket browse listings interface",
  },
} as const;

export function ProductVisual({
  variant,
  expanded = false,
  caption,
}: {
  variant: keyof typeof visuals;
  expanded?: boolean;
  caption?: string;
}) {
  const visual = visuals[variant];

  return (
    <figure className={`product-visual product-visual-${variant} ${expanded ? "is-expanded" : ""}`}>
      <div className="product-visual-backdrop" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="product-screen product-screen-primary">
        <Image src={visual.primary} alt={visual.primaryAlt} fill sizes={expanded ? "(max-width: 760px) 78vw, 38vw" : "(max-width: 760px) 72vw, 28vw"} className="product-screen-image" />
      </div>
      <div className="product-screen product-screen-secondary">
        <Image src={visual.secondary} alt={visual.secondaryAlt} fill sizes={expanded ? "(max-width: 760px) 62vw, 30vw" : "(max-width: 760px) 52vw, 22vw"} className="product-screen-image" />
      </div>
      <span className="product-visual-label">REAL PRODUCT · {visual.name}</span>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
