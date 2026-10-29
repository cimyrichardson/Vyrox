import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Image
      src="/vyrox-logo.svg"
      alt="Vyrox"
      width={compact ? 112 : 132}
      height={compact ? 37 : 43}
      className={compact ? "h-auto w-28" : "h-auto w-[112px] sm:w-[132px]"}
      sizes={compact ? "112px" : "132px"}
    />
  );
}
