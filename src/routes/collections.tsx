import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/ui-kit";
import { WhatsAppCta } from "@/components/home-sections";
import { categories, products } from "@/data/products";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Sarees, Kurtis, Dresses | Shiva Gauri Traders" },
      {
        name: "description",
        content:
          "Browse our collections: sarees, kurtis, dresses, salwar suits, shawls and traditional wear for women in Hetauda.",
      },
      { property: "og:title", content: "Collections — Shiva Gauri Traders" },
      {
        property: "og:description",
        content: "Traditional and modern women's wear collections, chosen piece by piece.",
      },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const { t, tx } = useI18n();
  return (
    <>
      <PageHeader
        eyebrow={t("nav.collections")}
        title={t("collections.title")}
        subtitle={t("collections.sub")}
      />
      <section className="container-page grid gap-8 py-16 sm:grid-cols-2">
        {categories.map((c) => {
          const count = products.filter((p) => p.category === c.id).length;
          return (
            <Link
              key={c.id}
              to="/products"
              search={{ category: c.id }}
              className="card-lift group grid overflow-hidden rounded-xl border border-border bg-card sm:grid-cols-[0.9fr_1fr]"
            >
              <img
                src={c.image}
                alt={tx(c.name)}
                loading="lazy"
                width={900}
                height={1200}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full"
              />
              <div className="p-6">
                <h2 className="font-serif text-2xl text-primary">{tx(c.name)}</h2>
                <span className="gold-rule my-4" />
                <p className="text-sm leading-relaxed text-muted-foreground">{tx(c.blurb)}</p>
                <p className="mt-5 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
                  {count} {t("product.count")} · {t("cta.browse")}
                </p>
              </div>
            </Link>
          );
        })}
      </section>
      <WhatsAppCta />
    </>
  );
}
