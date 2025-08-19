// src/context/AudioContext.tsx
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  volume: number;
  changeVolume: (value: number) => void;
  playIfNotPlaying: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.2); // Default 20%

  useEffect(() => {
    const audio = new Audio("/audio/SwaminarayanDhun.mp3");
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    // Only play on first visit
    const hasPlayed = sessionStorage.getItem("hasPlayed");
    if (!hasPlayed) {
      audio.play();
      sessionStorage.setItem("hasPlayed", "true");
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
      audioRef.current.play();
    }
  };

  return (
    <AudioContext.Provider
      value={{ isMuted, toggleMute, volume, changeVolume, playIfNotPlaying }}
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