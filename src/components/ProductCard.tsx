import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { buttonStyles } from "@/components/ui-kit";
import type { Product } from "@/data/products";
import { whatsappLink } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export function WhatsAppProductButton({
  product,
  className,
  compact = false,
}: {
  product: Product;
  className?: string;
  compact?: boolean;
}) {
  const { t, tx, productMessage } = useI18n();
  return (
    <a
      href={whatsappLink(productMessage(tx(product.name)))}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonStyles.whatsapp} w-full ${className ?? ""}`}
    >
      <MessageCircle className="h-4 w-4" />
      {compact ? t("cta.whatsappShort") : t("cta.whatsapp")}
    </a>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { t, tx } = useI18n();

  return (
    <article className="card-lift group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card">
      <Link
        to="/products/$productId"
        params={{ productId: product.id }}
        className="block overflow-hidden"
      >
        <img
          src={product.image}
          alt={tx(product.name)}
          loading="lazy"
          width={900}
          height={1200}
          className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl leading-snug">{tx(product.name)}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {tx(product.description)}
        </p>

        <p className="mt-3 text-base text-primary">{product.price}</p>
        <p className="text-[0.68rem] text-muted-foreground">{t("product.priceNote")}</p>

        <dl className="mt-4 space-y-1.5 text-xs text-muted-foreground">
          <div className="flex gap-2">
            <dt className="shrink-0">{t("product.sizes")}:</dt>
            <dd className="text-foreground/80">{product.sizes.join(", ")}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0">{t("product.colors")}:</dt>
            <dd className="text-foreground/80">{product.colors.map(tx).join(", ")}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-col gap-2">
          <Link
            to="/products/$productId"
            params={{ productId: product.id }}
            className={`${buttonStyles.outline} w-full`}
          >
            {t("cta.viewDetails")}
          </Link>
          <WhatsAppProductButton product={product} compact />
        </div>
      </div>
    </article>
  );
}
