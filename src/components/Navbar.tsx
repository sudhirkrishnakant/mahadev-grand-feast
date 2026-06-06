import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-18 py-4">
        <a href="#home" className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-0.5">
            <img src="/mahadev-logo.png" alt="Mahadev" className="w-full h-full object-contain rounded-full" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold text-gold-gradient">Mahadev</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Caterers</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-gold transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <a href="tel:+917376140771" className="hidden lg:inline-flex btn-gold hover:[&]:btn-gold-hover px-5 py-2.5 rounded-full text-sm">
          Call Now
        </a>

        <button className="lg:hidden text-gold" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden glass-card border-t border-gold/20"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/90 hover:text-gold">
                {l.label}
              </a>
            ))}
            <a href="tel:+917376140771" className="btn-gold px-5 py-2.5 rounded-full text-sm text-center">Call Now</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
