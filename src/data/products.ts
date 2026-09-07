/**
 * PRODUCT CATALOG (prototype placeholder data)
 * ------------------------------------------------------------------
 * Replace the entries below with the real catalog.
 * - image: import a photo from src/assets and use it here
 * - price: placeholder values, marked as "indicative" in the UI
 * - featured / newArrival: control what appears on the homepage
 */
import catSarees from "@/assets/cat-sarees.jpg";
import catKurtis from "@/assets/cat-kurtis.jpg";
import catDresses from "@/assets/cat-dresses.jpg";
import catSalwar from "@/assets/cat-salwar.jpg";
import catShawls from "@/assets/cat-shawls.jpg";
import catTraditional from "@/assets/cat-traditional.jpg";
import p1 from "@/assets/p-1.jpg";
import p2 from "@/assets/p-2.jpg";
import p3 from "@/assets/p-3.jpg";
import p4 from "@/assets/p-4.jpg";
import p5 from "@/assets/p-5.jpg";
import p6 from "@/assets/p-6.jpg";
import p7 from "@/assets/p-7.jpg";

export type CategoryId =
  | "sarees"
  | "kurtis"
  | "dresses"
  | "salwar-suits"
  | "shawls"
  | "traditional-wear";

export type Bilingual = { en: string; ne: string };

export type Category = {
  id: CategoryId;
  name: Bilingual;
  blurb: Bilingual;
  image: string;
};

export type Product = {
  id: string;
  category: CategoryId;
  name: Bilingual;
  description: Bilingual;
  price: string; // placeholder price, e.g. "NPR 4,500"
  sizes: string[];
  colors: Bilingual[];
  image: string;
  featured?: boolean;
  newArrival?: boolean;
};

export const categories: Category[] = [
  {
    id: "sarees",
    name: { en: "Sarees", ne: "साडी" },
    blurb: {
      en: "Silk, georgette and everyday sarees for festivals and ceremonies.",
      ne: "चाडपर्व र विशेष अवसरका लागि सिल्क, जर्जेट र दैनिक प्रयोगका साडीहरू।",
    },
    image: catSarees,
  },
  {
    id: "kurtis",
    name: { en: "Kurtis", ne: "कुर्ती" },
    blurb: {
      en: "Comfortable daily-wear and occasion kurtis in cotton and blends.",
      ne: "सुतीदेखि मिश्रित कपडासम्म, दैनिक तथा विशेष अवसरका आरामदायी कुर्तीहरू।",
    },
    image: catKurtis,
  },
  {
    id: "dresses",
    name: { en: "Dresses", ne: "ड्रेस" },
    blurb: {
      en: "Modern silhouettes for work, celebrations and casual days.",
      ne: "कार्यालय, उत्सव र दैनिक प्रयोगका लागि आधुनिक ड्रेसहरू।",
    },
    image: catDresses,
  },
  {
    id: "salwar-suits",
    name: { en: "Salwar Suits", ne: "सलवार सुरुवाल" },
    blurb: {
      en: "Complete suit sets with dupatta, from simple to richly embroidered.",
      ne: "दुपट्टासहितका पूर्ण सेट — साधारणदेखि बुट्टेदार कामसम्म।",
    },
    image: catSalwar,
  },
  {
    id: "shawls",
    name: { en: "Shawls", ne: "शल" },
    blurb: {
      en: "Warm wraps and fine shawls for winter and gifting.",
      ne: "जाडोका लागि न्यानो तथा उपहारयोग्य राम्रा शलहरू।",
    },
    image: catShawls,
  },
  {
    id: "traditional-wear",
    name: { en: "Traditional Wear", ne: "परम्परागत पहिरन" },
    blurb: {
      en: "Festive and ceremonial outfits with traditional craftsmanship.",
      ne: "चाडपर्व र विवाह समारोहका परम्परागत सीपयुक्त पहिरनहरू।",
    },
    image: catTraditional,
  },
];

