"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}