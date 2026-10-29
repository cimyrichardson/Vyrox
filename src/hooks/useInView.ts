"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  enabled?: boolean;
  once?: boolean;
  rootMargin?: string;
};

export function useInView({
  enabled = true,
  once = true,
  rootMargin = "0px 0px -64px 0px",
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const supportsObserver =
    typeof window !== "undefined" && "IntersectionObserver" in window;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!enabled || !supportsObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setIsInView(entry.isIntersecting);

        if (once && entry.isIntersecting) observer.unobserve(element);
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled, once, rootMargin, supportsObserver]);

  return {
    ref,
    isInView: isInView || !enabled || !supportsObserver,
  };
}
