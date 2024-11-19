import { cn } from '../../utils/cn';

export const MaximizeIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn('lucide lucide-maximize-2', className)}>
    <polyline points='15 3 21 3 21 9' />
    <polyline points='9 21 3 21 3 15' />
    <line x1='21' x2='14' y1='3' y2='10' />
    <line x1='3' x2='10' y1='21' y2='14' />
  </svg>
);

export const MinimizeIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn('lucide lucide-minimize-2', className)}>
    <polyline points='4 14 10 14 10 20' />
    <polyline points='20 10 14 10 14 4' />
    <line x1='14' x2='21' y1='10' y2='3' />
    <line x1='3' x2='10' y1='21' y2='14' />
  </svg>
);

export const VolumeLowIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn('lucide lucide-volume-1', className)}>
    <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
    <path d='M15.54 8.46a5 5 0 0 1 0 7.07' />
  </svg>
);

export const VolumeHighIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn('lucide lucide-volume-2', className)}>
    <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
    <path d='M15.54 8.46a5 5 0 0 1 0 7.07' />
    <path d='M19.07 4.93a10 10 0 0 1 0 14.14' />
  </svg>
);

export const MuteIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn('lucide lucide-volume-x', className)}>
    <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
    <line x1='22' x2='16' y1='9' y2='15' />
    <line x1='16' x2='22' y1='9' y2='15' />
  </svg>
);

export const PauseIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn('lucide lucide-pause', className)}>
    <rect x='14' y='4' width='4' height='16' rx='1' />
    <rect x='6' y='4' width='4' height='16' rx='1' />
  </svg>
);

export const PlayIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn('lucide lucide-play', className)}>
    <polygon points='6 3 20 12 6 21 6 3' />
  </svg>
);

export const OpenExternalPlayerIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn('lucide lucide-external-link', className)}>
    <path d='M15 3h6v6' />
    <path d='M10 14 21 3' />
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
  </svg>
);

export const CloseExternalPlayerIcon = ({ className }: { className: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn('lucide lucide-shrink', className)}>
    <path d='m15 15 6 6m-6-6v4.8m0-4.8h4.8' />
    <path d='M9 19.8V15m0 0H4.2M9 15l-6 6' />
    <path d='M15 4.2V9m0 0h4.8M15 9l6-6' />
    <path d='M9 4.2V9m0 0H4.2M9 9 3 3' />
  </svg>
);
