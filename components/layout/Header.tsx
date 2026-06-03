"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Dogs", href: "/dogs" },
  { name: "Cats", href: "/cats" },
  { name: "Fish", href: "/fish" },
  { name: "Shop", href: "/shop" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white border border-primary/20">
            <img src="/logo.png" alt="Smart Pet Hub Logo" className="object-contain w-full h-full p-1 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-2xl font-heading font-bold text-primary tracking-tight">Smart Pet Hub</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919557208775"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+91 95572 08775</span>
          </a>
          <Button variant="primary" size="sm" asChild>
            <Link href="/consultation">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-black/5 p-4 flex flex-col gap-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-black/5">
            <Button variant="whatsapp" className="w-full justify-start gap-2" asChild>
              <a href="https://wa.me/919557208775">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button variant="primary" className="w-full justify-start" asChild>
              <Link href="/consultation" onClick={() => setIsMobileMenuOpen(false)}>
                Book Consultation
              </Link>
            </Button>
            <a
              href="tel:+919557208775"
              className="flex items-center gap-2 text-foreground font-medium py-2"
            >
              <Phone className="h-5 w-5 text-primary" />
              +91 95572 08775
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
