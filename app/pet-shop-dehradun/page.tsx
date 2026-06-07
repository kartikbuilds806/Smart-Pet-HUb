import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import SchemaMarkup, { generateLocalBusinessSchema, generateFAQSchema } from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Pet Shop in Dehradun | Dogs, Cats & Accessories | Smart Pet Hub",
  description: "Looking for a trusted pet shop in Dehradun? Smart Pet Hub serves Dehradun with certified breeds, premium food, and WhatsApp support. Visit us in Premnagar.",
};

export default function DehradunCityPage() {
  const faqs = [
    { q: "Is there a premium pet shop near Premnagar Dehradun?", a: "Yes! Smart Pet Hub is a premium pet store located in Premnagar, Dehradun. We specialize in certified dog and cat breeds, imported pet food, and expert consultation." },
    { q: "Where can I find fish and aquarium accessories in Dehradun?", a: "Smart Pet Hub in Dehradun offers a complete range of freshwater and marine fish, planted tank setups, and professional aquarium maintenance services across the city." },
    { q: "Which is the best dog breeder in Dehradun?", a: "Rather than visiting unverified breeders, Smart Pet Hub works exclusively with KCI-registered, ethical breeders across India to bring healthy, certified puppies directly to families in Dehradun." },
    { q: "Do you offer home delivery for pet food in Dehradun?", a: "Yes! We offer same-day delivery for premium pet food like Royal Canin and Farmina N&D to all major areas in Dehradun including IT Park, Clement Town, and Mussoorie Road. Just order via WhatsApp." }
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      <SchemaMarkup type="LocalBusiness" data={generateLocalBusinessSchema()} />
      <SchemaMarkup type="FAQPage" data={generateFAQSchema(faqs)} />

      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2000" alt="Pet Shop Dehradun" fill className="object-cover brightness-50" priority />
        <div className="container relative z-10 px-4 text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 text-sm font-bold border border-white/30">
            <MapPin className="h-4 w-4" /> Serving Dehradun & Mussoorie
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 max-w-4xl">Premium Pet Shop in Dehradun — Dogs, Cats, Fish & Accessories</h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl">Dehradun's most trusted destination for healthy pets, expert nutrition advice, and premium supplies.</p>
          <Button variant="whatsapp" size="lg" className="text-lg gap-2" asChild>
            <a href="https://wa.me/919557208775?text=Hi, I am looking for a pet store in Dehradun. Can you help me?">
              <MessageCircle className="h-5 w-5" /> Chat with Dehradun Experts
            </a>
          </Button>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none text-foreground/80">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Why Dehradun Pet Parents Trust Smart Pet Hub</h2>
          <p>
            Located conveniently in <strong>Premnagar</strong> and accessible from <strong>all over Dehradun</strong>, Smart Pet Hub has established itself as the leading premium pet shop in Dehradun. The local pet community in Uttarakhand relies on us not just for supplies, but for genuine, vet-backed advice.
          </p>
          <p>
            Dehradun's unique climate—with its humid monsoons and chilly winters—requires specific care strategies for pets. Whether you're raising a thick-coated Golden Retriever near Mussoorie Road or keeping an indoor Persian Cat in an apartment in Clement Town, our local experts understand exactly what your pet needs to thrive in this region.
          </p>

          <h3 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">Our Services in Dehradun</h3>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-accent shrink-0" /> <span><strong>Certified Breeds:</strong> Health-checked puppies and kittens sourced ethically.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-accent shrink-0" /> <span><strong>Premium Nutrition:</strong> Authorized distributors for Royal Canin, Drools, and Farmina in Dehradun.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-accent shrink-0" /> <span><strong>Aquarium Setup:</strong> Professional aquascaping and maintenance services across the Doon valley.</span></li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">Frequently Asked Questions (Dehradun)</h2>
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
