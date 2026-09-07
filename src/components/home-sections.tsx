import { Link } from "@tanstack/react-router";
import { Award, Boxes, Handshake, MapPin, MessageCircle, Phone, Sparkles, Truck } from "lucide-react";

import { ButtonLink, SectionHeading, buttonStyles } from "@/components/ui-kit";
import { ProductCard } from "@/components/ProductCard";
import { categories, newArrivals } from "@/data/products";
import { site, whatsappLink } from "@/data/site";
import { useI18n } from "@/lib/i18n";
import storeImg from "@/assets/store.jpg";

export function FeaturedCollections() {
  const { t, tx } = useI18n();
  return (
    <section className="container-page py-20">
      <SectionHeading
        eyebrow={t("nav.collections")}
        title={t("collections.title")}
        subtitle={t("collections.sub")}
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.id}
            to="/products"
            search={{ category: c.id }}
            className="card-lift group relative overflow-hidden rounded-xl border border-border/70"
          >
            <img
              src={c.image}
              alt={tx(c.name)}
              loading="lazy"
              width={900}
              height={1200}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
              <h3 className="font-serif text-2xl">{tx(c.name)}</h3>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed opacity-85">{tx(c.blurb)}</p>
              <span className="mt-3 inline-block text-[0.68rem] tracking-[0.24em] text-gold-soft uppercase">
                {t("cta.browse")}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function NewArrivals() {
  const { t } = useI18n();
  return (
    <section className="bg-secondary/50 py-20">
      <div className="container-page">
        <SectionHeading eyebrow="•" title={t("new.title")} subtitle={t("new.sub")} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals().map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink to="/products" variant="outline">
            {t("cta.viewAll")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function StoryTeaser() {
  const { t } = useI18n();
  return (
    <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
      <div className="relative">
        <img
          src={storeImg}
          alt="Fabrics on display inside a family-run clothing shop"
          loading="lazy"
          width={1400}
          height={1000}
          className="w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
        />
        <span className="absolute -right-2 -bottom-4 hidden rounded-full bg-primary px-5 py-3 font-serif text-sm text-primary-foreground sm:block">
          {t("hero.badge")}
        </span>
      </div>
      <div>
        <p className="eyebrow">{t("story.sub")}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">{t("story.title")}</h2>
        <span className="gold-rule my-5" />
        <p className="text-sm leading-relaxed text-muted-foreground">{t("story.p1")}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("story.p2")}</p>
        <div className="mt-8">
          <ButtonLink to="/story">{t("cta.readStory")}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

const whyIcons = [Award, Truck, Sparkles, Handshake, Boxes, MapPin];

export function WhyChooseUs() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6] as const;
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] tracking-[0.28em] text-gold-soft uppercase">
            {t("why.sub")}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{t("why.title")}</h2>
          <span className="gold-rule mx-auto my-5" />
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((n, i) => {
            const Icon = whyIcons[i];
            return (
              <div key={n} className="rounded-xl border border-primary-foreground/15 p-6">
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-serif text-xl">{t(`why.${n}.title` as const)}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {t(`why.${n}.text` as const)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="container-page py-20">
      <SectionHeading eyebrow="•" title={t("testi.title")} subtitle={t("testi.sub")} />
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <figure key={n} className="rounded-xl border border-dashed border-gold/60 bg-card p-6">
            <span className="rounded-full bg-accent/25 px-3 py-1 text-[0.62rem] tracking-[0.22em] text-accent-foreground uppercase">
              {t("testi.placeholderBadge")}
            </span>
            <blockquote className="mt-5 font-serif text-lg leading-relaxed text-foreground/80">
              “{t("testi.text")}”
            </blockquote>
            <figcaption className="mt-4 text-xs tracking-wide text-muted-foreground">
              — {t("testi.name")} {n}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">{t("testi.note")}</p>
    </section>
  );
}

export function WhatsAppCta() {
  const { t, generalMessage } = useI18n();
  return (
    <section className="container-page py-8">
      <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-secondary to-background px-6 py-14 text-center">
        <MessageCircle className="mx-auto h-8 w-8 text-whatsapp" />
        <h2 className="mt-5 text-3xl sm:text-4xl">{t("wa.title")}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {t("wa.sub")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink(generalMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles.whatsapp}
          >
            <MessageCircle className="h-4 w-4" />
            {t("cta.whatsapp")}
          </a>
          <a href={`tel:+977${site.phone}`} className={buttonStyles.outline}>
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function VisitStore() {
  const { t, tx } = useI18n();
  return (
    <section className="container-page py-20">
      <SectionHeading eyebrow="•" title={t("visit.title")} subtitle={t("visit.sub")} />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-8">
          <h3 className="font-serif text-2xl text-primary">{site.name}</h3>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="eyebrow">{t("visit.address")}</dt>
              <dd className="mt-1.5">{tx(site.address)}</dd>
            </div>
            <div>
              <dt className="eyebrow">{t("wa.number")}</dt>
              <dd className="mt-1.5">
                <a href={`tel:+977${site.phone}`} className="text-primary hover:underline">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{t("visit.hours")}</dt>
              <dd className="mt-1.5 text-muted-foreground">{tx(site.hoursPlaceholder)}</dd>
            </div>
          </dl>
          <a
            href={site.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonStyles.outline} mt-8`}
          >
            <MapPin className="h-4 w-4" />
            {t("cta.directions")}
          </a>
        </div>

        <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-gold/60 bg-secondary/50 p-8 text-center">
          <div>
            <MapPin className="mx-auto h-7 w-7 text-gold" />
            <p className="mt-4 text-sm text-muted-foreground">{t("visit.map")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
