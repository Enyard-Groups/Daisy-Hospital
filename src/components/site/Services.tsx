import { Activity, Bone, Brain, Sparkles, Flower2, HeartPulse } from "lucide-react";

const services = [
  { icon: Activity, title: "Diabetic Care", desc: "Holistic management combining Ayurveda, Siddha & lifestyle therapy." },
  { icon: Bone, title: "Orthopedic Care", desc: "Natural treatments for joint pain, arthritis and bone wellness." },
  { icon: Brain, title: "Neurological Care", desc: "Gentle integrative therapy for nerve and mobility recovery." },
  { icon: Sparkles, title: "Skin & Hair Care", desc: "Herbal remedies that restore glow and natural strength." },
  { icon: Flower2, title: "Women's Wellness", desc: "Care for PCOD, fertility & hormonal balance with nature." },
  { icon: HeartPulse, title: "Preventive Care", desc: "Daily-habit healing rooted in ancient Ayush traditions." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Our Services</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-navy text-balance">
            Our Natural Wellness <em className="text-gold not-italic">begins</em> at Daisy Hospital.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="group relative rounded-3xl bg-card border border-border/60 p-8 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-6 right-6 font-display text-4xl text-muted/40">0{i + 1}</div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-soft">
                <s.icon className="h-7 w-7 text-navy-deep" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-gold transition">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
