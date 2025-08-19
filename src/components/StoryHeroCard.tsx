import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { FaHeart, FaTimes } from "react-icons/fa";
import Layout from "./Layout";

const StoryHeroCard = () => {
  const [liked, setLiked] = useState<null | boolean>(null);
  const [totalLikes, setTotalLikes] = useState(4);
  const [swipeMessage, setSwipeMessage] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);

  const [expanded, setExpanded] = useState(true);



  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSwipe = (dir: string) => {
    if (dir === "right") {
      setLiked(true);
      setTotalLikes((prev) => prev + 1);
      setSwipeMessage("Thank you so much for liking my work 💚");
    } else if (dir === "left") {
      setLiked(false);
      setSwipeMessage("Sorry! I’ll work harder 💔");
    }
    setTimeout(() => {
      setSwipeMessage(null);
      setLiked(null);
    }, 5500);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-4 py-16 max-w-5xl mx-auto transition-opacity duration-1000 ease-out">
        <div
          className={`w-full flex justify-center items-center transition-all duration-700 ${
            showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="w-full max-w-[600px]">
            <TinderCard
              onSwipe={handleSwipe}
              onCardLeftScreen={() => {
                if (liked === null) {
                  setSwipeMessage("Skipped! Swipe slower next time 👀");
                  setTimeout(() => setSwipeMessage(null), 5000);
                }
              }}
              preventSwipe={["up", "down"]}
            >
              <div
                className={`relative bg-white rounded-[28px] border-2 overflow-hidden shadow-xl transition-all duration-300 cursor-grab
                  ${liked === true ? "border-[#00ff90] shadow-[0_0_40px_#00ff90]" : liked === false ? "border-red-400 shadow-[0_0_40px_red]" : "border-gray-200"}
                  w-[90vw] sm:w-[400px] md:w-[460px] lg:w-[520px] xl:w-[560px] 2xl:w-[600px] h-[720px]
                `}
                style={{ touchAction: "pan-y" }}
              >
                <img
                  src="/images/omkumar/Omkumar.JPG"
                  alt="Omkumar Solanki"
                  className="w-full h-full object-cover object-top pointer-events-none"
                />

                {liked === true && (
                  <div className="absolute top-4 left-4 text-green-500 text-3xl z-10">
                    <FaHeart />
                  </div>
                )}
                {liked === false && (
                  <div className="absolute top-4 right-4 text-red-500 text-3xl z-10">
                    <FaTimes />
                  </div>
                )}

            <div
            className={`absolute bottom-0 w-full transition-all duration-500 ease-in-out rounded-t-[28px] bg-white/90 backdrop-blur-lg text-left overflow-hidden cursor-pointer ${
                expanded ? "h-full px-10 py-8" : "h-[120px] px-8 py-6"
            }`}
            onClick={() => setExpanded(!expanded)}
            >
            {expanded ? (
                <div className="flex flex-col justify-between h-full text-left">
                    {/* Card Content  */}
                    <div className="overflow-y-auto pr-1 text-[17px] text-gray-800 leading-relaxed font-medium space-y-6">
                    <p>
                        I grew up where <span className="text-[#008f6f] font-semibold underline underline-offset-2">temples echoed louder than tech talks</span> — 
                        but somehow, I ended up building both.
                    </p>

                    <p>
                        I don’t just write code. <span className="text-[#008f6f] font-semibold">I solve real-world chaos with it</span> — from
                        <span className="font-medium text-gray-900"> donation halls needing transparency</span>,
                        to <span className="font-medium text-gray-900">legal teams drowning in documents</span>,
                        to <span className="font-medium text-gray-900">people losing track of what matters</span>.
                    </p>

                    <p>
                        Whether it’s <span className="text-[#008f6f] font-semibold underline underline-offset-2">OCR</span>, 
                        <span className="text-[#008f6f] font-semibold underline underline-offset-2">local LLMs</span>, 
                        or <span className="text-[#008f6f] font-semibold underline underline-offset-2">agent workflows</span> — I use whatever tech fits the mission.
                        And if the tool doesn’t exist, <span className="font-bold text-gray-900">I’ll build it from scratch</span>.
                    </p>

                    <p>
                        I’m not here to impress. <span className="text-[#008f6f] font-bold underline underline-offset-2">I’m here to deliver</span> — 
                        systems that <span className="font-semibold text-gray-900">speak the local language</span>, 
                        <span className="font-semibold text-gray-900">respect the user</span>, and 
                        <span className="font-semibold text-gray-900">never waste time</span>.
                    </p>
                    </div>
                <div className="pt-6 text-left">
                    <h2 className="text-2xl font-bold text-gray-900 chakra-petch-bold mb-1">Omkumar Solanki</h2>
                    <p className="text-sm text-gray-600 mb-1">Agentic @Software_Engineer</p>
                    <p className="text-sm text-[#008f6f] italic">
                    Total Likes: <span className="not-italic font-bold">{totalLikes}</span>
                    </p>
                </div>
                </div>
            ) : (
                <div className="text-left">
                <h2 className="text-lg font-bold text-gray-900 chakra-petch-bold">Omkumar Solanki</h2>
                <p className="text-sm text-gray-600">Agentic @Software_Engineer</p>
                <p className="text-sm text-[#008f6f] italic">
                    Total Likes: <span className="not-italic font-bold">{totalLikes}</span>
                </p>
                <p className="text-xs mt-1 text-gray-400 italic">(Tap to expand)</p>
                </div>
            )}
            </div>
              </div>
            </TinderCard>
          </div>
        </div>

        {swipeMessage && (
          <div
            className={`mt-8 px-6 py-3 rounded-xl text-sm font-medium shadow-md border transition-all duration-500 ease-in-out transform ${
              liked ? "bg-[#00ff90]/10 text-green-700 border-green-400" : "bg-red-100 text-red-700 border-red-400"
            }`}
          >
            {swipeMessage}
          </div>
        )}

        <p className="mt-8 text-sm text-gray-500 font-medium text-center">
          Hold the card, swipe right to like, left to skip →
        </p>
      </div>
    </Layout>
  );
};

export default StoryHeroCard;