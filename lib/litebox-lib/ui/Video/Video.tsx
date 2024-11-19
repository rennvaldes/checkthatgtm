'use client';

import '@vidstack/react/player/styles/base.css';

import { useState, useRef } from 'react';

import { MediaPlayer, MediaProvider, Poster, type MediaPlayerInstance } from '@vidstack/react';
import { PlayerLayout } from './PlayerLayout';
import { cn } from '../../utils/cn';
import { StartButton } from './PlayerButtons';

interface VideoProps {
  src: string;
  poster?: string;
  isMuted?: boolean;
  isAutoplayEnabled?: boolean;
  thumbnails?: string;
  className?: string;
  showControls?: boolean;
  disableGestures?: boolean;
  isLooping?: boolean;
}

/**
 * The `Video` component plays videos from both internal and external sources.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/Video-1-0-0-7db06ab6e7a54b7388cdb7266d39bba7
 *
 * @param src - URL or source of the video to be played.
 * @param poster - URL or source of the poster image to display before the video plays.
 * @param isMuted - Boolean to indicate if the video should start muted.
 * @param isAutoplayEnabled - Boolean to indicate if the video should autoplay.
 * @param thumbnails - URL for the video thumbnails when hover the video progress bar.
 * @param className - Additional CSS classes that can be passed to customize the styling of the video container.
 */
const Video = ({
  src,
  poster,
  isMuted,
  isAutoplayEnabled,
  thumbnails,
  className,
  showControls = true,
  disableGestures,
  isLooping,
}: VideoProps) => {
  const player = useRef<MediaPlayerInstance>(null);
  const hasExternalProvider = player.current?.provider?.type !== 'video';
  const canAutoPlay = isAutoplayEnabled && isMuted;
  const [showPlayButton, setShowPlayButton] = useState(!canAutoPlay);
  const [isPaused, setIsPaused] = useState(!canAutoPlay);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the video click handler
    setShowPlayButton(false);
    setIsPaused(false);
    player.current?.play();
  };

  const handleVideoClick = () => {
    if (isPaused) {
      setIsPaused(false);
      player.current?.play();
    } else {
      setIsPaused(true);
      player.current?.pause();
    }
  };

  return (
    <MediaPlayer
      ref={player}
      src={src}
      muted={isMuted}
      loop={isLooping}
      autoPlay={isAutoplayEnabled}
      crossOrigin
      playsInline
      onClick={handleVideoClick} // Use a separate handler for video clicks
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'ring-media-focus bg-ui-black/0 aspect-video overflow-hidden rounded-md font-sans text-white data-[focus]:ring-4',
        className
      )}>
      <PlayerLayout
        disableGestures={disableGestures}
        thumbnails={thumbnails}
        showControls={showControls && !showPlayButton && isHovered && !isPaused}
      />
      <MediaProvider>
        {poster && (
          <Poster
            className='absolute inset-0 block h-full w-full object-cover opacity-0 transition-opacity data-[visible]:opacity-100'
            src={poster}
            alt='Video poster'
          />
        )}
        <div
          className={cn(
            'absolute inset-y-0 grid w-full cursor-pointer items-center',
            showPlayButton ? 'opacity-100' : 'pointer-events-none opacity-0',
            !poster && 'transition-opacity delay-300',
            hasExternalProvider && 'z-20'
          )}>
          <StartButton
            className='group z-[1000] m-auto flex items-center justify-center rounded-full p-8 ring-0 transition'
            onClick={(event: any) => handlePlayButtonClick(event)} // Ensure this only handles the play button click
          />
        </div>
      </MediaProvider>
    </MediaPlayer>
  );
};

Video.displayName = 'Video';

export default Video;