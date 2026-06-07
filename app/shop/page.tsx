"use client";

import { useState } from "react";
import Image from "next/image";
import { productsData } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { MessageCircle, ShoppingBag, ShieldAlert, Check } from "lucide-react";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState<"Food" | "Medicine" | "Accessories">("Food");
  const filteredProducts = productsData.filter(p => p.category === activeTab);

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <section className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ShoppingBag className="h-12 w-12 mx-auto mb-6 text-accent" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Premium Pet Supplies</h1>
          <p className="text-lg text-white/80">Everything your pet needs, delivered locally in Dehradun. Order via WhatsApp for instant support.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-12">
        <BreadcrumbNav items={[ { label: "Shop", href: "/shop" } ]} />

        {/* Tabs */}
        <div className="flex gap-4 border-b border-black/10 overflow-x-auto pb-2">
          <button 
            className={`pb-4 px-4 text-lg font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === "Food" ? "border-primary text-primary" : "border-transparent text-foreground/60 hover:text-foreground"}`}
            onClick={() => setActiveTab("Food")}
          >
            Pet Food
          </button>
          <button 
            className={`pb-4 px-4 text-lg font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === "Medicine" ? "border-primary text-primary" : "border-transparent text-foreground/60 hover:text-foreground"}`}
            onClick={() => setActiveTab("Medicine")}
          >
            Medicines & Supplements
          </button>
          <button 
            className={`pb-4 px-4 text-lg font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === "Accessories" ? "border-primary text-primary" : "border-transparent text-foreground/60 hover:text-foreground"}`}
            onClick={() => setActiveTab("Accessories")}
          >
            Accessories & Toys
          </button>
        </div>

        {activeTab === "Medicine" && (
          <div className="mt-6 bg-amber-50 text-amber-900 p-4 rounded-xl flex gap-3 items-start border border-amber-200">
            <ShieldAlert className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
            <p className="text-sm font-medium">Please consult your vet before administering any medicines or supplements. We may ask for a prescription for certain medications.</p>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const schemaData = {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": product.name,
              "brand": { "@type": "Brand", "name": product.brand },
              "description": product.description,
              "image": product.image
            };

            return (
              <Card key={product.id} className="group flex flex-col relative border-none shadow-sm hover:shadow-md transition-shadow">
                <SchemaMarkup type="Product" data={schemaData} />
                

                <div className="relative h-64 p-6 bg-white border-b border-black/5 flex items-center justify-center rounded-t-xl overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  {product.isPrescription && (
                    <div className="absolute bottom-0 left-0 right-0 z-10 bg-amber-100/95 backdrop-blur-sm text-amber-900 text-xs font-bold py-2 px-3 flex items-center justify-center gap-1.5 border-t border-amber-200">
                      <ShieldAlert className="h-3.5 w-3.5 text-amber-600" />
                      Prescription Required
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6 flex flex-col flex-1 bg-white rounded-b-xl border border-t-0 border-black/5">
                  <div className="text-xs font-bold text-foreground/50 mb-1 tracking-wider uppercase">{product.brand}</div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{product.description}</p>
                  
                  <ul className="mb-6 space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-xs font-medium text-foreground/80 flex items-center gap-2">
                        <Check className="h-3 w-3 text-green-600" /> {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto space-y-4">
                    <Button variant="secondary" className="w-full gap-2 font-bold" asChild>
                      <a href={`https://wa.me/919557208775?text=Hi, I would like to order: ${product.name}. Please confirm availability in Dehradun.`}>
                        <MessageCircle className="h-4 w-4" /> Order via WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
