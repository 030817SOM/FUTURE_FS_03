import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--ink))]/70 to-transparent pointer-events-none" />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:py-7">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-xl md:text-2xl text-[hsl(var(--ink-foreground))]">
           Cafe Picobella <span className="italic text-gold">Trattoria</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[hsl(var(--gold-soft))] mt-1">
            Est. 2014
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--ink-foreground))]/85 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a href="#reserve" className="btn-gold !py-3 !px-6">Reserve</a>
        </div>

        <button
          className="md:hidden text-[hsl(var(--ink-foreground))] p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-ink/95 backdrop-blur-md px-6 py-8 flex flex-col gap-6"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-[hsl(var(--ink-foreground))]"
              >
                {l.label}
              </a>
            ))}
            <a href="#reserve" onClick={() => setOpen(false)} className="btn-gold self-start">
              Reserve a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
