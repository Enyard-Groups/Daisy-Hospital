import { useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  number: z.string().trim().min(7, "Enter a valid number").max(20),
  email: z.string().trim().email("Invalid email").max(255),
});

export function EnquiryForm({ branchId }: { branchId: string }) {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [err, setErr] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      number: fd.get("number"),
      email: fd.get("email"),
    });
    if (!parsed.success) {
      setStatus("err");
      setErr(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    // TODO: wire to backend / email service
    console.log("Enquiry", branchId, parsed.data);
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
        AYUSH Integrated Care Hospital
      </div>
      <h4 className="font-display text-2xl text-navy">Send Us a Message</h4>
      <div className="grid sm:grid-cols-2 gap-3">
        <Field name="name" label="Name" />
        <Field name="number" label="Number" type="tel" />
      </div>
      <Field name="email" label="Email" type="email" />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-navy-deep transition"
      >
        <Send className="h-4 w-4" /> Send
      </button>
      {status === "ok" && (
        <p className="text-sm text-sage">Thank you — we'll get back to you shortly.</p>
      )}
      {status === "err" && <p className="text-sm text-destructive">{err}</p>}
    </form>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={label}
        className="mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition"
      />
    </label>
  );
}
