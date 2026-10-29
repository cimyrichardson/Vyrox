"use client";

import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionEasing, pageTransitionDuration } from "@/lib/motion";

type PageTransitionProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function PageTransition({
  children,
  className = "",
  ...props
}: PageTransitionProps) {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const elementRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = elementRef.current;
    const shouldTransition = previousPath.current !== pathname;
    previousPath.current = pathname;

    if (!element || !shouldTransition || reducedMotion) return;

    const animation = element.animate(
      [{ opacity: 0.85 }, { opacity: 1 }],
      {
        duration: pageTransitionDuration,
        easing: motionEasing,
      },
    );

    return () => animation.cancel();
  }, [pathname, reducedMotion]);

  return (
    <div {...props} ref={elementRef} className={className}>
      {children}
    </div>
  );
}
