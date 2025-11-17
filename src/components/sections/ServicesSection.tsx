import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Funnel Architecture & Conversion Systems",
    description:
      "We document the offer, landing page, and nurture patterns that turn first clicks into booked consultations—ready for every future campaign.",
    outcomes: [
      "Modular landing page library",
      "Evergreen lead magnet frameworks",
      "Speed-to-lead playbooks",
    ],
  },
  {
    title: "Paid Search & Paid Social Operations",
    description:
      "Always-on PPC programs for Google, Meta, and LinkedIn with creative rituals and bid strategies tuned to high-intent service buyers.",
    outcomes: [
      "Lower blended CPL",
      "Offer-led creative sprints",
      "Search + social budget clarity",
    ],
  },
  {
    title: "Lifecycle Automation & RevOps Enablement",
    description:
      "Routing, scoring, and CRM hygiene that keeps leads moving, surfaces true attribution, and preserves learnings long after a campaign ships.",
    outcomes: [
      "Automated follow-up sequences",
      "Reliable pipeline attribution",
      "Shared revenue dashboards",
    ],
  },
  {
    title: "Embedded Strategy & Advisory",
    description:
      "Fractional strategy support that prioritizes experiments, aligns messaging, and keeps the entire system evolving with your business.",
    outcomes: [
      "Quarterly GTM roadmaps",
      "Executive-ready performance reviews",
      "Positioning + offer guidance",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-zinc-200 bg-[#f9f9fb] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <ScrollReveal className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B46C1]">
            Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl">
            Systems that stay with your service business.
          </h2>
          <p className="text-base text-[#4a4a4a] sm:text-lg">
            We architect operating systems—from funnel building to PPC to
            embedded strategy consulting—so your team can scale demand long
            after the engagement ends.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={index * 100}
              className="h-full"
            >
              <article className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#171717]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4a4a4a] sm:text-base">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-[#6b6b6b]">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6B46C1]" />
                      <span>{outcome}</span>
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
