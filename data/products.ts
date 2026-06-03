export interface ProductVariant {
  weight: string;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  category: "Food" | "Medicine" | "Accessories";
  subCategory: "Dog Food" | "Cat Food" | "Dewormers" | "Vitamins" | "Collars" | "Toys" | "Beds";
  brand: string;
  image: string;
  isNew?: boolean;
  isPremium?: boolean;
  variants: ProductVariant[];
  description: string;
  features: string[];
}

export const productsData: Product[] = [
  // DOG FOOD
  {
    id: "p1",
    name: "Royal Canin Maxi Puppy",
    category: "Food",
    subCategory: "Dog Food",
    brand: "Royal Canin",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600",
    isPremium: true,
    variants: [
      { weight: "1 kg", price: "₹850" },
      { weight: "4 kg", price: "₹3,200" },
      { weight: "15 kg", price: "₹9,500" }
    ],
    description: "Formulated specifically for large breed puppies (adult weight 26 to 44 kg) up to 15 months old. Helps support immune system health and bone/joint development.",
    features: ["Immune system support", "Healthy digestion", "Long growth - moderate energy"]
  },
  {
    id: "p2",
    name: "Farmina N&D Pumpkin Grain-Free Adult",
    category: "Food",
    subCategory: "Dog Food",
    brand: "Farmina",
    image: "https://images.unsplash.com/photo-1579168765467-3b235f938439?q=80&w=600",
    isPremium: true,
    variants: [
      { weight: "2.5 kg", price: "₹2,490" },
      { weight: "12 kg", price: "₹8,990" }
    ],
    description: "Grain-free formula with Lamb, Pumpkin, and Blueberry. Highly digestible and perfect for dogs with sensitive stomachs or grain allergies in India.",
    features: ["96% Protein of animal origin", "Grain-free", "No artificial preservatives"]
  },
  // CAT FOOD
  {
    id: "p3",
    name: "Me-O Persian Dry Cat Food",
    category: "Food",
    subCategory: "Cat Food",
    brand: "Me-O",
    image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=600",
    variants: [
      { weight: "1.1 kg", price: "₹450" },
      { weight: "3 kg", price: "₹1,250" },
      { weight: "7 kg", price: "₹2,800" }
    ],
    description: "Specially formulated for Persian cats to help prevent hairball formation and maintain a healthy, shiny coat.",
    features: ["Anti-Hairball formula", "Omega 3 & 6 for coat", "High digestibility"]
  },
  {
    id: "p4",
    name: "Royal Canin Hair & Skin Care",
    category: "Food",
    subCategory: "Cat Food",
    brand: "Royal Canin",
    image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=600",
    isPremium: true,
    variants: [
      { weight: "2 kg", price: "₹1,950" }
    ],
    description: "Precisely balanced nutritional formula which helps maintain skin and coat health. Visible results in 21 days.",
    features: ["Visible results in 21 days", "Amino acids & vitamins", "Omega 3 & 6 fatty acids"]
  },
  // MEDICINES & SUPPLEMENTS
  {
    id: "p5",
    name: "Drontal Plus Dewormer for Dogs",
    category: "Medicine",
    subCategory: "Dewormers",
    brand: "Bayer",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600",
    variants: [
      { weight: "1 Tablet (per 10kg)", price: "₹150" },
      { weight: "Strip of 6", price: "₹850" }
    ],
    description: "Broad-spectrum dewormer highly effective against tapeworms, hookworms, and roundworms. Consult our experts for dosage.",
    features: ["Fast acting", "Effective against major worms", "Beef flavored"]
  },
  {
    id: "p6",
    name: "Nutricoat Advance Supplement",
    category: "Medicine",
    subCategory: "Vitamins",
    brand: "Pet Mankind",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600",
    variants: [
      { weight: "200 ml", price: "₹450" }
    ],
    description: "Omega 3 and 6 fatty acid supplement enriched with Vitamin A, D3, E for maintaining healthy skin and a shiny coat in Indian conditions.",
    features: ["Reduces shedding", "Improves coat shine", "Relieves dry skin"]
  },
  // ACCESSORIES
  {
    id: "p7",
    name: "Premium Orthopedic Pet Bed",
    category: "Accessories",
    subCategory: "Beds",
    brand: "Smart Pet Hub",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=600",
    isNew: true,
    variants: [
      { weight: "Medium", price: "₹1,499" },
      { weight: "Large", price: "₹2,299" },
      { weight: "Extra Large", price: "₹3,499" }
    ],
    description: "High-density memory foam bed designed to support joints and relieve pressure points. Perfect for large breeds like Labradors and GSDs.",
    features: ["Memory foam base", "Machine washable cover", "Water-resistant lining"]
  },
  {
    id: "p8",
    name: "Reflective No-Pull Harness",
    category: "Accessories",
    subCategory: "Collars",
    brand: "Smart Pet Hub",
    image: "https://images.unsplash.com/photo-1601002242132-72013f99052b?q=80&w=600",
    variants: [
      { weight: "Small", price: "₹699" },
      { weight: "Medium", price: "₹899" },
      { weight: "Large", price: "₹1,099" }
    ],
    description: "Durable, comfortable harness that prevents pulling without choking. Includes reflective strips for safe night walks in Dehradun.",
    features: ["Front & back D-rings", "Reflective stitching", "Adjustable fit"]
  }
];
