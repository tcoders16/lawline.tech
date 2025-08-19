// src/pages/LandingPage.tsx

import React from 'react';
import { motion } from 'framer-motion';

import EmailSubscribe from './emailSubscribe';

const LandingPage: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1.7, ease: "easeOut" }}
      className="min-h-screen bg-white text-neutral-900 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-36 pt-20 pb-44 chakra-petch-regular" // Increased pb-16 → pb-44
    >
      <div className="w-full max-w-screen-lg 2xl:max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center space-y-10 sm:space-y-12 min-h-[85vh] pt-[10vh]">

        {/* Title */}
<h1 className="relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-tight">
  <span className="relative z-10">Lawline</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1418 125"
    preserveAspectRatio="none"
    className="absolute -bottom-[7px] left-0 w-full h-[0.4em] z-0"
  >
    <path
      d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
      fill="currentColor"
    />
  </svg>
</h1>

        {/* Subtitle */}
        <p className="whitespace-nowrap text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 italic leading-relaxed overflow-x-auto">
          — Code that works like your <span className="underline decoration-emerald-400 underline-offset-2">smartest paralegal</span> — without the <span className="bg-emerald-100 px-2 py-0.5 rounded text-emerald-800 font-semibold">Salary</span>.
        </p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed space-y-1 px-2"
        >
          <p>
            <span className="bg-emerald-100 px-1.5">Agentic AI</span> drafts
            <span className="bg-emerald-100 px-1.5 mx-1">emails</span>,
            <span className="bg-emerald-100 px-1.5 mx-1">memos</span>,
            <span className="bg-emerald-100 px-1.5 mx-1">timelines</span> &
            <span className="bg-emerald-100 px-1.5 mx-1">case updates</span>
          </p>
          <p className="text-gray-500">in seconds — no burnout, no busywork.</p>
        </motion.div>

        {/* Value Prop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-2 text-center px-2"
        >
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 tracking-tight">
            Save up to
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="bg-emerald-100 px-2 py-0.5 rounded text-emerald-800 font-bold inline-block shadow-sm mx-2"
            >
              $200K/year
            </motion.span>
            in legal ops
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xs sm:text-sm text-gray-500"
          >
            Less time. Less cost. More accuracy.
          </motion.p>
        </motion.div>

        {/* Status Badge */}
        <div className="flex justify-center px-2">
          <span className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full border border-green-500 bg-gradient-to-r from-green-50 via-green-100 to-green-50 text-green-800 text-xs sm:text-sm font-semibold shadow-[0_4px_12px_rgba(72,187,120,0.4)] backdrop-blur-md transition-all duration-300 hover:bg-emerald-100 hover:border-2 hover:border-emerald-600 hover:shadow-inner hover:brightness-110 hover:text-green-900 hover:font-bold group">
            <span className="relative flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 transform transition-transform duration-300 group-hover:rotate-[12deg]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M3 12a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 12l2 2l4 -4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-40 animate-ping"></span>
            </span>

            <span className="uppercase tracking-widest text-[11px] sm:text-xs">
              Case Active
            </span>
            <span className="text-green-800 font-extrabold text-xs sm:text-sm">
              Pearson Spector
            </span>
          </span>
        </div>

        {/* Email Section */}
          <section
            id="email-subscribe"
            className="flex items-center justify-center px-4 sm:px-6 mt-[70%] sm:mt-[70%] md:mt-[70%] lg:mt-[70%] xl:mt-[75%] 2xl:mt-[75%]"
          >
            <div className="space-y-6 text-center">
              <EmailSubscribe />
              <p className="text-gray-900 text-base sm:text-lg md:text-xl">
                Skip the stack. Start building.
              </p>
            </div>
          </section>

      </div>
    </motion.main>
  );
};

export default LandingPage;