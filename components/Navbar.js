export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-border-soft">
      <div className="flex items-center gap-2">
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-ink" />
        <span className="font-sans font-medium text-ink">Prism</span>
      </div>
      <div className="hidden sm:flex gap-8 text-ink-muted text-sm">
        <a href="/#how-it-works">How it works</a>
        <a href="/#about">About</a>
      </div>
      <button className="bg-ink text-cream text-sm font-medium px-4 py-2 rounded-md">
        Try free
      </button>
    </nav>
  );
}