import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Smart Pet Hub Dehradun",
  description: "Visit our premium pet store in Dehradun. Get expert advice, premium supplies, and consultation.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/80">We'd love to hear from you. Visit our store or drop us a message on WhatsApp.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mb-20">
        <BreadcrumbNav items={[{ label: "Contact Us", href: "/contact" }]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
            <p className="text-foreground/70 text-lg">Whether you're looking for a specific pet, need nutrition advice, or want to schedule an aquarium setup, our team is ready to help.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-none shadow-sm bg-white">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">WhatsApp Us</h3>
                  <p className="text-sm text-foreground/60 mb-2">Fastest way to reach our experts.</p>
                  <a href="https://wa.me/919557208775" className="text-primary font-bold hover:underline">+91 95572 08775</a>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-white">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-sm text-foreground/60 mb-2">Available during working hours.</p>
                  <a href="tel:+919557208775" className="text-primary font-bold hover:underline">+91 95572 08775</a>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-white sm:col-span-2">
                <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Visit Our Store</h3>
                    <p className="text-foreground/70 mb-4">Smart Pet Hub<br />Rajpur Road, Dehradun<br />Uttarakhand, 248001</p>
                    <div className="flex items-center gap-2 text-sm text-foreground/60 font-medium">
                      <Clock className="h-4 w-4" /> Mon - Sun: 10:00 AM - 9:00 PM
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
              <h3 className="font-bold text-lg mb-2">Need a consultation?</h3>
              <p className="text-foreground/70 text-sm mb-4">Book a dedicated 15-minute slot with our breed experts to find your perfect companion.</p>
              <Button variant="primary" asChild>
                <a href="/consultation">Book Free Consultation</a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] w-full rounded-3xl overflow-hidden shadow-lg border border-black/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110196.53724331005!2d77.93510522079493!3d30.325550293144883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1717524021798!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Smart Pet Hub Dehradun Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
