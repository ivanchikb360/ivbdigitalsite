const industries = [
  {
    name: "Professional Services",
    description: "Legal, accounting, consulting, and advisory firms that need qualified consultation bookings.",
    examples: ["Legal Services", "Accounting Firms", "Business Consulting"],
  },
  {
    name: "Healthcare Services",
    description: "Dental practices, medical clinics, and specialty healthcare providers focused on patient acquisition.",
    examples: ["Dental Practices", "Medical Clinics", "Specialty Care"],
  },
  {
    name: "Home Services",
    description: "Contractors, remodelers, and home service providers looking to fill their project pipeline.",
    examples: ["Home Remodeling", "Roofing & Exterior", "HVAC & Plumbing"],
  },
];

export default function InsightsSection() {
  return (
    <section
      id="industries"
      className="scroll-mt-24 border-t border-zinc-200 bg-[#f9f9fb] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B46C1]">
            Industries We Serve
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl">
            Built for service businesses that run on consultations and quotes.
          </h2>
          <p className="mt-4 text-base text-[#4a4a4a] sm:text-lg">
            We specialize in lead generation for service-based businesses where
            every lead needs to convert into a booked call or consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#171717]">
                  {industry.name}
                </h3>
                <p className="text-sm text-[#4a4a4a] sm:text-base">
                  {industry.description}
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-[#6b6b6b]">
                {industry.examples.map((example) => (
                  <li key={example} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6B46C1]" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

