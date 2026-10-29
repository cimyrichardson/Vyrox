import {
  Cable,
  Cpu,
  HardDrive,
  Laptop,
  Monitor,
  Mouse,
  Router,
  Workflow,
} from "lucide-react";
import type { Category } from "@/types/catalog";

export const mockCategories: Category[] = [
  {
    slug: "ordinateurs-portables",
    title: "Ordinateurs portables",
    description: "Des outils adaptés au travail, aux études et à la mobilité.",
    icon: Laptop,
  },
  {
    slug: "ordinateurs-de-bureau",
    title: "Ordinateurs de bureau",
    description: "Des configurations pensées pour vos usages quotidiens.",
    icon: Monitor,
  },
  {
    slug: "composants",
    title: "Composants",
    description: "Les pièces essentielles pour assembler ou faire évoluer.",
    icon: Cpu,
  },
  {
    slug: "accessoires",
    title: "Accessoires",
    description: "Les essentiels pour un poste de travail fonctionnel.",
    icon: Cable,
  },
  {
    slug: "peripheriques",
    title: "Périphériques",
    description: "Claviers, souris, écrans et équipements de bureau.",
    icon: Mouse,
  },
  {
    slug: "reseau",
    title: "Réseau",
    description: "Des solutions de connectivité pour la maison et l’entreprise.",
    icon: Router,
  },
  {
    slug: "stockage",
    title: "Stockage",
    description: "Des solutions pour conserver et transporter vos données.",
    icon: HardDrive,
  },
  {
    slug: "logiciels",
    title: "Logiciels",
    description: "Des outils numériques adaptés à vos besoins.",
    icon: Workflow,
  },
];
