import ScrollReveal from "@/components/ui/ScrollReveal";

export default function GiveawayHeroSection() {
  return (
    <section
      id="giveaway-hero"
      className="relative overflow-hidden scroll-mt-24 pt-20 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16"
    >
      <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
        <div className="space-y-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B46C1]">
              Free Website Giveaway
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl font-semibold tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
              Win a Free Professional Website for Your Adult Family Home
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mx-auto max-w-2xl text-lg text-[#4a4a4a] sm:text-xl">
              Enter below for your chance to win a complete professional website
              package.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

