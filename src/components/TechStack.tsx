// src/components/TechStack.tsx
import React from "react";
import { motion } from "framer-motion";
import ToolboxStory from "./ToolboxStory";

type Category = {
  icon: string;
  title: string;
  tools: string[];
};

const categories: Category[] = [
  {
    icon: "💡",
    title: "AI / ML",
    tools: [
      "OpenAI Whisper",
      "LangChain",
      "Pinecone",
      "ChromaDB",
      "OpenAI Vision",
      "face-api.js",
      "RAG",
      "NLP Matching",
    ],
  },
  {
    icon: "📱",
    title: "Mobile / iOS",
    tools: ["SwiftUI", "UIKit", "Xcode", "CoreML", "React Native", "Expo", "Apple HIG"],
  },
  {
    icon: "🧠",
    title: "Languages",
    tools: ["TypeScript", "Python", "Swift", "C++", "Bash", "JavaScript", "SQL"],
  },
  {
    icon: "🎯",
    title: "Frontend",
    tools: ["React", "Vite", "Tailwind CSS", "Next.js", "HTML", "CSS", "Framer Motion"],
  },
  {
    icon: "🛠️",
    title: "Backend",
    tools: ["Node.js", "Express", "Flask", "GraphQL", "WebSockets", "REST", "Prisma"],
  },
  {
    icon: "🗃️",
    title: "Databases & Infra",
    tools: ["MongoDB", "Firebase", "Cloud Firestore", "Docker", "GitHub Actions", "Vercel", "Render"],
  },
  {
    icon: "🧰",
    title: "Developer Tools",
    tools: ["Postman", "Xcode", "Android Studio", "VS Code", "Figma", "Zod", "Jest", "ESLint", "Prettier", "Terminal"],
  },
];

// TS-safe variants (Framer Motion v7)
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const card = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const TechStack: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-20 sm:pt-24">
      {/* Accent bar */}
      <div className="absolute left-0 right-0 -top-1 mx-auto h-1.5 max-w-6xl rounded-full bg-gradient-to-r from-emerald-400 via-blue-400 to-fuchsia-400" />

      {/* Context intro / story */}
      <ToolboxStory />

      {/* Illusion line */}
      <p className="relative mt-8 mb-6 text-center text-[15px] italic ">
        <span className="px-3 py-1 underline text-md">
          “Not every circle you see is real—some are illusions, like between these chips.”
        </span>
      </p>

      {/* Ambient page glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_40%_0%,rgba(16,185,129,0.10),transparent_60%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3"
      >
        {categories.map((c) => (
          <motion.article
            key={c.title}
            variants={card}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-zinc-900/80 text-zinc-100
                       shadow-sm backdrop-blur-md hover:shadow-md dark:border-zinc-800"
          >
            {/* Sheridan-style card glow */}
            <div className="pointer-events-none absolute -inset-x-10 -top-16 h-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100
                            bg-[radial-gradient(40%_60%_at_50%_0%,rgba(16,185,129,0.35),transparent_65%)]" />

            <header className="relative flex items-center gap-2.5 px-5 pt-5 sm:px-6">
              <span className="text-2xl leading-none select-none">{c.icon}</span>
              <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
            </header>

            <div className="relative px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
              <ul className="flex flex-wrap gap-2.5">
                {c.tools.map((t) => (
                  <Chip key={t} label={t} />
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;

/* ——— Reusable Sheridan‑style chip ——— */
const Chip: React.FC<{ label: string }> = ({ label }) => (
  <motion.li whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
    <button
      type="button"
      aria-label={label}
      className="
        select-none rounded-full border px-3 py-1.5 text-sm font-medium
        border-zinc-700/70 bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-100
        shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] hover:border-zinc-600 hover:from-emerald-600/15 hover:to-emerald-600/8
        active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40
      "
    >
      {label}
    </button>
  </motion.li>
);