"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { catsData } from "@/data/cats";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Search, Filter } from "lucide-react";

export default function CatsDirectory() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"All" | "Indoor" | "Active">("All");

  const filteredCats = useMemo(() => {
    return catsData.filter((cat) => {
      const matchesSearch = cat.name.toLowerCase().includes(search.toLowerCase());
      
      let matchesType = true;
      if (typeFilter === "Indoor") matchesType = cat.traits.indoorSuitability >= 4;
      if (typeFilter === "Active") matchesType = cat.traits.energyLevel >= 4;

      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <section className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Cat Breed Directory</h1>
          <p className="text-lg text-white/80">Explore our premium cat breeds. Find the perfect feline friend for your home or apartment.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-12">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Search breeds..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background rounded-lg border-none focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <Button variant={typeFilter === "All" ? "primary" : "secondary"} size="sm" className="shrink-0" onClick={() => setTypeFilter("All")}>All Breeds</Button>
            <Button variant={typeFilter === "Indoor" ? "primary" : "secondary"} size="sm" className="shrink-0" onClick={() => setTypeFilter("Indoor")}>Best for Indoors</Button>
            <Button variant={typeFilter === "Active" ? "primary" : "secondary"} size="sm" className="shrink-0" onClick={() => setTypeFilter("Active")}>Highly Active</Button>
            <Button variant="ghost" size="sm" className="shrink-0"><Filter className="h-4 w-4 mr-2" /> More Filters</Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCats.map((breed) => (
            <Card key={breed.id} className="flex flex-col group hover:shadow-md transition-shadow">
              <Link href={`/cats/${breed.slug}`} className="relative h-56 w-full overflow-hidden block">
                <Image 
                  src={breed.image} 
                  alt={breed.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {!breed.available && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">Pre-book</div>
                )}
              </Link>
              <CardContent className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-heading">
                    <Link href={`/cats/${breed.slug}`} className="hover:text-primary transition-colors">
                      {breed.name}
                    </Link>
                  </h3>
                </div>
                <div className="flex gap-2 mb-4 flex-wrap text-xs">
                  <span className="px-3 py-1.5 bg-background rounded-lg text-foreground/70 font-medium">Weight: {breed.stats.weight}</span>
                  <span className="px-3 py-1.5 bg-background rounded-lg text-foreground/70 font-medium">Indoor: {breed.traits.indoorSuitability}/5</span>
                </div>
                <Button variant="whatsapp" className="w-full mt-auto gap-2" asChild>
                  <a href={`https://wa.me/919557208775?text=Hi, I want to inquire about the ${breed.name} kitten.`}>
                    <MessageCircle className="h-4 w-4 shrink-0" /> <span className="truncate">Ask About Breed</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
          {filteredCats.length === 0 && (
            <div className="col-span-full text-center py-12 text-foreground/60">
              No cat breeds found matching your filters.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
