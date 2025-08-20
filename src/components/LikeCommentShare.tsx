import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircleMore, Share2 } from "lucide-react";
import { useState } from "react";

interface Props {
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

export default function LikeCommentShare({ onLike, onComment, onShare }: Props) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex justify-center gap-10 text-gray-600 mt-6">
      {/* Like */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        onClick={(e) => {
          e.stopPropagation();
          setLiked(!liked);
          onLike?.();
        }}
        className="flex items-center gap-2 focus:outline-none relative group"
      >
        <Heart
          className={`w-5 h-5 transition-all duration-300 ${
            liked
              ? "text-[#00cc99] fill-[#00cc99]"
              : "text-gray-500 group-hover:text-[#00cc99]"
          }`}
        />
        <span className="text-sm font-medium group-hover:text-[#00cc99] transition">
          {liked ? "Liked" : "Like"}
        </span>

        <AnimatePresence>
          {liked && (
            <motion.span
              className="absolute -top-3 -right-3 bg-[#00cc99]/20 rounded-full w-5 h-5"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1.4, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* Comment */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        onClick={(e) => {
          e.stopPropagation();
          onComment?.();
        }}
        className="flex items-center gap-2 focus:outline-none group"
      >
        <MessageCircleMore className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium group-hover:text-blue-600 transition">
          Comment
        </span>
      </motion.button>

      {/* Share */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        onClick={(e) => {
          e.stopPropagation();
          if (navigator.share) {
            navigator.share({
              title: "Lawline Portfolio",
              url: window.location.href,
            });
          } else {
            onShare?.() ?? alert("Sharing not supported on this browser.");
          }
        }}
        className="flex items-center gap-2 focus:outline-none group"
      >
        <Share2 className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium group-hover:text-purple-600 transition">
          Share
        </span>
      </motion.button>
    </div>
  );
}