import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917376140771"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center btn-gold hover:[&]:btn-gold-hover animate-pulse"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
