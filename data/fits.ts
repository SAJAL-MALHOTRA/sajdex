export interface GarmentBreakdown {
  outerwear?: string;
  top: string;
  bottom: string;
  footwear: string;
  accessories: string[];
}

export interface FitItem {
  id: string;
  number: string;
  title: string;
  season: string;
  vibe: string;
  silhouette: string;
  image: string;
  garments: GarmentBreakdown;
  palette: string[];
  stylingNotes: string;
  tags: string[];
}

export const fits: FitItem[] = [
  {
    id: "FIT-01",
    number: "01",
    title: "LEATHER BLOUSON & LAYERED FLEECE",
    season: "AW26",
    vibe: "Streetwear Silhouette & Structured Leather",
    silhouette: "Boxy Leather Jacket / Relaxed Pleated Trousers",
    image: "/fit_leather_jacket.png",
    garments: {
      outerwear: "Dark Brown Leather Zip Blouson",
      top: "Olive Green Half-Zip Mockneck Fleece",
      bottom: "Tailored Relaxed Gray Pleated Trousers",
      footwear: "Asics Gel-Kayano 14 / Salomon XT-6",
      accessories: ["Gold Wire-Frame Optics", "Signet Rings", "Minimalist Wrist Beads"],
    },
    palette: ["#2B221B", "#5C503A", "#8A8B8E", "#0F1012"],
    stylingNotes: "Nighttime court aesthetic balancing the structured drape of a dark brown leather jacket with cozy olive fleece and tailored fluid trousers.",
    tags: ["Leather", "Layering", "Streetwear"],
  },
  {
    id: "FIT-02",
    number: "02",
    title: "ARCHIVE LAYERED UNIFORM",
    season: "SS26",
    vibe: "Brutalist Atelier & Daily Engineering",
    silhouette: "Oversized Drop-Shoulder / Raw Denim Straight Cut",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    garments: {
      outerwear: "Vintage Washed Charcoal Zip Blouson",
      top: "Oversized Waffle Knit Thermal (Washed Grey)",
      bottom: "14oz Selvedge Raw Indigo Denim (Straight Baggy)",
      footwear: "Adidas Samba OG / Maison Margiela Replica Look",
      accessories: ["Vintage Aviator Wire Frames", "Leather Card Sleeve", "Silver Ring Stack"],
    },
    palette: ["#1E2024", "#4A4D53", "#1A2238", "#E8E7E3"],
    stylingNotes: "Heavy texture play between rough waffle thermal and rigid raw denim. Built for late night sprint sessions in the terminal.",
    tags: ["Minimalist", "Raw Denim", "Layering"],
  },
  {
    id: "FIT-03",
    number: "03",
    title: "MIDNIGHT SPRINT OPS",
    season: "FW25",
    vibe: "Stealth Tech × Heavy Knitwear",
    silhouette: "Cropped Boxy Fleece / Tapered Utility Pant",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=80",
    garments: {
      outerwear: "Deep Olive Sherpa Fleece Zip Jacket",
      top: "Seamless Mock Neck Long Sleeve (Obsidian)",
      bottom: "Double-Knee Workwear Carpenter Trousers",
      footwear: "New Balance 990v6 Made in USA (Grey/Castlerock)",
      accessories: ["Ribbed Beanie in Forest Green", "Canvas Tote Bag", "Mechanical Watch"],
    },
    palette: ["#232B25", "#0E1012", "#5E6460", "#9E9E9E"],
    stylingNotes: "High-comfort cold weather rotation when training PyTorch models. Functional pockets, durable double-knee duck canvas.",
    tags: ["Workwear", "Streetwear", "Winter"],
  },
  {
    id: "FIT-04",
    number: "04",
    title: "CAMPUS CODE ROTATION",
    season: "SS26",
    vibe: "Elevated Streetwear × Everyday Casual",
    silhouette: "Boxy French Terry / Pleated Chino",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80",
    garments: {
      outerwear: "Double-Zipper Boxy Track Jacket (Washed Clay)",
      top: "Vintage Enzyme-Washed Graphic Tee",
      bottom: "Single-Pleat Wide Leg Trousers (Charcoal)",
      footwear: "Nike Dunk Low Retro / Asics Gel-Kayano 14",
      accessories: ["Over-Ear Studio Headphones", "Pebbled Leather Key Lanyard"],
    },
    palette: ["#825A4B", "#2B2D31", "#EFECE6", "#141518"],
    stylingNotes: "Effortless proportional balance: cropped upper torso contrast with cascading wide trouser legs for clean silhouette lines.",
    tags: ["Casual", "Sneakers", "Silhouette"],
  },
];