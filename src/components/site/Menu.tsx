import { motion } from "framer-motion";
import pasta from "@/assets/dish-pasta.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import dessert from "@/assets/dish-dessert.jpg";

const dishes = [
  {
    img: pasta,
    name: "Tagliatelle al Tartufo",
    desc: "Hand-cut egg tagliatelle, brown butter, shaved black truffle, aged parmigiano.",
    price: "32",
    tag: "Signature",
  },
  {
    img: pizza,
    name: "Margherita di Bufala",
    desc: "Wood-fired 72-hour dough, San Marzano, buffalo mozzarella, garden basil.",
    price: "21",
    tag: "Wood Fire",
  },
  {
    img: dessert,
    name: "Tiramisù della Casa",
    desc: "Mascarpone, savoiardi soaked in espresso & Marsala, bitter cocoa.",
    price: "14",
    tag: "Dolce",
  },
];

export const Menu = () => {
  return (
    <section id="menu" className="relative py-24 md:py-36 bg-ink text-ink-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, hsl(var(--gold)) 0, transparent 60%)' }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-[hsl(var(--gold-soft))]">From the Kitchen</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
            Signature <em className="text-gold">plates</em>
          </h2>
          <p className="mt-6 text-base md:text-lg text-[hsl(var(--ink-foreground))]/65 leading-relaxed">
            A small selection of what's on the menu tonight. The full carta
            changes with the season.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {dishes.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img
                  src={d.img}
                  alt={d.name}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-smooth)] group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-[10px] uppercase tracking-[0.25em] text-ink">
                  {d.tag}
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">{d.name}</h3>
                <div className="flex items-baseline gap-1 text-gold">
                  <span className="text-xs">R</span>
                  <span className="font-display text-2xl">{d.price}</span>
                </div>
              </div>
              <div className="mt-2 h-px w-12 bg-[hsl(var(--gold))]/40" />
              <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--ink-foreground))]/65">
                {d.desc}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#reserve" className="btn-outline-gold">View Full Menu</a>
        </div>
      </div>
    </section>
  );
};
