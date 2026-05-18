import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/" },
  { label: "Services", to: "/" },
  { label: "Find Doctors", to: "/" },
  {
    label: "Professional Treatments",
    to: "/",
    children: [
      "Best Ortho Treatment",
      "Neurology Treatment",
      "Diabetic Care",
    ],
  },
  { label: "Outreach", to: "/" },
  { label: "Contact", to: "/" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Daisy Hospital" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-xl font-semibold text-navy">Daisy Hospital</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Since 1896</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-navy transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="min-w-[240px] rounded-xl bg-card shadow-elegant border border-border/60 p-2">
                      {item.children.map((c) => (
                        <Link key={c} to="/" className="block px-3 py-2 text-sm rounded-lg hover:bg-secondary text-foreground/80 hover:text-navy">
                          {c}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <a href="tel:+910000000000" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-soft hover:opacity-90 transition">
            <Phone className="h-4 w-4" /> Call Now
          </a>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-navy" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1">
            {nav.map((item) => (
              <Link key={item.label} to={item.to} className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary">
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
