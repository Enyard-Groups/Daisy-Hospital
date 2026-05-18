import { MapPin } from "lucide-react";

const branches = [
  { city: "Chennai", desc: "Specialized in diabetes, PCOD, joint pain, skin issues, and women's wellness with integrated Ayurveda, Siddha & Yoga." },
  { city: "Madurai", desc: "Focused on Ayurveda & Siddha therapies for pain relief, diabetes, fertility issues, and bone & joint care in a calm, natural setting." },
  { city: "Erode", desc: "Offers holistic treatments for chronic illness, neurological issues, digestive disorders, and skin & hair concerns." },
];

export function Branches() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Welcome to our Branches</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-navy text-balance">
            Ayush Integrated <em className="text-gold not-italic">Hospital</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose your nearest branch and witness our trusted healing results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <div key={b.city} className="group relative rounded-3xl bg-card border border-border/60 p-8 overflow-hidden hover:shadow-elegant transition-all duration-500">
              <div className="absolute top-0 right-0 h-32 w-32 bg-gold-soft/30 rounded-full blur-2xl group-hover:bg-gold-soft/60 transition" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>Branch 0{i + 1}</span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-gold" />
                  <h3 className="font-display text-3xl font-semibold text-navy">{b.city}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition">
                  Visit branch →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
