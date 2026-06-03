import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, User, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Care Blog | Expert Tips for Indian Pet Owners | Smart Pet Hub",
  description: "Read our comprehensive guides on dog breeds, pet nutrition, and aquarium setups tailored specifically for Indian climates.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "Best Dog Breeds for Dehradun's Climate — A Complete 2026 Guide",
      excerpt: "The best dog breeds for Dehradun's climate are Golden Retriever, Labrador, Beagle, and Shih Tzu. These breeds adapt well to Uttarakhand's cool winters and mild summers without requiring extreme grooming or heat management.",
      category: "Local Guides",
      date: "May 15, 2026",
      author: "Shivansh Aggarwal",
      img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600"
    },
    {
      title: "Labrador vs Golden Retriever — Which Is Better for Indian Families?",
      excerpt: "Both breeds are excellent for Indian families, but Labradors are slightly better suited for active families and require less grooming, whereas Golden Retrievers are better for families wanting a gentler, heavily coated companion.",
      category: "Breed Comparison",
      date: "May 10, 2026",
      author: "Shivansh Aggarwal",
      img: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600"
    },
    {
      title: "Complete Dog Vaccination Schedule for India 2026",
      excerpt: "In India, your dog must receive the DHPPi core vaccine, Leptospirosis, and Anti-Rabies. Vaccinations should start at 6 weeks of age with boosters every 3-4 weeks until 16 weeks of age.",
      category: "Health & Care",
      date: "May 2, 2026",
      author: "Dr. Sameer",
      img: "https://images.unsplash.com/photo-1589924691995-400f7362ea41?q=80&w=600"
    }
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }]} />
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Pet Care Expert Blog</h1>
          <p className="text-lg text-foreground/70">Authoritative guides and answers tailored for the Indian pet parent.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => {
            const schemaData = {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "image": post.img,
              "author": { "@type": "Person", "name": post.author },
              "datePublished": post.date,
              "description": post.excerpt
            };

            return (
              <Card key={i} className="group overflow-hidden flex flex-col cursor-pointer border-none shadow-sm hover:shadow-md transition-shadow">
                <SchemaMarkup type="BlogPosting" data={schemaData} />
                <div className="relative h-60 overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1 bg-white">
                  <div className="flex justify-between items-center text-xs text-foreground/50 mb-4 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                  {/* Direct Answer / AI Overview snippet */}
                  <div className="text-foreground/80 mb-6 flex-1 text-sm leading-relaxed border-l-4 border-primary pl-4 bg-primary/5 py-2">
                    {post.excerpt}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
                    <span className="text-primary font-bold text-sm flex items-center">Read Article <ChevronRight className="h-4 w-4 ml-1" /></span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 bg-primary text-white p-10 rounded-3xl text-center max-w-4xl mx-auto shadow-xl">
          <h2 className="text-3xl font-heading font-bold mb-4">Need Personalized Advice?</h2>
          <p className="mb-8 text-white/80 text-lg">Our experts are available to answer your specific questions regarding breeds, nutrition, and care.</p>
          <Button variant="whatsapp" size="lg" className="text-lg gap-2" asChild>
            <a href="https://wa.me/919557208775?text=Hi, I read an article on your blog and have some follow-up questions.">
              <MessageCircle className="h-5 w-5" /> Chat with an Expert
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
