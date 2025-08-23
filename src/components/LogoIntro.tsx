// src/components/LogoIntro.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LogoIntro = ({ onFinish }: { onFinish?: () => void }) => {
  const [visibleText, setVisibleText] = useState("");
  const [hideLogo, setHideLogo] = useState(false);
  const [showCaret, setShowCaret] = useState(true);
  const [finished, setFinished] = useState(false);

  
const fullText = 'L\u00A0awline';  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setVisibleText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setFinished(true); // mark typing complete
      }
    }, 300);

    const caretInterval = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, 500);

    const autoHideTimer = setTimeout(() => {
      setHideLogo(true);
      if (onFinish) onFinish();
    }, 4000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(caretInterval);
      clearTimeout(autoHideTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black ${
        hideLogo ? "pointer-events-none" : ""
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: hideLogo ? 0 : 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center text-center font-bold tracking-wide leading-tight text-black dark:text-white chakra-petch-bold 
          text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[10rem]"
      >
        {visibleText}
        {!finished && (
          <span className="inline-block w-[1ch]">
            {showCaret && <span className="animate-pulse">|</span>}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default LogoIntro;