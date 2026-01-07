'use client';

import { useMemo } from 'react';

import {
  FullscreenButton,
  MuteButton,
  PIPButton,
  PlayButton,
  Tooltip,
  useMediaState,
  type TooltipPlacement,
} from '@vidstack/react';

import {
  CloseExternalPlayerIcon,
  MaximizeIcon,
  MinimizeIcon,
  MuteIcon,
  OpenExternalPlayerIcon,
  PauseIcon,
  PlayIcon,
  VolumeHighIcon,
  VolumeLowIcon,
} from './PlayerIcons';

export interface MediaButtonProps {
  tooltipPlacement: TooltipPlacement;
}

const buttonClass =
  'group ring-media-focus relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-hidden ring-inset hover:bg-white/20 data-focus:ring-4';

const tooltipClass =
  'animate-out fade-out slide-out-to-bottom-2 data-[visible]:animate-in data-[visible]:fade-in data-[visible]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-0.5 text-sm font-medium text-white parent-data-[open]:hidden';

export function Play({ tooltipPlacement }: MediaButtonProps) {
  const isPaused = useMediaState('paused');
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PlayButton className={buttonClass}>
          {isPaused ? <PlayIcon className='h-6 w-6' /> : <PauseIcon className='h-6 w-6' />}
        </PlayButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipClass} placement={tooltipPlacement}>
        {isPaused ? 'Play' : 'Pause'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Mute({ tooltipPlacement }: MediaButtonProps) {
  const volume = useMediaState('volume');
  const isMuted = useMediaState('muted');

  const Icon = useMemo(() => {
    if (isMuted || volume === 0) {
      return <MuteIcon className='h-6 w-6' />;
    }
    if (volume < 0.5) {
      return <VolumeLowIcon className='h-6 w-6' />;
    }
    return <VolumeHighIcon className='h-6 w-6' />;
  }, [isMuted, volume]);

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <MuteButton className={buttonClass}>{Icon}</MuteButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipClass} placement={tooltipPlacement}>
        {isMuted ? 'Unmute' : 'Mute'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function PIP({ tooltipPlacement }: MediaButtonProps) {
  const isActive = useMediaState('pictureInPicture');
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PIPButton className={buttonClass}>
          {isActive ? <CloseExternalPlayerIcon className='h-6 w-6' /> : <OpenExternalPlayerIcon className='h-6 w-6' />}
        </PIPButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipClass} placement={tooltipPlacement}>
        {isActive ? 'Close Miniplayer' : 'Open Miniplayer'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Fullscreen({ tooltipPlacement }: MediaButtonProps) {
  const isActive = useMediaState('fullscreen');
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <FullscreenButton className={buttonClass}>
          {isActive ? <MinimizeIcon className='h-6 w-6' /> : <MaximizeIcon className='h-6 w-6' />}
        </FullscreenButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipClass} placement={tooltipPlacement}>
        {isActive ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export const StartButton = ({ className, onClick }: { className: string; onClick: (event: any) => void }) => {
  return (
    <button type='button' aria-label='start' className={className} onClick={onClick}>
      <svg
        className='group-hover:text-ui-blue/80'
        width='34'
        height='40'
        viewBox='0 0 34 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.666016 37.7574V2.24246C0.666016 0.540694 2.53791 -0.496814 3.98102 0.405126L32.3929 18.1627C33.7508 19.0111 33.7508 20.9887 32.3929 21.8373L3.98102 39.5947C2.53791 40.4967 0.666016 39.4593 0.666016 37.7574Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
};
