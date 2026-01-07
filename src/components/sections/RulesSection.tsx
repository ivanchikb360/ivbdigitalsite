import ScrollReveal from "@/components/ui/ScrollReveal";

const rules = [
  {
    number: "1",
    title: "Sponsor",
    content:
      "This giveaway is sponsored by IVB Digital, a web design and digital marketing agency.",
  },
  {
    number: "2",
    title: "Eligibility",
    content:
      "Open to licensed Adult Family Home (AFH) owners or authorized decision-makers. Businesses operating in [State / Region]. One (1) entry per business. Employees, contractors, or affiliates of IVB Digital are not eligible.",
  },
  {
    number: "3",
    title: "How to Enter",
    content:
      "Visit the giveaway landing page and complete the entry form with accurate business information. No purchase necessary to enter or win. Entries must be received by February 24, 2026 at 11:59 PM PST. Incomplete or duplicate entries will be disqualified.",
  },
  {
    number: "4",
    title: "Prize",
    content:
      "One (1) winner will receive a free 3-page professional website, including: Custom website design, Up to three (3) pages (Home, About, Contact), Mobile-responsive layout, Basic contact form setup, Domain purchase, 6 months of hosting, 6 months of maintenance or updates, 6 months of foundational SEO. No cash alternative or substitution is permitted.",
  },
  {
    number: "5",
    title: "Winner Selection",
    content:
      "The winner will be selected at random from all eligible entries received by the deadline. Selection will be conducted using a random draw process. Odds of winning depend on the number of eligible entries received.",
  },
  {
    number: "6",
    title: "Winner Notification",
    content:
      "The winner will be notified via email and/or phone within 48 hours of selection. If the selected winner does not respond within 5 business days, an alternate winner may be selected.",
  },
  {
    number: "7",
    title: "Website Delivery",
    content:
      "The website build will begin after an onboarding call and receipt of required content. Website must be claimed and project started within 30 days of winner confirmation. If the winner fails to provide necessary materials, the prize may be forfeited.",
  },
  {
    number: "8",
    title: "Use of Information",
    content:
      "By entering, participants agree that IVB Digital may: Contact them regarding the giveaway, Send relevant follow-up communication related to web and marketing services. Participants may unsubscribe at any time.",
  },
  {
    number: "9",
    title: "General Conditions",
    content:
      "IVB Digital reserves the right to disqualify any entry that violates these rules or is submitted fraudulently. IVB Digital reserves the right to modify or cancel the giveaway if circumstances require.",
  },
  {
    number: "10",
    title: "Legal Disclaimer",
    content:
      "No purchase necessary. This giveaway is not affiliated with or endorsed by any government agency. Void where prohibited by law.",
  },
];

export default function RulesSection() {
  return (
    <section
      id="rules"
      className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl">
              Official Rules
            </h2>
            <p className="text-lg text-[#4a4a4a]">
              Please read all rules carefully before entering
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-12">
            <div className="space-y-10">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-10 last:border-b-0 last:pb-0"
                >
                  <div className="mb-4 flex items-baseline gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6B46C1] text-sm font-semibold text-white">
                      {rule.number}
                    </span>
                    <h3 className="text-xl font-semibold text-[#171717]">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="ml-11 leading-relaxed text-[#4a4a4a]">
                    {rule.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

