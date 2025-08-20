// components/TechStack.tsx
import { motion } from "framer-motion";
import ToolboxStory from "./ToolboxStory";

const categories = [
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
      "Retrieval-Augmented Generation",
      "NLP Matching",
    ],
  },
  {
    icon: "📱",
    title: "Mobile / iOS",
    tools: [
      "SwiftUI",
      "UIKit",
      "Xcode",
      "CoreML",
      "React Native",
      "Expo",
      "Apple HIG",
    ],
  },
  {
    icon: "🧠",
    title: "Languages",
    tools: ["TypeScript", "Python", "Swift", "C++", "Bash", "JavaScript", "SQL"],
  },
  {
    icon: "🎯",
    title: "Frontend",
    tools: ["React.js", "Vite", "Tailwind CSS", "Next.js", "HTML", "CSS", "Framer Motion"],
  },
  {
    icon: "🛠️",
    title: "Backend",
    tools: ["Node.js", "Express.js", "Flask", "GraphQL", "WebSockets", "REST APIs", "Prisma"],
  },
  {
    icon: "🗃️",
    title: "Databases & Infra",
    tools: ["MongoDB", "Firebase", "Cloud Firestore", "Docker", "GitHub Actions", "Vercel", "Render"],
  },
  {
    icon: "🧰",
    title: "Developer Tools",
    tools: ["Postman","X Code", "Android Studio", "VS Code", "Figma", "Zod", "Jest", "ESLint", "Prettier", "Terminal CLI"],
  },
];

const TechStack = () => {
  return (
    <section className="pt-24 px-6 max-w-6xl mx-auto">

      {/* Tool Box Story  */}

      <ToolboxStory />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">{category.icon}</span>
              <h3 className="text-lg font-bold text-[#008f6f]">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-200 hover:bg-[#f0fdf7] text-gray-800 px-3 py-1 rounded-full border border-gray-300 transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;