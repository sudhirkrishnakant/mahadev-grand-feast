import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const actions = [
  { icon: Phone, label: "Call Now", value: "+91 7376140771", href: "tel:+917376140771" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 7376140771", href: "https://wa.me/917376140771" },
  { icon: Mail, label: "Email Us", value: "sudhir.krishnakant@gmail.com", href: "mailto:sudhir.krishnakant@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-6xl">Let's Plan Your <span className="text-gold-gradient italic">Event</span></h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {actions.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.1}>
              <a href={a.href} target={a.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                 className="glass-card rounded-2xl p-8 block text-center hover:-translate-y-2 transition-transform duration-500 group h-full">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-gold)" }}>
                  <a.icon className="w-7 h-7 text-royal-deep" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{a.label}</div>
                <div className="text-foreground/90 break-words">{a.value}</div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass-card rounded-3xl p-8 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-gold)" }}>
              <MapPin className="w-6 h-6 text-royal-deep" />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Visit Us</div>
              <p className="font-display text-2xl mb-1">Mahadev Caterers</p>
              <p className="text-muted-foreground">
                117/232 N Block Kakadeo OM chaurah,<br />
                Kanpur, Uttar Pradesh – 208025
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
