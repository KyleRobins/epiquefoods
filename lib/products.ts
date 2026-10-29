export type Category = "porridge" | "flours" | "powders" | "spices";

export interface ProductSize {
  label: string;
  priceKes?: number;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: Category;
  description: string;
  benefits: string[];
  ingredients?: string;
  howToUse?: string[];
  uses?: string[];
  sizes: ProductSize[];
  images: string[];
  badges: string[];
}

export const categories: { key: Category; label: string }[] = [
  { key: "porridge", label: "Porridge Flours" },
  { key: "flours", label: "Flours" },
  { key: "powders", label: "Natural Powders" },
  { key: "spices", label: "Spices & Infusions" },
];

const BASE_BADGES = ["Healthy", "Organic", "Nutritious"];

export const products: Product[] = [
  {
    slug: "therapeutic-lifemeal",
    name: "Therapeutic LifeMeal Porridge Flour",
    shortName: "Therapeutic LifeMeal",
    tagline: "Nourishing support for strength, comfort and everyday wellness",
    category: "porridge",
    description:
      "Epique LifeMeal Instant Porridge Flour is a carefully formulated blend designed to provide gentle, balanced nutrition when your body needs it most. Whether you have a low appetite or simply need a light, nourishing meal, it offers comfort and strength in every serving. Made from nutrient-rich ingredients like moringa, chia seeds and carefully selected whole grains, it delivers essential nourishment while remaining easy to digest.",
    benefits: [
      "Supports nourishment and strength",
      "Easy to digest (gentle on the stomach)",
      "Rich in essential nutrients",
      "Helps support energy levels",
      "Suitable for low appetite",
      "Supports overall wellness",
    ],
    howToUse: [
      "Instant — ready in minutes",
      "Add hot water or milk",
      "Stir until smooth",
      "Sweeten if desired",
    ],
    sizes: [{ label: "1kg" }],
    images: ["/images/products/therapeutic-lifemeal-1.jpg"],
    badges: [...BASE_BADGES, "No Additives", "No Preservatives"],
  },
  {
    slug: "kiddi-nutritots",
    name: "Kiddi Nutritots Porridge Flour",
    shortName: "Kiddi Nutritots",
    tagline: "Gentle nutrition for your child's healthy growth and development",
    category: "porridge",
    description:
      "Epique Kiddi Nutritots is a carefully formulated instant porridge flour made from a rich blend of natural grains, seeds and vegetables to nourish children from weaning up to 5 years.",
    benefits: [
      "Rich in essential nutrients for growth and development",
      "Supports healthy digestion (gentle on little tummies)",
      "Boosts immunity naturally",
      "Strengthens bones and muscles",
      "Provides energy for active children",
    ],
    ingredients:
      "Millet, Rice, Amaranth, Lentils, Butternut, Arrowroots, Chia Seeds, Sesame Seeds, Natural Vanilla",
    howToUse: [
      "Instant & ready in minutes",
      "Mix with hot water or milk",
      "Stir until smooth",
      "Sweeten if desired, then serve",
    ],
    sizes: [
      { label: "1kg", priceKes: 500 },
      { label: "Half kg", priceKes: 250 },
      { label: "200g", priceKes: 150 },
    ],
    images: ["/images/products/group-photo.jpg"],
    badges: [...BASE_BADGES, "No Additives", "No Preservatives"],
  },
  {
    slug: "zesty-nutriblend",
    name: "Zesty Nutriblend Porridge Flour",
    shortName: "Zesty Nutriblend",
    tagline: "A vibrant, naturally fermented blend packed with flavour and energy",
    category: "porridge",
    description:
      "Epique Zesty Nutriblend Instant Porridge Flour is made from a carefully selected mix of wholesome grains, roots and natural ingredients. Its naturally fermented profile gives it a light, tangy taste while supporting easy digestion and nutrient absorption — instant and ready in minutes, for any time of day.",
    benefits: [
      "Energy-rich for active lifestyles",
      "Supports healthy digestion",
      "Naturally fermented for better nutrient absorption",
      "Rich in fiber and essential nutrients",
      "Refreshing, slightly tangy taste",
      "Supports overall wellness",
    ],
    howToUse: [
      "Instant — ready in minutes",
      "Add hot water and stir until smooth",
      "Adjust thickness to your preference",
      "Sweeten if desired",
    ],
    uses: [
      "Busy mornings when you need something quick",
      "Midday boost at the office",
      "Evening light meal",
      "Travel or on-the-go nourishment",
    ],
    sizes: [
      { label: "1kg", priceKes: 500 },
      { label: "500g", priceKes: 250 },
    ],
    images: ["/images/products/group-photo.jpg"],
    badges: [...BASE_BADGES, "No Artificial Preservatives"],
  },
  {
    slug: "gluten-free-all-purpose-flour",
    name: "Gluten-Free All-Purpose Flour",
    shortName: "Gluten-Free Flour",
    tagline: "A clean, gluten-free flour made from natural ingredients",
    category: "flours",
    description:
      "A clean, gluten-free flour made from natural ingredients, perfect for everyday cooking and baking — soft, light results with no bloating or discomfort.",
    benefits: [
      "Reduces bloating & discomfort — no gluten, gentle on the stomach",
      "Easy to digest — feel lighter after meals",
      "Naturally nourishing — made from nutrient rich ingredients",
      "Supports gut health — better digestion, better wellness",
      "No additives or preservatives — clean, real food",
      "Soft, light results — perfect texture for everyday cooking",
    ],
    uses: ["Chapati", "Mandazi", "Pancakes", "Cakes & cookies"],
    sizes: [
      { label: "1kg", priceKes: 500 },
      { label: "500g", priceKes: 250 },
    ],
    images: ["/images/products/all-purpose-flour-1.jpg"],
    badges: ["Gluten-Free", "No Additives", "No Preservatives"],
  },
  {
    slug: "butternut-flour",
    name: "Epique Butternut Flour",
    shortName: "Butternut Flour",
    tagline: "All the goodness of butternut, without the work",
    category: "flours",
    description:
      "Epique Butternut Flour is made from carefully selected butternut, processed into a fine, ready-to-use flour that saves you time while giving you the same rich nutrition and natural sweetness. No peeling. No boiling. No blending. Just scoop, mix, and enjoy.",
    benefits: [
      "Rich in Vitamin A (supports eye health)",
      "High in fiber for healthy digestion",
      "Supports immunity naturally",
      "Naturally sweet and nutritious",
      "Suitable for the whole family",
    ],
    uses: [
      "Add to porridge for extra nutrition",
      "Mix into chapati or mandazi dough",
      "Use in pancakes and baking",
      "Thicken soups and sauces",
      "Blend into smoothies",
    ],
    ingredients: "100% Pure Butternut",
    sizes: [{ label: "150g" }],
    images: ["/images/products/butternut-1.jpg"],
    badges: [...BASE_BADGES, "No Additives", "No Preservatives"],
  },
  {
    slug: "beetroot-powder",
    name: "Epique Beetroot Powder",
    shortName: "Beetroot Powder",
    tagline: "Naturally vibrant. Powerfully nourishing. Made for your convenience.",
    category: "powders",
    description:
      "Epique Beetroot Powder is made from carefully selected beetroots, finely processed to retain their rich color, natural sweetness, and powerful nutrients, while saving you time in the kitchen. No peeling. No boiling. No blending. Just scoop, mix and enjoy.",
    benefits: [
      "Supports healthy blood levels",
      "Rich in antioxidants",
      "Helps improve energy and stamina",
      "Supports heart health",
      "Promotes overall wellness",
    ],
    uses: [
      "Add to smoothies and juices",
      "Mix into milk or yogurt",
      "Use in baking and pancakes",
      "Blend into drinks for a natural boost",
      "Add to meals for colour and nutrition",
    ],
    ingredients: "100% Pure Beetroot",
    sizes: [{ label: "150g" }],
    images: ["/images/products/beetroot-1.jpg"],
    badges: [...BASE_BADGES, "No Additives", "No Preservatives"],
  },
  {
    slug: "pure-hibiscus",
    name: "Epique Pure Hibiscus",
    shortName: "Pure Hibiscus",
    tagline: "Refresh your body with nature's vibrant goodness",
    category: "powders",
    description:
      "Epique Pure Hibiscus is made from carefully selected, naturally dried hibiscus petals, offering a bold, tangy flavor and a refreshing drink packed with natural benefits.",
    benefits: [
      "Rich in antioxidants",
      "Supports immunity",
      "Helps reduce inflammation",
      "Supports heart health",
      "Refreshing and hydrating",
      "Supports weight management",
    ],
    uses: [
      "Brew as hot tea",
      "Enjoy as a cold drink (iced hibiscus)",
      "Mix into juices",
      "Add to smoothies",
      "Can be used in food and marinades",
    ],
    ingredients: "100% Pure Hibiscus Petal",
    sizes: [{ label: "100g" }],
    images: ["/images/products/hibiscus-1.jpg"],
    badges: [...BASE_BADGES, "No Additives", "No Preservatives"],
  },
  {
    slug: "tea-masala",
    name: "Epique Tea Masala",
    shortName: "Tea Masala",
    tagline: "Transform your everyday tea into a warm, aromatic experience",
    category: "spices",
    description:
      "A rich blend of natural spices crafted to transform your everyday tea into a warm, aromatic experience. Epique Tea Masala combines carefully selected spices to bring you comfort, flavor, and wellness in every cup.",
    benefits: [
      "Supports digestion",
      "Helps reduce bloating",
      "Rich in antioxidants",
      "Boosts immunity",
      "Promotes warmth and relaxation",
    ],
    uses: [
      "Add to your tea while boiling",
      "Mix with milk tea (chai)",
      "Use in coffee for a spiced flavor",
    ],
    sizes: [{ label: "Jar" }],
    images: ["/images/products/tea-masala-1.jpg", "/images/products/tea-masala-2.jpg"],
    badges: [...BASE_BADGES],
  },
  {
    slug: "pure-paprika",
    name: "Epique Pure Paprika",
    shortName: "Pure Paprika",
    tagline: "Bring your food to life with rich colour and bold, natural flavour",
    category: "spices",
    description:
      "Epique Pure Paprika is made from carefully selected peppers, finely ground to deliver a vibrant taste that enhances every meal, from everyday cooking to gourmet dishes.",
    benefits: [
      "Rich in natural antioxidants",
      "Supports immunity",
      "Promotes heart health",
      "Enhances flavor naturally",
    ],
    uses: [
      "Cooking and everyday meals",
      "Marinades (chicken, beef, fish)",
      "Stews and sauces",
      "Grilling & roasting",
      "Sprinkle on eggs, potatoes & vegetables",
    ],
    ingredients: "100% Pure Paprika",
    sizes: [{ label: "50g" }],
    images: [
      "/images/products/paprika-1.jpg",
      "/images/products/paprika-2.jpg",
      "/images/products/paprika-3.jpg",
    ],
    badges: [...BASE_BADGES, "No Additives", "No Preservatives"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function hasPricing(product: Product): boolean {
  return product.sizes.some((s) => typeof s.priceKes === "number");
}
