import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  CreditCard,
  Lock,
  MapPin,
  Stethoscope,
  User,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BRANCHES } from "@/data/branches";
import botanical from "@/assets/hero-botanical.jpg";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Your Appointment — Daisy Hospital" },
      {
        name: "description",
        content:
          "Reserve your consultation at Daisy Hospital. Pick a branch, treatment, date & time and confirm with secure online payment.",
      },
    ],
  }),
  component: AppointmentPage,
});

const TREATMENTS = [
  { id: "general", name: "General AYUSH Consultation", fee: 500, duration: "30 min" },
  { id: "diabetic", name: "Diabetic Care", fee: 800, duration: "45 min" },
  { id: "ortho", name: "Orthopedic Care", fee: 900, duration: "45 min" },
  { id: "neuro", name: "Neurological Care", fee: 1000, duration: "60 min" },
  { id: "skin", name: "Skin & Hair Care", fee: 700, duration: "30 min" },
  { id: "women", name: "Women's Wellness", fee: 800, duration: "45 min" },
];

const SLOTS = [
  "10:00 AM",
  "10:45 AM",
  "11:30 AM",
  "12:15 PM",
  "02:00 PM",
  "02:45 PM",
  "03:30 PM",
  "04:15 PM",
  "05:00 PM",
  "05:45 PM",
];

const formSchema = z.object({
  branchId: z.string().min(1),
  treatmentId: z.string().min(1),
  date: z.string().min(1),
  slot: z.string().min(1),
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(255),
  notes: z.string().max(500).optional(),
});

type FormState = z.infer<typeof formSchema>;

