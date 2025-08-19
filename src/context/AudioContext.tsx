import { createContext, useContext, useEffect, useRef, useState } from "react";

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  volume: number;
  changeVolume: (value: number) => void;
  playIfNotPlaying: () => void;
  togglePlay: () => void;
  isPlaying: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/SwaminarayanDhun.mp3");
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const hasPlayed = sessionStorage.getItem("hasPlayed");
    if (!hasPlayed) {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          sessionStorage.setItem("hasPlayed", "true");
        })
        .catch(() => {
          setIsPlaying(false); // autoplay failed (likely on mobile)
        });
    }

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted((prev) => !prev);
  };

  const changeVolume = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
    setVolume(value);
  };

  const playIfNotPlaying = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      });
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().then(() => setIsPlaying(true));
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        toggleMute,
        volume,
        changeVolume,
        playIfNotPlaying,
        togglePlay,
        isPlaying,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used inside AudioProvider");
  return context;
};