const promises = [
  {
    promise: "More qualified leads that actually book consultations",
    description:
      "We'll increase your qualified lead volume while improving your booked consult rate through better targeting, offers, and conversion optimization.",
    deliverables: [
      "Higher quality lead flow",
      "Improved consultation booking rates",
      "Better lead-to-customer conversion",
    ],
  },
  {
    promise: "Lower cost per lead with predictable scaling",
    description:
      "We'll reduce your blended cost per lead while building systems that scale predictably—so you can grow without breaking the bank.",
    deliverables: [
      "Reduced cost per lead (CPL)",
      "Predictable lead volume forecasting",
      "Scalable campaign architecture",
    ],
  },
  {
    promise: "A complete system that stays with your business",
    description:
      "We build operating systems—funnels, automation, and processes—that your team owns and operates long after we're gone.",
    deliverables: [
      "Modular landing page library",
      "Automated follow-up sequences",
      "Full system documentation & training",
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="results-impact"
      className="scroll-mt-24 border-t border-zinc-200 bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B46C1]">
            What We Promise
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl">
            Everything you need to scale your service business.
          </h2>
          <p className="mt-4 text-base text-[#4a4a4a] sm:text-lg">
            We don't just run campaigns—we build complete systems that deliver
            predictable lead growth and stay with your business forever.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {promises.map((item) => (
            <article
              key={item.promise}
              className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-[#f9f9fb] p-8 transition-shadow hover:shadow-lg"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#171717]">
                  {item.promise}
                </h3>
                <p className="text-sm text-[#4a4a4a] sm:text-base">
                  {item.description}
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[#6b6b6b]">
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1.5 w-6 rounded-full bg-[#6B46C1]/60" />
                    <span>{deliverable}</span>
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

