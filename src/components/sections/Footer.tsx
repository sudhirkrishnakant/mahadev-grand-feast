import { Phone, MessageCircle, Mail } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/15 pt-16 pb-8" style={{ background: "var(--gradient-royal)" }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
                <span className="font-display text-2xl font-bold text-royal-deep">M</span>
              </div>
              <div>
                <div className="font-display text-2xl text-gold-gradient font-semibold">Mahadev Caterers</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Premium Catering</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">"Quality is our Identity, Trust is our Name"</p>
          </div>

          <div>
            <h4 className="text-gold uppercase text-xs tracking-[0.25em] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 hover:text-gold transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase text-xs tracking-[0.25em] mb-5">Connect</h4>
            <div className="flex gap-3 mb-5">
              <a href="https://wa.me/917376140771" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-full flex items-center justify-center border border-gold/40 text-gold hover:bg-gold hover:text-royal-deep transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="tel:+917376140771" aria-label="Call" className="w-11 h-11 rounded-full flex items-center justify-center border border-gold/40 text-gold hover:bg-gold hover:text-royal-deep transition-all">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:sudhir.krishnakant@gmail.com" aria-label="Email" className="w-11 h-11 rounded-full flex items-center justify-center border border-gold/40 text-gold hover:bg-gold hover:text-royal-deep transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">+91 7376140771</p>
            <p className="text-sm text-muted-foreground">sudhir.krishnakant@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gold/15 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mahadev Caterers · All rights reserved · Kanpur, India
        </div>
      </div>
    </footer>
  );
}
