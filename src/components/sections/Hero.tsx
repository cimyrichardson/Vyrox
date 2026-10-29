import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/motion/AnimatedText";

function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex aspect-[1.08] w-full max-w-[34rem] items-center justify-center"
    >
      <div className="absolute inset-[8%] rounded-[2rem] border border-primary/10 bg-bg-muted" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M66 340H132C154 340 162 320 162 300V262C162 242 174 230 194 230H234"
          stroke="#1463FF"
          strokeOpacity=".24"
          strokeWidth="2"
        />
        <path
          d="M344 107H380C405 107 418 121 418 146V190"
          stroke="#0B1F44"
          strokeOpacity=".2"
          strokeWidth="2"
        />
        <circle cx="66" cy="340" r="5" fill="#1463FF" />
        <circle cx="418" cy="190" r="5" fill="#0B1F44" />
        <circle cx="234" cy="230" r="5" fill="#1463FF" />
      </svg>
      <div className="relative w-[76%] rounded-card border border-primary/10 bg-white p-5 shadow-soft sm:p-7">
        <div className="flex items-center justify-between border-b border-primary/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-accent" />
            <span className="h-2 w-20 rounded-full bg-primary/10" />
          </div>
          <span className="h-2 w-10 rounded-full bg-bg-muted" />
        </div>
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-4 py-5">
          <div className="flex flex-col justify-between rounded-xl bg-primary p-4 text-white">
            <span className="text-[0.65rem] font-semibold tracking-[0.14em] text-white/65 uppercase">
              Votre environnement
            </span>
            <span className="mt-8 font-heading text-xl font-bold sm:text-2xl">
              Prêt pour la suite.
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex-1 rounded-xl bg-bg-muted p-3">
              <span className="flex size-8 items-center justify-center rounded-lg bg-white text-accent">
                <Check size={17} strokeWidth={2.5} />
              </span>
              <span className="mt-4 block h-2 w-4/5 rounded-full bg-primary/15" />
              <span className="mt-2 block h-2 w-3/5 rounded-full bg-primary/10" />
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-primary/10 p-3">
              <span className="size-8 rounded-lg bg-accent/10" />
              <span className="flex-1">
                <span className="block h-2 w-full rounded-full bg-primary/15" />
                <span className="mt-2 block h-2 w-2/3 rounded-full bg-primary/10" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-bg-muted px-4 py-3">
          <span className="size-2 rounded-full bg-accent" />
          <span className="h-2 flex-1 rounded-full bg-primary/10" />
          <span className="h-2 w-8 rounded-full bg-accent/40" />
        </div>
      </div>
      <div className="absolute top-[12%] right-[4%] rounded-xl border border-primary/10 bg-white p-3 shadow-soft sm:right-[2%]">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Check size={16} strokeWidth={2.5} />
          </span>
          <span>
            <span className="block text-xs font-bold text-primary">
              Bien accompagné
            </span>
            <span className="mt-1 block text-[0.65rem] text-text-muted">
              À chaque étape
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="overflow-hidden bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-12 pb-16 sm:px-6 md:pt-16 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pt-20"
      >
        <div className="relative z-10 max-w-2xl">
          {/* <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-3 py-1.5 text-xs font-bold tracking-wide text-accent uppercase">
            Partenaire technologique en Haïti
          </p> */}
          <h1
            id="hero-title"
            className="font-heading text-[2.65rem] leading-[1.08] font-extrabold tracking-[-0.045em] text-primary sm:text-5xl lg:text-[3.6rem] xl:text-[4rem]"
          >
            <AnimatedText as="span" className="block">
              La technologie au service de votre réussite.
            </AnimatedText>
          </h1>
          <AnimatedText as="span" className="mt-6 block" delay={80}>
            <span className="block max-w-xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
              Vyrox vous accompagne dans le choix de vos équipements et de vos
              services informatiques, en Haïti et à l’international.
            </span>
          </AnimatedText>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AnimatedText as="span" className="inline-flex" delay={160}>
              <Button href="#produits" size="lg">
                Découvrir nos produits
                <ArrowRight aria-hidden="true" size={18} />
              </Button>
            </AnimatedText>
            <AnimatedText as="span" className="inline-flex" delay={240}>
              <Button href="#services" size="lg" variant="secondary">
                Découvrir nos services
              </Button>
            </AnimatedText>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-muted">
            <span className="inline-flex items-center gap-2">
              <Check aria-hidden="true" className="text-accent" size={16} />
              Conseils adaptés à vos besoins
            </span>
            <span className="inline-flex items-center gap-2">
              <Check aria-hidden="true" className="text-accent" size={16} />
              Particuliers et professionnels
            </span>
          </div>
        </div>
        <AnimatedText as="div" delay={320}>
          <HeroVisual />
        </AnimatedText>
      </div>
    </section>
  );
}
