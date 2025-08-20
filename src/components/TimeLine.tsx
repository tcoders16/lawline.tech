// components/TimeLine.tsx

import { motion } from "framer-motion";

interface TimelineEntry {
  year: string;
  title: string;
  problem: string;
  solution: string;
  imageUrl: string;
}

const problemsAndSolutions: TimelineEntry[] = [
  {
    year: "2023",
    title: "Voice Invoice Agent",
    problem:
      "A jewelry store struggled to find invoices buried in random folders and needed an offline solution.",
    solution:
      "Built a Whisper-powered voice assistant that retrieves invoices via fuzzy natural language search. Fully local.",
    imageUrl: "/images/voice-agent.jpeg",
  },
  {
    year: "2024",
    title: "Lost & Found – Ontario Transit",
    problem:
      "Commuters lost items with no way to match them back. Manual logging, paper tags, and no automation.",
    solution:
      "Created an AI-based system with QR tagging, NLP + image matching using Firestore and React. Deployed in under 10 days.",
    imageUrl: "/images/lost-found.jpeg",
  },
  {
    year: "2025",
    title: "Lawline AI",
    problem:
      "Law firms wasted paralegal hours writing updates, memos, and summaries manually.",
    solution:
      "Built a local RAG system that turns legal facts into ready-to-send communication, preserving tone and privacy.",
    imageUrl: "/images/lawline-ai.jpeg",
  },
  {
    year: "2025",
    title: "Vadtal Donor Platform",
    problem:
      "Temple admins had to retype donor info every time and lacked proper filtering or history.",
    solution:
      "Built a donor system with smart autofill, live dashboards, and admin filters across mobile and web.",
    imageUrl: "/images/vadtal.jpeg",
  },
];

const TimeLine = () => {
  return (
    <div className="space-y-16 border-l-4 border-green-500 pl-6 relative">
      {problemsAndSolutions.map((entry, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-9.5 top-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>

          {/* Timeline Content */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
            <div className="flex-1">
              <p className="text-sm text-gray-500 font-medium mb-1">{entry.year}</p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{entry.title}</h3>
              <p className="text-gray-700 text-base mb-2">
                <strong className="text-gray-900">Problem:</strong> {entry.problem}
              </p>
              <p className="text-gray-700 text-base">
                <strong className="text-gray-900">Solution:</strong> {entry.solution}
              </p>
            </div>
            <img
              src={entry.imageUrl}
              alt={entry.title}
              className="w-full lg:w-80 rounded-xl shadow-md object-cover aspect-[3/2] mt-4 lg:mt-0"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TimeLine;