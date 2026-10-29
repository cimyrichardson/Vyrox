import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`motion-card rounded-card border border-primary/10 bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
