"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function EntryFormSection() {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/giveaway-entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit entry");
      }

      setSubmitStatus("success");
      setFormData({
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to submit entry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="entry-form"
      className="scroll-mt-24 bg-white pt-8 pb-20 sm:pt-12 sm:pb-28 lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto w-full max-w-2xl px-4 md:px-8">
        <ScrollReveal>
          <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-2xl border border-gray-200 bg-white p-8 md:p-12"
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="businessName"
                  className="mb-3 block text-sm font-medium text-[#171717]"
                >
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#171717] transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-[#6B46C1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B46C1] focus:ring-opacity-10"
                  placeholder="Your Adult Family Home Name"
                />
              </div>

              <div>
                <label
                  htmlFor="ownerName"
                  className="mb-3 block text-sm font-medium text-[#171717]"
                >
                  Owner Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  required
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#171717] transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-[#6B46C1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B46C1] focus:ring-opacity-10"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-[#171717]"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#171717] transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-[#6B46C1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B46C1] focus:ring-opacity-10"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-3 block text-sm font-medium text-[#171717]"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#171717] transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-[#6B46C1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B46C1] focus:ring-opacity-10"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="mb-3 block text-sm font-medium text-[#171717]"
                >
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#171717] transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-[#6B46C1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B46C1] focus:ring-opacity-10"
                  placeholder="123 Main Street"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="mb-3 block text-sm font-medium text-[#171717]"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#171717] transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-[#6B46C1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B46C1] focus:ring-opacity-10"
                  placeholder="City"
                />
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="mb-3 block text-sm font-medium text-[#171717]"
                >
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#171717] transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-[#6B46C1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B46C1] focus:ring-opacity-10"
                  placeholder="State"
                />
              </div>

              <div>
                <label
                  htmlFor="zip"
                  className="mb-3 block text-sm font-medium text-[#171717]"
                >
                  ZIP Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-[#171717] transition-all placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-[#6B46C1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6B46C1] focus:ring-opacity-10"
                  placeholder="12345"
                />
              </div>
            </div>

            {submitStatus === "success" && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800">
                Thank you! Your entry has been submitted successfully. We'll
                notify you if you win!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
                {errorMessage || "There was an error submitting your entry. Please try again or contact us directly."}
              </div>
            )}

            <div className="space-y-6 border-t border-gray-100 pt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Submitting..." : "Submit Entry"}
              </Button>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-center text-xs leading-relaxed text-[#4a4a4a]">
                  <span className="font-medium text-[#171717]">
                    By submitting, you agree to the giveaway rules.
                  </span>{" "}
                  One entry per business. We collect this information to verify
                  eligibility, contact the winner, and send relevant follow-up
                  communications about our services.{" "}
                  <span className="font-medium text-[#171717]">
                    We respect your privacy
                  </span>{" "}
                  and will not share your information with third parties. You
                  may unsubscribe at any time.
                </p>
              </div>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

