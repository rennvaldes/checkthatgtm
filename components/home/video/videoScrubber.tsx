"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  MouseEvent,
  TouchEvent,
  RefObject,
  Dispatch,
} from "react";
import { a, useSpring } from "@react-spring/web";

import { useWindowEvent } from "@/lib/hooks";

import { VIDEO } from "./videoConstants";
import { VideoState, VideoAction } from "./videoReducer";

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

interface VideoScrubberProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  state: VideoState;
  dispatch: Dispatch<VideoAction>;
}

export function VideoScrubber({
  videoRef,
  state,
  dispatch,
}: VideoScrubberProps) {
  const { isActive, isScrubbing } = state;

  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hoverSpring = useSpring({
    opacity: isHovered ? 1 : VIDEO.ProgressOpacity,
  });
  const scrubberRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const updateProgress = useCallback(
    (value: number) => setProgress(clamp(value, 0, 1)),
    []
  );

  const seekToPosition = useCallback(
    (clientX: number) => {
      if (
        isScrubbing &&
        scrubberRef.current &&
        rectRef.current &&
        videoRef.current
      ) {
        const normalizedX = clamp(
          (clientX - rectRef.current.x) / rectRef.current.width,
          0,
          1
        );
        updateProgress(normalizedX);
        videoRef.current.currentTime = normalizedX * videoRef.current.duration;
      }
    },
    [videoRef, isScrubbing, updateProgress]
  );

  const startScrubbing = useCallback(
    (clientX: number) => {
      rectRef.current = scrubberRef.current?.getBoundingClientRect() ?? null;
      dispatch({ type: "SetIsScrubbing", isScrubbing: true });
      // Seek immediately
      if (scrubberRef.current && rectRef.current && videoRef.current) {
        const normalizedX = clamp(
          (clientX - rectRef.current.x) / rectRef.current.width,
          0,
          1
        );
        updateProgress(normalizedX);
        videoRef.current.currentTime = normalizedX * videoRef.current.duration;
      }
    },
    [dispatch, videoRef, updateProgress]
  );

  const stopScrubbing = useCallback(
    () => dispatch({ type: "SetIsScrubbing", isScrubbing: false }),
    [dispatch]
  );

  const updateTimeFromVideo = useCallback(() => {
    if (videoRef.current) {
      updateProgress(videoRef.current.currentTime / videoRef.current.duration);
    }
  }, [videoRef, updateProgress]);

  useEffect(() => {
    const video = videoRef.current;
    video?.addEventListener("timeupdate", updateTimeFromVideo);
    return () => video?.removeEventListener("timeupdate", updateTimeFromVideo);
  }, [updateTimeFromVideo, videoRef]);

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      startScrubbing(event.clientX);
    },
    [startScrubbing]
  );

  const handleMouseMove = useCallback(
    (event: Event) => seekToPosition((event as globalThis.MouseEvent).clientX),
    [seekToPosition]
  );

  const handleMouseUp = useCallback(() => stopScrubbing(), [stopScrubbing]);

  const handleTouchStart = useCallback(
    (event: TouchEvent) => {
      event.stopPropagation();
      startScrubbing(event.touches[0].clientX);
    },
    [startScrubbing]
  );

  const handleTouchMove = useCallback(
    (event: Event) =>
      seekToPosition((event as globalThis.TouchEvent).touches[0].clientX),
    [seekToPosition]
  );

  const handleTouchEnd = useCallback(() => stopScrubbing(), [stopScrubbing]);

  const handleClick = useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // Global event listeners for scrubbing
  useWindowEvent("blur-sm", handleMouseUp, isActive);
  useWindowEvent("mousemove", handleMouseMove, isActive);
  useWindowEvent("mouseup", handleMouseUp, isActive);
  useWindowEvent("touchmove", handleTouchMove, isActive);
  useWindowEvent("touchend", handleTouchEnd, isActive);

  return (
    <div
      className="relative flex-1 h-full flex items-center cursor-pointer select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={scrubberRef}
    >
      <div className="relative h-[3px] bg-white/20 w-full">
        <a.div
          className="absolute left-0 top-0 bottom-0 h-full bg-white"
          style={{
            width: `max(${VIDEO.ScrubberHeight}px, ${100 * progress}%)`,
            opacity: hoverSpring.opacity,
          }}
        />
      </div>
    </div>
  );
}
