import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, ButtonLink } from "@/components/ui-kit";
import { WhatsAppCta, WhyChooseUs } from "@/components/home-sections";
import { useI18n } from "@/lib/i18n";
import storeImg from "@/assets/store.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Shiva Gauri Traders, Hetauda" },
      {
        name: "description",
        content:
          "The story of Shiva Gauri Traders: a family-owned women's clothing business serving Hetauda for almost a decade.",
      },
      { property: "og:title", content: "Our Story — Shiva Gauri Traders" },
      {
        property: "og:description",
        content: "A family business in Hetauda-4, Hupra, built on trust, quality and experience.",
      },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader eyebrow={t("story.sub")} title={t("story.title")} />
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5 text-sm leading-loose text-foreground/85 sm:text-base">
          <p>{t("story.p1")}</p>
          <p>{t("story.p2")}</p>
          <p>{t("story.p3")}</p>
          <div className="pt-4">
            <ButtonLink to="/products">{t("cta.shop")}</ButtonLink>
          </div>
        </div>
        <img
          src={storeImg}
          alt="Sarees and fabrics stacked on wooden shelves in the shop"
          loading="lazy"
          width={1400}
          height={1000}
          className="w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
        />
      </section>
      <WhyChooseUs />
      <WhatsAppCta />
    </>
  );
}
