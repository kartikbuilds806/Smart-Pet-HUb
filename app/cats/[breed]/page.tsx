import { catsData } from "@/data/cats";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MessageCircle, CheckCircle2, Shield, ThermometerSun, Stethoscope, Home, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import SchemaMarkup, { generateFAQSchema } from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return catsData.map((cat) => ({
    breed: cat.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ breed: string }> }): Promise<Metadata> {
  const p = await params;
  const breed = catsData.find((c) => c.slug === p.breed);
  if (!breed) return {};
  return {
    title: `${breed.name} Kitten in Dehradun — Buy Certified, Health-Checked | Smart Pet Hub`,
    description: `Looking for a healthy ${breed.name} kitten in Dehradun? We offer vet-certified kittens with post-purchase support. WhatsApp us to check availability.`,
  };
}

export default async function CatBreedPage(props: { params: Promise<{ breed: string }> }) {
  const params = await props.params;
  const breed = catsData.find((c) => c.slug === params.breed);
  
  if (!breed) {
    notFound();
  }

  const schemaProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${breed.name} Kitten`,
    "brand": { "@type": "Brand", "name": "Smart Pet Hub" },
    "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": breed.available ? "InStock" : "OutOfStock" },
    "description": breed.description,
    "image": breed.image
  };

  const schemaHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to care for a ${breed.name} in India`,
    "step": breed.seoContent.howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "text": step
    }))
  };

  return (
    <div className="pt-20 bg-background min-h-screen">
      <SchemaMarkup type="Product" data={schemaProduct} />
      <SchemaMarkup type="FAQPage" data={generateFAQSchema(breed.seoContent.faqs)} />
      <SchemaMarkup type="Speakable" data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".direct-answer"] }
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image src={breed.image} alt={breed.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white container mx-auto">
          <BreadcrumbNav items={[
            { label: "Cats", href: "/cats" },
            { label: breed.name, href: `/cats/${breed.slug}` }
          ]} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-block bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Cat Breed</div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-2">{breed.name} Kittens in Dehradun</h1>
              <p className="text-xl text-white/90 max-w-2xl">{breed.description}</p>
            </div>
            <Button variant="whatsapp" size="lg" className="shrink-0 gap-2 text-lg" asChild>
              <a href={`https://wa.me/919557208775?text=Hi, I am interested in bringing home a ${breed.name} kitten. Can you share availability and price?`}>
                <MessageCircle className="h-6 w-6" /> Check Availability
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-2/3 space-y-12">
            
            <section className="direct-answer">
              <h2 className="text-3xl font-heading font-bold mb-4">About the {breed.name} in India</h2>
              <p className="text-foreground/80 text-lg leading-relaxed">{breed.seoContent.about}</p>
            </section>

            <section className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <div className="mb-4">
                <span className="font-bold text-primary block">Pet Owner asks:</span>
                <p className="italic text-foreground/80">"I live in a small flat in Dehradun. Is a {breed.name} good for apartment living?"</p>
              </div>
              <div>
                <span className="font-bold text-accent block">Our Expert says:</span>
                <p className="text-foreground/90">
                  {breed.traits.indoorSuitability > 3 
                    ? `Yes! The ${breed.name} adapts very well to apartment living with a score of ${breed.traits.indoorSuitability}/5. Just ensure your windows have pigeon nets installed for safety.`
                    : `While they can live in an apartment, a ${breed.name} is highly active. You will need to provide lots of vertical space, tall cat trees, and daily interactive play.`
                  }
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Temperament & Personality</h2>
              <p className="text-foreground/80 text-lg leading-relaxed">{breed.seoContent.temperament}</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Care Guide for Indian Conditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-6 flex gap-4">
                    <ThermometerSun className="h-8 w-8 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Summer Care</h3>
                      <p className="text-sm text-foreground/70">{breed.seoContent.careGuide.summerCare}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-6 flex gap-4">
                    <Home className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Environment</h3>
                      <p className="text-sm text-foreground/70">{breed.seoContent.careGuide.environment}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-6 flex gap-4">
                    <Stethoscope className="h-8 w-8 text-red-500 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Vaccinations (India)</h3>
                      <p className="text-sm text-foreground/70">{breed.seoContent.careGuide.vaccination}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-6 flex gap-4">
                    <Activity className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Grooming Routine</h3>
                      <p className="text-sm text-foreground/70">{breed.seoContent.careGuide.grooming}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Diet & Nutrition Guide</h2>
              <p className="text-foreground/80 text-lg leading-relaxed">{breed.seoContent.diet}</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-6">How to Care for a {breed.name} Kitten</h2>
              <ol className="space-y-4 list-decimal list-inside text-foreground/80 text-lg">
                {breed.seoContent.howToSteps.map((step, i) => (
                  <li key={i} className="pl-2">{step}</li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {breed.seoContent.faqs.map((faq, i) => (
                  <details key={i} className="group bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm">
                    <summary className="p-6 font-bold cursor-pointer text-lg list-none flex justify-between items-center">
                      {faq.q}
                      <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 text-foreground/70 leading-relaxed border-t border-black/5 pt-4 faq-answer">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  {breed.available ? (
                    <div className="flex items-center gap-2 text-green-600 font-bold mb-6 bg-green-50 p-3 rounded-lg">
                      <CheckCircle2 className="h-5 w-5" /> Kittens Available Now
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-amber-600 font-bold mb-6 bg-amber-50 p-3 rounded-lg">
                      <CheckCircle2 className="h-5 w-5" /> Pre-book Next Litter
                    </div>
                  )}
                  
                  <div className="space-y-4 mb-6 pb-6 border-b border-black/5">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/60">Estimated Price</span>
                      <span className="font-bold text-lg text-primary">{breed.priceRange}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Lifespan</span>
                      <span className="font-bold">{breed.stats.lifespan}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Adult Weight</span>
                      <span className="font-bold">{breed.stats.weight}</span>
                    </div>
                  </div>

                  <Button variant="whatsapp" className="w-full mb-3 gap-2" asChild>
                    <a href={`https://wa.me/919557208775?text=Hi, I'm interested in the ${breed.name} kitten.`}>
                      <MessageCircle className="h-4 w-4" /> Ask for Photos & Price
                    </a>
                  </Button>
                  <Button variant="primary" className="w-full" asChild>
                    <Link href="/consultation">Book a Breed Consultation</Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="bg-accent/10 border border-accent/20 p-6 rounded-2xl text-center">
                <Shield className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="font-bold font-heading text-lg mb-2">Free First-Time Cat Owner Guide</h3>
                <p className="text-sm text-foreground/70 mb-4">Get our comprehensive guide to raising a cat in an Indian apartment.</p>
                <Button variant="secondary" size="sm" className="w-full" asChild>
                  <a href={`https://wa.me/919557208775?text=Hi, please send me the Free First-Time Cat Owner Guide!`}>
                    Get Guide via WhatsApp
                  </a>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
