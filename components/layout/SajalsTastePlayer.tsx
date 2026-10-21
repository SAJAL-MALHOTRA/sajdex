'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playlist, Track } from '@/data/playlist';
import { Play, Pause, SkipBack, SkipForward, X, Disc, ExternalLink, AlertCircle, Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks/useSound';
import { getAssetPath } from '@/utils/asset';

export default function SajalsTastePlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progressSec, setProgressSec] = useState(0);
  const [durationSec, setDurationSec] = useState(180);
  const [volume, setVolume] = useState(0.9);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);

  const { playClick, playHover } = useSound();
  const currentTrack: Track = playlist[currentTrackIndex];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync volume with audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Initial load of first track so metadata is primed
  useEffect(() => {
    const audio = audioRef.current;
    const initialSrc = getAssetPath(playlist[0].audioUrl);
    if (audio && (!audio.src || !audio.src.endsWith(initialSrc))) {
      audio.src = initialSrc;
      audio.load();
    }
  }, []);

  const playTrack = async (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    const targetTrack = playlist[index];
    const targetSrc = getAssetPath(targetTrack.audioUrl);

    if (!audio.src || !audio.src.endsWith(targetSrc)) {
      audio.src = targetSrc;
    }

    setCurrentTrackIndex(index);
    setProgressSec(0);
    setPlaybackError(false);

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err: any) {
      if (err?.name === 'AbortError') {
        // Fast switch debounce: retry play if aborted
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      } else {
        console.warn('Audio play exception:', err);
        setIsPlaying(false);
        setPlaybackError(true);
      }
    }
  };

  const togglePlay = async () => {
    playClick();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && !audio.paused) {
      audio.pause();
      setIsPlaying(false);
    } else {
      await playTrack(currentTrackIndex);
    }
  };

  const loadAndPlayTrack = async (index: number) => {
    playClick();
    await playTrack(index);
  };

  const handleNextTrack = () => {
    playClick();
    const nextIdx = (currentTrackIndex + 1) % playlist.length;
    playTrack(nextIdx);
  };

  const handlePrevTrack = () => {
    playClick();
    const prevIdx = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    playTrack(prevIdx);
  };

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

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="relative font-mono select-none">
      {/* Declarative HTML5 Audio Engine */}
      <audio
        ref={audioRef}
        preload="auto"
        onPlay={() => {
          setIsPlaying(true);
          setPlaybackError(false);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setProgressSec(Math.floor(audioRef.current.currentTime));
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current?.duration && !isNaN(audioRef.current.duration)) {
            setDurationSec(Math.floor(audioRef.current.duration));
          }
        }}
        onEnded={() => {
          const nextIdx = (currentTrackIndex + 1) % playlist.length;
          playTrack(nextIdx);
        }}
        onError={() => {
          console.warn('Audio tag playback error on:', audioRef.current?.src);
          setIsPlaying(false);
          setPlaybackError(true);
        }}
      />

      {/* Precision Instrument Header Bezel Pill: Instant Play + Playlist Toggle */}
      <div className="flex items-center">
        {/* Instant 1-Click Play / Pause on Pill */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-l border border-r-0 text-[10px] font-mono tracking-wider transition-all cursor-pointer ${
            isPlaying
              ? 'bg-black text-white border-black font-bold shadow-[0_0_12px_rgba(0,0,0,0.15)] dark:bg-white dark:text-black dark:border-white dark:shadow-[0_0_14px_rgba(255,255,255,0.35)]'
              : 'bg-white hover:bg-[#F4F4F6] text-[#09090B] border-[#D1D5DB] shadow-sm dark:bg-[#141417] dark:border-[#27272A] dark:text-[#EDEDED] dark:hover:bg-[#1E1E24]'
          }`}
          title={isPlaying ? 'Pause music' : 'Play favorite songs'}
        >
          {isPlaying ? (
            <>
              {/* Animated Mini Equalizer Bars */}
              <div className="flex items-end gap-0.5 h-2.5">
                <span className="w-0.5 bg-white dark:bg-black rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2.5" />
                <span className="w-0.5 bg-white dark:bg-black rounded-full animate-[pulse_0.4s_ease-in-out_infinite_0.2s] h-1.5" />
                <span className="w-0.5 bg-white dark:bg-black rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.4s] h-2" />
              </div>
              <span className="max-w-[85px] sm:max-w-[105px] truncate font-sans text-[11px] font-bold">
                {currentTrack.title}
              </span>
              <Pause size={9} className="fill-current shrink-0 ml-0.5" />
            </>
          ) : (
            <>
              <Play size={8.5} className="fill-current text-[#09090B] dark:text-[#EDEDED] shrink-0" />
              <span className="font-semibold tracking-widest text-[9.5px]">SONGS</span>
            </>
          )}
        </button>

        {/* Playlist Toggle */}
        <button
          onClick={() => {
            playClick();
            setIsExpanded(!isExpanded);
          }}
          className={`flex items-center gap-1 px-1.5 py-0.5 rounded-r border border-[#D1D5DB] dark:border-[#27272A] text-[9.5px] font-mono transition-all cursor-pointer shadow-sm ${
            isExpanded
              ? 'bg-[#EAECEF] text-black border-black/40 dark:bg-[#1E1E24] dark:text-white dark:border-white/40'
              : 'bg-white text-[#52525B] hover:text-[#09090B] hover:bg-[#F4F4F6] dark:bg-[#141417] dark:text-[#71717A] dark:hover:text-white dark:hover:bg-[#1E1E24]'
          }`}
          title="Browse 6 favorite songs"
        >
          <span>{playlist.length}</span>
          <span className="text-[7.5px] text-[#71717A]">{isExpanded ? '▲' : '▼'}</span>
        </button>
      </div>

      {/* Expanded Precision Drawer Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 top-9 z-50 w-[calc(100vw-1.5rem)] max-w-sm sm:w-96 bg-white dark:bg-[#0E0F12] border border-[#E2E4E8] dark:border-[#27272A] rounded-xl p-3 sm:p-3.5 shadow-2xl space-y-3 font-mono text-xs select-text text-[#09090B] dark:text-[#EDEDED]"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[#E2E4E8] dark:border-[#27272A] pb-2">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400 dark:bg-zinc-600'}`} />
                <span className="font-mono text-[10.5px] font-bold text-[#09090B] dark:text-white tracking-wider uppercase">
                  AUDIO ROTATION // SAJAL&apos;S TASTE
                </span>
              </div>

              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 rounded bg-[#F4F4F6] hover:bg-[#EAECEF] border border-[#D1D5DB] text-[#52525B] hover:text-[#09090B] dark:bg-[#18181B] dark:border-[#27272A] dark:text-[#71717A] dark:hover:text-white transition-colors cursor-pointer"
              >
                <X size={12} />
              </button>
            </div>

            {/* Error Banner */}
            {playbackError && (
              <div className="p-2 rounded bg-amber-500/10 border border-amber-500/30 dark:bg-[#18181B] dark:border-[#3F3F46] text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-amber-700 dark:text-white font-bold text-[10.5px]">
                  <AlertCircle size={12} />
                  <span>PLAYBACK NOTICE</span>
                </div>
                <p className="text-[10px] text-[#52525B] dark:text-[#A1A1AA]">
                  Direct browser stream interrupted. Open in Spotify:
                </p>
                <a
                  href={currentTrack.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-[#09090B] dark:text-white hover:underline pt-0.5 font-bold"
                >
                  <span>SPOTIFY REEL ↗</span>
                </a>
              </div>
            )}

            {/* Active Track Card */}
            <div className="p-3 rounded-lg bg-[#F9F9FB] dark:bg-[#141417] border border-[#E2E4E8] dark:border-[#27272A] space-y-2.5 shadow-xs">
              <div className="flex items-center justify-between text-[9.5px] text-[#71717A]">
                <span>TRACK {String(currentTrackIndex + 1).padStart(2, '0')} OF {playlist.length}</span>
                <span className="text-[#09090B] dark:text-[#A1A1AA] font-semibold">{currentTrack.category}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#F1F2F5] dark:bg-[#1C1D22] border border-[#E2E4E8] dark:border-[#27272A] flex items-center justify-center shrink-0">
                  <Disc size={16} className={`text-[#52525B] dark:text-[#A1A1AA] ${isPlaying ? 'animate-spin text-[#09090B] dark:text-white' : ''}`} />
                </div>

                <div className="truncate flex-1">
                  <h4 className="text-xs font-bold text-[#09090B] dark:text-white truncate font-sans">
                    {currentTrack.title}
                  </h4>
                  <p className="text-[10.5px] text-[#52525B] dark:text-[#A1A1AA] truncate font-sans">
                    {currentTrack.artist}
                  </p>
                </div>
              </div>

              {/* Scrubber */}
              <div className="space-y-1 pt-0.5">
                <div
                  onClick={handleSeek}
                  className="relative h-1.5 w-full bg-[#E2E4E8] dark:bg-[#27272A] rounded-full overflow-hidden cursor-pointer"
                >
                  <div
                    className="h-full bg-black dark:bg-white transition-all duration-100"
                    style={{ width: `${(progressSec / (durationSec || 1)) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-[#71717A]">
                  <span>{formatTime(progressSec)}</span>
                  <span>{formatTime(durationSec)}</span>
                </div>
              </div>

              {/* Controls & Volume Strip */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevTrack}
                    className="p-1 rounded bg-white hover:bg-[#F4F4F6] border border-[#D1D5DB] text-[#52525B] hover:text-[#09090B] dark:bg-[#1E1E24] dark:border-[#27272A] dark:text-[#A1A1AA] dark:hover:text-white transition-colors cursor-pointer"
                    title="Previous Track"
                  >
                    <SkipBack size={12} />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded bg-black hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black transition-colors flex items-center justify-center cursor-pointer shadow"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={12} className="fill-current" /> : <Play size={12} className="fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={handleNextTrack}
                    className="p-1 rounded bg-white hover:bg-[#F4F4F6] border border-[#D1D5DB] text-[#52525B] hover:text-[#09090B] dark:bg-[#1E1E24] dark:border-[#27272A] dark:text-[#A1A1AA] dark:hover:text-white transition-colors cursor-pointer"
                    title="Next Track"
                  >
                    <SkipForward size={12} />
                  </button>
                </div>

                {/* Volume Slider & Mute Toggle */}
                <div className="flex items-center gap-1.5 text-[#52525B] dark:text-[#71717A]">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 hover:text-[#09090B] dark:hover:text-white transition-colors cursor-pointer"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted || volume === 0 ? <VolumeX size={13} className="text-red-500" /> : <Volume2 size={13} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setVolume(val);
                      if (val > 0) setIsMuted(false);
                    }}
                    className="w-16 h-1 bg-[#E2E4E8] dark:bg-[#27272A] rounded-lg appearance-none cursor-pointer accent-black dark:accent-white"
                    title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
                  />
                </div>

                <a
                  href={currentTrack.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-[#52525B] hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-white transition-colors"
                >
                  <span>SPOTIFY</span>
                  <ExternalLink size={9} />
                </a>
              </div>
            </div>

            {/* Playlist List */}
            <div className="space-y-1 pt-1 max-h-40 overflow-y-auto pr-1">
              {playlist.map((tr, idx) => {
                const isCurrent = idx === currentTrackIndex;
                return (
                  <button
                    key={tr.id}
                    onClick={() => loadAndPlayTrack(idx)}
                    onMouseEnter={playHover}
                    className={`w-full flex items-center justify-between p-1.5 rounded-md text-left transition-colors cursor-pointer ${
                      isCurrent
                        ? 'bg-black/5 dark:bg-[#1E1E24] border border-black/20 dark:border-white/20 text-[#09090B] dark:text-white font-medium'
                        : 'hover:bg-[#F4F4F6] border border-transparent text-[#52525B] hover:text-[#09090B] dark:hover:bg-[#18181B] dark:text-[#71717A] dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`text-[9.5px] font-bold ${isCurrent ? 'text-[#09090B] dark:text-white' : 'text-[#71717A] dark:text-[#52525B]'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="truncate">
                        <span className="font-semibold block truncate text-[11px] font-sans">{tr.title}</span>
                        <span className="text-[9.5px] text-[#71717A] block truncate font-sans">{tr.artist}</span>
                      </div>
                    </div>
                    <span className="text-[9.5px] text-[#71717A] dark:text-[#52525B] shrink-0 font-mono">{tr.duration}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
