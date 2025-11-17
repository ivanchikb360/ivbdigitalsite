import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
//import RotatingGlobe from "@/components/ui/RotatingGlobe";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 md:flex-row md:items-center md:gap-16 md:px-8">
        <div className="max-w-2xl space-y-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B46C1]">
              Growth Systems for service-based businesses
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl font-semibold tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
              We generate qualified leads and booked consultations.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[#4a4a4a] sm:text-xl">
              Paid search & social, high-converting landing pages, offers and
              funnels, local/service SEO, and marketing automation—working
              together to turn clicks into clients.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" className="w-full sm:w-auto">
                Get a Free Growth Plan
              </Button>
              <Button
                variant="secondary"
                href="#approach"
                className="w-full sm:w-auto"
              >
                View Our Approach
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
