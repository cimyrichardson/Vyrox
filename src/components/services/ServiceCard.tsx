import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/types/catalog";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="h-full p-5 transition-colors duration-200 hover:border-accent/35 sm:p-6">
      <span className="inline-flex size-11 items-center justify-center rounded-control bg-bg-muted text-accent">
        <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
      </span>
      <h3 className="mt-5 font-heading text-lg font-bold text-primary">
        {service.title}
      </h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-text-muted">
        {service.description}
      </p>
      <a
        href={`/services?service=${service.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-primary"
      >
        En savoir plus
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </Card>
  );
}
