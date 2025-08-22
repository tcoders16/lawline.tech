import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Play } from "lucide-react";


import VolumeControls from "./VolumeControls";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();
  const isBlessingPage = location.pathname === "/blessings";

  const playIfNotPlaying = () => {
    const audio = audioRef.current;
    if (audio && audio.paused) {
      audio.volume = 0.5;
      audio.play().catch((err) => console.warn("Playback failed:", err));
    }
  };
  
  const handleMobileToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const navLinkClass = "relative text-gray-700 text-sm transition-colors duration-300 hover:text-green-600 group";

  const underlineSpan = `absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full`;

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50 chakra-petch-regular">
      <div className="relative max-w-9xl mx-auto flex items-center justify-between px-12 py-3">
        
        
        
        {/* Logo */}
        <Logo />



        {/* Desktop Navigation */}
        <nav className="hidden xl:flex ml-54 space-x-7">
          <Link to="/" className={navLinkClass}>
            Home
            <span className={underlineSpan} />
          </Link>
          <Link
            to="/blessings"
            onClick={() => {
              if (!isBlessingPage) playIfNotPlaying();
            }}
            className={navLinkClass}
          >
            <div className="flex items-center gap-1">
              <Play size={15} className="text-green-600" />
              Harikrushna Maharaj
            </div>
            <span className={underlineSpan} />
          </Link>
          <Link to="/ai-client-updates" className={navLinkClass}>
            <span className="font-medium">Lawline v1</span>  – AI Client Update Edition
            <span className={underlineSpan} />
          </Link>
          <Link to="/Coffee-and-Business" className={navLinkClass}>
            ☕️ Business
            <span className={underlineSpan} />
          </Link>
          <Link to="/Omkumar-portfolio" className={navLinkClass}>
            🕉️ Omkumar
            <span className={underlineSpan} />
          </Link>
        </nav>




        {/* Desktop Audio Controls */}
        <div className="hidden xl:flex items-center space-x-4">
          <VolumeControls />
        </div>

        {/* Hamburger Icon (Mobile & Tablet Only) */}
        <button
          onClick={handleMobileToggle}
          className="block xl:hidden text-gray-800"
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      {isOpen && (
        <div className="xl:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 px-4 pb-4">
            <Link to="/" className="py-2 border-b border-gray-200 hover:text-green-600">
              Home
            </Link>






            <Link
              to="/blessings"
              onClick={() => {
                if (!isBlessingPage) playIfNotPlaying();
              }}
              className="py-2 border-b border-gray-200 hover:text-green-600"
            >
              <div className="flex items-center gap-1">
                <Play size={15} className="text-green-600" />
                Harikrushna Maharaj
              </div>
            </Link>
            




          <Link to="/ai-client-updates" className="py-2 border-b border-gray-200 hover:text-green-600">
            <span className="font-medium">Lawline v1</span>  – AI Client Update Edition
            <span className={underlineSpan} />
          </Link>


          
          <Link to="/Coffee-and-Business" className="py-2 border-b border-gray-200 hover:text-green-600">
            ☕️ Business
            <span className={underlineSpan} />
          </Link>
            
            <Link to="/Omkumar-portfolio" className="py-2 border-b border-gray-200 hover:text-green-600">
              🕉️ Omkumar
            </Link>
          </nav>

          {/* Mobile Audio Controls */}
          <div className="px-4 pb-4 pt-2">
            <VolumeControls />
          </div>
        </div>
      )}

      {/* Audio Player Element (Global) */}
      <audio ref={audioRef} src="/audio/SwaminarayanDhun.mp3" loop />
    </header>
  );
}