export const products: Product[] = [
  {
    id: "sgt-001",
    category: "sarees",
    name: { en: "Maroon Banarasi Silk Saree", ne: "मरुन बनारसी सिल्क साडी" },
    description: {
      en: "Deep maroon silk saree with a woven gold zari border. Sample listing.",
      ne: "सुनौलो जरी बर्डरसहितको गहिरो मरुन सिल्क साडी। नमुना विवरण।",
    },
    price: "NPR 6,500",
    sizes: ["Free Size"],
    colors: [
      { en: "Maroon", ne: "मरुन" },
      { en: "Gold", ne: "सुनौलो" },
    ],
    image: p1,
    featured: true,
    newArrival: true,
  },
  {
    id: "sgt-002",
    category: "sarees",
    name: { en: "Ivory Floral Georgette Saree", ne: "आइभोरी फूलबुट्टे जर्जेट साडी" },
    description: {
      en: "Light georgette saree with soft floral work, easy to drape. Sample listing.",
      ne: "हल्का जर्जेट कपडामा नरम फूलबुट्टे काम, सजिलै लगाउन मिल्ने। नमुना विवरण।",
    },
    price: "NPR 4,200",
    sizes: ["Free Size"],
    colors: [
      { en: "Ivory", ne: "आइभोरी" },
      { en: "Beige", ne: "बेज" },
    ],
    image: p2,
    newArrival: true,
  },
  {
    id: "sgt-003",
    category: "kurtis",
    name: { en: "White Chikankari Cotton Kurti", ne: "सेतो चिकनकारी सुती कुर्ती" },
    description: {
      en: "Breathable cotton kurti with fine hand-style embroidery. Sample listing.",
      ne: "मिहिन कढाइसहितको हावा छिर्ने सुती कुर्ती। नमुना विवरण।",
    },
    price: "NPR 2,400",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { en: "White", ne: "सेतो" },
      { en: "Sky Blue", ne: "आकाशे नीलो" },
    ],
    image: p3,
    featured: true,
    newArrival: true,
  },
  {
    id: "sgt-004",
    category: "dresses",
    name: { en: "Wine A-Line Midi Dress", ne: "वाइन ए-लाइन मिडी ड्रेस" },
    description: {
      en: "Clean modern cut for office and evening wear. Sample listing.",
      ne: "कार्यालय तथा साँझको प्रयोगका लागि सरल आधुनिक कटिङ। नमुना विवरण।",
    },
    price: "NPR 3,300",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { en: "Wine", ne: "वाइन" },
      { en: "Black", ne: "कालो" },
    ],
    image: p4,
    newArrival: true,
  },
  {
    id: "sgt-005",
    category: "salwar-suits",
    name: { en: "Mint Silk Suit Set with Dupatta", ne: "दुपट्टासहित मिन्ट सिल्क सुट सेट" },
    description: {
      en: "Three-piece suit set with light embroidery on the dupatta. Sample listing.",
      ne: "दुपट्टामा हल्का कढाइ भएको तीन थान सुट सेट। नमुना विवरण।",
    },
    price: "NPR 5,100",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { en: "Mint Green", ne: "मिन्ट हरियो" },
      { en: "Peach", ne: "पिच" },
    ],
    image: p5,
    featured: true,
  },
  {
    id: "sgt-006",
    category: "shawls",
    name: { en: "Ivory Embroidered Wool Shawl", ne: "आइभोरी कढाइ भएको ऊनी शल" },
    description: {
      en: "Soft wool shawl with maroon thread work, warm for winter. Sample listing.",
      ne: "मरुन धागोको कामसहित नरम ऊनी शल, जाडोका लागि न्यानो। नमुना विवरण।",
    },
    price: "NPR 2,900",
    sizes: ["One Size"],
    colors: [
      { en: "Ivory", ne: "आइभोरी" },
      { en: "Grey", ne: "खैरो" },
    ],
    image: p6,
  },
  {
    id: "sgt-007",
    category: "traditional-wear",
    name: { en: "Maroon & Gold Lehenga Set", ne: "मरुन र सुनौलो लेहंगा सेट" },
    description: {
      en: "Festive lehenga set with dense golden embroidery. Sample listing.",
      ne: "बाक्लो सुनौलो कढाइसहितको चाडपर्वे लेहंगा सेट। नमुना विवरण।",
    },
    price: "NPR 18,000",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { en: "Maroon", ne: "मरुन" },
      { en: "Gold", ne: "सुनौलो" },
    ],
    image: p7,
    featured: true,
  },
];

export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id);
export const getProduct = (id: string) => products.find((p) => p.id === id);
export const featuredProducts = () => products.filter((p) => p.featured);
export const newArrivals = () => products.filter((p) => p.newArrival);
