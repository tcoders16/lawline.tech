// src/components/VolumeControls.tsx
import { useAudio } from "../context/AudioContext";
import { Play, Pause } from "lucide-react"; // Optional icons

const VolumeControls = () => {
  const { isMuted, toggleMute, volume, changeVolume } = useAudio();

  return (
    <div className="flex items-center gap-3 bg-white border border-green-200 shadow-sm px-4 py-2 rounded-full">
      {/* Mute/Unmute Toggle Button */}
      <button
        onClick={toggleMute}
        className={`flex items-center gap-1 px-3 py-1 rounded-full transition text-sm font-medium ${
          isMuted
            ? "bg-red-100 text-red-700 hover:bg-red-200"
            : "bg-green-100 text-green-700 hover:bg-green-200"
        }`}
      >
        {isMuted ? (
          <>
            <Pause size={16} /> Unmute
          </>
        ) : (
          <>
            <Play size={16} /> Mute
          </>
        )}
      </button>

      {/* Slider */}
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

      {/* Volume % */}
      <span className="text-xs font-mono text-gray-500 w-8 text-right">
        {Math.round(volume * 100)}%
      </span>
    </div>
  );
};

export default VolumeControls;