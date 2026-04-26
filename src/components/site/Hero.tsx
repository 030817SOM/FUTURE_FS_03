import { motion } from "framer-motion";
import heroImg from "@/assets/hero-restaurant.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Candle-lit interior of Trattoria Lumière at night"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow text-[hsl(var(--gold-soft))] [&::before]:bg-[hsl(var(--gold))] [&::after]:bg-[hsl(var(--gold))]"
        >
          A Neighborhood Cafe Picobella Trattoria
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="mt-8 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-[hsl(var(--ink-foreground))] text-balance max-w-4xl"
        >
          Where evenings <em className="text-gold">linger</em>
          <br />
          and pasta is made <em className="text-gold">by hand.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 max-w-xl text-base md:text-lg text-[hsl(var(--ink-foreground))]/75 leading-relaxed"
        >
          Rustic Italian cooking, a candle on every table, and a wine list curated
          like a love letter to the old country.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a href="#reserve" className="btn-gold">Reserve a Table</a>
          <a href="#menu" className="btn-outline-gold">View the Menu</a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(var(--gold-soft))]"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="h-12 w-px bg-[hsl(var(--gold))] origin-top animate-pulse" />
      </motion.div>
    </section>
  );
};
