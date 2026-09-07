import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export const buttonStyles = {
  primary: cn(base, "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]"),
  outline: cn(base, "border border-primary/35 text-primary hover:border-primary hover:bg-primary/5"),
  gold: cn(base, "bg-gold text-accent-foreground hover:brightness-105"),
  ghost: cn(base, "text-primary hover:bg-primary/5"),
  whatsapp: cn(base, "bg-whatsapp text-whatsapp-foreground hover:brightness-105"),
};

export function ButtonLink({
  to,
  variant = "primary",
  className,
  children,
}: {
  to: string;
  variant?: keyof typeof buttonStyles;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={cn(buttonStyles[variant], className)}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      <span className={cn("gold-rule my-5", align === "center" && "mx-auto")} />
      {subtitle && <p className="text-sm leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border/70 bg-secondary/50">
      <div className="container-page py-14 text-center sm:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
        <span className="gold-rule mx-auto my-5" />
        {subtitle && (
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
