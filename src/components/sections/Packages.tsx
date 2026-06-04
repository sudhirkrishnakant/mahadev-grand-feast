import { Check, Crown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const pkgs = [
  {
    name: "Silver Plate",
    price: "₹500 – ₹800",
    features: ["Welcome Drinks", "5+ Starters", "Indian Main Course", "Dessert Counter", "Trained Staff"],
    featured: false,
  },
  {
    name: "Golden Plate",
    price: "₹800 – ₹1200",
    features: ["Premium Welcome Drinks", "8+ Starters", "Multi-cuisine Spread", "Live Chaat Counter", "Premium Desserts", "Uniformed Staff"],
    featured: true,
  },
  {
    name: "Platinum Plate",
    price: "₹1200 – ₹1800",
    features: ["Mocktail & Juice Bar", "12+ Starters", "Global Cuisine Menu", "Live Counters", "Artisan Dessert Bar", "Premium Decor Setup", "Captain-led Service"],
    featured: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-28 relative">
      <div className="container mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-6xl">Our <span className="text-gold-gradient italic">Packages</span></h2>
          <p className="text-muted-foreground mt-4">Curated pricing tiers to suit every celebration.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pkgs.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`relative rounded-3xl p-8 h-full transition-all duration-500 hover:-translate-y-3 ${
                  p.featured ? "border-2" : "glass-card"
                }`}
                style={
                  p.featured
                    ? { background: "var(--gradient-royal)", borderColor: "oklch(0.82 0.14 85)", boxShadow: "var(--shadow-gold)" }
                    : undefined
                }
              >
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 btn-gold px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" /> RECOMMENDED
                  </div>
                )}
                <h3 className="font-display text-3xl mb-2">{p.name}</h3>
                <div className="text-4xl font-display text-gold-gradient mb-2">{p.price}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Per Plate</div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/917376140771"
                  target="_blank"
                  rel="noreferrer"
                  className={`block text-center px-6 py-3 rounded-full transition-all ${
                    p.featured ? "btn-gold hover:[&]:btn-gold-hover" : "border border-gold/40 text-gold hover:bg-gold/10"
                  }`}
                >
                  Enquire Now
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
