import { createFileRoute } from "@tanstack/react-router";

import { ButtonLink } from "@/components/ui-kit";
import {
  FeaturedCollections,
  NewArrivals,
  StoryTeaser,
  Testimonials,
  VisitStore,
  WhatsAppCta,
  WhyChooseUs,
} from "@/components/home-sections";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shiva Gauri Traders — Women's Fashion in Hetauda, Nepal" },
      {
        name: "description",
        content:
          "Family-owned women's clothing house in Hetauda-4, Hupra. Sarees, kurtis, dresses, salwar suits, shawls and traditional wear. Order or enquire on WhatsApp.",
      },
      { property: "og:title", content: "Shiva Gauri Traders — Women's Fashion in Hetauda" },
      {
        property: "og:description",
        content:
          "Premium traditional and modern women's wear, sourced directly from Delhi, Lucknow and Surat.",
      },
    ],
  }),
  component: Home,
});

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-secondary/40">
      <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-24">
        <div className="fade-up">
          <span className="inline-block rounded-full border border-gold/50 px-4 py-1.5 text-[0.66rem] tracking-[0.24em] text-muted-foreground uppercase">
            {t("hero.badge")}
          </span>
          <h1 className="mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{t("hero.title")}</h1>
          <span className="gold-rule my-6" />
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("hero.sub")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/products">{t("cta.shop")}</ButtonLink>
            <ButtonLink to="/story" variant="outline">
              {t("cta.story")}
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-gold/30" />
          <img
            src={heroImg}
            alt="Woman wearing a maroon silk saree with gold border"
            width={1600}
            height={1200}
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-lift)] lg:aspect-[5/6]"
          />
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <NewArrivals />
      <StoryTeaser />
      <WhyChooseUs />
      <Testimonials />
      <WhatsAppCta />
      <VisitStore />
    </>
  );
}
