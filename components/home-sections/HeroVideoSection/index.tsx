'use client';
import React from 'react';

import Video from '@/lib/litebox-lib/ui/Video/Video';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';
import ReactPlayer from 'react-player';
import { useVideoData, useVideoStyles, VideoZone } from './utils';

function EllipseDeco() {
  return (
    <svg width='76' height='76' viewBox='0 0 76 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='38' cy='38' r='38' fill='#FFDACA' />
    </svg>
  );
}
function ArrowDeco() {
  return (
    <svg width='29' height='96' viewBox='0 0 29 96' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M14.5 95.5L14.5 1M14.5 1L1 14.0173M14.5 1L28 14.0173' stroke='#20233A' />
    </svg>
  );
}

function HeroVideoSection() {
  const { isDesktop, isProcessing } = useResponsiveDevice();
  const videoStyles = useVideoStyles();
  const { videoData } = useVideoData();

  const onVideoClick = React.useCallback((e: any) => {
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('video-section')?.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  const videoBox = (
    <div
      style={{
        transform: `translate(${videoStyles.translate.x}px, 0) scaleX(${videoStyles.scale.x}) scaleY(${videoStyles.scale.y})`,
      }}
      className='bg-ui-veige z-50 flex h-[420px] w-[320px] scale-100 transform-none items-center justify-center ease-in lg:sticky lg:top-[90px] lg:h-[640px] lg:w-[1140px] lg:transform'>
      {videoStyles.zone != VideoZone.Final && (
        <div
          role='button'
          onClick={onVideoClick}
          tabIndex={0}
          onKeyDown={e => e.key == 'Enter' && onVideoClick(e)}
          className='absolute left-0 top-0 z-20 h-full w-full'
        />
      )}
      <Video
        src={videoData.src}
        isAutoplayEnabled
        isMuted={!videoStyles.isVisible}
        showControls={videoStyles.zone == VideoZone.Final}
        isLooping
      />
    </div>
  );

  return (
    <section
      id='video-section'
      className='relative z-30 mt-[32px] flex h-[420px] w-[320px] justify-center lg:static lg:z-auto lg:mt-[100px] lg:h-[1000px]'>
      <div className='absolute top-[1200px] mx-auto hidden w-full min-w-[1280px] max-w-[1440px] justify-end pr-[103px] lg:flex'>
        <EllipseDeco />
      </div>
      <div
        id='arrow-deco'
        className='absolute top-[1574px] mx-auto hidden w-full min-w-[1280px] max-w-[1440px] justify-end pr-[28px] lg:flex'>
        <ArrowDeco />
      </div>

      {!isProcessing && (
        <>
          {isDesktop ? (
            <div className='absolute top-0 h-[2000px]'>{videoStyles.zone !== VideoZone.Zero && videoBox}</div>
          ) : (
            <ReactPlayer controls width='100%' height='100%' playing loop playsinline muted url={videoData.src} />
          )}
        </>
      )}
    </section>
  );
}

export default HeroVideoSection;
