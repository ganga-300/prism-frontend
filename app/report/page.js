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

  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <Navbar />
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