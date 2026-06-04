import { ChefHat, Users2, Wallet, Clock, ShieldCheck, Smile } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: ChefHat, title: "Premium Quality Food" },
  { icon: Users2, title: "Experienced Team" },
  { icon: Wallet, title: "Affordable Packages" },
  { icon: Clock, title: "Timely Service" },
  { icon: ShieldCheck, title: "Hygienic Preparation" },
  { icon: Smile, title: "100% Customer Satisfaction" },
];

export function WhyUs() {
  return (
    <section id="why" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-gold)" }} />
      </div>
      <div className="container mx-auto px-6 relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-6xl">The <span className="text-gold-gradient italic">Mahadev</span> Promise</h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07}>
              <div className="glass-card rounded-2xl p-6 lg:p-8 flex items-center gap-5 hover:border-gold/60 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-gold)" }}>
                  <it.icon className="w-6 h-6 text-royal-deep" />
                </div>
                <div className="font-display text-lg lg:text-xl font-semibold">{it.title}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
