import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { BRANCHES, SERVICES, type Branch } from "@/data/branches";
import { Phone, Mail, MapPin, Clock, CalendarCheck, Check } from "lucide-react";
import botanical from "@/assets/hero-botanical.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Daisy Hospital — Book an Appointment Easily" },
      {
        name: "description",
        content:
          "Contact Daisy Hospital across Chennai, Madurai & Erode. Phone, email, address and quick enquiry forms for our AYUSH Integrated Care branches.",
      },
      { property: "og:title", content: "Contact Daisy Hospital" },
      {
        property: "og:description",
        content: "Reach our AYUSH Integrated Care branches across Tamil Nadu.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `url(${botanical})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-gold-soft/30 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-16 lg:pb-20">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7 animate-fade-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-navy">
                  Contact
                </span>
                <p className="mt-5 font-display italic text-2xl text-gold">Have questions?</p>
                <h1 className="mt-1 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-navy text-balance">
                  Drop us a <em className="text-gold not-italic">line.</em>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  <strong className="text-navy">Book an Appointment Easily.</strong> Contacting Daisy
                  Hospital is simple and convenient. Reach us directly or submit the enquiry form
                  below — our coordinators will get back to you promptly to confirm your visit.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-navy-deep transition"
                  >
                    <CalendarCheck className="h-4 w-4" /> Book Now
                  </Link>
                  <a
                    href="#branches"
                    className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-cream px-7 py-3.5 text-sm font-semibold text-navy hover:bg-secondary transition"
                  >
                    Find a branch
                  </a>
                </div>
              </div>

              {/* Services card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-card border border-border/60 p-7 shadow-soft">
                  <div className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
                    Services You Can Enquire About
                  </div>
                  <ul className="mt-5 space-y-3">
                    {SERVICES.map((s) => (
                      <li key={s} className="flex gap-3 text-sm text-foreground/80">
                        <div className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-gradient-gold flex items-center justify-center">
                          <Check className="h-3 w-3 text-navy-deep" />
                        </div>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branches */}
        <section id="branches" className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
                Get in Touch
              </span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl text-navy text-balance">
                AYUSH Integrated <em className="text-gold not-italic">Care Hospitals</em>
              </h2>
              <p className="mt-3 text-muted-foreground">
                Choose your nearest branch — reach us by phone, email, or message.
              </p>
            </div>

            <div className="space-y-6">
              {BRANCHES.map((b, i) => (
                <BranchCard key={b.id} branch={b} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  return (
    <div className="grid lg:grid-cols-5 gap-px rounded-3xl overflow-hidden border border-border/60 bg-border/60 shadow-soft">
      {/* Info */}
      <div className="lg:col-span-3 bg-card p-8 lg:p-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="font-semibold text-gold">Branch 0{index + 1}</span>
          <span className="h-px flex-1 bg-border" />
          <span>{branch.city}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl text-navy leading-tight">
          {branch.title}
        </h3>

        <div className="mt-7 grid sm:grid-cols-2 gap-5">
          <InfoBlock icon={Phone} label="Phone Number">
            <div className="space-y-1">
              {branch.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s+/g, "")}`}
                  className="block text-navy hover:text-gold transition"
                >
                  {p}
                </a>
              ))}
            </div>
          </InfoBlock>
          <InfoBlock icon={Mail} label="Email">
            <a
              href={`mailto:${branch.email}`}
              className="text-navy hover:text-gold transition break-all"
            >
              {branch.email}
            </a>
          </InfoBlock>
          <InfoBlock icon={MapPin} label="Address">
            <p className="text-foreground/80 leading-relaxed">{branch.address}</p>
          </InfoBlock>
          <InfoBlock icon={Clock} label="Business Hours">
            <p className="text-foreground/80">
              Mon – Sat · 10am – 7pm
              <br />
              <span className="text-muted-foreground">Sunday · Closed</span>
            </p>
          </InfoBlock>
        </div>
      </div>

      {/* Form */}
      <div className="lg:col-span-2 bg-secondary/60 p-8 lg:p-10">
        <EnquiryForm branchId={branch.id} />
      </div>
    </div>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="shrink-0 h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center">
        <Icon className="h-4 w-4 text-navy-deep" />
      </div>
      <div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-semibold">
          {label}
        </div>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </div>
  );
}
