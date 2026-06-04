import { Award, UtensilsCrossed, Users, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const cards = [
  { icon: Award, title: "15+ Years Experience", desc: "A legacy of excellence in catering across Kanpur." },
  { icon: UtensilsCrossed, title: "Quality Food", desc: "Fresh ingredients, authentic flavors, immaculate hygiene." },
  { icon: Users, title: "Professional Staff", desc: "Trained, courteous and uniformed serving team." },
  { icon: CalendarCheck, title: "Event Management", desc: "End-to-end planning so you can enjoy the moment." },
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-6xl mb-6">About <span className="text-gold-gradient italic">Mahadev Caterers</span></h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Mahadev Caterers is a trusted catering service provider based in Kanpur, offering premium catering
            solutions for weddings, corporate events, religious functions, birthdays and family celebrations. Our
            commitment to quality food, hygiene, presentation and customer satisfaction makes every event memorable.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 h-full hover:-translate-y-2 transition-transform duration-500 group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-gold)" }}>
                  <c.icon className="w-7 h-7 text-royal-deep" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gold-soft">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
