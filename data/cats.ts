export interface CatBreed {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  priceRange: string;
  traits: {
    indoorSuitability: number;
    heatTolerance: number;
    groomingDifficulty: number;
    affectionate: number;
    energyLevel: number;
    kidFriendly: number;
  };
  stats: {
    lifespan: string;
    weight: string;
  };
  seoContent: {
    about: string;
    temperament: string;
    careGuide: {
      grooming: string;
      environment: string;
      summerCare: string;
      vaccination: string;
    };
    diet: string;
    howToSteps: string[];
    faqs: {q: string, a: string}[];
  };
  available: boolean;
}

export const catsData: CatBreed[] = [
  {
    id: "c1",
    name: "Persian Cat",
    slug: "persian",
    image: "/Cats/persian.jpg",
    description: "The Persian cat is famous for its long, luxurious coat and sweet, gentle personality.",
    priceRange: "₹15,000 - ₹25,000",
    traits: { indoorSuitability: 5, heatTolerance: 2, groomingDifficulty: 5, affectionate: 5, energyLevel: 2, kidFriendly: 3 },
    stats: { lifespan: "12-17 years", weight: "3-5.5 kg" },
    available: true,
    seoContent: {
      about: "The Persian cat is undoubtedly the most popular pedigreed cat in India. In Dehradun, their calm and placid nature makes them perfect indoor companions. They are known for their round faces, short muzzles, and long flowing coats.",
      temperament: "Are Persian cats friendly? Yes, they are incredibly sweet-tempered and affectionate. They prefer a serene, predictable environment and are not known for high-energy jumping or climbing. They love lounging on sofas and receiving gentle affection.",
      careGuide: {
        grooming: "Persian cats require the highest level of grooming. Their long coat must be combed daily with a metal comb to prevent severe and painful matting. Their flat faces also mean their eyes need to be wiped daily to prevent tear stains.",
        environment: "They are strictly indoor cats. Their coat and docile nature make them vulnerable outside.",
        summerCare: "In Indian summers, they must be kept in air-conditioned or very cool rooms. Many Indian owners opt for a 'lion cut' during summer to keep them comfortable and reduce grooming needs.",
        vaccination: "Standard FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia) and Rabies vaccines."
      },
      diet: "They need high-quality cat food designed for indoor, long-haired cats (like Royal Canin Persian) to help manage hairballs and maintain coat health.",
      howToSteps: [
        "Comb the coat gently every single day, reaching down to the skin to prevent mats.",
        "Wipe their eyes daily with a damp cotton pad to prevent tear stains and infections.",
        "Keep them strictly indoors, especially during Dehradun's hot summer afternoons.",
        "Provide a high-quality diet specifically formulated to prevent hairballs.",
        "Schedule professional grooming every 4-6 weeks to trim nails and manage the coat."
      ],
      faqs: [
        { q: "How much does a Persian cat cost in Dehradun?", a: "A Persian kitten in Dehradun usually costs between ₹15,000 and ₹25,000 depending on face structure (punch face vs doll face)." },
        { q: "Can Persian cats survive Indian summers?", a: "They struggle in the heat due to their thick coats and flat faces. They require AC or a very cool environment during peak Indian summers." },
        { q: "What is the best cat food for Persian cats in India?", a: "Royal Canin Persian, Farmina N&D, and Me-O Persian are excellent choices available in India." },
        { q: "How often should I groom a Persian cat?", a: "Daily combing is non-negotiable to prevent matting, along with daily eye wiping." },
        { q: "Is a Persian cat good for apartments?", a: "Yes, they are the ultimate apartment cats due to their docile, low-energy nature." },
        { q: "Do Persian cats need vaccinations?", a: "Yes, standard core feline vaccines are required to protect them from fatal viral diseases." },
        { q: "How much exercise does a Persian cat need?", a: "Very little. They enjoy short bursts of play with a feather wand but spend most of their day lounging." },
        { q: "Where can I buy a certified Persian kitten in Dehradun?", a: "You can find certified, health-checked Persian kittens at Smart Pet Hub in Dehradun. WhatsApp us at +919557208775." }
      ]
    }
  },
  {
    id: "c2",
    name: "British Shorthair",
    slug: "british-shorthair",
    image: "/Cats/british shorthaiir.jpg",
    description: "Chunky, teddy-bear looks with an easygoing and dignified personality.",
    priceRange: "₹40,000 - ₹70,000",
    traits: { indoorSuitability: 5, heatTolerance: 3, groomingDifficulty: 2, affectionate: 3, energyLevel: 2, kidFriendly: 4 },
    stats: { lifespan: "14-20 years", weight: "4-8 kg" },
    available: true,
    seoContent: {
      about: "The British Shorthair is highly sought after in India for its plush, teddy-bear appearance and round, expressive eyes. In Dehradun, they make excellent, undemanding companions for working professionals.",
      temperament: "Are British Shorthairs cuddly? They are affectionate but not typically lap cats. They prefer to sit beside you rather than on you. They are dignified, quiet, and handle being left alone during the workday very well.",
      careGuide: {
        grooming: "Their coat is short but incredibly dense. Weekly brushing is needed to remove dead hair and keep the plush texture.",
        environment: "They adapt well to apartment living and are generally inactive cats.",
        summerCare: "While their coat is short, it is thick. They handle moderate Indian weather well but need a cool place during summer peaks.",
        vaccination: "Standard core feline vaccines are required."
      },
      diet: "They are prone to obesity because of their laid-back nature. Strict portion control with high-quality adult indoor cat food is essential.",
      howToSteps: [
        "Brush their dense coat once or twice a week to manage shedding.",
        "Provide sturdy scratching posts to protect your furniture.",
        "Measure their food accurately to prevent them from becoming overweight.",
        "Engage them in interactive play daily to ensure they get some exercise.",
        "Ensure they have quiet spaces to retreat to when they want alone time."
      ],
      faqs: [
        { q: "How much does a British Shorthair cost in Dehradun?", a: "Due to their rarity, a British Shorthair in Dehradun costs between ₹40,000 and ₹70,000." },
        { q: "Is British Shorthair suitable for Indian climate?", a: "They manage reasonably well, but due to their dense coats, they should be kept in cool, shaded indoor environments during summer." },
        { q: "What food should I feed my British Shorthair?", a: "Premium indoor cat food with strict portion control to prevent obesity." },
        { q: "How often should I groom a British Shorthair?", a: "A thorough brushing once a week is usually sufficient." },
        { q: "Is British Shorthair a good lap cat?", a: "They are affectionate but generally prefer sitting next to you rather than on your lap." },
        { q: "Do they get along with children?", a: "Yes, they are very patient and tolerant, making them good family pets if the children are respectful." },
        { q: "Can they be left alone during the day?", a: "Yes, their independent nature makes them great pets for working professionals." },
        { q: "Where can I buy a British Shorthair kitten in Dehradun?", a: "You can find certified British Shorthair kittens at Smart Pet Hub in Dehradun. WhatsApp us at +919557208775." }
      ]
    }
  },
  {
    id: "c3",
    name: "Siamese",
    slug: "siamese",
    image: "/Cats/siamese cat.jpg",
    description: "Vocal, highly intelligent, and deeply bonded to their humans.",
    priceRange: "₹15,000 - ₹25,000",
    traits: { indoorSuitability: 4, heatTolerance: 5, groomingDifficulty: 1, affectionate: 5, energyLevel: 5, kidFriendly: 4 },
    stats: { lifespan: "15-20 years", weight: "2.5-4.5 kg" },
    available: true,
    seoContent: {
      about: "The Siamese is one of the oldest and most recognizable cat breeds. Known for their striking blue almond-shaped eyes and color-point coats, they are a fantastic breed for India. Their short coats and origin in Southeast Asia make them well-suited for Dehradun's climate.",
      temperament: "Are Siamese cats loud? Yes, very! They are famous for their loud, raspy voices and will 'talk' to you all day. They are highly social, dog-like in their loyalty, and demand interaction.",
      careGuide: {
        grooming: "Extremely low maintenance. Their short, fine coat just needs a quick wipe down or light brush occasionally.",
        environment: "They need stimulation. If left alone in an apartment all day, they may become destructive. They do best in pairs or active households.",
        summerCare: "They handle Indian summers exceptionally well compared to other pedigreed cats.",
        vaccination: "Standard core feline vaccines."
      },
      diet: "High-protein dry or wet food. They are active and burn energy quickly.",
      howToSteps: [
        "Provide plenty of interactive toys and puzzle feeders to keep their smart minds busy.",
        "Be prepared to give them lots of daily attention and conversation.",
        "Consider getting two kittens if you work long hours, as they get lonely easily.",
        "Provide tall cat trees, as they love to jump and observe from high places.",
        "Brush them occasionally to remove loose hair."
      ],
      faqs: [
        { q: "How much does a Siamese cat cost in Dehradun?", a: "A Siamese kitten in Dehradun usually costs between ₹15,000 and ₹25,000." },
        { q: "Can Siamese cats survive Indian summers?", a: "Yes, their short, fine coats make them one of the best pedigreed breeds for hot Indian weather." },
        { q: "Are Siamese cats very vocal?", a: "Yes, they are one of the most talkative cat breeds and will constantly vocalize their needs and opinions." },
        { q: "How often should I groom a Siamese cat?", a: "They require very minimal grooming. A weekly light brush or wipe with a damp cloth is enough." },
        { q: "Are Siamese cats affectionate?", a: "Incredibly so. They bond very deeply with their owners and will follow them from room to room." },
        { q: "Can a Siamese cat be left alone?", a: "They do not like being left alone for long periods. If you work full time, it's best to keep them in pairs." },
        { q: "Do they require a special diet?", a: "No, a standard high-quality protein-rich diet is perfect for their active lifestyle." },
        { q: "Where can I buy a Siamese kitten in Dehradun?", a: "You can find certified Siamese kittens at Smart Pet Hub in Dehradun. WhatsApp us at +919557208775." }
      ]
    }
  },
  {
    id: "c4",
    name: "Maine Coon",
    slug: "maine-coon",
    image: "/Cats/maine coon.jpg",
    description: "The gentle giant of the cat world. Dog-like, massive, and friendly.",
    priceRange: "₹60,000 - ₹1,00,000",
    traits: { indoorSuitability: 4, heatTolerance: 2, groomingDifficulty: 4, affectionate: 5, energyLevel: 3, kidFriendly: 5 },
    stats: { lifespan: "12-15 years", weight: "5-9 kg" },
    available: false,
    seoContent: {
      about: "The Maine Coon is the largest domesticated cat breed. In India, they are a rare and highly prized premium breed. Despite their intimidating size and wild appearance, they are known as the 'gentle giants' of the cat world.",
      temperament: "Maine Coons are highly sociable and dog-like. They love following their owners around, greet guests at the door, and strangely, they often love playing in water. They are excellent with children and dogs.",
      careGuide: {
        grooming: "Their heavy, shaggy coat requires brushing 2-3 times a week to prevent tangles, especially on their belly and britches.",
        environment: "Due to their massive size, they need sturdy, extra-large cat trees and very large litter boxes.",
        summerCare: "They have a heavy, water-resistant coat designed for harsh winters. In India, they absolutely must be kept in air-conditioned environments during the summer.",
        vaccination: "Standard core feline vaccines."
      },
      diet: "They grow slowly (taking up to 4 years to reach full size) and need high-quality large-breed cat food to support their bone structure.",
      howToSteps: [
        "Provide extra-large, heavy-duty scratching posts and litter boxes.",
        "Brush their thick coat at least 3 times a week.",
        "Ensure they are kept in a cool, AC environment during hot Indian summers.",
        "Provide plenty of interactive playtime, as they retain a kitten-like personality for years.",
        "Feed them large-breed specific food to support their joint health."
      ],
      faqs: [
        { q: "How much does a Maine Coon cost in Dehradun?", a: "Due to being imported or bred rarely, they are very expensive, typically ranging from ₹60,000 to ₹1,00,000+." },
        { q: "Is Maine Coon suitable for hot Indian weather?", a: "No, they have thick coats designed for snow. They require air conditioning during Indian summers." },
        { q: "How big do Maine Coon cats get?", a: "They are massive, often weighing between 5 to 9 kg, and can reach up to 40 inches in length." },
        { q: "How often should I groom a Maine Coon?", a: "Thorough brushing 2-3 times a week is required to prevent mats in their shaggy coat." },
        { q: "Are Maine Coons friendly?", a: "Yes, they are famous for their 'dog-like' friendly and outgoing personalities." },
        { q: "Do they like water?", a: "Surprisingly, yes! Many Maine Coons love playing in water bowls or joining owners in the shower." },
        { q: "What size litter box do they need?", a: "They require extra-large or jumbo-sized litter boxes, often custom-made." },
        { q: "Where can I buy a Maine Coon kitten in Dehradun?", a: "You can pre-book certified Maine Coon kittens at Smart Pet Hub in Dehradun. WhatsApp us at +919557208775." }
      ]
    }
  },
  {
    id: "c5",
    name: "Bengal",
    slug: "bengal",
    image: "/Cats/bengal cat.jpg",
    description: "A miniature leopard for your living room. Highly active and athletic.",
    priceRange: "₹45,000 - ₹80,000",
    traits: { indoorSuitability: 3, heatTolerance: 4, groomingDifficulty: 1, affectionate: 3, energyLevel: 5, kidFriendly: 4 },
    stats: { lifespan: "12-16 years", weight: "4-7 kg" },
    available: true,
    seoContent: {
      about: "The Bengal cat looks like a wild leopard but has the temperament of a domestic cat. They are a premium, highly active breed. In Dehradun, they are perfect for active owners who want a cat that acts more like a dog.",
      temperament: "Are Bengals aggressive? No, but they are extremely high energy. They are not lap cats; they prefer to climb, play fetch, and explore. They require a lot of mental and physical stimulation to prevent boredom.",
      careGuide: {
        grooming: "Very low maintenance. Their luxurious spotted pelt requires almost no grooming.",
        environment: "They need vertical space. Tall cat trees, wall shelves, and puzzle toys are mandatory. They can also be trained to walk on a leash.",
        summerCare: "They handle Indian weather quite well due to their short coats.",
        vaccination: "Standard core feline vaccines."
      },
      diet: "High-protein diet is essential to fuel their extreme athleticism. Many breeders recommend a high-quality grain-free or raw diet.",
      howToSteps: [
        "Install tall cat trees and wall shelves for them to climb.",
        "Provide highly interactive toys and rotate them to prevent boredom.",
        "Spend at least 30-45 minutes daily playing vigorously with a laser pointer or wand toy.",
        "Consider training them to walk on a harness for safe outdoor exploration.",
        "Feed a premium, high-protein diet to support their muscular build."
      ],
      faqs: [
        { q: "How much does a Bengal cat cost in Dehradun?", a: "A Bengal kitten with high-quality rosettes typically costs between ₹45,000 and ₹80,000." },
        { q: "Is Bengal cat suitable for Indian climate?", a: "Yes, their short, sleek pelt makes them very tolerant of the Indian climate." },
        { q: "Are Bengal cats good for apartments?", a: "Only if the apartment has plenty of vertical space (shelves, cat trees) and the owner plays with them daily." },
        { q: "How often should I groom a Bengal cat?", a: "Rarely. Their unique pelt requires almost no brushing." },
        { q: "Do Bengal cats act like dogs?", a: "Yes, they often play fetch, enjoy walking on a leash, and love water." },
        { q: "Are they good lap cats?", a: "Generally no. They are too busy exploring and playing to sit still for long." },
        { q: "What food should I feed a Bengal cat?", a: "A very high protein, premium diet is required to maintain their lean, muscular physique." },
        { q: "Where can I buy a Bengal kitten in Dehradun?", a: "You can find certified Bengal kittens at Smart Pet Hub in Dehradun. WhatsApp us at +919557208775." }
      ]
    }
  },
  {
    id: "c6",
    name: "Himalayan Cat",
    slug: "himalayan-cat",
    image: "/Cats/Himalayan cat.jpg",
    description: "Cross between Persian & Siamese. Calm, beautiful, and loves cuddles.",
    priceRange: "₹20,000 - ₹30,000",
    traits: { indoorSuitability: 5, heatTolerance: 2, groomingDifficulty: 5, affectionate: 5, energyLevel: 2, kidFriendly: 4 },
    stats: { lifespan: "10-15 years", weight: "3-5 kg" },
    seoContent: { about: "A beautiful breed.", temperament: "Calm.", careGuide: { grooming: "Daily.", environment: "Indoor.", summerCare: "AC needed.", vaccination: "Standard." }, diet: "High quality.", howToSteps: ["Care well."], faqs: [{q: "Cost?", a: "Varies."}] },
    available: true
  },
  {
    id: "c7",
    name: "Ragdoll",
    slug: "ragdoll",
    image: "/Cats/ragdoll.jpg",
    description: "Extremely gentle and docile. Goes limp when held — hence the name! Great with kids.",
    priceRange: "₹30,000 - ₹50,000",
    traits: { indoorSuitability: 5, heatTolerance: 3, groomingDifficulty: 3, affectionate: 5, energyLevel: 2, kidFriendly: 5 },
    stats: { lifespan: "12-15 years", weight: "4-9 kg" },
    seoContent: { about: "Gentle giant.", temperament: "Docile.", careGuide: { grooming: "Weekly.", environment: "Indoor.", summerCare: "Cool.", vaccination: "Standard." }, diet: "High quality.", howToSteps: ["Brush weekly."], faqs: [{q: "Friendly?", a: "Very."}] },
    available: true
  },
  {
    id: "c8",
    name: "Bombay Cat",
    slug: "bombay",
    image: "/Cats/bombay cat.avif",
    description: "Jet black coat with copper eyes. Bred to look like a mini panther. Suits Indian climate well.",
    priceRange: "₹15,000 - ₹25,000",
    traits: { indoorSuitability: 4, heatTolerance: 4, groomingDifficulty: 1, affectionate: 4, energyLevel: 3, kidFriendly: 4 },
    stats: { lifespan: "12-16 years", weight: "3-5 kg" },
    seoContent: { about: "Mini panther.", temperament: "Playful.", careGuide: { grooming: "Minimal.", environment: "Indoor/Outdoor.", summerCare: "Adaptable.", vaccination: "Standard." }, diet: "High quality.", howToSteps: ["Play daily."], faqs: [{q: "Rare?", a: "Somewhat."}] },
    available: true
  },
  {
    id: "c9",
    name: "Sphynx",
    slug: "sphynx",
    image: "/Cats/Sphynx.jpg",
    description: "Hairless and exotic. Loves warmth and human attention. Very unique looking.",
    priceRange: "₹70,000 - ₹1,00,000",
    traits: { indoorSuitability: 5, heatTolerance: 4, groomingDifficulty: 4, affectionate: 5, energyLevel: 4, kidFriendly: 4 },
    stats: { lifespan: "8-14 years", weight: "3-5 kg" },
    seoContent: { about: "Hairless cat.", temperament: "Loving.", careGuide: { grooming: "Bathe regularly.", environment: "Indoor only.", summerCare: "Sunscreen needed.", vaccination: "Standard." }, diet: "High calorie.", howToSteps: ["Bathe weekly."], faqs: [{q: "Hypoallergenic?", a: "Mostly."}] },
    available: true
  },
  {
    id: "c10",
    name: "Scottish Fold",
    slug: "scottish-fold",
    image: "/Cats/scottish_fold.avif",
    description: "Known for folded ears and owl-like face. Sweet, quiet, and affectionate.",
    priceRange: "₹40,000 - ₹60,000",
    traits: { indoorSuitability: 5, heatTolerance: 3, groomingDifficulty: 2, affectionate: 4, energyLevel: 2, kidFriendly: 4 },
    stats: { lifespan: "11-14 years", weight: "3-6 kg" },
    seoContent: { about: "Folded ears.", temperament: "Sweet.", careGuide: { grooming: "Weekly.", environment: "Indoor.", summerCare: "Cool.", vaccination: "Standard." }, diet: "Balanced.", howToSteps: ["Check ears."], faqs: [{q: "Healthy?", a: "Check joints."}] },
    available: true
  },
  {
    id: "c11",
    name: "Russian Blue",
    slug: "russian-blue",
    image: "/Cats/russian blue.jpg",
    description: "Bluish-grey coat with green eyes. Shy but deeply loyal to its owner.",
    priceRange: "₹30,000 - ₹50,000",
    traits: { indoorSuitability: 5, heatTolerance: 3, groomingDifficulty: 1, affectionate: 4, energyLevel: 3, kidFriendly: 3 },
    stats: { lifespan: "15-20 years", weight: "3-5 kg" },
    seoContent: { about: "Silver coat.", temperament: "Loyal.", careGuide: { grooming: "Minimal.", environment: "Indoor.", summerCare: "Cool.", vaccination: "Standard." }, diet: "Balanced.", howToSteps: ["Play gently."], faqs: [{q: "Shy?", a: "Yes."}] },
    available: true
  },
  {
    id: "c12",
    name: "Abyssinian",
    slug: "abyssinian",
    image: "/Cats/abyssinian.jpg",
    description: "Slender, active, and curious. One of the oldest known cat breeds. Loves to explore.",
    priceRange: "₹40,000 - ₹60,000",
    traits: { indoorSuitability: 3, heatTolerance: 4, groomingDifficulty: 1, affectionate: 3, energyLevel: 5, kidFriendly: 4 },
    stats: { lifespan: "12-15 years", weight: "3-5 kg" },
    seoContent: { about: "Active cat.", temperament: "Curious.", careGuide: { grooming: "Minimal.", environment: "Needs space.", summerCare: "Adaptable.", vaccination: "Standard." }, diet: "High protein.", howToSteps: ["Provide toys."], faqs: [{q: "Active?", a: "Very."}] },
    available: true
  },
  {
    id: "c13",
    name: "Turkish Angora",
    slug: "turkish-angora",
    image: "/Cats/Turkish_Angora.jpg",
    description: "Silky white coat and playful personality. Elegant and energetic.",
    priceRange: "₹30,000 - ₹50,000",
    traits: { indoorSuitability: 4, heatTolerance: 3, groomingDifficulty: 3, affectionate: 4, energyLevel: 4, kidFriendly: 4 },
    stats: { lifespan: "12-18 years", weight: "3-5 kg" },
    seoContent: { about: "Elegant cat.", temperament: "Playful.", careGuide: { grooming: "Brush weekly.", environment: "Indoor.", summerCare: "Cool.", vaccination: "Standard." }, diet: "Balanced.", howToSteps: ["Brush hair."], faqs: [{q: "Friendly?", a: "Yes."}] },
    available: true
  },
  {
    id: "c14",
    name: "American Shorthair",
    slug: "american-shorthair",
    image: "/Cats/turkish shorthair.jpg",
    description: "Healthy, adaptable, and friendly. Easy to care for. Great for Indian households.",
    priceRange: "₹20,000 - ₹40,000",
    traits: { indoorSuitability: 5, heatTolerance: 4, groomingDifficulty: 1, affectionate: 4, energyLevel: 3, kidFriendly: 5 },
    stats: { lifespan: "15-20 years", weight: "4-7 kg" },
    seoContent: { about: "Adaptable.", temperament: "Friendly.", careGuide: { grooming: "Minimal.", environment: "Indoor/Outdoor.", summerCare: "Adaptable.", vaccination: "Standard." }, diet: "Balanced.", howToSteps: ["Feed well."], faqs: [{q: "Healthy?", a: "Very."}] },
    available: true
  }
];