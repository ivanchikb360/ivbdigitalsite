import ScrollReveal from "@/components/ui/ScrollReveal";

const prizeItems = [
  {
    title: "Custom Website Design",
    description: "Professional, modern design tailored to your business",
  },
  {
    title: "Up to 3 Pages",
    description: "Home, About, and Contact pages included",
  },
  {
    title: "Mobile-Responsive Layout",
    description: "Looks great on all devices - desktop, tablet, and mobile",
  },
  {
    title: "Contact Form Setup",
    description: "Contact form configured and ready to receive inquiries",
  },
  {
    title: "Domain Purchase",
    description: "We'll help you secure your perfect domain name",
  },
  {
    title: "6 Months Hosting",
    description: "Professional hosting included for 6 months",
  },
  {
    title: "6 Months Maintenance",
    description: "Updates and maintenance included for 6 months",
  },
  {
    title: "6 Months SEO",
    description: "SEO setup and optimization included",
  },
];

export default function PrizeDetailsSection() {
  return (
    <section
      id="prize-details"
      className="scroll-mt-24 bg-gray-50 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl">
              What You'll Win
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#4a4a4a]">
              A complete professional website package worth thousands of dollars
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-8 sm:grid-cols-2">
              {prizeItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center pt-1">
                    <div className="h-2 w-2 rounded-full bg-[#6B46C1]"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-[#171717]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4a4a4a]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-12 rounded-2xl border-2 border-[#6B46C1] bg-white p-8 text-center shadow-sm md:p-10">
            <p className="text-2xl font-semibold text-[#171717] md:text-3xl">
              Total Prize Value: <span className="text-[#6B46C1]">$3,750</span>
            </p>
            <p className="mt-4 text-base text-[#4a4a4a]">
              No cash alternative or substitution is permitted.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
