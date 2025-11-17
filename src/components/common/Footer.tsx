import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Results & Impact", href: "#results-impact" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Industries We Serve", href: "#industries" },
];

const contactLinks = [
  { label: "ivbogdan@outlook.com", href: "mailto:ivbogdan@outlook.com" },
  { label: "(360) 606-7393", href: "tel:+13606067393" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-[#f9f9fb]">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8">
        <div className="space-y-6">
          <div>
            <div className="flex flex-col">
              <span
                className="text-xl font-bold tracking-tight text-[#171717]"
                style={{
                  fontFamily:
                    '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                IVB DIGITAL
              </span>
              <span className="mt-1 text-xs font-normal tracking-wide text-[#4a4a4a]">
                Innovate. Visualize. Build.
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-[#4a4a4a]">
              We help service-based businesses generate more qualified leads and
              booked consultations through professional web design, high-converting
              funnels, and strategic marketing systems.
            </p>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#171717]">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#4a4a4a]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#6B46C1]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#171717]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#4a4a4a]">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#6B46C1]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-[#6b6b6b] md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {currentYear} IVB Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