function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    branchId: BRANCHES[0].id,
    treatmentId: TREATMENTS[0].id,
    date: new Date(Date.now() + 24 * 3600 * 1000).toISOString().slice(0, 10),
    slot: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [paid, setPaid] = useState(false);
  const [processing, setProcessing] = useState(false);

  const treatment = useMemo(
    () => TREATMENTS.find((t) => t.id === form.treatmentId)!,
    [form.treatmentId]
  );
  const branch = useMemo(
    () => BRANCHES.find((b) => b.id === form.branchId)!,
    [form.branchId]
  );

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  const canNext = () => {
    if (step === 1) return !!form.branchId && !!form.treatmentId;
    if (step === 2) return !!form.date && !!form.slot;
    if (step === 3) {
      const r = formSchema.safeParse(form);
      return r.success;
    }
    return true;
  };

  const handlePay = async () => {
    setProcessing(true);
    // TODO: replace with real payment gateway call (Stripe/Paddle) once enabled
    await new Promise((r) => setTimeout(r, 1500));
    setProcessing(false);
    setPaid(true);
    setStep(5);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `url(${botanical})`,
              backgroundSize: "cover",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-navy">
              <CalendarCheck className="h-3.5 w-3.5 text-gold" /> Appointments
            </span>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl text-navy text-balance">
              Book Your <em className="text-gold not-italic">Appointment</em>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Reserve a consultation in four simple steps. Pay securely online to confirm your slot.
            </p>
          </div>
        </section>

        {/* Stepper + body */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Stepper step={step} />
              <div className="mt-6 rounded-3xl bg-card border border-border/60 p-7 lg:p-10 shadow-soft">
                {step === 1 && (
                  <StepBranchTreatment
                    form={form}
                    update={update}
                  />
                )}
                {step === 2 && <StepDateSlot form={form} update={update} />}
                {step === 3 && <StepDetails form={form} update={update} />}
                {step === 4 && (
                  <StepPayment
                    fee={treatment.fee}
                    processing={processing}
                    onPay={handlePay}
                  />
                )}
                {step === 5 && paid && (
                  <Confirmation form={form} treatment={treatment} branch={branch.city} />
                )}

                {/* Nav buttons */}
                {step < 4 && (
                  <div className="mt-8 flex justify-between gap-3">
                    <button
                      onClick={() => setStep((s) => Math.max(1, s - 1))}
                      disabled={step === 1}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-navy disabled:opacity-40 hover:bg-secondary transition"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <button
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canNext()}
                      className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-navy-deep transition disabled:opacity-50"
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
                {step === 4 && !paid && (
                  <div className="mt-8 flex justify-between gap-3">
                    <button
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-navy hover:bg-secondary transition"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Summary */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-3xl bg-navy text-primary-foreground p-7 shadow-elegant">
                <div className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
                  Booking Summary
                </div>
                <h3 className="mt-3 font-display text-2xl">Your Visit</h3>
                <dl className="mt-5 space-y-3 text-sm">
                  <Row label="Branch" value={branch.city} />
                  <Row label="Treatment" value={treatment.name} />
                  <Row label="Duration" value={treatment.duration} />
                  <Row label="Date" value={form.date || "—"} />
                  <Row label="Time" value={form.slot || "—"} />
                </dl>
                <div className="mt-6 pt-5 border-t border-primary-foreground/15 flex justify-between items-baseline">
                  <span className="text-sm text-primary-foreground/70">Consultation Fee</span>
                  <span className="font-display text-3xl text-gold">₹{treatment.fee}</span>
                </div>
                <p className="mt-3 text-xs text-primary-foreground/60 flex items-center gap-1.5">
                  <Lock className="h-3 w-3" /> Secure online payment confirms your slot.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-4 block text-center text-sm text-muted-foreground hover:text-navy transition"
              >
                Need help? Contact us →
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Stepper({ step }: { step: number }) {
  const items = ["Treatment", "Date & Time", "Details", "Payment"];
  return (
    <ol className="flex items-center gap-2">
      {items.map((label, i) => {
        const n = i + 1;
        const active = step === n;
        const done = step > n;
        return (
          <li key={label} className="flex-1 flex items-center gap-2 min-w-0">
            <div
              className={`h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold transition ${
                done
                  ? "bg-sage text-primary-foreground"
                  : active
                  ? "bg-gradient-gold text-navy-deep shadow-soft"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {done ? <Check className="h-4 w-4" /> : n}
            </div>
            <span
              className={`text-xs sm:text-sm font-medium truncate ${
                active ? "text-navy" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
            {i < items.length - 1 && <div className="flex-1 h-px bg-border" />}
          </li>
        );
      })}
    </ol>
  );
}

function StepBranchTreatment({
  form,
  update,
}: {
  form: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  return (
    <div className="space-y-8">
      <div>
        <SectionTitle icon={MapPin} title="Choose a Branch" />
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {BRANCHES.map((b) => {
            const selected = form.branchId === b.id;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => update("branchId", b.id)}
                className={`text-left rounded-2xl border p-4 transition ${
                  selected
                    ? "border-gold bg-gold-soft/20 shadow-soft"
                    : "border-border bg-card hover:border-gold/50"
                }`}
              >
                <div className="font-display text-lg text-navy">{b.city}</div>
                <div className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {b.address}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <SectionTitle icon={Stethoscope} title="Choose a Treatment" />
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {TREATMENTS.map((t) => {
            const selected = form.treatmentId === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => update("treatmentId", t.id)}
                className={`flex items-center justify-between rounded-2xl border p-4 transition ${
                  selected
                    ? "border-gold bg-gold-soft/20 shadow-soft"
                    : "border-border bg-card hover:border-gold/50"
                }`}
              >
                <div className="text-left">
                  <div className="font-medium text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.duration}</div>
                </div>
                <div className="font-display text-lg text-gold">₹{t.fee}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StepDateSlot({
  form,
  update,
}: {
  form: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <div className="space-y-8">
      <div>
        <SectionTitle icon={CalendarCheck} title="Pick a Date" />
        <input
          type="date"
          min={today}
          value={form.date}
          onChange={(e) => update("date", e.target.value)}
          className="mt-4 w-full sm:w-auto rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/60"
        />
      </div>
      <div>
        <SectionTitle icon={CalendarCheck} title="Available Time Slots" />
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-2">
          {SLOTS.map((s) => {
            const sel = form.slot === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => update("slot", s)}
                className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
                  sel
                    ? "border-gold bg-gradient-gold text-navy-deep shadow-soft"
                    : "border-border bg-card text-navy hover:border-gold/50"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Mon — Sat · Closed Sundays</p>
      </div>
    </div>
  );
}

function StepDetails({
  form,
  update,
}: {
  form: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  return (
    <div>
      <SectionTitle icon={User} title="Your Details" />
      <div className="mt-5 grid sm:grid-cols-2 gap-4">
        <Field
          label="Full Name"
          value={form.name}
          onChange={(v) => update("name", v)}
          placeholder="As per ID"
        />
        <Field
          label="Phone Number"
          type="tel"
          value={form.phone}
          onChange={(v) => update("phone", v)}
          placeholder="+91 ..."
        />
        <div className="sm:col-span-2">
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={(v) => update("email", v)}
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Reason / Notes (optional)
            </span>
            <textarea
              rows={3}
              maxLength={500}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Brief description of your concern"
              className="mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold/60 resize-none"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

function StepPayment({
  fee,
  processing,
  onPay,
}: {
  fee: number;
  processing: boolean;
  onPay: () => void;
}) {
  return (
    <div>
      <SectionTitle icon={CreditCard} title="Secure Payment" />
      <p className="mt-3 text-muted-foreground">
        Pay your consultation fee online to confirm the slot. Your payment is processed over an
        encrypted connection.
      </p>

      <div className="mt-6 rounded-2xl border border-border bg-secondary/50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Amount Due
            </div>
            <div className="font-display text-4xl text-navy mt-1">₹{fee}.00</div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-4 w-4 text-sage" /> 256-bit SSL
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 items-center text-xs text-muted-foreground">
        <span className="px-3 py-1.5 rounded-md bg-card border border-border font-medium">VISA</span>
        <span className="px-3 py-1.5 rounded-md bg-card border border-border font-medium">Mastercard</span>
        <span className="px-3 py-1.5 rounded-md bg-card border border-border font-medium">UPI</span>
        <span className="px-3 py-1.5 rounded-md bg-card border border-border font-medium">NetBanking</span>
      </div>

      <button
        onClick={onPay}
        disabled={processing}
        className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy-deep shadow-elegant hover:opacity-90 transition disabled:opacity-60"
      >
        {processing ? (
          <>Processing…</>
        ) : (
          <>
            <Lock className="h-4 w-4" /> Pay ₹{fee} & Confirm Booking
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        By confirming, you agree to our cancellation policy. Free reschedule up to 24h before your slot.
      </p>
    </div>
  );
}

function Confirmation({
  form,
  treatment,
  branch,
}: {
  form: FormState;
  treatment: (typeof TREATMENTS)[number];
  branch: string;
}) {
  const ref = useMemo(
    () => "DH-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
    []
  );
  return (
    <div className="text-center py-6">
      <div className="mx-auto h-16 w-16 rounded-full bg-sage flex items-center justify-center shadow-elegant">
        <Check className="h-8 w-8 text-primary-foreground" />
      </div>
      <h3 className="mt-5 font-display text-3xl text-navy">Appointment Confirmed</h3>
      <p className="mt-2 text-muted-foreground">
        Thank you, {form.name || "patient"}. A confirmation has been sent to{" "}
        <strong className="text-navy">{form.email}</strong>.
      </p>
      <div className="mt-7 inline-block text-left rounded-2xl border border-border bg-secondary/50 p-6">
        <Row2 label="Reference" value={ref} />
        <Row2 label="Branch" value={branch} />
        <Row2 label="Treatment" value={treatment.name} />
        <Row2 label="Date" value={form.date} />
        <Row2 label="Time" value={form.slot} />
        <Row2 label="Paid" value={`₹${treatment.fee}`} />
      </div>
      <div className="mt-7">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-navy-deep transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold/60"
      />
    </label>
  );
}

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center">
        <Icon className="h-4 w-4 text-navy-deep" />
      </div>
      <h3 className="font-display text-2xl text-navy">{title}</h3>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-primary-foreground/60">{label}</dt>
      <dd className="text-primary-foreground font-medium text-right">{value}</dd>
    </div>
  );
}

function Row2({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-8 py-1.5 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-navy">{value}</span>
    </div>
  );
}
