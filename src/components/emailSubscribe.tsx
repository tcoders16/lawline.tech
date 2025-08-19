import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setSubscribed(false);
      setMessage("Invalid email address. Please try again.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/subscribe", { email });
      setSubscribed(true);
      setMessage("You are subscribed to Lawline AI.");
    } catch (err) {
      console.error(err);
      setSubscribed(false);
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center mt-10"
    >
      <motion.h2
        className="text-black text-xl md:text-2xl font-semibold chakra-petch-regular mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Stay Updated with Lawline AI
      </motion.h2>

      <motion.form
        onSubmit={handleSubscribe}
        className="flex items-center rounded-full border border-green-500 shadow-[0_0_10px_2px_rgba(34,197,94,0.5)] bg-white px-2 py-1 sm:px-4 sm:py-2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <motion.input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          whileFocus={{ scale: 1.02 }}
          className="bg-white text-black placeholder:text-gray-400 chakra-petch-regular px-4 py-2 w-52 sm:w-64 rounded-full outline-none"
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full ml-2 font-semibold chakra-petch-regular"
        >
          Subscribe
        </motion.button>
      </motion.form>

      {message && (
        <motion.div
          className={`mt-4 text-sm chakra-petch-regular text-center ${
            subscribed ? "text-green-600" : "text-red-500"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {message}
        </motion.div>
      )}
    </motion.section>
  );
};

export default EmailSubscribe;