/**
 * Central business information.
 * Edit this file to update contact details across the whole site.
 */
export const site = {
  name: "Shiva Gauri Traders",
  nameNe: "शिव गौरी ट्रेडर्स",
  phone: "9819280756",
  // international format used for wa.me links (Nepal country code 977)
  whatsappNumber: "9779819280756",
  address: {
    en: "Hetauda-4, Hupra, Hetauda, Nepal",
    ne: "हेटौंडा-४, हुप्रा, हेटौंडा, नेपाल",
  },
  // Placeholder — replace with the real opening hours when confirmed.
  hoursPlaceholder: {
    en: "Opening hours: to be added",
    ne: "खुल्ने समय: थप्न बाँकी",
  },
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Hetauda-4+Hupra+Hetauda+Nepal",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
