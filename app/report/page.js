"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ReportPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    fetch("http://localhost:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return (
      <main className="min-h-screen bg-cream flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-ink-muted">Running checks on this listing...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !data || data.status !== "success") {
    return (
      <main className="min-h-screen bg-cream flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-ink-muted">
            Something went wrong analyzing this listing. Please try again.
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  const { job, verdict } = data;

  const verdictStyles = {
    yes: {
      label: "Worth applying",
      dot: "bg-verified",
      bg: "bg-verified/10",
    },
    verify_first: {
      label: "Verify before applying",
      dot: "bg-suspected",
      bg: "bg-suspected/10",
    },
    no: {
      label: "Skip this one",
      dot: "bg-skip",
      bg: "bg-skip/10",
    },
  };

  const style = verdictStyles["verify_first"];

    return (
    <main className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <div className="flex-1 px-6 py-12 max-w-3xl mx-auto w-full">

        <div className={`${style.bg} border border-border-soft rounded-md p-6 mb-6`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-3 h-3 rounded-full ${style.dot}`} />
            <span className="text-sm font-medium uppercase tracking-wide text-ink">
              {style.label}
            </span>
          </div>
          <h1 className="font-serif text-2xl text-ink">{verdict.headline}</h1>
        </div>

        <div className={`bg-card border border-border-soft border-l-4 ${verdict.worth_applying === "no" ? "border-l-skip" : verdict.worth_applying === "yes" ? "border-l-verified" : "border-l-suspected"} rounded-md p-5 mb-6`}>
          <p className="text-ink-muted leading-relaxed">{verdict.summary}</p>
        </div>

        <div className="bg-card border border-border-soft rounded-md flex flex-wrap divide-x divide-border-soft mb-6">
          <div className="px-5 py-4">
            <p className="text-xs text-ink-muted uppercase tracking-wide">Company</p>
            <p className="font-medium text-ink">{job.company_name}</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs text-ink-muted uppercase tracking-wide">Role</p>
            <p className="font-medium text-ink">{job.role_title}</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs text-ink-muted uppercase tracking-wide">Location</p>
            <p className="font-medium text-ink">{job.location}</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs text-ink-muted uppercase tracking-wide">Stipend</p>
            <p className="font-medium text-ink">{job.stipend || "Not specified"}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border-soft rounded-md p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 text-sm font-medium text-verified">
                <span className="w-2 h-2 rounded-full bg-verified" />
                Verified
              </span>
              <span className="text-xs bg-strip text-ink-muted px-2 py-0.5 rounded-full">
                {verdict.verified.length}
              </span>
            </div>
            <ul className="space-y-2">
              {verdict.verified.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-verified mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border-soft rounded-md p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 text-sm font-medium text-suspected">
                <span className="w-2 h-2 rounded-full bg-suspected" />
                Suspected
              </span>
              <span className="text-xs bg-strip text-ink-muted px-2 py-0.5 rounded-full">
                {verdict.suspected.length}
              </span>
            </div>
            <ul className="space-y-2">
              {verdict.suspected.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-suspected mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border-soft rounded-md p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 text-sm font-medium text-unchecked">
                <span className="w-2 h-2 rounded-full bg-unchecked" />
                Could not check
              </span>
              <span className="text-xs bg-strip text-ink-muted px-2 py-0.5 rounded-full">
                {verdict.could_not_check.length}
              </span>
            </div>
            <ul className="space-y-2">
              {verdict.could_not_check.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-unchecked mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-strip rounded-md p-5 mb-10 flex items-start gap-4">
          <span className="bg-ink text-cream w-8 h-8 rounded-md flex items-center justify-center shrink-0">
            →
          </span>
          <p className="text-ink text-lg pt-1">{verdict.action}</p>
        </div>

        <div className="flex justify-center">
          <a
            href="/"
            className="bg-ink text-cream font-medium px-6 py-3 rounded-md"
          >
            Analyze another internship →
          </a>
        </div>

      </div>
      <Footer />
    </main>
  );

   
}