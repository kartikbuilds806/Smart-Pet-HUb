import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MessageCircle, MapPin, Truck } from "lucide-react";
import SchemaMarkup, { generateLocalBusinessSchema, generateFAQSchema } from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Shop in Haridwar | Premium Pet Food, Breeds & Accessories | Smart Pet Hub",
  description: "Looking for a trusted pet shop in Haridwar? Smart Pet Hub serves Haridwar with certified breeds, premium food delivery, and expert WhatsApp support.",
};

export default function HaridwarCityPage() {
  const faqs = [
    { q: "Is there a pet shop in Haridwar?", a: "While we are physically located in Dehradun, Smart Pet Hub operates as a premium pet shop for Haridwar residents. We offer same-day delivery for supplies and online consultations for pet owners in Haridwar." },
    { q: "Can I get Royal Canin dog food delivered to Haridwar?", a: "Yes! We regularly dispatch Royal Canin, Farmina N&D, and other premium pet foods to Haridwar (Jwalapur, Kankhal, etc.) via local courier and bus parcel services. Order via WhatsApp." },
    { q: "Do you offer pet consultation services in Haridwar?", a: "Absolutely. We offer complete online pet consultation and breed matching services for families in Haridwar via WhatsApp video and voice calls." }
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Haridwar technically operates out of Dehradun, so we use the Dehradun LocalBusiness schema but we add Haridwar in areaServed. Our generateLocalBusinessSchema already includes Haridwar. */}
      <SchemaMarkup type="LocalBusiness" data={generateLocalBusinessSchema()} />
      <SchemaMarkup type="FAQPage" data={generateFAQSchema(faqs)} />

      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center">
        <Image src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000" alt="Pet Shop Haridwar" fill className="object-cover brightness-50" priority />
        <div className="container relative z-10 px-4 text-white max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 text-sm font-bold border border-white/30">
            <Truck className="h-4 w-4" /> Fast Delivery to Haridwar
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Pet Shop for Haridwar — Premium Food, Breeds & Accessories</h1>
          <p className="text-xl mb-10 text-white/90">Premium pet care delivered from Dehradun right to your doorstep in Haridwar.</p>
          <Button variant="whatsapp" size="lg" className="text-lg gap-2" asChild>
            <a href="https://wa.me/919557208775?text=Hi, I am from Haridwar and would like to place an order/inquiry.">
              <MessageCircle className="h-5 w-5" /> WhatsApp Our Experts
            </a>
          </Button>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none text-foreground/80 text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Serving the Haridwar Pet Community</h2>
          <p>
            Residents of <strong>Jwalapur, Kankhal, and areas near Har Ki Pauri and BHEL</strong> often struggle to find premium pet supplies or vet-certified breeds locally. Smart Pet Hub bridges this gap. Based in nearby Dehradun, we act as the premium pet shop for Haridwar.
          </p>
          <p>
            Whether you need a specialized diet for your Persian cat or want to bring home a certified Golden Retriever puppy, our team provides expert guidance over WhatsApp and ensures safe, fast delivery of products to Haridwar.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">Frequently Asked Questions (Haridwar)</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-background rounded-xl overflow-hidden border border-black/5 shadow-sm">
                <summary className="p-6 font-bold cursor-pointer text-lg list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-foreground/70 leading-relaxed border-t border-black/5 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
