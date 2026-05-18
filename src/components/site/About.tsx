import botanical from "@/assets/hero-botanical.jpg";
import { Check } from "lucide-react";

const features = [
  { title: "Our Holistic AYUSH Care", desc: "We deliver safe, simple, and natural treatments. Wellness that fits your life." },
  { title: "Safe & Natural Treatments", desc: "Gentle therapies designed around your body's own healing rhythms." },
  { title: "Complete AYUSH Solutions", desc: "We provide complete AYUSH solutions. Healing that feels natural." },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/40 relative overflow-hidden">
      <div
        className="absolute -right-40 top-0 w-[600px] h-[600px] opacity-10"
        style={{ backgroundImage: `url(${botanical})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">About Our Care</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-navy text-balance leading-tight">
            We Heal Your Concerns with <em className="text-gold not-italic">Natural Care.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Our approach focuses on gentle, holistic treatments that support your complete well-being.
            At Daisy Hospital, wellness begins naturally — where wellness starts with nature.
          </p>
          <blockquote className="mt-6 border-l-2 border-gold pl-5 italic font-display text-xl text-navy">
            "Experience natural wellness, only at Daisy Hospital."
          </blockquote>
          <a href="#" className="inline-flex mt-8 items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-navy-deep transition">
            Read More →
          </a>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl bg-navy text-primary-foreground p-8 shadow-elegant">
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Who We Are</span>
            <h3 className="mt-3 font-display text-3xl">What We Provide</h3>
            <p className="mt-3 text-primary-foreground/80">
              We provide traditional healing with modern care standards. Every treatment is designed to
              naturally improve your overall wellness.
            </p>
          </div>
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-card border border-border/60 p-6 flex gap-4 hover:shadow-soft transition">
              <div className="shrink-0 h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <Check className="h-5 w-5 text-navy-deep" />
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold text-navy">{f.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
