// src/pages/AiClientUpdates.tsx

import { motion } from "framer-motion";
import Layout from "../components/Layout";
import RealEmailPreview from "../components/RealEmailPreview";

const AiClientUpdates = () => {






  const steps = [
    "Review incoming case files",
    "Extract key updates and highlights",
    "Summarize recent activity",
    "Prepare legal draft email",
    "Confirm + Send to client",
  ];

  return (
    <Layout>
      <div className="bg-white min-h-screen py-14 px-4 sm:px-6 lg:px-12 text-black chakra-petch-regular">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              AI Auto Client Updates
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Weekly client emails built from case documents — fast, human, and reliable.
            </p>
          </motion.div>

          {/* Step Timeline */}
          <div className="relative border-l-4 border-emerald-500 pl-6 space-y-12">
            {steps.map((desc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[38px] top-1 w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow" />
                {/* Step Content */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-emerald-700 font-bold text-lg">Step {idx + 1}</h3>
                  <p className="text-gray-700 mt-1">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

            {/* Email Preview */}
            <RealEmailPreview />
        </div>
      </div>
    </Layout>
  );
};

export default AiClientUpdates;