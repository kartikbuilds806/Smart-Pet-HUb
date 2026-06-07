import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-1">
                <img src="/logo.png" alt="Smart Pet Hub" className="object-contain w-full h-full" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Smart Pet Hub</h3>
            </div>
            <p className="text-white/80 mb-6 text-balance">
              Dehradun's most trusted premium pet destination. Where pets are family, and expert care is guaranteed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/dogs" className="hover:text-white transition-colors">Dog Breeds</Link></li>
              <li><Link href="/cats" className="hover:text-white transition-colors">Cat Breeds</Link></li>
              <li><Link href="/fish" className="hover:text-white transition-colors">Fish & Aquariums</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Shop Products</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Pet Care Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4">Customer Service</h4>
            <ul className="space-y-3 text-white/80">
              <li><Link href="/consultation" className="hover:text-white transition-colors">Book Consultation</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <span>Premnagar, Dehradun, Uttarakhand, 248007</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a href="tel:+919557208775" className="hover:text-white transition-colors">+91 95572 08775</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 shrink-0 text-accent" />
                <a href="https://wa.me/919557208775" className="hover:text-white transition-colors">WhatsApp Support</a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/5">
              <p className="font-medium text-white mb-1">Working Hours</p>
              <p className="text-sm text-white/80">Mon - Sun: 10:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Smart Pet Hub. All rights reserved.</p>
          <p>Designed with love in Dehradun</p>
        </div>
      </div>
    </footer>
  );
}
