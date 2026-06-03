import Image from "next/image";
import { CheckCircle2, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <Users className="h-12 w-12 mx-auto mb-6 text-accent" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Smart Pet Hub</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">We are Dehradun's native premium pet destination. We aren't just a shop; we're a lifetime partner for you and your pets.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000" 
              alt="Founder with dog" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-heading font-bold">Our Story</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Smart Pet Hub started with a simple vision: to bring world-class pet care to Dehradun. 
              As pet parents ourselves, we struggled to find a single trusted place for healthy breeds, 
              premium nutrition, and expert advice.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              We realized that buying a pet is an emotional journey, not a transaction. 
              That's why we focus heavily on consultation and education before matching you with a pet.
            </p>
            <div className="pt-4 border-t border-black/10">
              <div className="font-bold text-xl font-heading">Shivansh Aggarwal</div>
              <div className="text-primary font-medium">Founder, Smart Pet Hub</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 text-center mb-20">
          <h2 className="text-3xl font-heading font-bold mb-10">Our Promise to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <CheckCircle2 className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Ethical Sourcing</h3>
              <p className="text-foreground/70">We only work with certified, ethical breeders who prioritize the health and happiness of their animals above all else.</p>
            </div>
            <div>
              <CheckCircle2 className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Health First</h3>
              <p className="text-foreground/70">Every pet undergoes a thorough vet check and comes with a 48-hour health guarantee. We never compromise on well-being.</p>
            </div>
            <div>
              <CheckCircle2 className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Lifetime Guidance</h3>
              <p className="text-foreground/70">From the day you take them home to their senior years, our experts are just a WhatsApp message away.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
