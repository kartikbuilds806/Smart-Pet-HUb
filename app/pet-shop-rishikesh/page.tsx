import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MessageCircle, MapPin, Truck } from "lucide-react";
import SchemaMarkup, { generateLocalBusinessSchema } from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Shop for Rishikesh | Premium Supplies Delivery | Smart Pet Hub",
  description: "Smart Pet Hub provides premium pet food, accessories, and certified breeds to Rishikesh with fast delivery from our Dehradun store.",
};

export default function RishikeshCityPage() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      <SchemaMarkup type="LocalBusiness" data={generateLocalBusinessSchema()} />

      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center">
        <Image src="https://images.unsplash.com/photo-1544626053-8998ec4ccbc4?q=80&w=2000" alt="Pet Shop Rishikesh" fill className="object-cover brightness-50" priority />
        <div className="container relative z-10 px-4 text-white max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 text-sm font-bold border border-white/30">
            <Truck className="h-4 w-4" /> Fast Delivery to Rishikesh
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Pet Shop for Rishikesh</h1>
          <p className="text-xl mb-10 text-white/90">Uttarakhand's premium pet store, delivering top-tier pet care directly to Rishikesh.</p>
          <Button variant="whatsapp" size="lg" className="text-lg gap-2" asChild>
            <a href="https://wa.me/919557208775?text=Hi, I am from Rishikesh and need some pet supplies.">
              <MessageCircle className="h-5 w-5" /> Chat with Us
            </a>
          </Button>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none text-foreground/80 text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Premium Pet Care in Rishikesh</h2>
          <p>
            For pet owners in Rishikesh looking for premium brands like Royal Canin, Farmina, or seeking to bring home a vet-certified puppy, Smart Pet Hub is your trusted partner. While our physical showroom is located in Dehradun, we service the entire Rishikesh area with fast dispatch and online expert consultations.
          </p>
          <p>
            Whether you run a yoga ashram with friendly street dogs or have a Persian cat in your apartment, our experts are just a WhatsApp message away to help you choose the best nutrition and accessories.
          </p>
        </div>
      </section>
    </div>
  );
}
