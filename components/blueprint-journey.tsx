"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

const stages = [
  ["01", "Idea", "Find the useful problem."],
  ["02", "Structure", "Give the product a clear shape."],
  ["03", "Interface", "Make every decision understandable."],
  ["04", "System", "Engineer the behaviour underneath."],
  ["05", "Product", "Ship the complete experience."],
  ["06", "People", "Learn from real use."],
];

export function BlueprintJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <div className="blueprint-journey" ref={ref}>
      <div className="journey-line" aria-hidden="true">
        <motion.span style={{ scaleX: reduceMotion ? 1 : scaleX }} />
      </div>
      {stages.map(([number, title, copy], index) => (
        <motion.div
          className="journey-stage"
          key={title}
          initial={reduceMotion ? false : { opacity: 0.25 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45, delay: index * 0.03 }}
        >
          <span>{number}</span>
          <i aria-hidden="true" />
          <h3>{title}</h3>
          <p>{copy}</p>
        </motion.div>
      ))}
    </div>
  );
}
