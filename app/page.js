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
    </main>
  );
}