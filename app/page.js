"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {

  const [url, setUrl] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!url.trim()) return;
    router.push(`/report?url=${encodeURIComponent(url)}`);
  }
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="flex flex-col items-center text-center px-6 py-24">
        <span className="text-xs font-medium text-ink-muted border border-border-soft rounded-full px-3 py-1 mb-6">
          ● AI-powered internship investigation
        </span>

        <h1 className="font-serif text-5xl sm:text-6xl text-ink leading-tight">
          Stop applying to jobs
          <br />
          <span className="italic">that were never real.</span>
        </h1>

        <p className="mt-6 max-w-xl text-ink-muted text-lg">
          Prism investigates any internship posting — checking how old it
          really is, whether the company actually hires, and if the listing
          has been quietly reposted. Built for Indian students.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-xl gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste an Internshala internship URL..."
            className="flex-1 bg-card border border-border-soft rounded-md px-4 py-3 text-ink placeholder:text-ink-muted outline-none"
          />
          <button
            type="submit"
            className="bg-ink text-cream font-medium px-6 py-3 rounded-md"
          >
            Analyze
          </button>
        </form>

        <p className="mt-3 text-sm text-ink-muted">
          No account needed · Takes about 30 seconds
        </p>
      </section>

      <div className="bg-strip py-3 px-6 overflow-x-auto whitespace-nowrap text-sm text-ink-muted">
        <span>Most students apply to 50+ internships before hearing back</span>
        <span className="mx-3">·</span>
        <span>Many listings stay live for months after being filled</span>
        <span className="mx-3">·</span>
        <span>Some postings are reused across platforms with different dates</span>
      </div>

      <section id="how-it-works" className="px-6 py-20 max-w-5xl mx-auto">
        <p className="text-xs font-medium text-ink-muted tracking-wide uppercase mb-2">
          How it works
        </p>
        <h2 className="font-serif text-3xl text-ink mb-10">
          Three checks before you apply.
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-card border border-border-soft rounded-md p-6">
            <p className="text-3xl font-serif text-border-soft mb-4">01</p>
            <h3 className="font-medium text-ink mb-2">Paste any internship URL</h3>
            <p className="text-sm text-ink-muted">
              Works with Internshala internship listings.
            </p>
          </div>

          <div className="bg-card border border-border-soft rounded-md p-6">
            <p className="text-3xl font-serif text-border-soft mb-4">02</p>
            <h3 className="font-medium text-ink mb-2">Three independent checks run</h3>
            <p className="text-sm text-ink-muted">
              We trace the posting's real history, check for duplicate
              listings, and investigate the company itself.
            </p>
          </div>

          <div className="bg-card border border-border-soft rounded-md p-6">
            <p className="text-3xl font-serif text-border-soft mb-4">03</p>
            <h3 className="font-medium text-ink mb-2">Get a clear answer</h3>
            <p className="text-sm text-ink-muted">
              Worth applying, verify first, or skip — with the specific
              evidence behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-strip px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium text-ink-muted tracking-wide uppercase mb-2">
            What we check
          </p>
          <h2 className="font-serif text-3xl text-ink mb-10">
            Three investigations. One honest answer.
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border-soft rounded-md p-6">
              <h3 className="font-medium text-ink mb-2">Posting history</h3>
              <p className="text-sm text-ink-muted">
                Finds when a listing was actually first posted, and whether
                it's been quietly reposted to look new.
              </p>
            </div>

            <div className="bg-card border border-border-soft rounded-md p-6">
              <h3 className="font-medium text-ink mb-2">Duplicate detection</h3>
              <p className="text-sm text-ink-muted">
                Checks if the same listing — sometimes with stipend or
                requirements quietly changed — appears elsewhere.
              </p>
            </div>

            <div className="bg-card border border-border-soft rounded-md p-6">
              <h3 className="font-medium text-ink mb-2">Company investigation</h3>
              <p className="text-sm text-ink-muted">
                Looks at the company's real hiring history, online presence,
                and whether anything about their profile doesn't add up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 max-w-5xl mx-auto grid sm:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-xs font-medium text-ink-muted tracking-wide uppercase mb-2">
            Our approach
          </p>
          <h2 className="font-serif text-3xl text-ink mb-6">
            We don&apos;t guess. We show our evidence.
          </h2>
          <p className="text-ink-muted">
            Most tools give you a confidence score and call it a day. We
            don&apos;t — because a number can&apos;t tell you why. Instead,
            Prism shows you exactly what was verified, what looks suspicious,
            and what we simply couldn&apos;t check. You decide, with the full
            picture.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="bg-card border border-border-soft rounded-md p-4">
            <p className="text-sm font-medium text-verified mb-2">● Verified</p>
            <p className="text-sm text-ink-muted">
              Company has hired 11 people since 2020
            </p>
            <p className="text-sm text-ink-muted">
              LinkedIn page matches the company name
            </p>
          </div>

          <div className="bg-card border border-border-soft rounded-md p-4">
            <p className="text-sm font-medium text-suspected mb-2">● Suspected</p>
            <p className="text-sm text-ink-muted">
              Company name doesn&apos;t match its own description
            </p>
            <p className="text-sm text-ink-muted">
              Listing has the same text as another posting from 4 months ago
            </p>
          </div>

          <div className="bg-card border border-border-soft rounded-md p-4">
            <p className="text-sm font-medium text-unchecked mb-2">● Could not check</p>
            <p className="text-sm text-ink-muted">
              No LinkedIn presence found for this recruiter
            </p>
            <p className="text-sm text-ink-muted">
              Perks offered by the company
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream px-6 py-24 text-center">
        <h2 className="font-serif text-4xl mb-3">Know before you apply.</h2>
        <p className="text-cream/70 mb-8">
          Paste a URL. Get a clear answer in under a minute.
        </p>
        <button className="bg-cream text-ink font-medium px-6 py-3 rounded-md">
          Analyze an internship →
        </button>
      </section>

      <Footer />
      
    </main>
  );
}