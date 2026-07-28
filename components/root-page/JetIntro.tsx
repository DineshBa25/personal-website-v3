"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BusinessJetCanvas } from "@/components/root-page/BusinessJetCanvas";

type JetIntroProps = { onReveal: () => void; onFinish: () => void };

const INTRO_DURATION_MS = 4600;
// The page starts rising as the jet begins its nose-up departure.
const REVEAL_DELAY_MS = 2400;

export function JetIntro({ onReveal, onFinish }: JetIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const finishRef = useRef(onFinish);

  useEffect(() => { finishRef.current = onFinish; }, [onFinish]);

  useEffect(() => {
    if (shouldReduceMotion) {
      finishRef.current();
      return;
    }
    const finishTimer = window.setTimeout(() => finishRef.current(), INTRO_DURATION_MS);
    const revealTimer = window.setTimeout(onReveal, REVEAL_DELAY_MS);
    return () => {
      window.clearTimeout(finishTimer);
      window.clearTimeout(revealTimer);
    };
  }, [onReveal, shouldReduceMotion]);

  return (
    <motion.section
      aria-label="Portfolio introduction"
      className="jet-intro"
      animate={{ opacity: [1, 1, 1, 0] }}
      transition={{ duration: INTRO_DURATION_MS / 1000, times: [0, 0.69, 0.76, 1], ease: "easeOut" }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <div className="jet-intro__aurora jet-intro__aurora--one" aria-hidden="true" />
      <div className="jet-intro__aurora jet-intro__aurora--two" aria-hidden="true" />
      <div className="jet-intro__stars" aria-hidden="true" />
      <div className="jet-intro__streaks" aria-hidden="true"><span /><span /><span /></div>
      <div className="jet-intro__cloud jet-intro__cloud--one" aria-hidden="true" />
      <div className="jet-intro__cloud jet-intro__cloud--two" aria-hidden="true" />
      <BusinessJetCanvas />
      <button className="jet-intro__skip" type="button" onClick={onFinish}>Skip intro</button>
    </motion.section>
  );
}
