"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle2, MessageCircle, CalendarClock, Stethoscope, Waves, Dog } from "lucide-react";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    phone: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'd like to book a consultation.\n*Type:* ${formData.type}\n*Name:* ${formData.name}\n*Details:* ${formData.details}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919557208775?text=${encoded}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Expert Pet Consultation</h1>
            <p className="text-lg text-foreground/70 mb-8">Not sure which breed fits your lifestyle? Need nutrition advice? Our Dehradun experts are here to guide you.</p>
            
            <div className="space-y-6">
              {[
                { icon: Dog, title: "Breed Matching", desc: "Find the perfect dog or cat breed for your family." },
                { icon: Stethoscope, title: "Nutrition Advice", desc: "Expert guidance on diet and supplements." },
                { icon: Waves, title: "Aquarium Setup", desc: "Consultation for fresh and marine water tanks." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Card className="shadow-xl border-none">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
                  <CalendarClock className="h-6 w-6 text-primary" /> Book Your Slot
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Consultation Type</label>
                    <select 
                      required
                      value={formData.type}
                      onChange={e => setFormData({...formData, type: e.target.value})}
                      className="w-full bg-background border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select an option</option>
                      <option value="Dog Breed Guidance">Dog Breed Guidance</option>
                      <option value="Cat Breed Guidance">Cat Breed Guidance</option>
                      <option value="Pet Nutrition">Pet Nutrition Advice</option>
                      <option value="Aquarium Setup">Aquarium Setup Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-background border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-background border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Any specific questions?</label>
                    <textarea 
                      rows={3}
                      value={formData.details}
                      onChange={e => setFormData({...formData, details: e.target.value})}
                      className="w-full bg-background border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                  </div>
                  <Button variant="whatsapp" className="w-full text-lg h-14" type="submit">
                    <MessageCircle className="h-5 w-5 mr-2" /> Book via WhatsApp
                  </Button>
                  <p className="text-xs text-center text-foreground/50 mt-4">We will reply within 15 minutes during working hours.</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-10">Why book a consultation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <CheckCircle2 className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">Save Time & Money</h3>
              <p className="text-sm text-foreground/70">Avoid costly mistakes by getting the right setup and the right breed from day one.</p>
            </div>
            <div>
              <CheckCircle2 className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">Local Dehradun Context</h3>
              <p className="text-sm text-foreground/70">Our advice factors in Uttarakhand's climate, local vet availability, and apartment rules.</p>
            </div>
            <div>
              <CheckCircle2 className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">Lifetime Support</h3>
              <p className="text-sm text-foreground/70">A consultation is the start of a relationship. We're here for you as your pet grows.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
