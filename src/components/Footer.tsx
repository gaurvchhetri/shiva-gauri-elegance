import { Link, type LinkProps } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

import { Brand } from "@/components/Navbar";
import { site } from "@/data/site";
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/data/translations";

const links: { to: NonNullable<LinkProps["to"]>; key: TranslationKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/story", key: "nav.story" },
  { to: "/collections", key: "nav.collections" },
  { to: "/products", key: "nav.products" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
];

export function Footer() {
  const { t, tx, lang } = useI18n();

  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Brand />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t("footer.proto")}
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
            {t("footer.nav")}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm transition-colors hover:text-primary">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
            {t("footer.contact")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-foreground/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{tx(site.address)}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:+977${site.phone}`} className="hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="text-muted-foreground">{tx(site.hoursPlaceholder)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container-page py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {lang === "ne" ? site.nameNe : site.name}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
