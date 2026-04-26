import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export const Reserve = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Reservation request sent — we'll confirm shortly.");
  };

  return (
    <section id="reserve" className="relative py-24 md:py-36 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="eyebrow text-[hsl(var(--gold-soft))]">Reservations</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
            Save your <em className="text-gold">seat</em>
          </h2>
          <p className="mt-6 text-[hsl(var(--ink-foreground))]/65 max-w-xl mx-auto leading-relaxed">
            We open at 8A.M. Monday through Sunday. Reserve below — we'll confirm
            within the hour.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-14 grid gap-5 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <div className="grid sm:grid-cols-3 gap-5">
            <Field label="Date" name="date" type="date" required />
            <Field label="Time" name="time" type="time" required />
            <Field label="Guests" name="guests" type="number" min={1} max={12} defaultValue={2} required />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--gold-soft))] mb-3">
              Special requests
            </label>
            <textarea
              name="notes"
              rows={3}
              className="w-full bg-transparent border-b border-[hsl(var(--ink-foreground))]/25 focus:border-gold outline-none py-3 text-[hsl(var(--ink-foreground))] placeholder:text-[hsl(var(--ink-foreground))]/30 transition-colors"
              placeholder="Anniversary, allergies, window seat…"
            />
          </div>
          <div className="pt-6 text-center">
            <button type="submit" className="btn-gold" disabled={submitted}>
              {submitted ? "Request Sent" : "Request Reservation"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label
      htmlFor={name}
      className="block text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--gold-soft))] mb-3"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      {...rest}
      className="w-full bg-transparent border-b border-[hsl(var(--ink-foreground))]/25 focus:border-gold outline-none py-3 text-[hsl(var(--ink-foreground))] placeholder:text-[hsl(var(--ink-foreground))]/30 transition-colors [color-scheme:dark]"
    />
  </div>
);
