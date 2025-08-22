import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
  SkipBack,
  SkipForward,
  Repeat,
  Music2,
} from "lucide-react";
import { useAudio } from "../context/AudioContext";

/**
 * Apple-like mini player popover:
 * - Compact pill button stays in the navbar (doesn't resize it).
 * - Click opens a floating panel (desktop) or bottom sheet (mobile).
 * - Track list, now-playing, seek bar, volume, play/pause, prev/next, loop.
 * - Click outside or press ESC to close.
 */

const FALLBACK_TRACKS = [
  {
    title: "Swaminarayan Dhun",
    artist: "Traditional",
    src: "/audio/SwaminarayanDhun.mp3",
    cover: "/images/covers/Harikrushnamaharaj.jpg",
  },
  {
    title: "Laxminarayan Dev Vadtal",
    artist: "Devotional",
    src: "/audio/Laxminarayandev.mp3",
    cover: "/images/covers/bhajan1.jpg",
  },
  {
    title: "Kastbhanajan Dev",
    artist: "Devotional",
    src: "/audio/Kastbhanjandev.mp3",
    cover: "/images/covers/Kastbhanajandev.jpg",
  },
];

const fmt = (s?: number) => {
  if (typeof s !== "number" || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? "0" : ""}${sec}`;
};

const VolumeControls = () => {
  const {
    isMuted,
    toggleMute,
    volume,
    changeVolume,
    isPlaying,
    togglePlay,
    // Optional—your context may already have these:
    currentTime,
    duration,
    seek,
    tracks,
    track,
    setTrack,
    next,
    prev,
    loop,
    toggleLoop,
  } = useAudio() as any;

  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const safeTracks = (tracks && tracks.length ? tracks : FALLBACK_TRACKS) as Array<{
    title: string;
    artist?: string;
    src: string;
    cover?: string;
  }>;

  const currentIndex = useMemo(() => {
    if (typeof track === "number") return track;
    // try to infer index from playing URL if your context exposes it
    return 0;
  }, [track]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(t) && btnRef.current && !btnRef.current.contains(t)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handlePlayPause = () => togglePlay?.();

  const handleSeek = (val: number) => {
    // expects seconds
    if (seek) seek(val);
  };

  const handlePickTrack = (index: number) => {
    setTrack?.(index);
  };

  const handleNext = () => (next ? next() : setTrack?.((currentIndex + 1) % safeTracks.length));
  const handlePrev = () => (prev ? prev() : setTrack?.((currentIndex - 1 + safeTracks.length) % safeTracks.length));

  return (
    <>
      {/* Compact navbar pill — keeps navbar height stable */}
      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 bg-white border border-green-200 shadow-sm px-4 py-2 rounded-full hover:bg-emerald-50 transition"
        aria-expanded={open}
        aria-controls="lawline-mini-player"
      >
        <Music2 size={16} className="text-green-700" />
        <span className="text-sm text-gray-800 chakra-petch-regular">Music</span>
        {open ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
      </button>

<AnimatePresence>
  {open && (
    <motion.div
      key="mini-player-sheet"
      className="fixed z-50 inset-0 sm:inset-auto sm:right-6 sm:top-16 sm:w-[520px] sm:max-h-[88vh]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div
        ref={panelRef}
        id="lawline-mini-player"
        className={[
          // Mobile: full-screen sheet
          "mx-auto h-full w-full bg-white rounded-none",
          // Desktop: floating tall card
          "sm:h-auto sm:rounded-2xl sm:border sm:border-emerald-400",
          "shadow-[0_12px_36px_rgba(16,185,129,0.22)]",
          "flex flex-col"
        ].join(" ")}
      >
      {/* Top: Big cover + meta (centered) */}
      <div className="relative px-5 pt-6 pb-4 sm:px-6 sm:pt-6 sm:pb-4 flex flex-col items-center text-center">
        {/* Mobile Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 sm:hidden h-9 w-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 text-gray-700 shadow"
          aria-label="Close player"
        >
          ✕
        </button>

        <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden ring-1 ring-emerald-400 shadow-md">
          {safeTracks[currentIndex]?.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="cover"
              src={safeTracks[currentIndex]?.cover}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-emerald-50">
              <Music2 size={56} className="text-emerald-700" />
            </div>
          )}
        </div>

        <div className="mt-4 max-w-[90%]">
          <p className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
            {safeTracks[currentIndex]?.title || "Now Playing"}
          </p>
          <p className="text-sm sm:text-base text-gray-500 truncate">
            {safeTracks[currentIndex]?.artist || "—"}
          </p>
        </div>
      </div>

        {/* Seek bar */}
        <div className="px-5 sm:px-6">
          <div className="flex items-center gap-3 text-[11px] sm:text-xs text-gray-500">
            <span className="w-10 text-right">{fmt(currentTime)}</span>
            <div className="relative flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-emerald-600"
                style={{
                  width:
                    duration && currentTime
                      ? `${Math.min(100, (currentTime / duration) * 100)}%`
                      : "0%",
                }}
              />
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.5}
                value={currentTime || 0}
                onChange={(e) => handleSeek(parseFloat(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-label="Seek"
              />
            </div>
            <span className="w-10">{fmt(duration)}</span>
          </div>
        </div>

        {/* Transport controls */}
        <div className="px-5 sm:px-6 mt-4 mb-2 sm:mt-5 sm:mb-3">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => toggleMute?.()}
              className={`rounded-full px-4 py-1.5 text-sm flex items-center gap-1 transition ${
                isMuted
                  ? "bg-red-100 text-red-700 hover:bg-red-200"
                  : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
              }`}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {isMuted ? "Unmute" : "Mute"}
            </button>

            <button
              onClick={handlePrev}
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 grid place-items-center"
              aria-label="Previous"
            >
              <SkipBack size={18} />
            </button>

            <button
              onClick={handlePlayPause}
              className="h-12 w-12 sm:h-13 sm:w-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white grid place-items-center"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button
              onClick={handleNext}
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 grid place-items-center"
              aria-label="Next"
            >
              <SkipForward size={18} />
            </button>

            <button
              onClick={() => toggleLoop?.()}
              className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full grid place-items-center ${
                loop
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              }`}
              aria-label="Loop"
              title="Loop current track"
            >
              <Repeat size={18} />
            </button>
          </div>
        </div>

        {/* Volume */}
        <div className="px-5 sm:px-6 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-600 w-12">Volume</span>
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-emerald-600 transition-all duration-300"
                style={{ width: `${(volume ?? 0) * 100}%` }}
              />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume ?? 0}
                onChange={(e) => changeVolume?.(parseFloat(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-label="Volume"
              />
            </div>
            <span className="text-xs font-mono text-gray-500 w-12 text-right">
              {Math.round((volume ?? 0) * 100)}%
            </span>
          </div>
        </div>

        {/* Track list */}
        <div className="mt-2 border-t border-emerald-100 overflow-y-auto px-2 sm:px-3 py-2 sm:py-3 flex-1">
          <div className="max-w-[680px] mx-auto w-full">
            {safeTracks.map((t, i) => {
              const active = i === currentIndex;
              return (
                <button
                  key={t.src}
                  onClick={() => handlePickTrack(i)}
                  className={[
                    "w-full text-left flex items-center gap-3 rounded-xl px-3 py-2",
                    active
                      ? "bg-emerald-50 border border-emerald-200"
                      : "hover:bg-emerald-50/70 border border-transparent",
                  ].join(" ")}
                >
                  <div className="h-11 w-11 rounded-lg bg-emerald-100 overflow-hidden flex items-center justify-center shrink-0 ring-1 ring-emerald-200">
                    {t.cover ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img alt="" src={t.cover} className="h-full w-full object-cover" />
                    ) : (
                      <Music2 size={16} className="text-emerald-700" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm truncate ${active ? "text-emerald-800 font-semibold" : "text-gray-800"}`}>
                      {t.title}
                    </p>
                    <p className="text-xs text-gray-500 truncate">{t.artist || "—"}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};

export default VolumeControls;