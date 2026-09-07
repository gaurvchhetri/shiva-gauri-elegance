import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { buttonStyles } from "@/components/ui-kit";
import { ProductCard, WhatsAppProductButton } from "@/components/ProductCard";
import { WhatsAppCta } from "@/components/home-sections";
import { getCategory, getProduct, products } from "@/data/products";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { name: product.name.en };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable — Shiva Gauri Traders" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} — Shiva Gauri Traders`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: `${loaderData.name} at Shiva Gauri Traders, Hetauda. Enquire on WhatsApp for availability, sizes, colours and price.`,
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: "Enquire on WhatsApp for availability, sizes, colours and price.",
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { productId } = Route.useParams();
  const { t, tx } = useI18n();
  const product = getProduct(productId);

  if (!product) {
    return (
      <div className="container-page py-24 text-center">
        <p className="text-muted-foreground">{t("product.notFound")}</p>
      </div>
    );
  }

  const category = getCategory(product.category);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id);

  return (
    <>
      <div className="container-page pt-8">
        <Link to="/products" search={{}} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          {t("nav.products")}
        </Link>
      </div>

      <section className="container-page grid gap-10 py-10 lg:grid-cols-2">
        <img
          src={product.image}
          alt={tx(product.name)}
          width={900}
          height={1200}
          className="w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
        />

        <div>
          {category && (
            <Link
              to="/products"
              search={{ category: category.id }}
              className="eyebrow hover:text-primary"
            >
              {tx(category.name)}
            </Link>
          )}
          <h1 className="mt-3 text-3xl sm:text-4xl">{tx(product.name)}</h1>
          <span className="gold-rule my-5" />
          <p className="text-sm leading-relaxed text-muted-foreground">{tx(product.description)}</p>

          <div className="mt-7 rounded-xl border border-border bg-card p-6">
            <p className="eyebrow">{t("product.price")}</p>
            <p className="mt-1 font-serif text-3xl text-primary">{product.price}</p>
            <p className="text-[0.68rem] text-muted-foreground">{t("product.priceNote")}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow">{t("product.sizes")}</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">{t("product.colors")}</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <span
                      key={c.en}
                      className="rounded-full border border-gold/50 bg-accent/15 px-3 py-1.5 text-xs text-foreground/80"
                    >
                      {tx(c)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <WhatsAppProductButton product={product} />
            <Link to="/contact" className={buttonStyles.outline}>
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page py-14">
          <h2 className="text-2xl">{t("product.related")}</h2>
          <span className="gold-rule my-5" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <WhatsAppCta />
    </>
  );
}
