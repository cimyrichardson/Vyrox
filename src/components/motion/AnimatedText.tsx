"use client";

import {
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionDuration, motionEasing, revealFrom, revealTo } from "@/lib/motion";

type AnimatedTextBaseProps = {
  children: ReactNode;
  delay?: number;
};

type AnimatedTextProps =
  | (AnimatedTextBaseProps &
      Omit<HTMLAttributes<HTMLDivElement>, "children"> & { as: "div" })
  | (AnimatedTextBaseProps &
      Omit<HTMLAttributes<HTMLSpanElement>, "children"> & { as?: "span" });

export function AnimatedText(props: AnimatedTextProps) {
  const { as = "span", children, delay = 0, className = "", style, ...attributes } =
    props;
  const divRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = as === "div" ? divRef.current : spanRef.current;
    if (!element || reducedMotion) return;

    const animation = element.animate([revealFrom, revealTo], {
      duration: motionDuration.slow,
      delay,
      easing: motionEasing,
      fill: "both",
    });

    animation.finished.then(
      () => animation.cancel(),
      () => undefined,
    );

    return () => animation.cancel();
  }, [as, delay, reducedMotion]);

  if (as === "div") {
    return (
      <div
        {...attributes}
        ref={divRef}
        className={className}
        style={{ ...style, opacity: 1 }}
      >
        {children}
      </div>
    );
  }

  return (
    <span
      {...attributes}
      ref={spanRef}
      className={className}
      style={{ ...style, opacity: 1 }}
    >
      {children}
    </span>
  );
}
