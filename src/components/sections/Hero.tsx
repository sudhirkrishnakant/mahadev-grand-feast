import { motion } from "framer-motion";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-catering.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Mahadev Caterers luxury Indian catering setup" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* ornamental glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-gold)" }} />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs tracking-[0.2em] uppercase text-gold mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Kanpur's Premium Caterer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6"
          >
            Premium Catering <br />
            <span className="text-gold-gradient italic">For Every Occasion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
          >
            Making weddings, celebrations and events memorable with exceptional food &amp; service.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm tracking-[0.3em] uppercase text-gold/80 mb-10"
          >
            Quality is our Identity · Trust is our Name
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="btn-gold hover:[&]:btn-gold-hover px-8 py-4 rounded-full inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Contact Now
            </a>
            <a
              href="https://wa.me/917376140771"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 border border-gold/40 text-gold hover:bg-gold/10 transition-colors backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
