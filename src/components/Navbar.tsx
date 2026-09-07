import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/data/translations";

const links: { to: string; key: TranslationKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/story", key: "nav.story" },
  { to: "/collections", key: "nav.collections" },
  { to: "/products", key: "nav.products" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
];

export function Brand({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  return (
    <span className="flex flex-col leading-none">
      {/* Text-based brand mark — replace with a logo image later. */}
      <span
        className={`font-serif tracking-[0.14em] text-primary ${compact ? "text-lg" : "text-xl sm:text-2xl"}`}
      >
        {t("brand.name")}
      </span>
      <span className="mt-1 text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
        {t("brand.tagline")}
      </span>
    </span>
  );
}

function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card p-0.5">
      {(["en", "ne"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`min-h-9 rounded-full px-3 text-xs tracking-wide transition-colors ${
            lang === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {code === "en" ? "EN" : "नेपाली"}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <Brand />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/75" }}
              className="relative text-sm tracking-wide transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full data-[status=active]:after:w-full"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("nav.menu")}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <nav className="container-page flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/60 py-3.5 text-base tracking-wide last:border-0"
              >
                {t(l.key)}
              </Link>
            ))}
            <div className="py-4 sm:hidden">
              <LanguageToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
