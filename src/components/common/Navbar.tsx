"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Our Approach", href: "/#approach" },
  { label: "Industries We Serve", href: "/#industries" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-md supports-backdrop-filter:bg-white/90">
      <div className="mx-auto flex w-full max-w-6xl flex-col md:flex-row md:items-center md:justify-between px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex flex-col transition-opacity active:opacity-70"
            onClick={closeMenu}
          >
            <span
              className="text-xl font-bold tracking-tight text-[#171717]"
              style={{
                fontFamily:
                  '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              IVB DIGITAL
            </span>
            <span className="text-xs font-normal tracking-wide text-[#4a4a4a]">
              Innovate. Visualize. Build.
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-3 text-[#171717] transition-all active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B46C1] md:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6 transition-transform duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#2b2b2b] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#6B46C1] focus-visible:text-[#6B46C1]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#6B46C1] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4B2D9C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B46C1]"
          >
            Book a Call
          </Link>
        </div>
        {/* Mobile Dropdown Menu */}
        <div
          id="primary-navigation"
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-zinc-200 bg-white py-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-xl px-4 py-4 text-base font-medium text-[#171717] transition-all active:scale-[0.98] active:bg-zinc-100 focus-visible:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B46C1]"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 px-4">
              <Link
                href="/#contact"
                className="flex w-full items-center justify-center rounded-lg bg-[#6B46C1] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#4B2D9C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B46C1]"
                onClick={closeMenu}
              >
                Book a Call
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
