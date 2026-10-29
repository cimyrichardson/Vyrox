import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
};

export function PageIntro({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
}: PageIntroProps) {
  return (
    <div className="border-b border-primary/8 bg-bg-muted">
      <Reveal className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {breadcrumbs.length > 0 ? (
          <nav aria-label="Fil d’Ariane" className="mb-7">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-accent">
                  Accueil
                </Link>
              </li>
              {breadcrumbs.map((breadcrumb, index) => (
                <li className="flex items-center gap-2" key={breadcrumb.label}>
                  <span aria-hidden="true">/</span>
                  {breadcrumb.href && index < breadcrumbs.length - 1 ? (
                    <Link
                      href={breadcrumb.href}
                      className="hover:text-accent"
                    >
                      {breadcrumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-primary">
                      {breadcrumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <p className="mb-3 text-xs font-bold tracking-[0.16em] text-accent uppercase">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-heading text-3xl leading-tight font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      </Reveal>
    </div>
  );
}
