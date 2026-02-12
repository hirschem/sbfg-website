'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#001428] via-[#001f3f] to-[#002850] relative overflow-hidden text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-cyan-400 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-20 border-b border-blue-800/40 bg-[#001428]/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-4">
            <Image
              src="/images/logo-white.png"
              alt="Splash Boyz Financial Group Logo"
              width={44}
              height={44}
              className="drop-shadow-xl"
              priority
            />
            <div className="leading-tight">
              <div className="text-sm tracking-[0.2em] text-blue-200/80 uppercase">
                SBFG
              </div>
              <div className="text-base md:text-lg font-semibold">
                Splash Boyz Financial Group
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {[
              ["Home", "#home"],
              ["About", "#about"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-blue-100/80 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-blue-800/40 bg-[#001428]/95 backdrop-blur-md">
            <div className="px-6 py-4 space-y-3">
              {[
                ["Home", "#home"],
                ["About", "#about"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-blue-100/80 hover:text-white transition-colors py-2"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-blue-100/80">
                <span className="h-2 w-2 rounded-full bg-cyan-400/80" />
                Trusted guidance • Clear strategy • Long-term planning
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                Navigating
                <br />
                for a <span className="text-white">Better</span>
                <br />
                <span className="text-blue-200">Financial Future</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-blue-100/80 max-w-xl mx-auto md:mx-0">
                Personalized wealth strategies, retirement planning, and advisory
                services designed to help you move forward with confidence.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#about"
                  className="inline-flex justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-semibold shadow-lg hover:shadow-blue-500/30 transition"
                >
                  Learn More
                </a>
              </div>

              {/* Trust chips */}
              <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
                {["Property Investments", "Business Strategy", "Wealth Savings"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-xs text-blue-100/70 border border-white/10 bg-white/5 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Boat / Mark */}
            <div className="relative flex justify-center md:justify-end">
              <div className="absolute inset-0 bg-blue-400/15 blur-3xl rounded-full scale-75" />
              <Image
                src="/images/boat-white.png"
                alt="Sailboat"
                width={504}
                height={504}
                className="relative drop-shadow-2xl opacity-95"
                priority
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">About SBFG</h2>
            <p className="mt-4 text-blue-100/80 leading-relaxed">
              We help individuals and businesses navigate complex financial decisions with a steady hand and a clear plan.
              Our approach is built on transparency, accountability, and long-term relationships.
            </p>
            <p className="mt-4 text-blue-100/70 leading-relaxed">
              Whether you&apos;re preparing for retirement, optimizing investments, or building a plan from scratch, we meet you
              where you are — then map the next steps together.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <ServiceCard
              title="Wealth Management"
              desc="Investment strategies aligned to your timeline, risk tolerance, and priorities."
              badge="Invest"
            />
            <ServiceCard
              title="Retirement Planning"
              desc="Build a plan that supports your lifestyle goals — now and decades from now."
              badge="Retire"
            />
            <ServiceCard
              title="Strategic Business Financial Guidance"
              desc="Clear decision support across budgeting, savings, and long-term financial health."
              badge="SBFG"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#000d1a]/40 backdrop-blur-md relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-blue-100/60">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Splash Boyz Financial Group. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            *This website is for informational purposes only and does not constitute financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  title,
  desc,
  badge,
}: {
  title: string;
  desc: string;
  badge: string;
}) {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 hover:bg-white/7 transition">
      <div className="flex items-center justify-between">
        <div className="text-xs tracking-[0.25em] uppercase text-blue-200/70">
          {badge}
        </div>
        <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
          <span className="text-blue-100/80 text-sm">↗</span>
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-blue-100/70 leading-relaxed">{desc}</p>
    </div>
  );
}
