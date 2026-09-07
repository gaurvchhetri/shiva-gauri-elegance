import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHeader } from "@/components/ui-kit";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppCta } from "@/components/home-sections";
import { categories, products, type CategoryId } from "@/data/products";
import { useI18n } from "@/lib/i18n";

type ProductSearch = { category?: CategoryId | undefined };

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    const value = search["category"];
    const match = categories.find((c) => c.id === value);
    return match ? { category: match.id } : {};
  },
  head: () => ({
    meta: [
      { title: "Products — Women's Clothing | Shiva Gauri Traders Hetauda" },
      {
        name: "description",
        content:
          "Sample product catalog: sarees, kurtis, dresses, salwar suits, shawls and traditional wear. Enquire on WhatsApp at 9819280756.",
      },
      { property: "og:title", content: "Products — Shiva Gauri Traders" },
      {
        property: "og:description",
        content: "Browse women's clothing and enquire on WhatsApp for sizes, colours and price.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t, tx } = useI18n();
  const { category } = Route.useSearch();
  const list = category ? products.filter((p) => p.category === category) : products;

  return (
    <>
      <PageHeader eyebrow={t("nav.products")} title={t("nav.products")} subtitle={t("new.sub")} />

      <section className="container-page py-12">
        <p className="eyebrow text-center">{t("product.filter")}</p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <Link
            to="/products"
            search={{}}
            className={`min-h-10 rounded-full border px-4 py-2 text-xs tracking-wide transition-colors ${
              category
                ? "border-border text-muted-foreground hover:border-primary hover:text-primary"
                : "border-primary bg-primary text-primary-foreground"
            }`}
          >
            {t("collections.all")}
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/products"
              search={{ category: c.id }}
              className={`min-h-10 rounded-full border px-4 py-2 text-xs tracking-wide transition-colors ${
                category === c.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {tx(c.name)}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
