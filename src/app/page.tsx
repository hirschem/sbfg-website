'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B12] text-white">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100/80">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_6px_rgba(110,231,183,0.12)]" />
            Website in progress
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Splash Boyz Financial Group
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100/70 md:text-lg">
            We’re building a polished new site. Check back soon.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="mailto:admin@sbfg.biz"
              className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15"
            >
              Contact: admin@sbfg.biz
            </Link>

            <span className="rounded-xl border border-white/10 bg-transparent px-5 py-3 text-sm text-blue-100/70">
              Coming soon
            </span>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-blue-100/50">
            © {new Date().getFullYear()} Splash Boyz Financial Group. All rights reserved.
            <div className="mt-2">
              This website is for informational purposes only and does not constitute financial advice.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
