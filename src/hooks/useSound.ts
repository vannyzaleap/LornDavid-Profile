import { useState, useEffect } from 'react';
import { sound } from '../utils/soundEffects';

export function useSound() {
  const [isMuted, setIsMuted] = useState<boolean>(() => sound.isMuted());

  useEffect(() => {
    const unsubscribe = sound.subscribe((muted) => {
      setIsMuted(muted);
    });
    return () => unsubscribe();
  }, []);

  const toggleSound = () => {
    sound.toggleMute();
  };

  return {
    isMuted,
    toggleSound,
    playClick: () => sound.playClick(),
    playHover: () => sound.playHover(),
    playToggle: () => sound.playToggle(),
    playSuccess: () => sound.playSuccess(),
  };
}
