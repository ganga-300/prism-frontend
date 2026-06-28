export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-border-soft">
        <div className="flex items-center gap-2">
          <div
            className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-ink"
          />
          <span className="font-sans font-medium text-ink">Prism</span>
        </div>
        <div className="hidden sm:flex gap-8 text-ink-muted text-sm">
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </div>
        <button className="bg-ink text-cream text-sm font-medium px-4 py-2 rounded-md">
          Try free
        </button>
      </nav>

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

        <form className="mt-8 flex w-full max-w-xl gap-2">
          <input
            type="text"
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
    </main>
  );
}