export interface ProductVariant {
  weight: string;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  category: "Food" | "Medicine" | "Accessories";
  subCategory: string;
  brand: string;
  image: string;
  isNew?: boolean;
  isPremium?: boolean;
  isPrescription?: boolean;
  variants: ProductVariant[];
  description: string;
  features: string[];
}

export const productsData: Product[] = [
  // EXISTING PRODUCTS
  {
    id: "p1",
    name: "Royal Canin Maxi Puppy",
    category: "Food",
    subCategory: "Dog Food",
    brand: "Royal Canin",
    image: "/products/p1.jpg",
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
    image: "/products/p2.jpg",
    isPremium: true,
    variants: [
      { weight: "2.5 kg", price: "₹2,490" },
      { weight: "12 kg", price: "₹8,990" }
    ],
    description: "Grain-free formula with Lamb, Pumpkin, and Blueberry. Highly digestible and perfect for dogs with sensitive stomachs or grain allergies in India.",
    features: ["96% Protein of animal origin", "Grain-free", "No artificial preservatives"]
  },
  {
    id: "p3",
    name: "Me-O Persian Dry Cat Food",
    category: "Food",
    subCategory: "Cat Food",
    brand: "Me-O",
    image: "/products/p3.jpg",
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
    image: "/products/p4.jpg",
    isPremium: true,
    variants: [
      { weight: "2 kg", price: "₹1,950" }
    ],
    description: "Precisely balanced nutritional formula which helps maintain skin and coat health. Visible results in 21 days.",
    features: ["Visible results in 21 days", "Amino acids & vitamins", "Omega 3 & 6 fatty acids"]
  },
  {
    id: "p5",
    name: "Drontal Plus Dewormer for Dogs",
    category: "Medicine",
    subCategory: "Dewormers",
    brand: "Bayer",
    image: "/products/p5.jpg",
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
    image: "/products/p6.jpg",
    variants: [
      { weight: "200 ml", price: "₹450" }
    ],
    description: "Omega 3 and 6 fatty acid supplement enriched with Vitamin A, D3, E for maintaining healthy skin and a shiny coat in Indian conditions.",
    features: ["Reduces shedding", "Improves coat shine", "Relieves dry skin"]
  },
  {
    id: "p7",
    name: "Premium Orthopedic Pet Bed",
    category: "Accessories",
    subCategory: "Beds",
    brand: "Smart Pet Hub",
    image: "/products/p7.jpg",
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
    image: "/products/p8.jpg",
    variants: [
      { weight: "Small", price: "₹699" },
      { weight: "Medium", price: "₹899" },
      { weight: "Large", price: "₹1,099" }
    ],
    description: "Durable, comfortable harness that prevents pulling without choking. Includes reflective strips for safe night walks in Dehradun.",
    features: ["Front & back D-rings", "Reflective stitching", "Adjustable fit"]
  },
  
  // NEW PRODUCTS
  {
    id: "p9",
    name: "Pedigree Adult Chicken & Vegetables",
    category: "Food",
    subCategory: "Dog Food",
    brand: "PEDIGREE",
    image: "/products/p9.jpg",
    variants: [
      { weight: "1.2 kg", price: "₹320" },
      { weight: "3 kg", price: "₹750" },
      { weight: "6 kg", price: "₹1,399" }
    ],
    description: "Complete nutrition for adult dogs with real chicken and vegetables. Supports healthy digestion and strong muscles.",
    features: ["High protein content", "Omega 6 for coat health", "Antioxidants for immunity"]
  },
  {
    id: "p10",
    name: "Drools Focus Super Premium Puppy",
    category: "Food",
    subCategory: "Dog Food",
    brand: "DROOLS",
    image: "/products/p10.jpg",
    isPremium: true,
    variants: [
      { weight: "1.2 kg", price: "₹480" },
      { weight: "3 kg", price: "₹1,099" },
      { weight: "12 kg", price: "₹3,799" }
    ],
    description: "Science-based nutrition for growing puppies with DHA for brain development and calcium for strong bones.",
    features: ["DHA for brain development", "Calcium for strong bones", "No artificial preservatives"]
  },
  {
    id: "p11",
    name: "Orijen Original Adult Dog",
    category: "Food",
    subCategory: "Dog Food",
    brand: "ORIJEN",
    image: "/products/p11.jpg",
    isPremium: true,
    variants: [
      { weight: "2 kg", price: "₹2,199" },
      { weight: "6 kg", price: "₹5,999" },
      { weight: "11.4 kg", price: "₹10,499" }
    ],
    description: "Biologically appropriate food made with 85% quality animal ingredients. Grain-free and packed with whole prey ratios.",
    features: ["85% quality animal ingredients", "Grain-free formula", "WholePrey animal ratios"]
  },
  {
    id: "p12",
    name: "Hill's Science Diet Adult",
    category: "Food",
    subCategory: "Dog Food",
    brand: "HILLS",
    image: "/products/p12.jpg",
    variants: [
      { weight: "2 kg", price: "₹1,299" },
      { weight: "7.5 kg", price: "₹4,299" }
    ],
    description: "Precisely balanced nutrition with high-quality proteins for lean muscles and a healthy immune system.",
    features: ["Clinically proven antioxidants", "Easy to digest", "Vet recommended"]
  },
  {
    id: "p13",
    name: "Pedigree Wet Food Pouches - Chicken",
    category: "Food",
    subCategory: "Dog Food",
    brand: "PEDIGREE",
    image: "/products/p13.jpg",
    variants: [
      { weight: "70g x 6 pouches", price: "₹210" },
      { weight: "70g x 15 pouches", price: "₹499" }
    ],
    description: "Juicy chicken chunks in rich gravy. A tasty complement or standalone meal for adult dogs.",
    features: ["Real chicken chunks", "Rich gravy formula", "No added artificial colors"]
  },
  {
    id: "p14",
    name: "Royal Canin Wet Puppy Food",
    category: "Food",
    subCategory: "Dog Food",
    brand: "ROYAL CANIN",
    image: "/products/p14.jpg",
    variants: [
      { weight: "85g x 12 cans", price: "₹1,199" },
      { weight: "85g x 24 cans", price: "₹2,299" }
    ],
    description: "Highly digestible wet food with adapted energy levels for puppies up to 10 months old.",
    features: ["Adapted energy for puppies", "Highly digestible proteins", "Supports immune system"]
  },
  {
    id: "p15",
    name: "Drools Wet Dog Food Gravy - Chicken & Rice",
    category: "Food",
    subCategory: "Dog Food",
    brand: "DROOLS",
    image: "/products/p15.jpg",
    variants: [
      { weight: "150g x 4 cans", price: "₹320" },
      { weight: "150g x 12 cans", price: "₹880" }
    ],
    description: "Tender chicken pieces in a savory gravy with rice. Perfect for picky eaters or as a food topper.",
    features: ["Real meat pieces", "Balanced nutrition", "Great for picky eaters"]
  },
  {
    id: "p16",
    name: "Meat Up Chicken Jerky Strips",
    category: "Food",
    subCategory: "Dog Treats",
    brand: "MEAT UP",
    image: "/products/p16.jpg",
    isNew: true,
    variants: [
      { weight: "70g", price: "₹180" },
      { weight: "200g", price: "₹449" }
    ],
    description: "100% real chicken strips, air-dried for maximum protein. Ideal for training and rewarding.",
    features: ["100% real chicken", "High protein", "No artificial flavors"]
  },
  {
    id: "p17",
    name: "Pedigree Dentastix Daily Dental Chews",
    category: "Food",
    subCategory: "Dog Treats",
    brand: "PEDIGREE",
    image: "/products/p17.jpg",
    variants: [
      { weight: "Small/Med 7 sticks", price: "₹199" },
      { weight: "Large 7 sticks", price: "₹249" }
    ],
    description: "Clinically proven to reduce tartar buildup by up to 80%. Keeps breath fresh and gums healthy.",
    features: ["Reduces tartar up to 80%", "Freshens breath", "Unique X-shape design"]
  },
  {
    id: "p18",
    name: "Dogsee Chew Himalayan Yak Bars",
    category: "Food",
    subCategory: "Dog Treats",
    brand: "DOGSEE",
    image: "/products/p18.jpg",
    isPremium: true,
    variants: [
      { weight: "Small", price: "₹299" },
      { weight: "Medium", price: "₹449" },
      { weight: "Large", price: "₹599" }
    ],
    description: "100% natural Himalayan yak milk chews. Long-lasting, odor-free, and completely digestible.",
    features: ["100% natural ingredients", "Long-lasting chew", "High protein & low fat"]
  },
  {
    id: "p19",
    name: "Whiskas Adult Ocean Fish",
    category: "Food",
    subCategory: "Cat Food",
    brand: "WHISKAS",
    image: "/products/p19.jpg",
    variants: [
      { weight: "480g", price: "₹210" },
      { weight: "1.2 kg", price: "₹450" },
      { weight: "3 kg", price: "₹999" }
    ],
    description: "Complete and balanced nutrition for adult cats with real ocean fish and essential vitamins.",
    features: ["Real ocean fish", "Taurine for heart health", "Shiny coat formula"]
  },
  {
    id: "p20",
    name: "Royal Canin Persian Adult",
    category: "Food",
    subCategory: "Cat Food",
    brand: "ROYAL CANIN",
    image: "/products/p20.jpg",
    isPremium: true,
    variants: [
      { weight: "400g", price: "₹599" },
      { weight: "2 kg", price: "₹2,199" },
      { weight: "4 kg", price: "₹3,999" }
    ],
    description: "Specially designed for Persian cats with an almond-shaped kibble easy to pick up with flat jaws.",
    features: ["Almond-shaped kibble", "Hairball reduction complex", "Supports skin barrier"]
  },
  {
    id: "p21",
    name: "Hill's Science Diet Indoor Cat",
    category: "Food",
    subCategory: "Cat Food",
    brand: "HILLS",
    image: "/products/p21.jpg",
    variants: [
      { weight: "1.58 kg", price: "₹1,499" },
      { weight: "4 kg", price: "₹3,299" }
    ],
    description: "Crafted for the unique needs of indoor cats. Controls hairballs and maintains healthy weight.",
    features: ["Hairball control", "Weight management", "Natural fiber blend"]
  },
  {
    id: "p22",
    name: "Whiskas Tuna in Jelly Pouches",
    category: "Food",
    subCategory: "Cat Food",
    brand: "WHISKAS",
    image: "/products/p22.jpg",
    variants: [
      { weight: "85g x 6 pouches", price: "₹249" },
      { weight: "85g x 15 pouches", price: "₹580" }
    ],
    description: "Tender tuna pieces in a light jelly. Irresistible to cats and packed with essential nutrients.",
    features: ["Real tuna pieces", "Jelly texture cats love", "Essential vitamins & minerals"]
  },
  {
    id: "p23",
    name: "Me-O Tuna & Shrimp Wet Cat Food",
    category: "Food",
    subCategory: "Cat Food",
    brand: "ME-O",
    image: "/products/p23.jpg",
    variants: [
      { weight: "80g x 6 cans", price: "₹199" },
      { weight: "80g x 24 cans", price: "₹720" }
    ],
    description: "Delicious tuna and shrimp combination in natural broth. Great for hydration and palatability.",
    features: ["Tuna & shrimp combo", "Natural broth for hydration", "No artificial colors"]
  },
  {
    id: "p24",
    name: "Sheba Fine Flakes Tuna & Chicken",
    category: "Food",
    subCategory: "Cat Food",
    brand: "SHEBA",
    image: "/products/p24.jpg",
    isPremium: true,
    variants: [
      { weight: "70g x 6 pouches", price: "₹399" },
      { weight: "70g x 12 pouches", price: "₹749" }
    ],
    description: "Delicate fine flakes in a light sauce. Premium wet food experience for discerning cats.",
    features: ["Fine flake texture", "Premium ingredients", "Light natural sauce"]
  },
  {
    id: "p25",
    name: "Temptations Classic Cat Treats",
    category: "Food",
    subCategory: "Cat Treats",
    brand: "TEMPTATIONS",
    image: "/products/p25.jpg",
    variants: [
      { weight: "30g", price: "₹120" },
      { weight: "85g", price: "₹280" },
      { weight: "180g", price: "₹520" }
    ],
    description: "Crunchy on the outside, soft on the inside. Cats go crazy for these irresistible treats.",
    features: ["Crunchy & soft texture", "Under 2 calories per treat", "Great for training"]
  },
  {
    id: "p26",
    name: "Me-O Creamy Treats - Tuna Flavor",
    category: "Food",
    subCategory: "Cat Treats",
    brand: "ME-O",
    image: "/products/p26.jpg",
    isNew: true,
    variants: [
      { weight: "15g x 5 tubes", price: "₹149" },
      { weight: "15g x 15 tubes", price: "₹399" }
    ],
    description: "Lickable creamy treat tubes loved by cats. Can be used as a treat, food topper, or bonding tool.",
    features: ["Lickable tube format", "Real tuna flavor", "Added vitamins & taurine"]
  },
  {
    id: "p27",
    name: "Drontal Cat Dewormer",
    category: "Medicine",
    subCategory: "Dewormers",
    brand: "BAYER",
    image: "/products/p27.jpg",
    isPrescription: true,
    variants: [
      { weight: "2 tablets", price: "₹199" },
      { weight: "6 tablets", price: "₹520" }
    ],
    description: "Broad-spectrum dewormer for cats effective against tapeworms, roundworms, and hookworms. Vet recommended.",
    features: ["Broad-spectrum coverage", "Single dose treatment", "Safe for cats above 6 weeks"]
  },
  {
    id: "p28",
    name: "Himalaya Erina-EP Tick & Flea Shampoo",
    category: "Medicine",
    subCategory: "Grooming",
    brand: "HIMALAYA",
    image: "/products/p28.jpg",
    variants: [
      { weight: "200ml", price: "₹180" },
      { weight: "450ml", price: "₹320" }
    ],
    description: "Herbal formulation that effectively eliminates ticks and fleas while conditioning the coat naturally.",
    features: ["Herbal & safe formula", "Kills ticks & fleas", "Conditions coat naturally"]
  },
  {
    id: "p29",
    name: "Venkys Vit-A-Min Supplement for Dogs",
    category: "Medicine",
    subCategory: "Vitamins",
    brand: "VENKYS",
    image: "/products/p29.jpg",
    variants: [
      { weight: "100 tablets", price: "₹299" },
      { weight: "200 tablets", price: "₹549" }
    ],
    description: "Complete vitamin and mineral supplement to fill nutritional gaps in homemade and commercial diets.",
    features: ["13 essential vitamins", "Improves energy levels", "Supports bone health"]
  },
  {
    id: "p30",
    name: "Beaphar Ear Cleaner for Dogs & Cats",
    category: "Medicine",
    subCategory: "Grooming",
    brand: "BEAPHAR",
    image: "/products/p30.jpg",
    variants: [
      { weight: "50ml", price: "₹349" }
    ],
    description: "Gentle ear cleaning solution that dissolves wax and prevents ear infections. Safe for regular use.",
    features: ["Dissolves ear wax", "Prevents infections", "Suitable for dogs & cats"]
  },
  {
    id: "p31",
    name: "Drools Absolute Calcium Supplement",
    category: "Medicine",
    subCategory: "Vitamins",
    brand: "DROOLS",
    image: "/products/p31.jpg",
    variants: [
      { weight: "100 tablets", price: "₹249" },
      { weight: "250 tablets", price: "₹549" }
    ],
    description: "Chewable calcium tablets to support bone density, joint strength, and teeth health in dogs.",
    features: ["High bioavailable calcium", "Supports joints & bones", "Tasty chewable form"]
  },
  {
    id: "p32",
    name: "Laxatone Hairball Control Paste for Cats",
    category: "Medicine",
    subCategory: "Vitamins",
    brand: "LAXATONE",
    image: "/products/p32.jpg",
    variants: [
      { weight: "70g", price: "₹649" }
    ],
    description: "Tuna-flavored gel that lubricates the digestive tract to help cats pass or prevent hairballs naturally.",
    features: ["Tuna flavor cats love", "Prevents hairball formation", "Gentle on digestion"]
  },
  {
    id: "p33",
    name: "Retractable Dog Leash - 5 Meter",
    category: "Accessories",
    subCategory: "Leashes",
    brand: "SMART PET HUB",
    image: "/products/p33.jpg",
    isNew: true,
    variants: [
      { weight: "Small (up to 12kg)", price: "₹549" },
      { weight: "Large (up to 35kg)", price: "₹749" }
    ],
    description: "Durable nylon cord leash with one-button brake and lock. Comfortable anti-slip handle for all dog sizes.",
    features: ["5 meter extend range", "One-button brake & lock", "Anti-slip ergonomic handle"]
  },
  {
    id: "p34",
    name: "Stainless Steel Double Dog Bowl",
    category: "Accessories",
    subCategory: "Bowls",
    brand: "SMART PET HUB",
    image: "/products/p34.jpg",
    variants: [
      { weight: "Small 500ml", price: "₹349" },
      { weight: "Medium 900ml", price: "₹449" },
      { weight: "Large 1.5L", price: "₹599" }
    ],
    description: "Heavy-duty stainless steel bowls on a non-slip rubber base. Dishwasher safe and rust resistant.",
    features: ["Food-grade stainless steel", "Non-slip rubber base", "Dishwasher safe"]
  },
  {
    id: "p35",
    name: "Kong Classic Stuffable Chew Toy",
    category: "Accessories",
    subCategory: "Toys",
    brand: "KONG",
    image: "/products/p35.jpg",
    isPremium: true,
    variants: [
      { weight: "Small", price: "₹699" },
      { weight: "Medium", price: "₹899" },
      { weight: "Large", price: "₹1,099" }
    ],
    description: "The world's most popular dog toy. Stuff with treats or peanut butter to keep dogs busy for hours.",
    features: ["Natural rubber construction", "Stuffable with treats", "Vet & trainer recommended"]
  },
  {
    id: "p36",
    name: "Slow Feeder Dog Bowl - Anti-Bloat",
    category: "Accessories",
    subCategory: "Bowls",
    brand: "SMART PET HUB",
    image: "/products/p36.jpg",
    variants: [
      { weight: "Small", price: "₹399" },
      { weight: "Large", price: "₹549" }
    ],
    description: "Maze-pattern bowl that slows eating by 10x, reducing bloat, gulping, and digestive issues in dogs.",
    features: ["Slows eating by 10x", "Prevents bloat & gulping", "BPA-free food-safe plastic"]
  },
  {
    id: "p37",
    name: "Cat Tree with Scratching Post - 120cm",
    category: "Accessories",
    subCategory: "Toys",
    brand: "SMART PET HUB",
    image: "/products/p37.jpg",
    isNew: true,
    variants: [
      { weight: "Standard 120cm", price: "₹2,499" },
      { weight: "Tall 150cm", price: "₹3,199" }
    ],
    description: "4-level cat tree with sisal scratching posts, cozy perches, and a hanging toy. Perfect for active cats.",
    features: ["4 activity levels", "Natural sisal scratching post", "Sturdy non-tip base"]
  },
  {
    id: "p38",
    name: "Self-Cleaning Cat Litter Box",
    category: "Accessories",
    subCategory: "Litter",
    brand: "SMART PET HUB",
    image: "/products/p38.jpg",
    isPremium: true,
    variants: [
      { weight: "Standard", price: "₹3,999" },
      { weight: "XL", price: "₹5,499" }
    ],
    description: "Automatic rotating litter box that separates waste 3 minutes after use. Odor-sealed waste drawer.",
    features: ["Auto-clean 3 min after use", "Odor-seal waste drawer", "Works with any clumping litter"]
  },
  {
    id: "p39",
    name: "Feather Wand Cat Teaser Toy",
    category: "Accessories",
    subCategory: "Toys",
    brand: "SMART PET HUB",
    image: "/products/p39.jpg",
    variants: [
      { weight: "Single", price: "₹249" },
      { weight: "With 3 extra tips", price: "₹449" }
    ],
    description: "Interactive feather wand with a 60cm flexible rod. Keeps cats active, stimulated, and entertained.",
    features: ["60cm flexible rod", "Replaceable feather tips", "Encourages natural hunting instinct"]
  },
  {
    id: "p40",
    name: "Automatic Pet Water Fountain - 2L",
    category: "Accessories",
    subCategory: "Bowls",
    brand: "SMART PET HUB",
    image: "/products/p40.jpg",
    isNew: true,
    variants: [
      { weight: "2L", price: "₹1,299" },
      { weight: "3L", price: "₹1,799" }
    ],
    description: "Continuously circulating water fountain with triple filtration. Encourages pets to drink more water.",
    features: ["Triple filter system", "Ultra quiet motor", "2L capacity for dogs & cats"]
  }
];
