"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  motionDuration,
  motionEasing,
  revealFrom,
  revealTo,
} from "@/lib/motion";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  duration?: number;
  rootMargin?: string;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = motionDuration.slow,
  rootMargin,
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { ref: observerRef, isInView } = useInView({
    enabled: !reducedMotion,
    rootMargin,
  });
  const motionReady = !reducedMotion;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !motionReady || !isInView) return;

    const staggerDelay = Number.parseFloat(
      getComputedStyle(element).getPropertyValue("--motion-stagger-delay"),
    );
    const animation = element.animate([revealFrom, revealTo], {
      duration: Math.min(duration, motionDuration.slow),
      delay: delay + (Number.isFinite(staggerDelay) ? staggerDelay : 0),
      easing: motionEasing,
      fill: "both",
    });

    animation.finished.then(
      () => animation.cancel(),
      () => undefined,
    );

    return () => animation.cancel();
  }, [delay, duration, isInView, motionReady]);

  function setRefs(element: HTMLDivElement | null) {
    elementRef.current = element;
    observerRef.current = element;
  }

  return (
    <div
      {...props}
      ref={setRefs}
      className={`motion-reveal ${className}`}
      data-motion-ready={motionReady ? "true" : "false"}
      data-in-view={isInView ? "true" : "false"}
    >
      {children}
    </div>
  );
}
