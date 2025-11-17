import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-zinc-200 bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-zinc-200 bg-[#f9f9fb] px-6 py-16 text-center shadow-sm sm:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B46C1]">
          Book Your Consultation
        </p>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl">
          Ready to scale your lead generation?
        </h2>
        <p className="mt-4 text-base text-[#4a4a4a] sm:text-lg">
          Schedule a free 15-minute call to discuss your goals, review your current
          funnel, and get a tailored plan for reducing CPL and increasing booked
          consultations.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            href="https://cal.com/ivan-bogdan-ao7zgj/15min"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            Book Your Free Call
          </Button>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#6b6b6b]">
          Choose your time · No commitment required
        </p>
      </div>
    </section>
  );
}

