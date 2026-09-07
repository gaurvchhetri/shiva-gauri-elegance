import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

import { PageHeader, buttonStyles } from "@/components/ui-kit";
import { VisitStore } from "@/components/home-sections";
import { site, whatsappLink } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shiva Gauri Traders, Hetauda-4, Hupra" },
      {
        name: "description",
        content:
          "Contact Shiva Gauri Traders in Hetauda-4, Hupra. Phone and WhatsApp: 9819280756. Enquire about sizes, colours and availability.",
      },
      { property: "og:title", content: "Contact — Shiva Gauri Traders" },
      {
        property: "og:description",
        content: "Call or message us on WhatsApp at 9819280756, or visit our store in Hetauda.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, tx, generalMessage } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t("nav.contact")} title={t("contact.title")} subtitle={t("contact.sub")} />

      <section className="container-page py-16">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="eyebrow">{t("contact.phone")}</p>
            <p className="mt-2 font-serif text-3xl text-primary">{site.phone}</p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappLink(generalMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles.whatsapp}
              >
                <MessageCircle className="h-4 w-4" />
                {t("cta.whatsappShort")}
              </a>
              <a href={`tel:+977${site.phone}`} className={buttonStyles.outline}>
                <Phone className="h-4 w-4" />
                {t("cta.call")}
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <p className="eyebrow">{t("contact.address")}</p>
            <p className="mt-2 leading-relaxed">{tx(site.address)}</p>
            <p className="eyebrow mt-6">{t("contact.hours")}</p>
            <p className="mt-2 text-sm text-muted-foreground">{tx(site.hoursPlaceholder)}</p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
          {t("contact.note")}
        </p>
      </section>

      <VisitStore />
    </>
  );
}
