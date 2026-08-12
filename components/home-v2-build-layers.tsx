"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const layers = [
  {
    id: "why",
    number: "01",
    label: "Why",
    title: "Find the useful problem.",
    description:
      "I begin with the person, the pressure they feel, and the change a product could genuinely make. That keeps the build grounded before a screen is designed.",
    notes: ["Audience", "Need", "Product direction"],
  },
  {
    id: "design",
    number: "02",
    label: "Design",
    title: "Make the next action obvious.",
    description:
      "I turn the product direction into flows, information architecture, interaction decisions, and a visual system people can understand without friction.",
    notes: ["User flows", "UI/UX", "Design system"],
  },
  {
    id: "system",
    number: "03",
    label: "System",
    title: "Engineer beyond the screen.",
    description:
      "I build the full-stack system that makes the experience real—from data and product logic to responsive interfaces, deployment, and reliability.",
    notes: ["Frontend", "Backend", "Deployment"],
  },
  {
    id: "impact",
    number: "04",
    label: "Impact",
    title: "Ship, listen, and improve.",
    description:
      "A shipped product is the start of the learning loop. Real behaviour and honest feedback decide what deserves to be improved next.",
    notes: ["1,500+ users", "300+ active users", "Continuous iteration"],
  },
] as const;

export function HomeV2BuildLayers() {
  const [activeId, setActiveId] = useState<(typeof layers)[number]["id"]>("why");
  const reduceMotion = useReducedMotion();
  const activeIndex = layers.findIndex((layer) => layer.id === activeId);
  const activeLayer = layers[activeIndex];

  return (
    <section className="v2-layers" aria-labelledby="v2-layers-title">
      <div className="v2-layers__inner">
        <div className="v2-layers__heading">
          <p className="v2-section-number">02 / Inside a build</p>
          <h2 id="v2-layers-title">Product builder is not a title. It&apos;s the whole stack.</h2>
          <p>Select a layer to see what complete ownership looks like.</p>
        </div>

        <div className="v2-layers__experience">
          <div className="v2-layers__tabs" aria-label="Choose a product build layer">
            {layers.map((layer) => (
              <button
                className={`v2-layers__tab${activeId === layer.id ? " v2-is-active" : ""}`}
                key={layer.id}
                type="button"
                aria-pressed={activeId === layer.id}
                onClick={() => setActiveId(layer.id)}
              >
                <span>{layer.number}</span>
                {layer.label}
              </button>
            ))}
          </div>

          <div
            className="v2-layers__panel"
            id="v2-layer-panel"
            aria-live="polite"
          >
            <div className="v2-layers__diagram" aria-hidden="true">
              {layers.map((layer, index) => (
                <motion.i
                  className={index <= activeIndex ? "v2-is-built" : ""}
                  key={layer.id}
                  animate={reduceMotion ? undefined : { scaleY: index <= activeIndex ? 1 : 0.34 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
              <span>IDEA</span>
              <b>PRODUCT</b>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="v2-layers__content"
                key={activeLayer.id}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                <span>LAYER / {activeLayer.number}</span>
                <h3>{activeLayer.title}</h3>
                <p>{activeLayer.description}</p>
                <ul>
                  {activeLayer.notes.map((note) => <li key={note}>{note}</li>)}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
