import { motion } from "framer-motion";

const SheridanCollege = () => {
  return (
    <div className="relative flex justify-start items-start py-20 px-6">

      {/* 🎓 Green vertical line aligned with text */}
      <div className="absolute left-8 top-[74px]">
        <div className="w-[3px] h-[50px] bg-green-600 rounded-full" />
      </div>

      {/* 🎓 College Info */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-left pl-8 max-w-3xl text-gray-700 text-sm md:text-base leading-relaxed italic font-semibold chakra-petch-regular"
      >
        <span className="text-xl md:text-2xl font-bold not-italic text-black mr-2">
          🎓 Sheridan College
        </span>
        Software Development and Network Engineering — GPA:{" "}
        <span className="font-bold text-black">3.8 / 4.0</span>
      </motion.p>
    </div>
  );
};

export default SheridanCollege;