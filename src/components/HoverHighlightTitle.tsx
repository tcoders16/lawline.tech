// src/components/HeroTitle.tsx
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Animation container with staggered children
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Each word fades up individually
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HeroTitle = () => {
  const title = "Agentic AI for Legal Teams";
  const words = title.split(" ");

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-snug"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={fadeUp}
          className="inline-block mr-2"
        >
          {word === "Agentic" || word === "AI" ? (
            <span className="bg-gradient-to-r from-emerald-100 to-emerald-50 px-2 py-1 rounded-md text-emerald-800 shadow-sm">
              {word}
            </span>
          ) : (
            <span>{word}</span>
          )}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default HeroTitle;