export default function Footer() {
  return (
    <footer className="px-6 py-8 flex items-center justify-between border-t border-border-soft">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-ink" />
          <span className="font-sans font-medium text-ink text-sm">Prism</span>
        </div>
        <p className="text-sm text-ink-muted">
          Built by a student tired of getting ghosted.
        </p>
      </div>
      <div className="flex gap-6 text-sm text-ink-muted">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">GitHub</a>
      </div>
    </footer>
  );
}