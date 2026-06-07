import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle2, MessageCircle, Waves, Info } from "lucide-react";

export default function FishAquariumsPage() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image 
          src="https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=2000" 
          alt="Aquarium" 
          fill 
          className="object-cover brightness-50" 
          priority 
        />
        <div className="container relative z-10 px-4 text-center text-white max-w-4xl">
          <Waves className="h-12 w-12 mx-auto mb-6 text-accent opacity-80" />
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Fish & Aquariums</h1>
          <p className="text-xl md:text-2xl mb-10 text-white/80">Expert aquatic setups, rare fish species, and professional maintenance services in Dehradun.</p>
          <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="#setup-packages">View Setup Packages</Link>
          </Button>
        </div>
      </section>

      {/* Fish Species Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Premium Aquatic Life</h2>
            <p className="text-lg text-foreground/70">Healthy, quarantined freshwater and marine species.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Neon Tetras", img: "/fish/tetra.jpg" },
              { name: "Discus Fish", img: "/fish/discus.jpg" },
              { name: "Betta Fish", img: "/fish/betta.jpg" },
              { name: "Clownfish", img: "/fish/clownfish.jpg" }
            ].map((fish, i) => (
              <div key={i} className="group relative h-48 md:h-64 rounded-xl overflow-hidden cursor-pointer">
                <Image src={fish.img} alt={fish.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">{fish.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="whatsapp" asChild>
              <a href="https://wa.me/919557208775?text=Hi, what fish species do you currently have in stock?">
                <MessageCircle className="h-4 w-4 mr-2" /> Check Current Fish Stock
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Aquarium Setup Service Cards */}
      <section id="setup-packages" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Aquarium Setup Packages</h2>
            <p className="text-lg text-foreground/70">From desktop nano-tanks to massive living room displays, we do it all.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Starter Nano Tank", size: "1-2 Feet", ideal: "Desktops, Kids Room", price: "From ₹4,999", desc: "A perfect low-maintenance intro to fishkeeping." },
              { title: "Home Ecosystem", size: "3-4 Feet", ideal: "Living Rooms", price: "From ₹15,999", desc: "Beautifully aquascaped planted tanks that form the centerpiece of your home." },
              { title: "Office / Commercial", size: "Custom", ideal: "Receptions, Clinics", price: "Custom Quote", desc: "Large scale displays designed to wow clients and reduce stress." }
            ].map((pkg, i) => (
              <Card key={i} className="relative overflow-hidden group">
                <div className="h-2 bg-primary w-full absolute top-0 left-0" />
                <CardContent className="p-8 pt-10">
                  <h3 className="text-2xl font-bold font-heading mb-2">{pkg.title}</h3>
                  <div className="text-xl text-primary font-bold mb-6">{pkg.price}</div>
                  <p className="text-foreground/70 mb-6 h-12">{pkg.desc}</p>
                  
                  <ul className="space-y-3 mb-8 text-sm">
                    <li className="flex justify-between border-b border-black/5 pb-2">
                      <span className="text-foreground/60">Tank Size</span>
                      <span className="font-semibold">{pkg.size}</span>
                    </li>
                    <li className="flex justify-between border-b border-black/5 pb-2">
                      <span className="text-foreground/60">Ideal For</span>
                      <span className="font-semibold">{pkg.ideal}</span>
                    </li>
                  </ul>
                  
                  <Button variant="whatsapp" className="w-full gap-2" asChild>
                    <a href={`https://wa.me/919557208775?text=I am interested in the ${pkg.title} setup package.`}>
                      <MessageCircle className="h-4 w-4" /> Inquire About Setup
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Service Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Professional Maintenance</h2>
              <p className="text-lg text-foreground/70 mb-8">Enjoy the beauty of your aquarium without the hassle. Our experts will keep your water crystal clear and your fish healthy.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" /> 
                  <div>
                    <span className="font-bold block">Water Testing & Changing</span>
                    <span className="text-sm text-foreground/70">We test pH, Ammonia, Nitrates and perform safe water changes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" /> 
                  <div>
                    <span className="font-bold block">Equipment Cleaning</span>
                    <span className="text-sm text-foreground/70">Filter media replacement, glass cleaning, and pump maintenance.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" /> 
                  <div>
                    <span className="font-bold block">Health Check</span>
                    <span className="text-sm text-foreground/70">Visual inspection of all fish and plant life.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 w-full bg-primary text-white p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Info className="h-6 w-6" /> Book Aquarium Consultation
              </h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent" />
                <input type="tel" placeholder="WhatsApp Number" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent" />
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent [&>option]:text-foreground">
                  <option value="">Select Service Needed</option>
                  <option value="new">New Aquarium Setup</option>
                  <option value="maintenance">Monthly Maintenance Plan</option>
                  <option value="upgrade">Upgrade Existing Tank</option>
                </select>
                <textarea placeholder="Tank size / location details..." rows={3} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none"></textarea>
                <Button variant="primary" className="w-full bg-accent hover:bg-accent/90 text-primary font-bold text-lg mt-2">Send Request</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
