import { Controls, Gesture, Time } from '@vidstack/react';

import * as Buttons from './PlayerButtons';
import * as Sliders from './PlayerSliders';

import { cn } from '../../utils/cn';

interface PlayerLayoutProps {
  thumbnails?: string;
  showControls: boolean;
  disableGestures?: boolean;
}

function TimeGroup() {
  return (
    <div className='ml-1.5 flex items-center text-sm font-medium'>
      <Time className='time' type='current' />
      <div className='mx-1 text-white/80'>/</div>
      <Time className='time' type='duration' />
    </div>
  );
}

function Gestures() {
  return (
    <>
      <Gesture className='absolute inset-0 z-0 block h-full w-full' event='pointerup' action='toggle:paused' />
      <Gesture className='absolute inset-0 z-0 block h-full w-full' event='dblpointerup' action='toggle:fullscreen' />
      <Gesture className='absolute left-0 top-0 z-10 block h-full w-1/5' event='dblpointerup' action='seek:-10' />
      <Gesture className='absolute right-0 top-0 z-10 block h-full w-1/5' event='dblpointerup' action='seek:10' />
    </>
  );
}

export function PlayerLayout({ thumbnails, showControls, disableGestures }: PlayerLayoutProps) {
  const controlsStyles = showControls ? 'opacity-100' : 'opacity-0';
  return (
    <>
      {!disableGestures && <Gestures />}
      <Controls.Root
        className={cn(
          controlsStyles,
          'media-controls:opacity-100 to-ui-black/0 absolute inset-0 z-30 flex h-full w-full flex-col bg-gradient-to-t from-black/10 transition-opacity'
        )}>
        <div className='flex-1' />
        <Controls.Group className='flex w-full items-center px-2'>
          <Sliders.Time thumbnails={thumbnails} />
        </Controls.Group>
        <Controls.Group className='-mt-0.5 flex w-full items-center px-2 pb-2'>
          <Buttons.Play tooltipPlacement='top start' />
          <Buttons.Mute tooltipPlacement='top' />
          <Sliders.Volume />
          <TimeGroup />
          <div className='flex-1' />
          <Buttons.PIP tooltipPlacement='top' />
          <Buttons.Fullscreen tooltipPlacement='top end' />
        </Controls.Group>
      </Controls.Root>
    </>
  );
}
