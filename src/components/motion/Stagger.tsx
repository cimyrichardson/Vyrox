import type { HTMLAttributes, ReactNode } from "react";

type StaggerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Stagger({
  children,
  className = "",
  ...props
}: StaggerProps) {
  return (
    <div {...props} className={`motion-stagger ${className}`}>
      {children}
    </div>
  );
}
