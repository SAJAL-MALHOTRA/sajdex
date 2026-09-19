'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playlist, Track } from '@/data/playlist';
import { Music, Play, Pause, SkipBack, SkipForward, X, Disc, ExternalLink, AlertCircle } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export default function SajalsTastePlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progressSec, setProgressSec] = useState(0);
  const [durationSec, setDurationSec] = useState(180);
  const [playbackError, setPlaybackError] = useState(false);

  const { playClick, playHover } = useSound();
  const currentTrack: Track = playlist[currentTrackIndex];

  // System A: Real HTML5 Audio Element Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Native HTML5 Audio Event Listeners Setup
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDurationSec(Math.floor(audio.duration));
      }
    };

    const handleTimeUpdate = () => {
      setProgressSec(Math.floor(audio.currentTime));
    };

    const handlePlay = () => {
      console.log("[SAJAL'S TASTE] Playing:", currentTrack.title);
      setIsPlaying(true);
      setPlaybackError(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      handleNextTrack();
    };

    const handleError = () => {
      console.error("[SAJAL'S TASTE] Audio file missing or load error:", {
        src: audio.src,
        error: audio.error,
      });
      setIsPlaying(false);
      setPlaybackError(true);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [currentTrackIndex]);

  // Load new track when index changes
  const loadAndPlayTrack = async (index: number) => {
    playClick();
    setCurrentTrackIndex(index);
    setProgressSec(0);
    setPlaybackError(false);

    const audio = audioRef.current;
    if (audio) {
      const targetTrack = playlist[index];
      console.log("[SAJAL'S TASTE] Loading:", targetTrack.audioUrl);
      audio.pause();
      audio.src = targetTrack.audioUrl;
      audio.load();

      try {
        await audio.play();
      } catch (err) {
        console.error("[SAJAL'S TASTE] Audio playback failed:", err);
        setPlaybackError(true);
      }
    }
  };

  // Toggle Play / Pause from User Click Gesture
  const togglePlay = async () => {
    playClick();
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
    } else {
      setPlaybackError(false);
      if (!audio.src || audio.src === '' || !audio.src.includes(currentTrack.audioUrl)) {
        console.log("[SAJAL'S TASTE] Loading:", currentTrack.audioUrl);
        audio.src = currentTrack.audioUrl;
        audio.load();
      }
      try {
        await audio.play();
      } catch (err) {
        console.error("[SAJAL'S TASTE] Audio playback failed:", err);
        setPlaybackError(true);
      }
    }
  };

  // Handle Next Track
  const handleNextTrack = () => {
    playClick();
    const nextIdx = (currentTrackIndex + 1) % playlist.length;
    loadAndPlayTrack(nextIdx);
  };

  // Handle Previous Track
  const handlePrevTrack = () => {
    playClick();
    const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadAndPlayTrack(prevIdx);
  };

  // Handle Seek
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !durationSec) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const targetSec = (clickX / width) * durationSec;
    audio.currentTime = targetSec;
    setProgressSec(Math.floor(targetSec));
  };

  // Format MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="relative font-mono select-none">
      {/* REAL HTML5 AUDIO ELEMENT */}
      <audio ref={audioRef} preload="metadata" />

      {/* ─── 1. COLLAPSED TOP-RIGHT MUSIC PILL (♫ SAJAL'S TASTE) ─── */}
      <button
        onClick={() => {
          playClick();
          setIsExpanded(!isExpanded);
        }}
        onMouseEnter={playHover}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
          isPlaying
            ? 'bg-[#0B0B0B] border-emerald-500/60 text-[#F5F5F5] shadow-[0_0_12px_rgba(16,185,129,0.2)]'
            : playbackError
            ? 'bg-[#140808] border-red-500/40 text-red-400'
            : 'bg-[#0B0B0B] border-white/10 text-[#8A8A8A] hover:text-[#F5F5F5] hover:border-white/20'
        }`}
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>

            <Disc size={13} className="animate-spin text-emerald-400" />

            <span className="font-bold text-[#F5F5F5] max-w-[140px] truncate">
              {currentTrack.title} · {currentTrack.artist}
            </span>

            <span className="text-[10px] text-emerald-400 font-bold ml-0.5">❚❚</span>
          </>
        ) : playbackError ? (
          <>
            <AlertCircle size={13} className="text-red-400" />
            <span className="font-semibold text-red-400">PLAYBACK UNAVAILABLE</span>
            <span className="text-[10px] text-[#8A8A8A]">↗</span>
          </>
        ) : (
          <>
            <Music size={13} className="text-emerald-400" />
            <span className="font-semibold text-[#F5F5F5]">SAJAL&apos;S TASTE</span>
            <span className="text-[10px] text-[#8A8A8A]">▶</span>
          </>
        )}
      </button>

      {/* ─── 2. EXPANDED DROPDOWN DRAWER MODAL ─── */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 z-50 w-80 sm:w-96 bg-[#080808] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4 font-mono text-xs select-text"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Music size={14} className="text-emerald-400" />
                <span className="font-mono text-xs font-bold text-[#F5F5F5] uppercase tracking-wider">
                  SAJAL&apos;S TASTE
                </span>
              </div>

              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 rounded-full bg-[#111111] border border-white/10 text-[#8A8A8A] hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Error State Banner */}
            {playbackError && (
              <div className="p-3 rounded-xl bg-[#140808] border border-red-500/30 text-xs space-y-2">
                <div className="flex items-center justify-between text-red-400 font-bold">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={14} />
                    <span>PLAYBACK UNAVAILABLE</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#8A8A8A]">
                  Audio file isn&apos;t available locally.
                </p>
                <a
                  href={currentTrack.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-500 text-black font-mono text-[11px] font-bold hover:bg-emerald-400 transition-colors"
                >
                  <span>LISTEN ON SPOTIFY ↗</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )}

            {/* NOW PLAYING CARD */}
            <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8A8A8A]">
                <span>PERSONAL EASTER EGG</span>
                <span className="text-emerald-400 font-bold">{currentTrack.category}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className={`relative w-11 h-11 rounded-lg bg-gradient-to-br ${currentTrack.coverGradient} border border-white/10 flex items-center justify-center shrink-0`}>
                  <Disc size={20} className={`text-white/80 ${isPlaying ? 'animate-spin' : ''}`} />
                </div>

                <div className="truncate">
                  <h4 className="text-xs font-bold text-[#F5F5F5] uppercase truncate">
                    {currentTrack.title}
                  </h4>
                  <p className="text-[11px] text-[#8A8A8A] font-semibold truncate">
                    {currentTrack.artist}
                  </p>
                </div>
              </div>

              {/* Progress Scrubber Bar */}
              <div className="space-y-1 pt-1">
                <div
                  onClick={handleSeek}
                  className="relative h-1.5 w-full bg-[#161616] rounded-full overflow-hidden cursor-pointer group"
                >
                  <div
                    className="h-full bg-emerald-400 rounded-full transition-all duration-150"
                    style={{ width: `${(progressSec / (durationSec || 1)) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#8A8A8A]">
                  <span>{formatTime(progressSec)}</span>
                  <span>{formatTime(durationSec)}</span>
                </div>
              </div>

              {/* Playback Controls & Spotify Link */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevTrack}
                    className="p-1.5 rounded-lg bg-[#161616] border border-white/10 text-[#8A8A8A] hover:text-white transition-colors"
                  >
                    <SkipBack size={13} />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black transition-colors flex items-center justify-center font-bold"
                  >
                    {isPlaying ? (
                      <Pause size={13} className="fill-current" />
                    ) : (
                      <Play size={13} className="fill-current ml-0.5" />
                    )}
                  </button>

                  <button
                    onClick={handleNextTrack}
                    className="p-1.5 rounded-lg bg-[#161616] border border-white/10 text-[#8A8A8A] hover:text-white transition-colors"
                  >
                    <SkipForward size={13} />
                  </button>
                </div>

                <a
                  href={currentTrack.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#161616] border border-white/10 text-emerald-400 hover:text-emerald-300 font-mono text-[10px] font-bold transition-all"
                >
                  <span>SPOTIFY</span>
                  <ExternalLink size={9} />
                </a>
              </div>
            </div>

            {/* SAJAL'S PLAYLIST */}
            <div className="space-y-1.5 pt-1">
              <span className="font-mono text-[10px] text-[#8A8A8A] uppercase block font-semibold">
                SAJAL&apos;S CURATED PLAYLIST ({playlist.length} TRACKS)
              </span>

              <div className="space-y-1 max-h-44 overflow-y-auto pr-1 custom-scrollbar">
                {playlist.map((tr, idx) => {
                  const isCurrent = idx === currentTrackIndex;
                  return (
                    <button
                      key={tr.id}
                      onClick={() => loadAndPlayTrack(idx)}
                      onMouseEnter={playHover}
                      className={`w-full flex items-center justify-between p-2 rounded-lg text-left font-mono transition-colors ${
                        isCurrent
                          ? 'bg-[#0D0D0D] border border-emerald-500/40 text-[#F5F5F5]'
                          : 'bg-[#060606] border border-white/5 text-[#8A8A8A] hover:text-[#F5F5F5] hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-[10px] text-emerald-400 font-bold">0{idx + 1}</span>
                        <div className="truncate">
                          <span className="font-bold text-[#F5F5F5] block truncate text-xs">{tr.title}</span>
                          <span className="text-[10px] text-[#8A8A8A] block truncate">{tr.artist}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-[#8A8A8A]">{tr.duration}</span>
                        {isCurrent && isPlaying && <Disc size={12} className="animate-spin text-emerald-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
