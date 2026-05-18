const stats = [
  { n: "60,546+", l: "Happy Patients" },
  { n: "3.5K+", l: "Inpatient Care" },
  { n: "129", l: "Years Of Experience" },
  { n: "154+", l: "Professional Nurses" },
];

export function Stats() {
  return (
    <section className="py-20 bg-navy text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-deep to-navy" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-5xl lg:text-6xl font-semibold text-gold">{s.n}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-primary-foreground/70">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
