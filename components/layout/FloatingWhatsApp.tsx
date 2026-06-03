"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingWhatsApp() {
  const phoneNumber = "+919557208775";
  const message = encodeURIComponent("Hi, I visited your website and have a query.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <div className="hidden md:flex bg-white px-4 py-2 rounded-full shadow-lg border border-black/5 text-sm font-medium text-foreground">
        Need help? Chat with us!
      </div>
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <span className="absolute -inset-2 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-110 group-hover:bg-[#20b858]">
          <MessageCircle className="h-7 w-7 text-white fill-current" />
        </div>
      </Link>
    </motion.div>
  );
}
