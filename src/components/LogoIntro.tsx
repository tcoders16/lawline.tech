// src/components/LogoIntro.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LogoIntro = () => {
  const [visibleText, setVisibleText] = useState('');
  const [hideLogo, setHideLogo] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  const fullText = 'L\u00A0aw\u00A0Line'; // non-breaking space between Law and Line

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setVisibleText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 300);

    const caretInterval = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, 500);

    const autoHideTimer = setTimeout(() => {
      setHideLogo(true);
    }, 4000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(caretInterval);
      clearTimeout(autoHideTimer);
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-black z-50 flex items-center justify-center ${
        hideLogo ? 'pointer-events-none' : ''
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: hideLogo ? 0 : 1, y: hideLogo ? -100 : 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <div className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-widest text-black dark:text-white chakra-petch-extrabold">
        {visibleText}
        <span className="inline-block w-[1ch]">
          {showCaret && <span className="animate-pulse">|</span>}
        </span>
      </div>
    </motion.div>
  );
};

export default LogoIntro;