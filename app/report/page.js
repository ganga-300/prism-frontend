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

  const style = verdictStyles[verdict.worth_applying] || verdictStyles.verify_first;

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <div className={`${style.bg} border border-border-soft rounded-md p-6 mb-6 flex items-start justify-between`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-3 h-3 rounded-full ${style.dot}`} />
              <span className="text-sm font-medium uppercase tracking-wide text-ink">
                {style.label}
              </span>
            </div>
            <h1 className="font-serif text-2xl text-ink">{verdict.headline}</h1>
          </div>
        </div>
        <div className={`bg-card border border-border-soft border-l-4 ${verdict.worth_applying === "no" ? "border-l-skip" : verdict.worth_applying === "yes" ? "border-l-verified" : "border-l-suspected"} rounded-md p-5 mb-6`}>
          <p className="text-ink-muted leading-relaxed">{verdict.summary}</p>
        </div>
      <div className="flex-1 px-6 py-12 max-w-3xl mx-auto w-full">
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
            <p className="font-medium text-ink">{job.stipend}</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}