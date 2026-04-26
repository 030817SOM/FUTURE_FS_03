import { motion } from "framer-motion";
import chefImg from "@/assets/chef.jpg";

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-2 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative overflow-hidden shadow-elegant">
            <img
              src={chefImg}
              alt="Chef Marco Lumière plating a dish in the kitchen"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-[560px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold px-8 py-6 shadow-soft">
            <div className="font-display text-3xl text-ink leading-none">10+</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-ink mt-2">
              Years on the corner
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="eyebrow left">Our Story</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight text-balance">
            A small kitchen with a <em className="text-[hsl(var(--gold-deep))]">long memory.</em>
          </h2>
          <div className="divider-gold mt-8" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Café Picobella Trattoria specializes in traditional Italian dishes inspired by regional 
            recipes from Palermo to Milan. Signature offerings include wood-fired oven pizzas with thin, 
            crispy crusts, fresh handmade pastas like fettuccine Alfredo and penne arrabbiata, and classic 
            mains such as lamb shank and seafood platters. The kitchen accommodates dietary preferences with wheat- 
            and gluten-free pizza bases. Desserts such as tiramisu and panna cotta provide an indulgent finale.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Regular midweek specials, including half-price pasta Mondays and pizza Wednesdays, 
            are popular among patrons. The restaurant’s combination of hearty food, affordable prices, 
            and a friendly, informal vibe contributes to its reputation as one of Melville’s enduring dining landmarks.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { n: "Daily", l: "Fresh Pasta" },
              { n: "120+", l: "Italian Wines" },
              { n: "1894", l: "House Recipe" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl text-[hsl(var(--gold-deep))]">{s.n}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
