import type { ReactNode } from "react";

export type BadgeVariant = "success" | "warning" | "neutral";

type BadgeProps = {
  variant: BadgeVariant;
  children: ReactNode;
};

const variants: Record<BadgeVariant, string> = {
  success: "bg-emerald-50 text-emerald-800 ring-emerald-700/15",
  warning: "bg-amber-50 text-amber-900 ring-amber-700/15",
  neutral: "bg-bg-muted text-text-muted ring-primary/10",
};

export function Badge({ variant, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
