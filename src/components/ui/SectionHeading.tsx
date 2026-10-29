import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  eyebrow?: string;
  action?: ReactNode;
};

export function SectionHeading({
  id,
  title,
  description,
  eyebrow,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-9 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-bold tracking-[0.16em] text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={id}
          className="font-heading text-3xl leading-tight font-bold tracking-tight text-primary sm:text-4xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-7 text-text-muted">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
