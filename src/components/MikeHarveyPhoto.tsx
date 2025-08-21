// src/components/MikeHarveyPhoto.tsx
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Import the photo directly (recommended way with Vite/React)
import mikeHarvey from "/MikeHarvey/MikeHarvey.jpeg"; 
// ^ Put MikeHarvey.jpeg inside src/assets/

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
        <img
          src={mikeHarvey}
          alt="Mike & Harvey"
          className="w-full h-auto object-cover select-none"
        />

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
          <div className="relative inline-flex items-start gap-3 rounded-2xl border border-green-200 bg-white/90 backdrop-blur-sm px-4 py-3 shadow-sm transition-all duration-300 group-hover:translate-y-0 translate-y-2">
            <div className="h-10 w-1.5 rounded-full bg-green-600" />
            <div className="text-left">
              <p className="chakra-petch-regular text-sm md:text-base font-semibold text-zinc-900">
                "Turn legal facts into instant, clear communication."
              </p>
              <p className="text-xs text-zinc-500">Lawline aesthetic · Tap to expand</p>
            </div>
          </div>
        </div>
      </motion.button>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
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
              className="relative w-[92vw] md:w-[80vw] lg:w-[70vw] max-h-[85vh] rounded-2xl overflow-hidden bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={mikeHarvey}
                alt="Mike & Harvey"
                className="w-full h-full object-contain bg-black"
              />

              {/* Caption stripe */}
              <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-1.5 bg-green-600 rounded-full" />
                  <div className="text-white">
                    <p className="chakra-petch-regular text-sm md:text-base font-semibold">
                      Mike & Harvey — Lawline showcase
                    </p>
                    <p className="text-xs text-zinc-300">
                      "Turn legal facts into instant, clear communication."
                    </p>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white p-2 shadow"
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