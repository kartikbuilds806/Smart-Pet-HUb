import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Siddharth R.",
      pet: "Max (Golden Retriever)",
      text: "Got a beautiful Golden Retriever puppy from Smart Pet Hub. The guidance they provided for a first-time owner was exceptional. Highly recommend!",
      rating: 5
    },
    {
      name: "Priya S.",
      pet: "Bella (Persian Cat)",
      text: "I was worried about the Dehradun summer for a Persian cat, but the consultation team gave me perfect advice on grooming and AC requirements. Bella is thriving!",
      rating: 5
    },
    {
      name: "Rahul T.",
      pet: "Custom Aquarium Setup",
      text: "They set up a 4-foot planted aquarium in my clinic's waiting room. The quality of plants and fish is top-notch. It completely changed the vibe of the clinic.",
      rating: 5
    },
    {
      name: "Anjali K.",
      pet: "Rocky (Labrador)",
      text: "Great selection of premium dog food. I always get my Royal Canin from them, and they deliver it to Sahastradhara Road quickly via WhatsApp order.",
      rating: 4
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Customer Reviews</h1>
          <p className="text-lg text-foreground/70">See what pet parents across Dehradun are saying about us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <Card key={i} className="p-2 border-none shadow-sm">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-lg font-medium italic mb-6">"{rev.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {rev.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{rev.name}</div>
                    <div className="text-sm text-foreground/60">{rev.pet}</div>
                  </div>
                  <div className="ml-auto">
                     <span className="text-xs font-bold text-foreground/40 uppercase">Verified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
