import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Daisy Hospital" className="h-14 w-14 object-contain bg-cream rounded-full p-1" />
            <div>
              <div className="font-display text-2xl">Daisy Hospital</div>
              <div className="text-xs tracking-[0.2em] uppercase text-gold">Since 1896</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/70 max-w-md">
            Caring hands with ancient roots. Specialized Ayush Integrated Hospital
            advancing holistic patient care through traditional wisdom and modern standards.
          </p>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Home</li><li>About Us</li><li>Services</li><li>Find Doctors</li><li>Outreach</li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-gold font-semibold mb-4">Treatments</div>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Best Ortho Treatment</li><li>Neurology Treatment</li><li>Diabetic Care</li><li>Women's Wellness</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} Daisy Hospital. All rights reserved.</div>
          <div>Caring hands with ancient roots.</div>
        </div>
      </div>
    </footer>
  );
}
