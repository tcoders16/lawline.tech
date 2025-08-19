import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { FaHeart, FaTimes } from "react-icons/fa";
import Layout from "./Layout";

const StoryHeroCard = () => {
  const [liked, setLiked] = useState<null | boolean>(null);
  const [totalLikes, setTotalLikes] = useState(4);
  const [swipeMessage, setSwipeMessage] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false); // fade-in effect

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100); // small delay
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
    }, 17500);
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-16 max-w-6xl mx-auto transition-opacity duration-1000 ease-out">
        <div
          className={`w-full min-h-screen flex flex-wrap justify-center items-center gap-8 px-4 sm:px-6 md:px-8 py-10 transition-all duration-700 ${
            showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Instruction */}
          <div className="w-full text-center text-sm text-gray-500 font-medium -mb-6 mt-2">
            Hold the card, swipe right to like, left to skip.
          </div>

          {/* Card */}
          <div className="flex flex-col justify-center items-center w-full sm:w-auto gap-4">
            <TinderCard
              onSwipe={handleSwipe}
              preventSwipe={["up", "down"]}
            >
              <div
                className={`relative bg-white rounded-[24px] border-2 aspect-[3/4] overflow-hidden transition-all duration-300
                ${liked === true ? "border-[#00ff90] shadow-[0_0_30px_#00ff90]" : liked === false ? "border-red-400 shadow-[0_0_30px_red]" : "border-[#00ff90]"}
                w-[90vw] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[520px]`}
              >
                <img
                  src="/images/omkumar/Omkumar.JPG"
                  alt="Omkumar Solanki"
                  className="w-full h-full object-cover pointer-events-none"
                />
                {liked === true && (
                  <div className="absolute top-4 left-4 text-green-500 text-2xl z-10">
                    <FaHeart />
                  </div>
                )}
                {liked === false && (
                  <div className="absolute top-4 right-4 text-red-500 text-2xl z-10">
                    <FaTimes />
                  </div>
                )}
              </div>
            </TinderCard>

            {/* Animated Swipe Message */}
            {swipeMessage && (
              <div
                className={`px-6 py-3 rounded-xl text-sm font-medium shadow-md border transition-all duration-500 ease-in-out transform ${
                  liked
                    ? "bg-[#00ff90]/10 text-green-700 border-green-400 scale-100 opacity-100"
                    : "bg-red-100 text-red-700 border-red-400 scale-100 opacity-100"
                }`}
              >
                {swipeMessage}
              </div>
            )}
          </div>

          {/* Bio Section */}
          <div className="text-left max-w-xl transition-all duration-1000">
            <h2 className="text-3xl font-bold text-gray-900 chakra-petch-bold mb-1">
              Omkumar Solanki
            </h2>
            <h3 className="text-sm text-gray-500 font-medium mb-4">
              Born in Gujarat, Built for Global
            </h3>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
              My journey began with the blessings of Harikrushna Maharaj of Vadtal Dham — a spiritual compass that kept me grounded, even when code felt chaotic.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-3">
              I never chased tech stacks. I chased problems. From donation halls to courtrooms, invoices to lost AirPods — I build systems that automate the repetitive and give people back their time for the meaningful.
            </p>

            <p className="mt-4 text-sm text-[#008f6f] italic">
              Total Likes: <span className="not-italic font-bold">{totalLikes}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">Swipe right to like, left to skip →</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StoryHeroCard;