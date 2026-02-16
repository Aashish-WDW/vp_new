import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Show audio control after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
        audioRef.current.volume = 0.3;
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"
      />

      {isVisible && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed bottom-28 right-8 z-40 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-gold/30 hover:bg-gold/20 shadow-elegant animate-fade-in"
          onClick={toggleAudio}
          aria-label={isMuted ? "Unmute ambient audio" : "Mute ambient audio"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-gold" />
          ) : (
            <Volume2 className="h-5 w-5 text-gold animate-pulse" />
          )}
        </Button>
      )}
    </>
  );
}
