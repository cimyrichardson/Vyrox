import {
  BriefcaseBusiness,
  Cable,
  Headset,
  ShieldCheck,
  Wrench,
  Workflow,
} from "lucide-react";
import type { Service } from "@/types/catalog";

export const mockServices: Service[] = [
  {
    slug: "maintenance",
    title: "Maintenance informatique",
    description:
      "Entretenez vos équipements et réduisez les interruptions liées aux pannes.",
    icon: Wrench,
  },
  {
    slug: "depannage",
    title: "Dépannage",
    description:
      "Identifiez les problèmes matériels ou logiciels et planifiez leur résolution.",
    icon: ShieldCheck,
  },
  {
    slug: "installation-reseau",
    title: "Installation de réseaux",
    description:
      "Organisez une connectivité adaptée à votre espace et à vos usages.",
    icon: Cable,
  },
  {
    slug: "assistance",
    title: "Assistance technique",
    description:
      "Obtenez un accompagnement pour configurer et utiliser vos équipements.",
    icon: Headset,
  },
  {
    slug: "conseil-equipement",
    title: "Conseil en équipement",
    description:
      "Comparez les options selon vos besoins, votre environnement et votre budget.",
    icon: BriefcaseBusiness,
  },
  {
    slug: "solutions-entreprises",
    title: "Solutions pour entreprises",
    description:
      "Évaluez vos besoins informatiques et les solutions à mettre en place.",
    icon: Workflow,
  },
];
