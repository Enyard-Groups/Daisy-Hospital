import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Different } from "@/components/site/Different";
import { Branches } from "@/components/site/Branches";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daisy Hospital — Caring Hands with Ancient Roots | Ayush Integrated" },
      { name: "description", content: "Daisy Hospital — Ayush Integrated Hospital since 1896. Holistic, natural treatments for diabetes, ortho, neurology, skin & women's wellness." },
      { property: "og:title", content: "Daisy Hospital — Ayush Integrated Care Since 1896" },
      { property: "og:description", content: "Your path to recovery starts here. Natural, holistic care rooted in ancient tradition." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Different />
        <Branches />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
