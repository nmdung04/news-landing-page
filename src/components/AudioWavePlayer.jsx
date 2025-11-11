'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

function formatTime(sec = 0) {
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  const m = Math.floor(sec / 60).toString();
  return `${m}:${s}`;
}

export default function AudioWavePlayer({
  src,
  height = 42,
  barWidth = 2,
  barGap = 2,
  waveColor = '#0b0b0b',       // màu vạch
  progressColor = '#0b0b0b',   // màu phần đã phát
  bgClass = 'bg-cyan-400',     // nền pill
}) {
  const wrapRef = useRef(null);
  const waveRef = useRef(null);
  const wsRef   = useRef(null);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  // tạo WaveSurfer sau khi mount
  useEffect(() => {
    if (!waveRef.current) return;

    const ws = WaveSurfer.create({
      container: waveRef.current,
      height,
      barWidth,
      barGap,
      barRadius: 2,
      cursorWidth: 0,
      normalize: true,
      responsive: true,
      waveColor,
      progressColor,
      backend: 'webaudio',
    });

    wsRef.current = ws;
    ws.load(src);

    const onReady = () => {
      setReady(true);
      setDuration(ws.getDuration());
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = (t) => setCurrent(t);

    ws.on('ready', onReady);
    ws.on('play', onPlay);
    ws.on('pause', onPause);
    ws.on('timeupdate', onTime);

    return () => {
      ws.un('ready', onReady);
      ws.un('play', onPlay);
      ws.un('pause', onPause);
      ws.un('timeupdate', onTime);
      ws.destroy();
    };
  }, [src, height, barWidth, barGap, waveColor, progressColor]);

  // zoom nhẹ bằng cuộn
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (!wsRef.current) return;
      if (!e.ctrlKey && !e.metaKey) return; // giữ Ctrl/⌘ + cuộn để zoom (tránh scroll trang)
      e.preventDefault();
      const pxPerSec = wsRef.current.params.minPxPerSec ?? 50;
      const next = Math.max(20, Math.min(400, pxPerSec + (e.deltaY > 0 ? -10 : 10)));
      wsRef.current.zoom(next);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const toggle = () => {
    if (!wsRef.current || !ready) return;
    wsRef.current.playPause();
  };

  return (
    <div
      ref={wrapRef}
      className={`w-full ${bgClass} rounded-full shadow-md flex items-center gap-3 px-2 sm:px-3 py-1`}
    >
      {/* play button */}
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause' : 'Play'}
        className="shrink-0 grid place-items-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/70 text-white hover:scale-105 transition"
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <rect x="5" y="4" width="5" height="16" rx="1"></rect>
            <rect x="14" y="4" width="5" height="16" rx="1"></rect>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"></path>
          </svg>
        )}
      </button>

      {/* waveform */}
      <div className="flex-1 min-w-0">
        <div
          ref={waveRef}
          className="h-[34px] sm:h-[36px] cursor-pointer select-none"
          title="Click để tua • Ctrl/⌘ + Cuộn để zoom"
        />
      </div>

      {/* time */}
      <div className="shrink-0 text-black/70 text-sm tabular-nums pr-1">
        {ready ? formatTime(duration) : '--:--'}
      </div>
    </div>
  );
}
