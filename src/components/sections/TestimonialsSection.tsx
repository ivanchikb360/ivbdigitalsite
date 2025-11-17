import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "IVB Digital did an incredible job building my website. The design is super clean and professional, loads lightning fast, and captures exactly what I wanted for my painting business. Their communication throughout the process was excellent—they really listened and made sure every detail came out perfect. Highly recommend if you need a website that actually represents your business well.",
    name: "Pavel",
    role: "Owner of Vals Painting",
    website: "https://www.valpaintingllc.com/",
  },
  {
    quote:
      "We couldn't be happier with our new website from IVB Digital. The design is modern and user-friendly, and it showcases our services perfectly. The site is fast, looks great on mobile, and has helped us stand out from competitors. The team was professional, responsive, and delivered exactly what they promised. Our online presence has never looked better.",
    name: "Vlad",
    role: "Owner of Mossaway",
    website: "https://www.mossawayllc.com/",
  },
  {
    quote:
      "IVB Digital created a beautiful website for our landscaping business that we're really proud of. The design is clean and professional, it's easy for customers to navigate, and it loads incredibly fast. They understood our vision and brought it to life better than we imagined. The whole process was smooth, and the final result exceeded our expectations.",
    name: "Leo",
    role: "Owner of L&A Landscaping Specialists",
    website: "https://www.lnalandscapingspecialists.com/",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <ScrollReveal className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6B46C1]">
            Testimonials
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl">
            Funnels our clients are proud to show off.
          </h2>
          <p className="text-base text-[#4a4a4a] sm:text-lg">
            Clean design, fast performance, and a smooth process—every time.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              delay={index * 120}
              className="h-full"
            >
              <blockquote className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-[#f9f9fb] p-8 text-[#4a4a4a]">
                <p className="text-base leading-relaxed">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-6 text-sm text-[#171717]">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-[#6b6b6b]">
                    {testimonial.website ? (
                      <>
                        Owner of{" "}
                        <a
                          href={testimonial.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6B46C1] transition-colors hover:text-[#4B2D9C]"
                        >
                          {testimonial.role.replace("Owner of ", "")}
                        </a>
                      </>
                    ) : (
                      testimonial.role
                    )}
                  </p>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
