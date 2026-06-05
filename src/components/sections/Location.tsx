import { Reveal } from "@/components/Reveal";

export function Location() {
  const query = encodeURIComponent("117/232 N Block, Kakadeo, OM Chaurah, Kanpur, Uttar Pradesh 208025");
  return (
    <section id="location" className="py-28">
      <div className="container mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Find Us</p>
          <h2 className="font-display text-4xl md:text-6xl">Our <span className="text-gold-gradient italic">Location</span></h2>
        </Reveal>

        <Reveal>
          <div className="glass-card rounded-3xl overflow-hidden max-w-6xl mx-auto">
            <iframe
              title="Mahadev Caterers Location"
              src={`https://www.google.com/maps?q=${query}&z=19&output=embed`}
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
