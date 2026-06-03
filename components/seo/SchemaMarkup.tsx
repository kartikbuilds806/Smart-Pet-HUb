import Head from 'next/head';

type SchemaType = 
  | 'LocalBusiness' 
  | 'FAQPage' 
  | 'Product' 
  | 'BreadcrumbList' 
  | 'Speakable' 
  | 'BlogPosting';

interface SchemaProps {
  type: SchemaType;
  data: any;
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  // We can inject the structured data inside the head or body
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Helper to generate Speakable Schema
export function generateSpeakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": cssSelectors
    }
  };
}

// Helper for FAQ Schema
export function generateFAQSchema(faqs: {q: string, a: string}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

// Helper for Local Business Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PetStore",
    "name": "Smart Pet Hub",
    "description": "Premium pet store in Dehradun offering dogs, cats, fish, aquariums, pet food, medicines and accessories. Expert consultation available.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    },
    "areaServed": ["Dehradun", "Haridwar", "Rishikesh", "Mussoorie", "Uttarakhand"],
    "openingHours": "Mo-Su 10:00-21:00",
    "telephone": "+919557208775",
    "priceRange": "₹₹–₹₹₹"
  };
}
