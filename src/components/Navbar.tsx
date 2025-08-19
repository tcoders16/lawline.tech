import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import VolumeControls from "./VolumeControls"; // Assuming you have a separate component for volume controls

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Volume & autoplay logic
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(err => {
        console.warn("Playback failed", err);
      });
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const navLinkClass =
    "relative text-gray-700 text-sm transition-colors duration-300 hover:text-green-600 group";

  const underlineSpan = `
    absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full
  `;

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50 chakra-petch-regular">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link to="/" className="relative inline-flex text-gray-800 text-2xl font-semibold">
          <span className="relative inline-block">
            Lawline
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1418 125"
              className="absolute -bottom-[1.9px] left-0 w-full h-[6px]"
              preserveAspectRatio="none"
            >
              <path
                d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
                fill="#000"
              />
            </svg>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/blessings" className={navLinkClass}>
            Harikrushna Maharaj
            <span className={underlineSpan} />
          </Link>
          <Link to="/ai-client-updates" className={navLinkClass}>
            Lawline v1 – AI Client Update Edition
            <span className={underlineSpan} />
          </Link>
        </nav>

        {/* Audio Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Play Button */}


          {/* Volume Slider */}
          <VolumeControls />  

          {/* Auth Buttons */}

        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden text-gray-800">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 px-4 pb-4">
            <Link to="/blessings" className="py-2 border-b border-gray-200 hover:text-green-600 transition-colors duration-300">Harikrushna Maharaj</Link>
            <Link to="/ai-client-updates" className="py-2 border-b border-gray-200 hover:text-green-600 transition-colors duration-300">Lawline v1 – AI Client Update Edition</Link>
          </nav>

          {/* Mobile Audio Controls */}
          <div className="flex items-center space-x-4 px-4 pb-4 pt-2">
            <button
              onClick={togglePlay}
              className="bg-green-600 text-white p-2 rounded-full shadow hover:scale-105 transition"
              aria-label="Play/Pause"
            >
              {isPlaying ? <BsPauseFill size={20} /> : <BsPlayFill size={20} />}
            </button>

            <div className="relative group w-full">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-1 accent-green-600 bg-gradient-to-r from-green-400 via-green-600 to-green-700 rounded-full cursor-pointer"
              />
              <div className="absolute -top-6 right-0 text-xs opacity-0 group-hover:opacity-100 transition duration-300 text-gray-600">
                {Math.round(volume * 100)}%
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2 px-4 pb-4">
            <button className="w-full py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 transition">Log in</button>
            <button className="w-full py-2 text-sm bg-black text-white rounded hover:opacity-90 transition">Sign up</button>
          </div>
        </div>
      )}

      {/* Hidden Audio Tag */}
      <audio
        ref={audioRef}
        src="/audio/SwaminarayanDhun.mp3"
        loop
      />
    </header>
  );
}