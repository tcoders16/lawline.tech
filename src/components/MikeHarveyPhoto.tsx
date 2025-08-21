// src/components/MikeHarveyPhoto.tsx
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X } from "lucide-react";
import mikeHarvey from "/MikeHarvey/MikeHarvey.jpeg";

// Easing as cubic-bezier to satisfy TS
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ----- Variants (typed) -----
const overlayVars: Variants = {
  initial: { y: 10, opacity: 0 },
  hover:   { y: 0, opacity: 1, transition: { duration: 0.28, ease: EASE_OUT } },
  show:    { y: 0, opacity: 1, transition: { duration: 0.28, ease: EASE_OUT } },
};

const captionParent: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const bubble: Variants = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

export default function MikeHarveyPhoto() {
  const [open, setOpen] = useState(false);

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onKey]);

  return (
    <>
      {/* Card */}
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="group relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
        aria-label="Expand Mike & Harvey photo"
      >
        <img src={mikeHarvey} alt="Mike & Harvey" className="w-full h-auto object-cover select-none" />

        {/* Overlay with animation */}
        <motion.div
          variants={overlayVars}
          initial="initial"
          animate="show"
          whileHover="hover"
          className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-5"
        >
          <div className="relative inline-flex items-start gap-3 rounded-2xl border border-emerald-200 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm">
            <div className="h-8 sm:h-10 w-1.5 rounded-full bg-emerald-600" />
            <div className="text-left">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-emerald-700 font-semibold mb-1">
                Mike (Lawline) → Harvey
              </p>
              <p className="chakra-petch-regular text-[13px] sm:text-sm md:text-base font-semibold text-zinc-900">
                “Pulled the latest facts and drafted your client update. Want me to send?”
              </p>
              <p className="text-[11px] sm:text-xs text-zinc-500 mt-1">Tap to expand · Preview conversation</p>
            </div>
            {/* sheen */}
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-2xl"
              initial={{ background: "linear-gradient(110deg,transparent 0%,transparent 45%,rgba(255,255,255,0.25) 50%,transparent 55%,transparent 100%)", x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 1.2, ease: EASE_OUT }}
            />
          </div>
        </motion.div>
      </motion.button>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="relative w-auto max-w-[92vw] sm:max-w-[88vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] max-h-[82vh] rounded-2xl overflow-hidden bg-zinc-900 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={mikeHarvey} alt="Mike & Harvey" className="max-w-full max-h-[82vh] object-contain bg-black" />

              {/* Caption with staggered bubbles */}
              <motion.div
                variants={captionParent}
                initial="hidden"
                animate="show"
                className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 sm:p-4"
              >
                <div className="flex items-start gap-3 max-h-[32vh] overflow-y-auto pr-1">
                  <div className="h-8 sm:h-10 w-1.5 bg-emerald-600 rounded-full shrink-0" />
                  <div className="text-white w-full">
                    <p className="chakra-petch-regular text-sm sm:text-base font-semibold mb-2 text-center sm:text-left">
                      Mike (Lawline) & Harvey — live draft
                    </p>

                    <div className="space-y-2 text-[12.5px] sm:text-[13px] leading-relaxed">
                      <motion.div variants={bubble} className="max-w-[95%] md:max-w-[75%] rounded-lg bg-white/10 px-3 py-2">
                        <span className="text-emerald-300 font-semibold">Mike [Lawline]:</span>{" "}
                        Pulled the latest facts from Email/Statements. Drafted a client update—tone matches last memo. Want me to send?
                      </motion.div>
                      <motion.div variants={bubble} className="max-w-[95%] md:max-w-[75%] rounded-lg bg-emerald-600/20 px-3 py-2 ml-auto">
                        <span className="text-emerald-300 font-semibold">Harvey:</span>{" "}
                        Keep it crisp. Add the settlement number and nudge them for the docs.
                      </motion.div>
                      <motion.div variants={bubble} className="max-w-[95%] md:max-w-[75%] rounded-lg bg-white/10 px-3 py-2">
                        <span className="text-emerald-300 font-semibold">Mike [Lawline]:</span>{" "}
                        Done—subject set, dates confirmed, and a polite reminder queued. Ready to send on your approval.
                      </motion.div>
                    </div>

                    <motion.p variants={bubble} className="text-[11px] sm:text-xs text-zinc-300 mt-2 text-center sm:text-left">
                      “Turn legal facts into instant, clear communication.”
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              <button
                onClick={() => setOpen(false)}
                className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white p-2 shadow"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-zinc-700" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}