import { useAudio } from "../context/AudioContext";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VolumeControls = () => {
  const {
    isMuted,
    toggleMute,
    volume,
    changeVolume,
    isPlaying,
    togglePlay, // ✅ make sure this is defined in context
  } = useAudio();

  const handlePlayPause = async () => {
    togglePlay(); // ✅ actually toggles play/pause
  };

  return (
    <div className="flex items-center gap-3 bg-white border border-green-200 shadow-sm px-4 py-2 rounded-full">
      {/* Play / Pause Button */}
      <button
        onClick={handlePlayPause}
        className="px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200 rounded-full flex items-center gap-1 text-sm"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* Mute/Unmute Toggle */}
      <button
        onClick={toggleMute}
        className={`flex items-center px-3 py-1 rounded-full text-sm font-medium transition ${
          isMuted
            ? "bg-red-100 text-red-700 hover:bg-red-200"
            : "bg-green-100 text-green-700 hover:bg-green-200"
        }`}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        {isMuted ? "Unmute" : "Mute"}
      </button>

      {/* Volume Slider */}
      <div className="relative w-36 h-2 bg-gray-200 rounded-full overflow-hidden group">
        <div
          className="absolute h-full bg-green-600 transition-all duration-300"
          style={{ width: `${volume * 100}%` }}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => changeVolume(parseFloat(e.target.value))}
          className="w-full h-2 appearance-none bg-transparent absolute cursor-pointer opacity-0"
        />
      </div>

      <span className="text-xs font-mono text-gray-500 w-8 text-right">
        {Math.round(volume * 100)}%
      </span>
    </div>
  );
};

export default VolumeControls;