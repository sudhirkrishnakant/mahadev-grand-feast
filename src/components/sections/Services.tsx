import { Heart, Briefcase, Cake, Flame, Tent, PartyPopper } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  { icon: Heart, title: "Wedding Catering", desc: "Lavish multi-cuisine spreads crafted for your big day." },
  { icon: Briefcase, title: "Corporate Catering", desc: "Refined menus for conferences, meetings and launches." },
  { icon: Cake, title: "Birthday Catering", desc: "Themed, joyful menus for birthdays of every age." },
  { icon: Flame, title: "Religious Events", desc: "Pure sattvik bhog and traditional thalis for pujas." },
  { icon: Tent, title: "Outdoor Catering", desc: "Full-service setup at any venue across Kanpur." },
  { icon: PartyPopper, title: "Special Event Catering", desc: "Anniversaries, reunions and bespoke celebrations." },
];

export function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-gold)" }} />
      </div>
      <div className="container mx-auto px-6 relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">What We Offer</p>
          <h2 className="font-display text-4xl md:text-6xl">Our <span className="text-gold-gradient italic">Services</span></h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-8 h-full group relative overflow-hidden hover:border-gold/60 transition-all duration-500">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: "var(--gradient-gold)" }} />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-gold/30 bg-gold/5 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                    <s.icon className="w-8 h-8 text-gold group-hover:text-royal-deep transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
