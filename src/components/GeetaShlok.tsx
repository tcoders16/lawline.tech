import { motion } from "framer-motion";

export default function GeetaShlok() {
  return (
    <section className="relative py-16 px-6 text-center overflow-hidden">
      {/* Animated Floating Glow - Green (Left Side) */}
      <motion.div
        className="absolute top-1/3 left-[15%] w-52 h-52 bg-[#00ff90]/20 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: [0, 20, 0, -20, 0],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Floating Glow - Purple (Right Side) */}
      <motion.div
        className="absolute bottom-1/4 right-[10%] w-48 h-48 bg-[#9000ff]/20 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: [0, -15, 0, 15, 0],
          y: [0, 15, 0, -15, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shlok Content with Fade-in Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Sanskrit Shlok */}
        <p className="text-[26px] leading-loose font-serif text-gray-800 tracking-wide">
          कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। <br />
          मा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि॥
        </p>

        {/* English Translation */}
        <p className="mt-6 text-[16px] text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
          “You have the right to perform your duties, but never to the fruits of those actions.
          Do not be attached to the results, nor avoid your responsibilities.”
        </p>

        {/* Attribution */}
        <p className="mt-4 text-sm text-gray-500 italic">— Bhagavad Gita 2.47</p>
      </motion.div>
    </section>
  );
}