import ScrollReveal from "@/components/ui/ScrollReveal";

const phases = [
  {
    title: "01 · Audit",
    summary: "Baseline & Opportunity Map",
    description:
      "We audit ads, offers, landing pages, SEO, and tracking to find the fastest path to more qualified leads at a lower CPL.",
    deliverables: ["Account audit", "Offer review", "Tracking & data check"],
  },
  {
    title: "02 · Offer & Funnel",
    summary: "Craft the Conversion Path",
    description:
      "Design a compelling offer and the end-to-end funnel—ads → landing page → nurture → booked consultation.",
    deliverables: ["Offer strategy", "Landing page wireframes", "Nurture sequences"],
  },
  {
    title: "03 · Launch",
    summary: "Acquire & Convert",
    description:
      "Ship campaigns, launch pages, and enable automation. Ensure speed-to-lead and routing are airtight for every inquiry.",
    deliverables: ["Campaign build", "Page development", "CRM & automation setup"],
  },
  {
    title: "04 · Optimize",
    summary: "Scale What Works",
    description:
      "Measure true performance, A/B test headlines and offers, and scale the best channels with confidence.",
    deliverables: ["Experiment backlog", "Weekly reporting", "Scaling plan"],
  },
];

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <ScrollReveal className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B46C1]">
            Our Approach
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl">
            A simple, repeatable system to drive more qualified leads.
          </h2>
          <p className="text-base text-[#4a4a4a] sm:text-lg">
            From first click to booked call, we remove friction and focus on the
            parts of the funnel that actually move lead volume and quality.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {phases.map((phase, index) => (
            <ScrollReveal key={phase.title} delay={index * 120} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B46C1]">
                    {phase.title}
                  </h3>
                  <p className="text-xl font-semibold text-[#171717]">
                    {phase.summary}
                  </p>
                  <p className="text-sm text-[#4a4a4a] sm:text-base">
                    {phase.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-[#6b6b6b]">
                  {phase.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#6B46C1]" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

