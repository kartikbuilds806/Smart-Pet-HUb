export interface DogBreed {
  id: string;
  name: string;
  slug: string;
  image: string;
  group: string;
  description: string;
  priceRange: string;
  traits: {
    energy: number;
    trainability: number;
    grooming: number;
    guarding: number;
    kidsFriendly: number;
    apartmentFriendly: number;
  };
  stats: {
    lifeExpectancy: string;
    weight: string;
    height: string;
  };
  seoContent: {
    about: string;
    temperament: string;
    careGuide: {
      grooming: string;
      exercise: string;
      summerCare: string;
      vaccination: string;
    };
    diet: string;
    howToSteps: string[];
    faqs: {q: string, a: string}[];
  };
  available: boolean;
}

export const dogsData: DogBreed[] = [
  {
    id: "d1",
    name: "Labrador Retriever",
    slug: "labrador-retriever",
    image: "/Dogs/Labrador Retriever.webp",
    group: "Sporting",
    description: "The universally loved family companion. Friendly, outgoing, and high-spirited.",
    priceRange: "₹20,000 - ₹35,000",
    traits: { energy: 5, trainability: 5, grooming: 2, guarding: 3, kidsFriendly: 5, apartmentFriendly: 3 },
    stats: { lifeExpectancy: "10-12 years", weight: "25-36 kg", height: "21-24 inches" },
    available: true,
    seoContent: {
      about: "The Labrador Retriever in India has consistently been one of the most popular breeds, and for good reason. Originally bred as sporting dogs, they have transitioned perfectly into being affectionate family companions. In Dehradun, their adaptable nature makes them perfect for both large homes and active families living in apartments, provided they get enough exercise.",
      temperament: "Are Labradors good with children? Absolutely. They are famous for their patient and protective nature around kids. While they have high energy and love to play fetch, they are incredibly gentle. Their high trainability makes them excellent first-time pets.",
      careGuide: {
        grooming: "In Uttarakhand's climate, a Labrador's double coat will shed significantly twice a year (during spring and autumn). Brushing twice a week is usually sufficient to manage the shedding.",
        exercise: "Dehradun's hilly terrain is perfect for a Lab. They need at least 60-90 minutes of active exercise daily to prevent obesity and destructive behavior.",
        summerCare: "During the Indian summer, avoid walking them on hot tarmac. Keep them indoors during peak afternoon hours and ensure they have access to cool water.",
        vaccination: "Follow a strict vaccination schedule in India against Parvovirus, Distemper, and Leptospirosis, starting at 6 weeks of age."
      },
      diet: "A growing Labrador puppy needs high-quality puppy kibble (like Royal Canin Maxi Puppy or Farmina N&D) divided into 3-4 meals. Avoid Indian street food scraps, onion, garlic, and maida. A protein-rich diet is crucial for their bone development.",
      howToSteps: [
        "Create a safe, dedicated sleeping space for your puppy in a cool area of the house.",
        "Establish a strict potty training schedule, taking them out every 2-3 hours.",
        "Begin basic obedience training (sit, stay, come) from 8 weeks of age.",
        "Socialize them safely with other vaccinated dogs and humans.",
        "Feed measured meals rather than free-feeding to prevent obesity."
      ],
      faqs: [
        { q: "How much does a Labrador puppy cost in Dehradun?", a: "A certified, health-checked Labrador puppy in Dehradun typically costs between ₹20,000 and ₹35,000 depending on the lineage and breeder quality." },
        { q: "Is Labrador suitable for hot Indian weather?", a: "Yes, Labradors adapt reasonably well to Indian summers. However, they need to be kept indoors during peak heat hours and require constant access to fresh water." },
        { q: "What food should I feed my Labrador puppy in India?", a: "Premium large-breed puppy food like Royal Canin Maxi, Farmina N&D, or Arden Grange are highly recommended for Labradors in India." },
        { q: "How often should I groom a Labrador?", a: "Brushing 2-3 times a week is sufficient. During shedding season (spring/autumn), daily brushing helps manage the loose fur." },
        { q: "Is Labrador good for first-time owners in India?", a: "Yes, their eager-to-please nature and high intelligence make them one of the easiest breeds for first-time dog owners to train." },
        { q: "What vaccinations does a Labrador need in India?", a: "They require the DHPPi (Distemper, Hepatitis, Parvovirus, Parainfluenza) core vaccine, Leptospirosis, and Anti-Rabies shots." },
        { q: "How much exercise does a Labrador need per day?", a: "A healthy adult Labrador requires at least 60-90 minutes of brisk walking or active play daily." },
        { q: "Where can I buy a healthy Labrador puppy in Dehradun?", a: "You can find certified, health-checked Labrador Retriever puppies at Smart Pet Hub in Dehradun. WhatsApp us at +919557208775 or book a consultation online." }
      ]
    }
  },
  {
    id: "d2",
    name: "Golden Retriever",
    slug: "golden-retriever",
    image: "/Dogs/Golden_Retriever.jpg",
    group: "Sporting",
    description: "Intelligent, friendly, and devoted. A true family favorite.",
    priceRange: "₹25,000 - ₹45,000",
    traits: { energy: 4, trainability: 5, grooming: 4, guarding: 2, kidsFriendly: 5, apartmentFriendly: 3 },
    stats: { lifeExpectancy: "10-12 years", weight: "25-34 kg", height: "21.5-24 inches" },
    available: true,
    seoContent: {
      about: "The Golden Retriever is synonymous with a loving family dog. Known for their luscious golden coats and perpetually smiling faces, Golden Retrievers in India are highly sought after. In Dehradun, they thrive in the moderate climate and make excellent companions for families with children or other pets.",
      temperament: "Are Golden Retrievers aggressive? Not at all. They are famously terrible guard dogs because they are likely to greet a stranger with a wagging tail. They are highly intelligent, empathetic, and often used as therapy dogs. They need human interaction and shouldn't be left alone for long periods.",
      careGuide: {
        grooming: "Their beautiful golden coat requires significant maintenance. Daily brushing is recommended to prevent matting, especially behind the ears and on the legs.",
        exercise: "They need about an hour of vigorous exercise daily. They love swimming and playing fetch in open spaces.",
        summerCare: "Their thick double coat makes Indian summers challenging. Never shave a Golden Retriever; their coat naturally insulates them. Keep them in AC or cooler rooms.",
        vaccination: "Standard Indian vaccination protocol applies. Ensure tick and flea prevention is strictly followed as their long coats can hide parasites."
      },
      diet: "High-quality dry kibble formulated for large breeds. Golden Retrievers are prone to obesity and joint issues (hip dysplasia), so strict portion control and joint supplements (Omega 3, Glucosamine) are highly recommended.",
      howToSteps: [
        "Brush your Golden Retriever's coat daily using a slicker brush and metal comb.",
        "Feed them at scheduled times; do not leave food out all day.",
        "Provide chew toys to satisfy their natural retriever instinct to carry things.",
        "Check and clean their floppy ears weekly to prevent infections.",
        "Begin socialization early to build their confidence."
      ],
      faqs: [
        { q: "How much does a Golden Retriever puppy cost in Dehradun?", a: "A purebred Golden Retriever puppy in Dehradun typically costs between ₹25,000 and ₹45,000." },
        { q: "Is Golden Retriever suitable for hot Indian weather?", a: "They struggle in extreme heat. In peak Indian summers, they need to be kept indoors in cool, well-ventilated or air-conditioned rooms." },
        { q: "What food should I feed my Golden Retriever in India?", a: "Large breed specific foods from brands like Royal Canin, Orijen, or N&D are best to support their joint health and coat." },
        { q: "How often should I groom a Golden Retriever?", a: "They require daily brushing to prevent severe matting, and professional grooming every 4-6 weeks." },
        { q: "Is Golden Retriever good for first-time owners?", a: "Yes, they are highly eager to please and very trainable, making them perfect for beginners." },
        { q: "What vaccinations does a Golden Retriever need?", a: "They need standard DHPPi, Leptospirosis, and Rabies vaccines, plus regular deworming." },
        { q: "How much exercise does a Golden Retriever need?", a: "At least 1-2 hours of physical and mental exercise daily to prevent boredom and weight gain." },
        { q: "Where can I buy a healthy Golden Retriever puppy in Dehradun?", a: "You can find certified, health-checked Golden Retriever puppies at Smart Pet Hub in Dehradun. WhatsApp us at +919557208775 or book a consultation online." }
      ]
    }
  },
  {
    id: "d3",
    name: "Shih Tzu",
    slug: "shih-tzu",
    image: "/Dogs/shitzu.webp",
    group: "Toy",
    description: "Affectionate, playful, and outgoing. Perfect for apartments.",
    priceRange: "₹25,000 - ₹40,000",
    traits: { energy: 2, trainability: 3, grooming: 5, guarding: 1, kidsFriendly: 4, apartmentFriendly: 5 },
    stats: { lifeExpectancy: "10-18 years", weight: "4-7 kg", height: "9-10.5 inches" },
    available: true,
    seoContent: {
      about: "The Shih Tzu, meaning 'lion dog', is one of the most popular toy breeds in India. In Dehradun, the Shih Tzu is the ultimate apartment dog. They don't need a backyard and are perfectly content sitting on your lap. They were bred to be companions and excel at exactly that.",
      temperament: "Is a Shih Tzu a good family dog? Yes, they are incredibly affectionate and get along well with children and other pets. They are not overly energetic but do have a stubborn streak, which can make house training slightly challenging.",
      careGuide: {
        grooming: "A Shih Tzu requires high maintenance. Their long, flowing coat must be brushed daily to prevent painful mats. Many owners opt for a 'puppy cut' to keep maintenance low.",
        exercise: "Minimal exercise is required. A short 20-minute daily walk is usually enough to keep them healthy and happy.",
        summerCare: "As a brachycephalic (flat-faced) breed, they are highly prone to heatstroke. In Indian summers, they must be kept in air-conditioned environments and should never be walked during the day.",
        vaccination: "Standard vaccinations apply. Pay special attention to their eyes, as their prominent eyes are prone to injury and infection."
      },
      diet: "Small breed specific kibble is necessary as their mouths are tiny. Ensure the food is highly palatable as they can be notoriously picky eaters.",
      howToSteps: [
        "Wipe their face and eyes daily with a damp cloth to prevent tear staining.",
        "Brush their coat daily if kept long, or schedule monthly grooming for a short cut.",
        "Brush their teeth several times a week to prevent severe dental issues.",
        "Keep them entirely indoors during hot summer afternoons.",
        "Use a harness instead of a collar to protect their delicate windpipe."
      ],
      faqs: [
        { q: "How much does a Shih Tzu puppy cost in Dehradun?", a: "A Shih Tzu puppy in Dehradun generally costs between ₹25,000 and ₹40,000 depending on the breeder and coat color." },
        { q: "Is Shih Tzu suitable for hot Indian weather?", a: "No, their flat faces make it hard for them to pant and cool down. They strictly need AC or very cool environments during Indian summers." },
        { q: "What food should I feed my Shih Tzu?", a: "Premium small breed dry food from Royal Canin or Farmina N&D Mini is ideal for their tiny jaws." },
        { q: "How often should I groom a Shih Tzu?", a: "Daily brushing is required if the coat is long. If clipped short, brushing 2-3 times a week is sufficient." },
        { q: "Is Shih Tzu good for first-time owners?", a: "Yes, they are excellent for beginners due to their low exercise needs, though they can be stubborn to potty train." },
        { q: "What vaccinations does a Shih Tzu need?", a: "Standard core vaccines for dogs in India: Parvo, Distemper, Hepatitis, Parainfluenza, and Rabies." },
        { q: "How much exercise does a Shih Tzu need?", a: "A short 15-20 minute walk daily is plenty for this indoor companion breed." },
        { q: "Where can I buy a healthy Shih Tzu puppy in Dehradun?", a: "You can find certified, health-checked Shih Tzu puppies at Smart Pet Hub in Dehradun. WhatsApp us at +919557208775 or book a consultation online." }
      ]
    }
  },
  {
    id: "d4",
    name: "German Shepherd",
    slug: "german-shepherd",
    image: "/Dogs/german shephard.jpg",
    group: "Working",
    description: "Loyal, confident, and courageous. The ultimate guard dog.",
    priceRange: "₹18,000 - ₹35,000",
    traits: { energy: 5, trainability: 5, grooming: 3, guarding: 5, kidsFriendly: 3, apartmentFriendly: 1 },
    stats: { lifeExpectancy: "7-10 years", weight: "22-40 kg", height: "22-26 inches" },
    available: false,
    seoContent: {
      about: "The German Shepherd Dog (GSD) is a symbol of loyalty and protection. In Dehradun, they are highly popular for independent houses and estates. They are exceptionally intelligent and versatile, serving equally well as family protectors and devoted companions.",
      temperament: "Are German Shepherds dangerous? A properly trained and socialized GSD is a gentle, fiercely loyal family dog. However, they are highly protective. Early socialization and firm, consistent training are absolute necessities.",
      careGuide: {
        grooming: "They are heavy shedders (often called 'German Shedders'). Brushing several times a week is necessary. Do not bathe them too often to preserve natural skin oils.",
        exercise: "High exercise needs. They require rigorous physical and mental stimulation daily (1-2 hours) to prevent anxiety and destructive behavior.",
        summerCare: "Provide plenty of shade and water. They adapt better to Dehradun's winters than its summers, so keep them cool during peak heat.",
        vaccination: "Standard protocol. GSDs in India are very prone to Parvovirus as puppies, so complete the vaccination course before taking them outside."
      },
      diet: "High-protein diet formulated for large active breeds. Since they are notoriously prone to Hip Dysplasia, maintaining a lean weight is critical.",
      howToSteps: [
        "Begin rigorous socialization with strangers and other dogs at 8 weeks.",
        "Provide mental puzzles and training sessions daily to engage their smart minds.",
        "Ensure they have a large, secure space to patrol and run.",
        "Never encourage aggressive behavior; their natural guarding instinct will develop on its own.",
        "Feed them from an elevated bowl to help prevent bloat."
      ],
      faqs: [
        { q: "How much does a German Shepherd puppy cost in Dehradun?", a: "A purebred German Shepherd in Dehradun costs between ₹18,000 and ₹35,000, depending on show or working lines." },
        { q: "Is German Shepherd suitable for hot Indian weather?", a: "They can manage, but prefer cooler climates. Ensure they are kept out of direct sun during summer afternoons." },
        { q: "What food should I feed my German Shepherd?", a: "Premium large breed food that supports joint health and digestion, as they have sensitive stomachs." },
        { q: "How often should I groom a German Shepherd?", a: "Brush them at least 3-4 times a week to manage their heavy shedding." },
        { q: "Is German Shepherd good for first-time owners?", a: "No, they require an experienced owner who can provide firm leadership, heavy socialization, and intense training." },
        { q: "What vaccinations does a German Shepherd need?", a: "Strict adherence to the Parvovirus and Distemper protocols, plus Rabies and Leptospirosis." },
        { q: "How much exercise does a German Shepherd need?", a: "At least 1 to 2 hours of intense physical exercise and mental training daily." },
        { q: "Where can I buy a healthy German Shepherd puppy in Dehradun?", a: "You can find certified, health-checked German Shepherd puppies at Smart Pet Hub in Dehradun. WhatsApp us at +919557208775 or book a consultation online." }
      ]
    }
  },
  {
    id: "d5",
    name: "Beagle",
    slug: "beagle",
    image: "/Dogs/beagle.jpg",
    group: "Hound",
    description: "Merry, curious, and friendly. A compact hunting hound.",
    priceRange: "₹15,000 - ₹28,000",
    traits: { energy: 4, trainability: 2, grooming: 1, guarding: 1, kidsFriendly: 5, apartmentFriendly: 4 },
    stats: { lifeExpectancy: "10-15 years", weight: "9-13 kg", height: "13-15 inches" },
    available: true,
    seoContent: {
      about: "The Beagle is a merry and curious hound. In Dehradun, their compact size makes them a popular choice for families in apartments. However, their strong hunting instincts mean they are ruled by their noses and love to follow scents.",
      temperament: "Are Beagles noisy? Yes, they are known to bark and howl (bay). They are incredibly friendly and pack-oriented, making them great with kids but terrible guard dogs. They can be stubborn to train.",
      careGuide: {
        grooming: "Very low maintenance. Their short coat just needs a weekly brush to remove loose hair.",
        exercise: "They need at least an hour of exercise. Because they are scent hounds, they should always be walked on a leash, or they will wander off following a smell.",
        summerCare: "They handle Indian summers fairly well compared to double-coated breeds, but still require standard heat precautions.",
        vaccination: "Standard dog vaccination schedule in India. Ensure tick prevention is maintained as they love sniffing in bushes."
      },
      diet: "Beagles are notorious for overeating and obesity. Strict portion control is mandatory, and human food should be strictly avoided.",
      howToSteps: [
        "Always walk your Beagle on a secure leash; their nose will override their training.",
        "Check and clean their drop ears weekly to prevent severe ear infections.",
        "Provide puzzle toys to stimulate their intelligent, scent-driven minds.",
        "Measure their food strictly to prevent them from becoming overweight.",
        "Ensure your yard or balcony is completely escape-proof."
      ],
      faqs: [
        { q: "How much does a Beagle puppy cost in Dehradun?", a: "A Beagle puppy in Dehradun typically ranges from ₹15,000 to ₹28,000." },
        { q: "Is Beagle suitable for hot Indian weather?", a: "Yes, their short coats allow them to adapt well to the Indian climate, though afternoon heat should be avoided." },
        { q: "What food should I feed my Beagle?", a: "High-quality medium breed kibble. Strict portion control is required as Beagles are highly prone to obesity." },
        { q: "How often should I groom a Beagle?", a: "They are low maintenance; a quick brush once a week and an occasional bath is enough." },
        { q: "Is Beagle good for first-time owners?", a: "They can be challenging due to their stubbornness and vocal nature, but their sweet temperament makes them manageable." },
        { q: "What vaccinations does a Beagle need?", a: "Standard core dog vaccines (Parvo, Distemper, Rabies, etc.) as per Indian veterinary guidelines." },
        { q: "How much exercise does a Beagle need?", a: "About an hour of daily walking, primarily to let them use their nose and tire out their minds." },
        { q: "Where can I buy a healthy Beagle puppy in Dehradun?", a: "You can find certified, health-checked Beagle puppies at Smart Pet Hub in Dehradun. WhatsApp us at +919557208775 or book a consultation online." }
      ]
    }
  },
  {
    id: "d6",
    name: "Rottweiler",
    slug: "rottweiler",
    image: "/Dogs/Rottweiler.jpg",
    group: "Working",
    description: "Strong, loyal, and trainable. Excellent guard dog.",
    priceRange: "₹20,000 - ₹35,000",
    traits: { energy: 4, trainability: 4, grooming: 1, guarding: 5, kidsFriendly: 3, apartmentFriendly: 2 },
    stats: { lifeExpectancy: "9-10 years", weight: "35-60 kg", height: "22-27 inches" },
    seoContent: { about: "Strong guard dog.", temperament: "Loyal.", careGuide: { grooming: "Minimal.", exercise: "High.", summerCare: "Cool.", vaccination: "Standard." }, diet: "High protein.", howToSteps: ["Train early."], faqs: [{q: "Aggressive?", a: "Protective."}] },
    available: true
  },
  {
    id: "d7",
    name: "Pug",
    slug: "pug",
    image: "/Dogs/pug.jpg",
    group: "Toy",
    description: "Small, affectionate, and low-energy. Great for city living.",
    priceRange: "₹15,000 - ₹25,000",
    traits: { energy: 2, trainability: 3, grooming: 2, guarding: 1, kidsFriendly: 5, apartmentFriendly: 5 },
    stats: { lifeExpectancy: "13-15 years", weight: "6-8 kg", height: "10-13 inches" },
    seoContent: { about: "Friendly companion.", temperament: "Loving.", careGuide: { grooming: "Regular.", exercise: "Low.", summerCare: "AC needed.", vaccination: "Standard." }, diet: "Diet control.", howToSteps: ["Clean wrinkles."], faqs: [{q: "Good in apartments?", a: "Yes."}] },
    available: true
  },
  {
    id: "d8",
    name: "Doberman Pinscher",
    slug: "doberman",
    image: "/Dogs/daburman.avif",
    group: "Working",
    description: "Alert, fearless, and loyal. Popular as a guard and family dog.",
    priceRange: "₹15,000 - ₹30,000",
    traits: { energy: 5, trainability: 5, grooming: 1, guarding: 5, kidsFriendly: 4, apartmentFriendly: 2 },
    stats: { lifeExpectancy: "10-12 years", weight: "27-45 kg", height: "24-28 inches" },
    seoContent: { about: "Sleek guard dog.", temperament: "Alert.", careGuide: { grooming: "Minimal.", exercise: "High.", summerCare: "Adaptable.", vaccination: "Standard." }, diet: "High energy.", howToSteps: ["Socialize early."], faqs: [{q: "Good guard?", a: "Excellent."}] },
    available: true
  },
  {
    id: "d9",
    name: "Dachshund",
    slug: "dachshund",
    image: "/Dogs/dachshund-dog.webp",
    group: "Hound",
    description: "Playful and curious with a unique long body. Great for small homes.",
    priceRange: "₹10,000 - ₹20,000",
    traits: { energy: 3, trainability: 3, grooming: 1, guarding: 2, kidsFriendly: 4, apartmentFriendly: 5 },
    stats: { lifeExpectancy: "12-16 years", weight: "7-14 kg", height: "8-9 inches" },
    seoContent: { about: "Long-bodied dog.", temperament: "Playful.", careGuide: { grooming: "Minimal.", exercise: "Moderate.", summerCare: "Adaptable.", vaccination: "Standard." }, diet: "Weight control.", howToSteps: ["Protect back."], faqs: [{q: "Good for apartments?", a: "Yes."}] },
    available: true
  },
  {
    id: "d10",
    name: "Boxer",
    slug: "boxer",
    image: "/Dogs/boxer.jpg",
    group: "Working",
    description: "Energetic, fun-loving, and protective. Great with children.",
    priceRange: "₹20,000 - ₹35,000",
    traits: { energy: 5, trainability: 4, grooming: 1, guarding: 4, kidsFriendly: 5, apartmentFriendly: 3 },
    stats: { lifeExpectancy: "10-12 years", weight: "25-32 kg", height: "21-25 inches" },
    seoContent: { about: "Playful guard dog.", temperament: "Fun-loving.", careGuide: { grooming: "Minimal.", exercise: "High.", summerCare: "Avoid extreme heat.", vaccination: "Standard." }, diet: "High protein.", howToSteps: ["Train consistently."], faqs: [{q: "Good with kids?", a: "Very."}] },
    available: true
  },
  {
    id: "d11",
    name: "Indian Spitz",
    slug: "indian-spitz",
    image: "/Dogs/Indian Spitz.jpeg",
    group: "Companion",
    description: "Looks like a small Pomeranian. Native breed, very adaptable to Indian climate.",
    priceRange: "₹5,000 - ₹10,000",
    traits: { energy: 4, trainability: 3, grooming: 3, guarding: 3, kidsFriendly: 4, apartmentFriendly: 5 },
    stats: { lifeExpectancy: "10-14 years", weight: "5-7 kg", height: "10-14 inches" },
    seoContent: { about: "Native companion.", temperament: "Alert.", careGuide: { grooming: "Regular brushing.", exercise: "Moderate.", summerCare: "Adaptable.", vaccination: "Standard." }, diet: "Balanced.", howToSteps: ["Socialize well."], faqs: [{q: "Adaptable?", a: "Very."}] },
    available: true
  },
  {
    id: "d12",
    name: "Rajapalayam",
    slug: "rajapalayam",
    image: "/Dogs/Rajapalayam_Dog.webp",
    group: "Hound",
    description: "Elegant native sighthound from Tamil Nadu. Loyal and protective.",
    priceRange: "₹10,000 - ₹20,000",
    traits: { energy: 5, trainability: 3, grooming: 1, guarding: 5, kidsFriendly: 3, apartmentFriendly: 1 },
    stats: { lifeExpectancy: "10-12 years", weight: "22-25 kg", height: "25-30 inches" },
    seoContent: { about: "Native sighthound.", temperament: "Loyal.", careGuide: { grooming: "Minimal.", exercise: "High.", summerCare: "Adaptable.", vaccination: "Standard." }, diet: "High energy.", howToSteps: ["Train firmly."], faqs: [{q: "Good guard?", a: "Yes."}] },
    available: true
  },
  {
    id: "d13",
    name: "Great Dane",
    slug: "great-dane",
    image: "/Dogs/Great_Dane.webp",
    group: "Working",
    description: "Massive but gentle giants. Growing in popularity among Indian pet lovers.",
    priceRange: "₹20,000 - ₹40,000",
    traits: { energy: 3, trainability: 3, grooming: 1, guarding: 4, kidsFriendly: 4, apartmentFriendly: 2 },
    stats: { lifeExpectancy: "7-10 years", weight: "50-80 kg", height: "28-32 inches" },
    seoContent: { about: "Gentle giant.", temperament: "Gentle.", careGuide: { grooming: "Minimal.", exercise: "Moderate.", summerCare: "Avoid heat.", vaccination: "Standard." }, diet: "Large breed.", howToSteps: ["Socialize early."], faqs: [{q: "Big?", a: "Huge."}] },
    available: true
  },
  {
    id: "d14",
    name: "Cocker Spaniel",
    slug: "cocker-spaniel",
    image: "/Dogs/cocker spanial.jpg",
    group: "Sporting",
    description: "Sweet, gentle, and easy-going. Great family and apartment dog.",
    priceRange: "₹15,000 - ₹25,000",
    traits: { energy: 4, trainability: 4, grooming: 4, guarding: 2, kidsFriendly: 5, apartmentFriendly: 4 },
    stats: { lifeExpectancy: "10-14 years", weight: "12-15 kg", height: "14-15 inches" },
    seoContent: { about: "Sweet companion.", temperament: "Gentle.", careGuide: { grooming: "High.", exercise: "Moderate.", summerCare: "Cool.", vaccination: "Standard." }, diet: "Balanced.", howToSteps: ["Groom regularly."], faqs: [{q: "Good family dog?", a: "Yes."}] },
    available: true
  }
];