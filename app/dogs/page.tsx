"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { dogsData } from "@/data/dogs";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Search, Filter } from "lucide-react";

export default function DogsDirectory() {
  const [search, setSearch] = useState("");
  const [sizeFilter, setSizeFilter] = useState<"All" | "Small" | "Medium" | "Large">("All");

  const filteredDogs = useMemo(() => {
    return dogsData.filter((dog) => {
      const matchesSearch = dog.name.toLowerCase().includes(search.toLowerCase());
      
      let matchesSize = true;
      if (sizeFilter !== "All") {
        // Simple logic based on weight to determine size for filtering
        const weight = parseInt(dog.stats.weight.split('-')[0]) || 0;
        if (sizeFilter === "Small") matchesSize = weight < 10;
        else if (sizeFilter === "Medium") matchesSize = weight >= 10 && weight < 25;
        else if (sizeFilter === "Large") matchesSize = weight >= 25;
      }

      return matchesSearch && matchesSize;
    });
  }, [search, sizeFilter]);

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <section className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Dog Breed Directory</h1>
          <p className="text-lg text-white/80">Explore our wide variety of premium dogs and puppies. Find the perfect match for your family and lifestyle.</p>
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
            <Button variant={sizeFilter === "All" ? "primary" : "secondary"} size="sm" className="shrink-0" onClick={() => setSizeFilter("All")}>All Sizes</Button>
            <Button variant={sizeFilter === "Small" ? "primary" : "secondary"} size="sm" className="shrink-0" onClick={() => setSizeFilter("Small")}>Small</Button>
            <Button variant={sizeFilter === "Medium" ? "primary" : "secondary"} size="sm" className="shrink-0" onClick={() => setSizeFilter("Medium")}>Medium</Button>
            <Button variant={sizeFilter === "Large" ? "primary" : "secondary"} size="sm" className="shrink-0" onClick={() => setSizeFilter("Large")}>Large</Button>
            <Button variant="ghost" size="sm" className="shrink-0"><Filter className="h-4 w-4 mr-2" /> More Filters</Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDogs.map((breed) => (
            <Card key={breed.id} className="flex flex-col group hover:shadow-md transition-shadow">
              <Link href={`/dogs/${breed.slug}`} className="relative h-56 w-full overflow-hidden block">
                <Image 
                  src={breed.image} 
                  alt={breed.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {!breed.available && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">Out of Stock</div>
                )}
              </Link>
              <CardContent className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-heading">
                    <Link href={`/dogs/${breed.slug}`} className="hover:text-primary transition-colors">
                      {breed.name}
                    </Link>
                  </h3>
                </div>
                <div className="flex gap-2 mb-4 flex-wrap text-xs">
                  <span className="px-3 py-1.5 bg-background rounded-lg text-foreground/70 font-medium">Size: {breed.stats.weight}</span>
                  <span className="px-3 py-1.5 bg-background rounded-lg text-foreground/70 font-medium">Energy: {breed.traits.energy}/5</span>
                </div>
                <Button variant="whatsapp" className="w-full mt-auto gap-2" asChild>
                  <a href={`https://wa.me/919557208775?text=Hi, I want to inquire about the ${breed.name} breed.`}>
                    <MessageCircle className="h-4 w-4 shrink-0" /> <span className="truncate">Ask About Breed</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
          {filteredDogs.length === 0 && (
            <div className="col-span-full text-center py-12 text-foreground/60">
              No breeds found matching your filters.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
