import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Track = { title: string; artist?: string; src: string; cover?: string };

interface AudioContextType {
  // existing API you already use
  isMuted: boolean;
  toggleMute: () => void;
  volume: number;                 // 0..1
  changeVolume: (value: number) => void;
  playIfNotPlaying: () => void;
  togglePlay: () => void;
  isPlaying: boolean;

  // added for full player control
  currentTime: number;
  duration: number;
  seek: (seconds: number) => void;

  tracks: Track[];
  track: number;                  // index
  setTrack: (index: number) => void;
  next: () => void;
  prev: () => void;

  loop: boolean;
  toggleLoop: () => void;
}

const FALLBACK_TRACKS: Track[] = [
  {
    title: "Swaminarayan Dhun",
    artist: "Jay Swaminarayan",
    src: "/audio/SwaminarayanDhun.mp3",
    cover: "/images/covers/HarikrushnaMaharaj.jpg",
  },
  {
    title: "Radharaman Dev",
    artist: "Jay Swaminarayan",
    src: "/audio/Laxminarayandev.mp3",
    cover: "/images/covers/Radharamandev.jpeg",
  },
    {
    title: "Laxminarayan Dev",
    artist: "Jay Swaminarayan",
    src: "/audio/Laxminarayandev.mp3",
    cover: "/images/covers/Laxminarayandev.jpg",
  },
  {
    title: "Kastbhanjan Dev",
    artist: "Jay Swaminarayan",
    src: "/audio/Kastbhanjandev.mp3",
    cover: "/images/covers/Kastbhanajndev.jpg",
  },
];

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({
  children,
  initialTracks,
  autoPlay = false,
}: {
  children: React.ReactNode;
  /** Optional: override default playlist */
  initialTracks?: Track[];
  /** If true, attempts to autoplay when track loads (browser may block) */
  autoPlay?: boolean;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // core state
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loop, setLoop] = useState(false);

  // playlist
  const [tracks] = useState<Track[]>(
    () => (initialTracks?.length ? initialTracks : FALLBACK_TRACKS)
  );
  const [track, setTrackIndex] = useState(0);

  // create the single audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "auto";
    audio.loop = loop;
    audio.volume = volume;
    audio.muted = isMuted;

    audioRef.current = audio;

    // wire events
    const onTime = () => setCurrentTime(audio.currentTime || 0);
    const onLoaded = () => setDuration(audio.duration || 0);
    const onEnded = () => {
      if (audio.loop) return; // loop handles itself
      next();                 // advance automatically
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // load / reload source whenever track changes
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    el.src = tracks[track].src;
    setCurrentTime(0); // reset progress

    // try autoplay if requested or if already playing
    const shouldPlay = autoPlay || isPlaying || sessionStorage.getItem("hasPlayed") === "true";
    if (shouldPlay) {
      el.play()
        .then(() => {
          setIsPlaying(true);
          sessionStorage.setItem("hasPlayed", "true");
        })
        .catch(() => {
          // blocked by browser; remain paused
          setIsPlaying(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  // reflect state changes to element
  useEffect(() => {
    const el = audioRef.current;
    if (el) el.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const el = audioRef.current;
    if (el) el.volume = Math.min(1, Math.max(0, volume));
  }, [volume]);

  useEffect(() => {
    const el = audioRef.current;
    if (el) el.loop = loop;
  }, [loop]);

  // controls
  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el
        .play()
        .then(() => {
          setIsPlaying(true);
          sessionStorage.setItem("hasPlayed", "true");
        })
        .catch(() => setIsPlaying(false));
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => setIsMuted((m) => !m);

  const changeVolume = (value: number) => setVolume(value);

  const playIfNotPlaying = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el
        .play()
        .then(() => {
          setIsPlaying(true);
          sessionStorage.setItem("hasPlayed", "true");
        })
        .catch(() => setIsPlaying(false));
    }
  };

  const seek = (seconds: number) => {
    const el = audioRef.current;
    if (!el || !isFinite(seconds)) return;
    el.currentTime = Math.max(0, Math.min(seconds, isFinite(el.duration) ? el.duration : seconds));
    setCurrentTime(el.currentTime);
  };

  const next = () => setTrackIndex((i) => (i + 1) % tracks.length);
  const prev = () => setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);
  const setTrack = (index: number) =>
    setTrackIndex(() => (index >= 0 && index < tracks.length ? index : 0));

  const toggleLoop = () => setLoop((v) => !v);

  const value = useMemo<AudioContextType>(
    () => ({
      // existing
      isMuted,
      toggleMute,
      volume,
      changeVolume,
      playIfNotPlaying,
      togglePlay,
      isPlaying,
      // added
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
    }),
    [
      isMuted,
      volume,
      isPlaying,
      currentTime,
      duration,
      track,
      tracks,
      loop,
    ]
  );

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used inside AudioProvider");
  return context;
};