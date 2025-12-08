"use client";

import { useState, useCallback, TouchEvent, MouseEvent, RefObject, Dispatch } from "react";
import { a, useSpring, SpringValue } from "@react-spring/web";

import { cx } from "@/lib/classnames";
import { useIsTouchDevice } from "@/lib/hooks";
import { VIDEO } from "./videoConstants";
import { VideoState, VideoAction } from "./videoReducer";
import { VideoScrubber } from "./videoScrubber";
import { PlayIcon, PauseIcon, FullscreenIcon } from "@/components/home/assets/assetsIcons";

interface VideoControlsProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  state: VideoState;
  dispatch: Dispatch<VideoAction>;
  controlsSpring: { opacity: SpringValue<number> };
  toggle: () => void;
  fullscreen: () => void;
}

export function VideoControls({
  videoRef,
  state,
  dispatch,
  controlsSpring,
  toggle,
  fullscreen,
}: VideoControlsProps) {
  const { isPlaying, isLoaded } = state;
  const isTouchDevice = useIsTouchDevice();

  // Spring-based hover states for buttons
  const [isPlayHovered, setIsPlayHovered] = useState(false);
  const [isFullscreenHovered, setIsFullscreenHovered] = useState(false);

  const playButtonSpring = useSpring({
    opacity: isPlayHovered ? 1 : VIDEO.ProgressOpacity,
  });

  const fullscreenButtonSpring = useSpring({
    opacity: isFullscreenHovered ? 1 : VIDEO.ProgressOpacity,
  });

  const handleToggleClick = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      toggle();
    },
    [toggle]
  );

  const handleFullscreenClick = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      fullscreen();
    },
    [fullscreen]
  );

  const handleMouseEnter = useCallback(
    () =>
      !isTouchDevice &&
      dispatch({ type: "SetIsHoveringControls", isHoveringControls: true }),
    [dispatch, isTouchDevice]
  );

  const handleMouseLeave = useCallback(
    () =>
      !isTouchDevice &&
      dispatch({ type: "SetIsHoveringControls", isHoveringControls: false }),
    [dispatch, isTouchDevice]
  );

  const handleTouchStart = useCallback(
    (event: TouchEvent) => event.stopPropagation(),
    []
  );

  const handlePlayMouseEnter = useCallback(() => setIsPlayHovered(true), []);
  const handlePlayMouseLeave = useCallback(() => setIsPlayHovered(false), []);
  const handleFullscreenMouseEnter = useCallback(() => setIsFullscreenHovered(true), []);
  const handleFullscreenMouseLeave = useCallback(() => setIsFullscreenHovered(false), []);

  return (
    <a.div
      className={cx(
        "absolute left-0 right-0 bottom-0 z-10",
        "flex items-center",
        "h-20 px-[30px]",
        "max-sm:h-14 max-sm:px-0"
      )}
      style={controlsSpring}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      {/* Play/Pause Button */}
      <a.button
        className={cx(
          "w-[58px] h-full flex items-center justify-center",
          "pr-[30px] max-sm:pr-0",
          "max-sm:w-14"
        )}
        style={playButtonSpring}
        onClick={handleToggleClick}
        onMouseEnter={handlePlayMouseEnter}
        onMouseLeave={handlePlayMouseLeave}
      >
        {isPlaying || !isLoaded ? <PauseIcon /> : <PlayIcon />}
      </a.button>

      {/* Scrubber */}
      <VideoScrubber
        videoRef={videoRef}
        state={state}
        dispatch={dispatch}
      />

      {/* Fullscreen Button */}
      <a.button
        className={cx(
          "w-[58px] h-full flex items-center justify-center",
          "pl-[30px] max-sm:pl-0",
          "max-sm:w-14"
        )}
        style={fullscreenButtonSpring}
        onClick={handleFullscreenClick}
        onMouseEnter={handleFullscreenMouseEnter}
        onMouseLeave={handleFullscreenMouseLeave}
      >
        <FullscreenIcon />
      </a.button>
    </a.div>
  );
}
