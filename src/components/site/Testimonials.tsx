import { Quote } from "lucide-react";

const reviews = [
  {
    name: "சரோஜா",
    place: "மதுரவாயல்",
    text: "நடக்க முடியாத நிலை காரணமாக பாதிக்கப்பட்டு, 6 நாட்கள் IP சிகிச்சைக்கு பின் சுமார் 75% வரை முன்னேற்றம் ஏற்பட்டுள்ளது.",
  },
  {
    name: "நூர்தரணி",
    place: "அம்பத்தூர்",
    text: "காலடி வலியால் நடக்க முடியாத நிலையில் இருந்து, 5 நாட்கள் IP சிகிச்சைக்கு பிறகு முழுமையாக நலம் பெற்றுள்ளார்.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Trusted by Thousands</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-navy text-balance">
            Reviews from <em className="text-gold not-italic">actual</em> clients.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real stories of healing, relief, and transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="relative rounded-3xl bg-gradient-to-br from-cream to-secondary border border-border/60 p-10 shadow-soft">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-gold/30" />
              <blockquote className="font-display text-xl text-navy leading-relaxed italic">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border/60">
                <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center font-display text-xl font-semibold text-navy-deep">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.place}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
