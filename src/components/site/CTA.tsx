import { Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-sage/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">See Why Clients Choose Us</span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground text-balance">
          Healing finds its true meaning with <em className="text-gold not-italic">Daisy Hospital.</em>
        </h2>
        <p className="mt-5 text-primary-foreground/70 max-w-2xl mx-auto">
          Care refined, results assured, and comfort that stays with you long after recovery.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-elegant hover:opacity-90 transition">
            Contact Me
          </a>
          <a href="tel:+910000000000" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
