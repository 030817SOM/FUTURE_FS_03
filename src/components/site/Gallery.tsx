import { motion } from "framer-motion";
import wine from "@/assets/gallery-wine.jpg";
import pastaMaking from "@/assets/gallery-pasta-making.jpg";
import dining from "@/assets/gallery-dining.jpg";
import hero from "@/assets/hero-restaurant.jpg";

const images = [
  { src: pastaMaking, alt: "Hands shaping fresh pasta", className: "md:row-span-2 md:h-full" },
  { src: dining, alt: "Dining room at dusk", className: "" },
  { src: wine, alt: "Wine being poured at the table", className: "" },
  { src: hero, alt: "Candle-lit tables", className: "md:col-span-2" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="relative py-24 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow left">A Look Inside</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-balance max-w-xl">
              Evenings at <em className="text-[hsl(var(--gold-deep))]">Cafe Picobella Trattoria</em>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            From the first pour to the last espresso — moments from our dining
            room, our kitchen, and the hands that make it all happen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[260px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className={`relative overflow-hidden group ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-smooth)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
