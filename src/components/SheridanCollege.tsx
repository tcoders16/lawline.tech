import { motion } from "framer-motion";

const SheridanCollege = () => {
  return (
    <div className="relative flex flex-col gap-8 py-20 px-6">
      
      {/* 🎓 Line + College Info */}
      <div className="relative flex items-start">
        {/* Green line */}
        <div className="absolute left-0 top-[8px]">
          <div className="w-[3px] h-[40px] bg-green-600 rounded-full" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="pl-8 max-w-3xl text-gray-700 text-sm md:text-base leading-relaxed italic font-semibold chakra-petch-regular"
        >
          <span className="text-xl md:text-2xl font-bold not-italic text-black mr-2">
            🎓 Sheridan College
          </span>
          Software Development and Network Engineering — GPA:{" "}
          <span className="font-bold text-black">3.8 / 4.0</span>
        </motion.p>
      </div>



      <div className=" space-x-20">

      </div>

      {/* 📞 Line + Contact Info */}
      <div className="relative flex items-start">
        {/* Green line */}
        <div className="absolute left-0 top-[8px]">
          <div className="w-[3px] h-[40px] bg-green-600 rounded-full" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pl-8 max-w-3xl text-gray-700 text-sm md:text-base leading-relaxed italic font-semibold chakra-petch-regular"
        >
          <span className="text-xl md:text-2xl font-bold not-italic mt-20 text-black mr-2">
            ☎️ Contact details
          </span>
          emailtosolankiom@gmail.com | +1 (289)-400-8975
        </motion.p>
      </div>
    </div>
  );
};

export default SheridanCollege;