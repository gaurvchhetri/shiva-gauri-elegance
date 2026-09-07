import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, ButtonLink } from "@/components/ui-kit";
import { Testimonials, VisitStore, WhatsAppCta } from "@/components/home-sections";
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/data/translations";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Shiva Gauri Traders, Hetauda" },
      {
        name: "description",
        content:
          "About Shiva Gauri Traders: a family-owned women's clothing business in Hetauda-4, Hupra, also serving local shops as a wholesaler.",
      },
      { property: "og:title", content: "About Us — Shiva Gauri Traders" },
      {
        property: "og:description",
        content: "Trust, quality, family values, experience and authentic premium fashion.",
      },
    ],
  }),
  component: AboutPage,
});

const valueKeys: TranslationKey[] = [
  "about.v1",
  "about.v2",
  "about.v3",
  "about.v4",
  "about.v5",
  "about.v6",
];

function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader eyebrow={t("about.sub")} title={t("about.title")} />

      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl space-y-5 text-sm leading-loose text-foreground/85 sm:text-base">
          <p>{t("story.p1")}</p>
          <p>{t("story.p2")}</p>
          <p>{t("story.p3")}</p>
        </div>

        <div className="mt-14">
          <p className="eyebrow text-center">{t("about.values")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {valueKeys.map((k) => (
              <span
                key={k}
                className="rounded-full border border-gold/50 bg-card px-5 py-2.5 font-serif text-lg text-primary"
              >
                {t(k)}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-border bg-secondary/50 p-8 text-center">
          <h2 className="text-2xl">{t("about.wholesale")}</h2>
          <span className="gold-rule mx-auto my-4" />
          <p className="text-sm leading-relaxed text-muted-foreground">{t("about.wholesaleText")}</p>
          <div className="mt-6">
            <ButtonLink to="/contact" variant="outline">
              {t("nav.contact")}
            </ButtonLink>
          </div>
        </div>
      </section>

      <Testimonials />
      <WhatsAppCta />
      <VisitStore />
    </>
  );
}
