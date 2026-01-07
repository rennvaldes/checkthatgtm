"use client";

import {
  useState,
  useRef,
  useReducer,
  useCallback,
  useEffect,
  MouseEvent,
  ReactNode,
} from "react";
import { a, useSpring } from "@react-spring/web";

import { cx } from "@/lib/classnames";
import { useWindowEvent, useIsTouchDevice } from "@/lib/hooks";
import { VIDEO } from "@/components/home/video/videoConstants";
import {
  videoReducer,
  initialVideoState,
} from "@/components/home/video/videoReducer";
import { VideoControls } from "@/components/home/video/videoControls";
import { VideoLoader } from "@/components/home/video/videoLoader";

interface VideoProps {
  src: string;
  className?: string;
  aspectRatio?: string;
  playButton?: ReactNode;
}

export function VideoRoot({
  src,
  className,
  aspectRatio = "21/9",
  playButton,
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(videoReducer, initialVideoState);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const playTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mouseStartPos = useRef({ x: 0, y: 0 });
  const isTouchDevice = useIsTouchDevice();

  const {
    isActive,
    mode,
    isPlaying,
    isHidingControls,
    isHoveringControls,
    isScrubbing,
    isLoaded,
  } = state;

  // --- Play / Pause / Toggle ---
  const play = useCallback((delay = 0) => {
    if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
    playTimeoutRef.current = setTimeout(() => {
      videoRef.current?.play().catch(() => play(50));
    }, delay);
  }, []);

  const pause = useCallback(() => {
    if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
    if (!videoRef.current?.paused) videoRef.current?.pause();
  }, []);

  const toggle = useCallback(() => {
    videoRef.current?.paused ? play() : pause();
  }, [play, pause]);

  // --- Fullscreen ---
  const fullscreen = useCallback(() => {
    const el = videoRef.current as HTMLVideoElement & {
      webkitEnterFullScreen?: () => void;
      requestFullscreen?: () => void;
      webkitRequestFullscreen?: () => void;
    };
    if (el?.webkitEnterFullScreen) el.webkitEnterFullScreen();
    else if (el?.requestFullscreen) el.requestFullscreen();
    else if (el?.webkitRequestFullscreen) el.webkitRequestFullscreen();
  }, []);

  // --- Controls visibility ---
  const hideControls = useCallback((delay = VIDEO.ControlsHideTimeout) => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      dispatch({ type: "SetIsHidingControls", isHidingControls: true });
    }, delay);
  }, []);

  const showControls = useCallback(
    (shouldHide = true) => {
      dispatch({ type: "SetIsHidingControls", isHidingControls: false });
      if (shouldHide) hideControls();
    },
    [hideControls]
  );

  const areControlsVisible = useCallback(
    () =>
      isActive &&
      mode === "full" &&
      (!isHidingControls ||
        isHoveringControls ||
        isScrubbing ||
        !isPlaying ||
        !isLoaded),
    [
      isActive,
      mode,
      isHidingControls,
      isHoveringControls,
      isScrubbing,
      isPlaying,
      isLoaded,
    ]
  );

  const controlsSpring = useSpring({
    opacity: areControlsVisible() ? 1 : 0,
  });

  // --- Big play button hover spring ---
  const [isBigPlayHovered, setIsBigPlayHovered] = useState(false);
  const bigPlaySpring = useSpring({
    opacity: isBigPlayHovered ? 1 : VIDEO.ProgressOpacity,
  });

  const handleBigPlayMouseEnter = useCallback(
    () => setIsBigPlayHovered(true),
    []
  );
  const handleBigPlayMouseLeave = useCallback(
    () => setIsBigPlayHovered(false),
    []
  );

  // --- Video event listeners ---
  const handleCanPlay = useCallback(() => {
    if (videoRef.current?.readyState === 4) {
      dispatch({ type: "SetIsLoaded", isLoaded: true });
    } else {
      if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
      loadTimeoutRef.current = setTimeout(handleCanPlay, 50);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const handlePlay = () =>
      dispatch({ type: "SetIsPlaying", isPlaying: true });
    const handlePause = () =>
      dispatch({ type: "SetIsPlaying", isPlaying: false });

    video?.addEventListener("play", handlePlay);
    video?.addEventListener("pause", handlePause);
    video?.addEventListener("canplay", handleCanPlay);
    video?.addEventListener("playing", handleCanPlay);

    return () => {
      video?.removeEventListener("play", handlePlay);
      video?.removeEventListener("pause", handlePause);
      video?.removeEventListener("canplay", handleCanPlay);
      video?.removeEventListener("playing", handleCanPlay);
    };
  }, [handleCanPlay]);

  // --- Intersection Observer for viewport detection ---
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        dispatch({ type: "SetIsActive", isActive: inView });

        if (inView && mode === "preview") {
          play();
        } else if (!inView) {
          pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [mode, play, pause]);

  // --- Auto-play when video becomes loaded ---
  useEffect(() => {
    if (isLoaded && isActive) {
      play(500);
    }
  }, [isLoaded, isActive, play]);

  // --- Big play button handler (switch to full mode) ---
  const handleBigPlayClick = useCallback(() => {
    dispatch({ type: "SetMode", mode: "full" });
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.loop = false;
    }
    play();
    showControls();
  }, [play, showControls]);

  // --- Mouse move handler for showing controls ---
  const handleMouseMove = useCallback(() => {
    if (isActive && mode === "full" && !isTouchDevice) {
      showControls();
    }
  }, [isActive, mode, isTouchDevice, showControls]);

  // --- Mouse down handler to track click start position ---
  const handleMouseDown = useCallback((event: MouseEvent) => {
    mouseStartPos.current = { x: event.clientX, y: event.clientY };
  }, []);

  // --- Mouse leave handler to hide controls ---
  const handleMouseLeave = useCallback(() => {
    if (mode === "full") {
      hideControls();
    }
  }, [mode, hideControls]);

  // --- Click handler (only toggle if mouse didn't move) ---
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (mode === "full") {
        if (isTouchDevice) {
          isHidingControls ? showControls() : hideControls();
        } else if (isActive) {
          event.preventDefault();
          event.stopPropagation();
          const currentPos = { x: event.clientX, y: event.clientY };
          const distance = Math.sqrt(
            Math.pow(currentPos.x - mouseStartPos.current.x, 2) +
              Math.pow(currentPos.y - mouseStartPos.current.y, 2)
          );
          // Only toggle if mouse didn't move more than 2px
          if (distance <= 2) {
            toggle();
          }
        }
      }
    },
    [
      mode,
      isActive,
      isTouchDevice,
      isHidingControls,
      showControls,
      hideControls,
      toggle,
    ]
  );

  // --- Handle video end ---
  const handleVideoEnd = useCallback(() => {
    dispatch({ type: "SetIsPlaying", isPlaying: false });
    showControls(false);
  }, [showControls]);

  // --- Focus/blur handlers ---
  useWindowEvent(
    "focus",
    useCallback(() => {
      if (isActive) play(500);
    }, [isActive, play]),
    isActive
  );

  useWindowEvent("blur-sm", pause, isActive);

  return (
    <div
      ref={containerRef}
      className={cx("relative overflow-hidden", className)}
      style={{ aspectRatio }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none transform-[translateZ(0)]"
        playsInline
        muted={mode === "preview"}
        loop={mode === "preview"}
        onEnded={handleVideoEnd}
        draggable={false}
      />

      {/* Loader Spinner */}
      <VideoLoader isLoaded={isLoaded} isActive={isActive} />

      {/* Big Play Button (preview mode only) */}
      {mode === "preview" && playButton && (
        <a.button
          onClick={handleBigPlayClick}
          onMouseEnter={handleBigPlayMouseEnter}
          onMouseLeave={handleBigPlayMouseLeave}
          className={cx(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "z-10 mix-blend-hard-light"
          )}
          style={bigPlaySpring}
          aria-label="Play video"
        >
          {playButton}
        </a.button>
      )}

      {/* Controls (full mode only) */}
      {mode === "full" && (
        <VideoControls
          videoRef={videoRef}
          state={state}
          dispatch={dispatch}
          controlsSpring={controlsSpring}
          toggle={toggle}
          fullscreen={fullscreen}
        />
      )}
    </div>
  );
}
