import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StoryHeroCard from "../components/StoryHeroCard";

const projects = [
  {
    year: "2023",
    title: "Voice Invoice Agent",
    description:
      "Built a voice assistant using Whisper and a local LLM to retrieve invoices—even with fuzzy prompts—for a jewelry store drowning in folders. No cloud risk. The owner was blown away.",
    imageUrl: "/images/voice-agent.jpeg",
  },
  {
    year: "2024",
    title: "Lost & Found for Ontario Transit",
    description:
      "Created a platform to connect riders with lost items using AI-matching, QR alerts, and barcode scanning. Integrated with Firestore + React. Deployed in under 10 days.",
    imageUrl: "/images/lost-found.jpeg",
  },
  {
    year: "2025",
    title: "Lawline AI – Built for Boutique Firms",
    description:
      "Turned legal facts into instant client updates, memos, and summaries—preserving voice & tone. Sold as local install. Saved $200k+/year. No SaaS. Built trust.",
    imageUrl: "/images/lawline-ai.jpeg",
  },
  {
    year: "2025",
    title: "Vadtal Donor Platform",
    description:
      "A React Native + Mongo system for nonprofit ops. Auto-matching donors, autofill suggestions, and a clean donation history dashboard. Built for Vadtal Dham Toronto.",
    imageUrl: "/images/vadtal.jpeg",
  },
];

export default function StoryPortfolio() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 chakra-petch-regular text-gray-900">
      {/* Hero */}
    <StoryHeroCard />

      {/* Timeline */}
      <div className="space-y-16 border-l-4 border-green-500 pl-6 relative">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-9.5 top-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium mb-1">{project.year}</p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{project.description}</p>
              </div>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full lg:w-80 rounded-xl shadow-md object-cover aspect-[3/2] mt-4 lg:mt-0"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="pt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">🛠️ My Toolbox</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700">
          I’ve worked with Whisper, LangChain, Pinecone, Mongo, and Firebase. I code with TypeScript, Python, Swift, C++, Bash. My playground? React, React Native, Node.js, Express, GraphQL, WebSockets, Flask. All wrapped in Docker, deployed with GitHub Actions and Firebase.
        </p>
      </div>

      {/* Education */}
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-bold mb-2">🎓 Sheridan College</h2>
        <p className="text-gray-700 text-base">
          Software Development and Network Engineering — GPA: <span className="font-semibold">3.8 / 4.0</span>
        </p>
      </div>

      {/* Footer CTA */}
      <div className="pt-20 text-center">
        <p className="text-sm text-gray-500 mb-2">Want to explore building something impactful together?</p>
        <Link
          to="/Coffee-and-Business"
          className="text-green-600 font-semibold hover:underline"
        >
          Let’s talk over coffee ☕️
        </Link>
      </div>
    </section>
  );
}