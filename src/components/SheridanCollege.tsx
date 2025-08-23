import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { GraduationCap, Mail, Phone } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.3 },
});

const SheridanCollege: React.FC = () => {
  // animate the vertical rail length as it enters viewport
  const railRef = useRef<HTMLDivElement>(null);
  const inView = useInView(railRef, { margin: "-20% 0px -20% 0px", once: true });

  return (
    <section
      aria-labelledby="edu-heading"
      className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 py-16 sm:py-24"
    >
      {/* Accent gradient bar */}
      <div className="absolute left-0 right-0 -top-1 mx-auto h-0.5 max-w-9xl rounded-full bg-gradient-to-r from-emerald-400 via-blue-400 to-fuchsia-400" />

      {/* Vertical timeline rail – pushed left for breathing room */}
      <div
        ref={railRef}
        className="pointer-events-none absolute left-1.5 sm:left-8 top-24 bottom-24 hidden sm:flex items-start"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: inView ? "100%" : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-[3px] rounded-full bg-emerald-500/80 shadow-[0_0_18px_rgba(16,185,129,0.45)]"
        />
      </div>

      <div className="relative grid grid-cols-1 gap-10">
        {/* EDUCATION */}
        <motion.article
          {...fadeUp(0.05)}
          className="relative pl-8 sm:pl-16"
        >
          {/* Node dot */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden sm:block absolute -left-[calc(0.5rem_-_10px)] top-8 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-4 ring-white "
          />

          {/* Ambient glow */}
          <div className="pointer-events-none absolute -inset-x-6 -inset-y-2 blur-2xl opacity-[0.12] bg-[radial-gradient(50%_60%_at_50%_0%,#22c55e,transparent_60%)]" />

          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
          >
            <header className="flex items-start gap-3 p-5 sm:p-6 pb-3">
              <div className="h-10 w-10 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 grid place-items-center">
                <GraduationCap className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
              </div>
              <div className="min-w-0">
                <h2
                  id="edu-heading"
                  className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
                >
                  Sheridan College
                </h2>
                <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                  Software Development & Network Engineering
                </p>
              </div>
            </header>

            <dl className="px-5 sm:px-6 pb-5 sm:pb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <InfoTile label="Program" value="SDNE" />
              <InfoTile label="GPA" value="3.8 / 4.0" />
              <InfoTile label="Status" value="In good standing" />
            </dl>
          </motion.div>
        </motion.article>

        {/* CONTACT */}
        <motion.article
          {...fadeUp(0.18)}
          className="relative pl-8 sm:pl-16"
        >
          {/* Node dot */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden sm:block absolute -left-[calc(0.5rem_-_10px)] top-8 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-4 ring-white "
          />

          {/* Ambient glow */}
          <div className="pointer-events-none absolute -inset-x-6 -inset-y-2 blur-2xl opacity-[0.10] bg-[radial-gradient(50%_60%_at_50%_0%,#22c55e,transparent_60%)]" />

          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
          >
            <header className="flex items-start gap-3 p-5 sm:p-6 pb-3">
              <div className="h-10 w-10 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 grid place-items-center">
                <Mail className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Contact
                </h3>
                <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                  Fastest way to reach me for collaborations or references.
                </p>
              </div>
            </header>

            <div className="px-5 sm:px-6 pb-5 sm:pb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="mailto:emailtosolankiom@gmail.com"
                className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  <Mail className="h-4 w-4 text-emerald-600" />
                  emailtosolankiom@gmail.com
                </div>
                <p className="mt-1 text-[12px] text-zinc-500">
                  Click to open your default mail app
                </p>
              </a>

              <a
                href="tel:+12894008975"
                className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition"
              >
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  +1 (289) 400‑8975
                </div>
                <p className="mt-1 text-[12px] text-zinc-500">Tap to call (mobile)</p>
              </a>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
};

export default SheridanCollege;

/* ——— Helpers ——— */

const InfoTile: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-3">
    <dt className="text-[11px] uppercase tracking-wide text-zinc-500">{label}</dt>
    <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{value}</dd>
  </div>
);