import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahadev Caterers — Premium Catering Services in Kanpur" },
      { name: "description", content: "Mahadev Caterers — Kanpur's premium catering service for weddings, corporate events, birthdays and religious functions. Quality is our Identity, Trust is our Name." },
      { property: "og:title", content: "Mahadev Caterers — Premium Catering in Kanpur" },
      { property: "og:description", content: "Premium catering for weddings, corporate events & celebrations in Kanpur." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FoodEstablishment",
        name: "Mahadev Caterers",
        description: "Premium catering services in Kanpur for weddings, corporate events and celebrations.",
        telephone: "+917376140771",
        email: "sudhir.krishnakant@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "117/232 N Block, Kakadeo, Om Chauraha",
          addressLocality: "Kanpur",
          addressRegion: "Uttar Pradesh",
          postalCode: "208025",
          addressCountry: "IN",
        },
        servesCuisine: ["Indian", "Multi-cuisine"],
        priceRange: "₹₹",
      }),
    }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <WhyUs />
        <Contact />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
