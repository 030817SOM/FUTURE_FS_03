import { motion } from "framer-motion";

export const Quote = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="font-display text-7xl text-[hsl(var(--gold))] leading-none">"</div>
          <blockquote className="mt-4 font-display italic text-3xl md:text-4xl leading-snug text-balance">
            We don't cook to impress. We cook so that, for one evening,
            you forget the week behind you.
          </blockquote>
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="divider-gold" />
            <div className="mt-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Déon Fourie — Chef & Founder
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
