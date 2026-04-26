const socialLinks = [
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M14 8.1V6.7c0-.7.2-1.1 1.2-1.1H17V2.4c-.9-.1-1.8-.2-2.7-.2-2.7 0-4.6 1.7-4.6 4.8v1.1H6.8v3.6h2.9v9.1h3.7v-9.1h3l.5-3.6H14Z" />
      </svg>
    ),
  },
];

export const Footer = () => {
  return (
    <footer className="bg-ink text-ink-foreground border-t border-[hsl(var(--gold))]/15">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">
           Cafe Picobella <span className="italic text-gold">Trattoria</span>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--ink-foreground))]/55 leading-relaxed max-w-xs">
            Handmade Italian cooking on the corner of Vibrant Melville neighborhood of johannesburg since 2014.
          </p>
        </div>

        <div className="text-sm">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--gold-soft))] mb-4">Visit</div>
          <p className="text-[hsl(var(--ink-foreground))]/70 leading-relaxed">
            66 4th Ave, Melville<br />
            Johannesburg, 2092, South Africa<br />
            +27 11 482 4309
          </p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--gold-soft))] mb-4">Follow</div>
          <div className="flex gap-3">
            {socialLinks.map((link, i) => (
              <a key={i} href="#" aria-label={link.label} className="flex h-10 w-10 items-center justify-center border border-[hsl(var(--gold))]/40 text-[hsl(var(--gold-soft))] hover:bg-gold hover:text-ink transition-colors">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[hsl(var(--ink-foreground))]/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[11px] uppercase tracking-[0.25em] text-[hsl(var(--ink-foreground))]/40">
          <span>© {new Date().getFullYear()} Cafe Picobella Trattoria</span>
          <span>Crafted with care</span>
        </div>
      </div>
    </footer>
  );
};
