import { Play } from "lucide-react";
import doctors from "@/assets/doctors.png";

export function Different() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-gold-soft via-cream to-sage/30 overflow-hidden relative shadow-elegant">
            <img src={doctors} alt="Doctors" className="absolute inset-0 w-full h-full object-cover object-top" />
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="h-20 w-20 rounded-full bg-card/95 backdrop-blur flex items-center justify-center shadow-elegant group-hover:scale-110 transition">
                <Play className="h-7 w-7 text-navy fill-navy ml-1" />
              </div>
            </button>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-card/95 backdrop-blur p-4 border border-border/60">
              <div className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">Video Presentation</div>
              <div className="font-display text-lg text-navy mt-1">Watch our journey of natural healing</div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">What Makes Us Different</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-navy text-balance leading-tight">
            Ayush Integrated Hospital — <em className="text-gold not-italic">Heal Your Concerns</em> with Natural Care.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We heal your concerns with natural care. Our approach focuses on gentle, holistic treatments
            that support your complete well-being.
          </p>

          <div className="mt-8 rounded-2xl border-l-4 border-gold bg-secondary/50 p-6">
            <div className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Our Promise</div>
            <p className="mt-2 font-display text-2xl text-navy italic">
              "We listen. We support. We heal naturally."
            </p>
            <p className="mt-3 text-muted-foreground">
              We stand with you from the first consultation until the day you get your health and confidence back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
