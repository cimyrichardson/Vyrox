import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonProps = SharedProps &
  (
    | ({ href: string } & Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        "children" | "className" | "href"
      >)
    | ({ href?: undefined } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "children" | "className"
      >)
  );

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-primary shadow-sm hover:shadow-soft",
  secondary:
    "border border-primary/15 bg-white text-primary hover:border-accent/40 hover:bg-bg-muted",
  ghost: "text-primary hover:bg-bg-muted",
  outline:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm sm:text-base",
  lg: "min-h-12 px-6 text-base",
};

function buttonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return [
    "ui-button inline-flex items-center justify-center gap-2 rounded-control font-semibold",
    "transition-[opacity,transform] duration-motion-fast ease-motion motion-safe:hover:-translate-y-px motion-safe:active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const {
      href,
      variant = "primary",
      size = "md",
      className,
      children,
      ...anchorProps
    } = props;

    const classNames = buttonClassName(variant, size, className);

    if (href.startsWith("/") && !href.startsWith("//")) {
      return (
        <Link href={href} className={classNames} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classNames}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...buttonProps
  } = props;

  return (
    <button
      className={buttonClassName(variant, size, className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
