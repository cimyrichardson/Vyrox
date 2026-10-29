import type { Metadata } from "next";
import { Advantages } from "@/components/sections/Advantages";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { PopularProducts } from "@/components/sections/PopularProducts";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const title = "Vyrox — La technologie au service de votre réussite";
const description =
  "Équipez et accompagnez vos projets avec des produits informatiques et des services technologiques fiables en Haïti et à l’international.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Vyrox",
    locale: "fr_HT",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vyrox.ht";
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vyrox",
  url: siteUrl,
  logo: `${siteUrl}/vyrox-logo.svg`,
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="contenu-principal">
        <Hero />
        <ProductCategories />
        <PopularProducts />
        <Services />
        <Advantages />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
