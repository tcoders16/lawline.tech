import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "./Layout";

const StoryHeroCard = () => {
  const [showContent, setShowContent] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagePaths = [
    "/images/omkumar/Omkumar01.jpeg",
    "/images/omkumar/Omkumar02.jpeg",
    "/images/omkumar/Omkumar03.jpeg", 
    "/images/omkumar/Omkumar04.MOV", // Don't use .MOV in <img> — use a <video> tag if needed
  ];

  // Show content fade-in
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Image carousel loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagePaths.length);
    }, 2800); // 1.5 seconds

    return () => clearInterval(interval);
  }, [imagePaths.length]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-4 py-16 max-w-5xl mx-auto transition-opacity duration-1000 ease-out">





        {/* Hi To Harvey */}

        <div className="mr-18 text-sm text-gray-600 italic mb-4 leading-relaxed">
          Hey <span className="bg-green-200 px-1 rounded-sm font-medium text-gray-800 chakra-petch-semibold-italic ">Harvey</span>, this is 
          <span className="bg-green-200 px-1 rounded-sm font-medium text-gray-800 chakra-petch-semibold-italic "> Mike</span> — your 
          <span className="bg-green-200 px-1 rounded-sm font-medium text-gray-800 chakra-petch-semibold-italic  "> personal associate</span>.<br />
          Harvey’s associate — and eventually, his protégé,
            <span className="bg-green-200 px-1 rounded-sm font-medium text-gray-800 chakra-petch-semibold-italic  ">trusted partner</span>
           , 
           and 
          <span className="bg-green-200 px-1 rounded-sm font-medium text-gray-800 chakra-petch-semibold-italic ">best friend</span>.
        </div>










        <div
          className={`w-full flex justify-center items-center transition-all duration-700 ${
            showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative flex justify-center items-center w-full max-w-[600px]">

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="relative z-10 rounded-[28px] border-2 border-gray-200 transition-all duration-300 bg-white
                w-[90vw] sm:w-[400px] md:w-[460px] lg:w-[520px] xl:w-[560px] 2xl:w-[600px]"
            >
            <div className="aspect-[3/4] w-full">
              {imagePaths[currentImageIndex].endsWith(".MOV") ? (
                <video
                  src={imagePaths[currentImageIndex]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-top pointer-events-none rounded-[28px]"
                />
              ) : (
                <img
                  src={imagePaths[currentImageIndex]}
                  alt={`Omkumar Solanki ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover object-top pointer-events-none rounded-[28px]"
                />
              )}
            </div>

              {/* Expandable Content */}
              <div
                className={`absolute bottom-0 w-full transition-all duration-500 ease-in-out rounded-t-[28px] rounded-b-3xl bg-white/80 backdrop-blur-lg text-left overflow-hidden cursor-pointer ${
                  expanded ? "h-full px-10 py-8" : "h-[120px] px-8 py-6"
                }`}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? (
                  <div className="flex flex-col justify-between h-full text-left">

                {/* Card Content */}
                <div className="overflow-y-auto pr-1 text-[17px] text-gray-800 leading-relaxed font-medium space-y-5">
                  <p>
                    I was raised in a town where{" "}
                    <span className="text-[#008f6f] font-semibold underline underline-offset-2">
                      the temple bell rang louder than the school bell
                    </span>. Where seva or serving came before salary, and curiosity was my first teacher.
                  </p>
                  <p>
                    At 19, a friend lost his phone at the temple fair. The lost & found was just a dusty notebook — no photos, no system. That night, I built a small tool to match images with text using AI.
                  </p>
                  <p>
                    That was my first real build. Not perfect — but useful. And that’s when it hit me:{" "}
                    <span className="font-bold text-gray-900">engineering isn’t about ego — it’s about impact</span>.
                  </p>
                  <p>
                    Since then, I’ve built systems where{" "}
                    <span className="text-[#008f6f] font-semibold underline underline-offset-2">blessings meet logic</span>: a donation tracker, a legal assistant, a memory map, a wallet born from 12 words.
                  </p>
                  <p>
                    I don’t chase hype.{" "}
                    <span className="font-bold text-gray-900">I chase dharma</span>. And when no tool fits?{" "}
                    <span className="font-bold text-gray-900">I craft one — like a mandir artisan, not a keyboard cowboy</span>.
                  </p>
                  <p>
                    <span className="text-[#008f6f] font-bold underline underline-offset-2">
                      I’m not here to impress. I’m here to serve — with tech that’s quiet, honest, and real
                    </span>.
                  </p>
                  <p className="pt-2 text-gray-700">
                    So I started turning pain points into products — real tools, for real people. Some of them are shown below.
                  </p>

                    <p className="text-center text-[14px] text-gray-500 chakra-petch-semibold-italic italic mt-2">
                      [Tap here to collapse]
                    </p>
                </div>



                    <div className="pt-6 text-left">
                      <h2 className="text-2xl font-bold text-gray-900 chakra-petch-bold mb-1">
                        Omkumar Solanki
                      </h2>
                      <p className="text-sm text-gray-600 mb-1">Agentic @Software_Engineer</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-left">
                    <h2 className="text-lg font-bold text-gray-900 chakra-petch-bold">
                      Omkumar Solanki
                    </h2>
                    <p className="text-sm text-gray-700">Agentic @Software_Engineer</p>
                    <p className="text-xs mt-1 text-gray-500 chakra-petch-semibold-italic">(Tap here to expand)</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StoryHeroCard;