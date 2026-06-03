import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle2, ChevronRight, MessageCircle, Star, Calendar, MapPin, Fish } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section - Redesigned for Premium Vibe */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Happy Pets"
            fill
            className="object-cover object-center brightness-[0.65]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/90" />
        </div>
        <StaggerContainer className="container relative z-10 mx-auto px-4 text-center text-white mt-16">
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold tracking-wide uppercase mb-8">
              <Star className="h-4 w-4 text-accent fill-accent" /> Premium Pet Care in Dehradun
            </div>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-balance drop-shadow-2xl leading-tight">
              Where Pets Are <span className="text-accent italic">Family</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg md:text-2xl mb-12 text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md leading-relaxed">
              Find your perfect companion, expert nutrition advice, and premium supplies at Dehradun's most trusted luxury pet destination.
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 shadow-2xl hover:scale-105 transition-transform" asChild>
              <a href="https://wa.me/919557208775">
                <MessageCircle className="mr-2 h-6 w-6" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-white text-primary hover:bg-white/90 shadow-2xl hover:scale-105 transition-transform" asChild>
              <Link href="/consultation">Book Consultation</Link>
            </Button>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 2. Trust Indicators Bar */}
      <section className="bg-white border-b border-black/5 py-6 relative z-20 -mt-10 mx-4 md:mx-auto md:max-w-6xl rounded-2xl shadow-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 text-sm md:text-base font-bold text-foreground/80">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-accent h-6 w-6" /> 500+ Happy Pets</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-accent h-6 w-6" /> 10+ Years Exp</div>
            <div className="flex items-center gap-2 hidden lg:flex"><CheckCircle2 className="text-accent h-6 w-6" /> Dehradun's #1</div>
            <div className="flex items-center gap-2 hidden sm:flex"><CheckCircle2 className="text-accent h-6 w-6" /> Expert Guidance</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="text-accent h-6 w-6" /> 24/7 WhatsApp Support</div>
          </div>
        </div>
      </section>

      {/* 3. Categories Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Find Your Perfect Companion</h2>
            <p className="text-lg text-foreground/70">Explore our wide variety of premium breeds and expert services tailored for your lifestyle in Uttarakhand.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <Link href="/dogs" className="group relative h-[400px] block rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <Image src="https://images.unsplash.com/photo-1593134257782-e89567b7718a?q=80&w=600" alt="Dogs" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold font-heading text-white mb-2">Dogs & Puppies</h3>
                  <span className="text-accent flex items-center font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">Explore Breeds <ChevronRight className="h-5 w-5 ml-1" /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/cats" className="group relative h-[400px] block rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <Image src="https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=600" alt="Cats" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold font-heading text-white mb-2">Cats & Kittens</h3>
                  <span className="text-accent flex items-center font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">Explore Breeds <ChevronRight className="h-5 w-5 ml-1" /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/fish" className="group relative h-[400px] block rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <Image src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=600" alt="Fish" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold font-heading text-white mb-2">Aquariums</h3>
                  <span className="text-accent flex items-center font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">Setup & Care <ChevronRight className="h-5 w-5 ml-1" /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/shop" className="group relative h-[400px] block rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <Image src="https://images.unsplash.com/photo-1601002242132-72013f99052b?q=80&w=600" alt="Accessories" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold font-heading text-white mb-2">Premium Shop</h3>
                  <span className="text-accent flex items-center font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">Shop Now <ChevronRight className="h-5 w-5 ml-1" /></span>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Featured Products (Fixing Image 404s) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Premium Pet Supplies</h2>
            <p className="text-lg text-foreground/70">Top-rated food, medicines, and accessories trusted by Dehradun vets.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Royal Canin Maxi Puppy", brand: "Royal Canin", price: "₹850", img: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=600" },
              { name: "Premium Soft Pet Bed", brand: "Smart Pet Hub", price: "₹1,499", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600" },
              { name: "Persian Cat Dry Food", brand: "Me-O", price: "₹1,250", img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=600" },
            ].map((prod, i) => (
              <StaggerItem key={i}>
                <Card className="group h-full flex flex-col border-none shadow-md hover:shadow-xl transition-all rounded-3xl overflow-hidden">
                  <div className="relative h-72 p-6 bg-background flex items-center justify-center">
                    <Image src={prod.img} alt={prod.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="text-sm font-bold text-accent uppercase tracking-wider mb-2">{prod.brand}</div>
                    <h3 className="text-2xl font-bold mb-3">{prod.name}</h3>
                    <div className="text-2xl font-heading font-bold text-primary mb-8 mt-auto">{prod.price}</div>
                    <Button variant="secondary" className="w-full gap-2 text-sm h-12 font-bold" asChild>
                      <a href={`https://wa.me/919557208775?text=I'd like to order ${prod.name}`}>
                        <MessageCircle className="h-5 w-5" /> WhatsApp to Order
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-12">
            <Button variant="ghost" className="font-bold text-lg" asChild>
              <Link href="/shop">View Full Catalog <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Customer Reviews (Removed broken google-logo) */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Loved by Dehradun</h2>
            <p className="text-lg text-foreground/70">Real stories from local pet parents.</p>
          </FadeIn>
        </div>
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x hide-scrollbar">
          {[
            { name: "Siddharth R.", role: "Owner of Max", review: "Got a beautiful Golden Retriever puppy from Smart Pet Hub. The guidance they provided for a first-time owner was exceptional. Highly recommend!" },
            { name: "Neha S.", role: "Owner of Luna", review: "Their WhatsApp support is incredible. I had questions about my Persian cat's diet at 9 PM and they responded immediately. Best pet shop in Dehradun." },
            { name: "Rahul V.", role: "Aquarium Enthusiast", review: "They set up a massive 4-foot planted tank in my living room. The aquascaping is professional and they do regular maintenance. 5 stars." },
            { name: "Anjali K.", role: "Owner of Leo", review: "Ordered Royal Canin food and it was delivered to Clement Town within 3 hours. Very reliable service." }
          ].map((review, i) => (
            <Card key={i} className="min-w-[350px] max-w-[400px] snap-center shrink-0 p-8 border-none shadow-lg rounded-3xl bg-white">
              <div className="flex gap-1 mb-6 text-accent">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-lg font-medium italic mb-8 text-foreground/80 leading-relaxed">"{review.review}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">{review.name.charAt(0)}</div>
                <div>
                  <div className="font-bold text-lg">{review.name}</div>
                  <div className="text-sm text-foreground/60">{review.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
