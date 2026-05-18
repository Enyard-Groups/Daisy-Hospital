import doctors from "@/assets/doctors.png";
import botanical from "@/assets/hero-botanical.jpg";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Decorative botanical bg */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `url(${botanical})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gold-soft/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-sage/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 space-y-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-navy">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Welcome To Daisy Hospital
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-navy text-balance">
              Your Path to <em className="text-gold not-italic font-medium">Recovery</em>
              <br /> Starts Here.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl text-balance">
              We are a specialized <strong className="text-navy font-semibold">Ayush Integrated Hospital</strong> dedicated to
              advancing holistic patient care through the combined principles of traditional systems —
              where nature becomes your medicine.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-navy-deep transition">
                Explore Treatments <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-cream px-7 py-3.5 text-sm font-semibold text-navy hover:bg-secondary transition">
                <Leaf className="h-4 w-4 text-sage" /> Our Approach
              </a>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-border/60">
              <Stat n="129" label="Years of Trust" />
              <div className="h-10 w-px bg-border" />
              <Stat n="60K+" label="Happy Patients" />
              <div className="h-10 w-px bg-border" />
              <Stat n="154+" label="Care Team" />
            </div>
          </div>

          {/* Doctors visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square max-w-[560px] mx-auto">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-20 blur-2xl" />
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-gold/40 animate-float-slow" />
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-cream via-gold-soft/40 to-sage/20" />

              {/* Floating tag top */}
              <div className="absolute top-6 left-0 z-20 rounded-2xl bg-card/95 backdrop-blur px-4 py-3 shadow-elegant border border-border/60 animate-float-slow">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Ayush Integrated</div>
                <div className="font-display text-base font-semibold text-navy">Caring Hands,<br />Ancient Roots</div>
              </div>

              {/* Floating stat right */}
              <div className="absolute top-1/3 -right-2 z-20 rounded-2xl bg-navy text-primary-foreground px-5 py-3 shadow-elegant">
                <div className="font-display text-3xl font-semibold text-gold">75%</div>
                <div className="text-[11px] uppercase tracking-wider opacity-80">Recovery Rate</div>
              </div>

              {/* Doctor image */}
              <img
                src={doctors}
                alt="Daisy Hospital doctors"
                className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-2xl"
              />

              {/* Bottom badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 rounded-full bg-card border border-border px-5 py-2.5 shadow-soft flex items-center gap-2 whitespace-nowrap">
                <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
                <span className="text-xs font-medium text-navy">Healing Starts with Daily Habits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline strip */}
        <div className="mt-16 lg:mt-24 grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-border/60 bg-border/60">
          {[
            "Where Nature Becomes Your Medicine",
            "Trusted Center for Sustainable Health",
            "Inspired by Ancient Traditions",
          ].map((t) => (
            <div key={t} className="bg-cream px-6 py-5 text-center">
              <p className="font-display text-lg text-navy italic">"{t}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-navy">{n}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
