import { motion } from "framer-motion";
import Layout from "../components/Layout";

const AiClientUpdates = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen py-12 px-4 md:px-8 text-black chakra-petch-regular">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* 🚧 UNDER CONSTRUCTION BANNER */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-6 py-3 rounded-lg text-center font-medium shadow"
          >
            🚧 This page is still under construction. Features and visuals are evolving!
          </motion.div>

          {/* Placeholder space or message (optional) */}
          <div className="text-center text-gray-500 mt-20 text-lg">
            More features coming soon...
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default AiClientUpdates;