import { motion } from "framer-motion";

const ToolboxStory = () => {
  return (
    <div className="relative flex justify-start items-start py-20 px-6">

      {/* ✅ Green vertical line closer to paragraph */}
      <div className="absolute left-8  top-[80px] ">
        <div className="w-[3px] h-[100px] bg-green-600 rounded-full" />
      </div>

      {/* ✅ Story Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-left pl-8 max-w-3xl text-gray-700 text-sm md:text-base leading-relaxed italic font-semibold chakra-petch-regular"
      >
        I’ve{" "}
        <span className="bg-yellow-200 px-1.5 py-0.5 rounded italic font-semibold">
          built apps in cafés
        </span>
        ,{" "}
        <span className="bg-yellow-200 px-1.5 py-0.5 rounded italic font-semibold">
          trained AI on legal documents at midnight
        </span>
        , and{" "}
        <span className="bg-yellow-200 px-1.5 py-0.5 rounded italic font-semibold">
          debugged backend systems
        </span>{" "}
        that powered real client use cases. From{" "}
        <span className="bg-green-200 px-1.5 py-0.5 rounded italic font-semibold">
          SwiftUI
        </span>{" "}
        and{" "}
        <span className="bg-green-200 px-1.5 py-0.5 rounded italic font-semibold">
          React
        </span>{" "}
        to{" "}
        <span className="bg-blue-200 px-1.5 py-0.5 rounded italic font-semibold">
          LangChain
        </span>{" "}
        and{" "}
        <span className="bg-blue-200 px-1.5 py-0.5 rounded italic font-semibold">
          Pinecone
        </span>
        , every tool here was sharpened by experience. This isn’t just a stack —
        it’s a{" "}
        <span className="bg-purple-200 px-1.5 py-0.5 rounded italic font-semibold">
          toolbox built from real-world fire
        </span>
        .
      </motion.p>
    </div>
  );
};

export default ToolboxStory;