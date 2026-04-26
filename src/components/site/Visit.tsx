import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

const hours = [
  ["Monday", "Closed"],
  ["Tuesday – Thursday", "5pm – 10pm"],
  ["Friday – Saturday", "5pm – 11:30pm"],
  ["Sunday", "5pm – 9:30pm"],
];

export const Visit = () => {
  return (
    <section id="visit" className="relative py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="eyebrow left">Visit Us</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance">
            Find us on the <em className="text-[hsl(var(--gold-deep))]">corner.</em>
          </h2>
          <div className="divider-gold mt-8" />

          <div className="mt-10 space-y-8">
            <Info icon={<MapPin size={18} />} label="Address">
              66 4th Ave, Melville<br />Johannesburg, 2092, South Africa
            </Info>
            <Info icon={<Phone size={18} />} label="Reservations">
              +27 11 482 4309<br />
              <a href="mailto:cafe@picobella.it" className="text-[hsl(var(--gold-deep))] hover:text-gold transition-colors">
                cafe@picobella.it
              </a>
            </Info>
            <Info icon={<Clock size={18} />} label="Hours">
              <dl className="space-y-1.5">
                {hours.map(([d, h]) => (
                  <div key={d} className="flex justify-between gap-6 max-w-sm">
                    <dt>{d}</dt>
                    <dd className="text-muted-foreground">{h}</dd>
                  </div>
                ))}
              </dl>
            </Info>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative min-h-[420px] overflow-hidden shadow-elegant"
        >
          <iframe
            title="Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=28.273%2C-26.176%2C28.279%2C-26.171&layer=mapnik&marker=-26.1735%2C28.276"
            className="absolute inset-0 h-full w-full grayscale-[60%] contrast-110"
            loading="lazy"
          />
          <div className="absolute inset-0 ring-1 ring-[hsl(var(--gold))]/30 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

const Info = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <div className="flex gap-5">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[hsl(var(--gold))] text-[hsl(var(--gold-deep))]">
      {icon}
    </div>
    <div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">{label}</div>
      <div className="text-base leading-relaxed">{children}</div>
    </div>
  </div>
);
