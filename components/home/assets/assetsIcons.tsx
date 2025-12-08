"use client";

import { memo } from "react";

// Video Controls Icons
const Play = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    className="h-full w-[28px] max-sm:w-[22px]"
  >
    <path d="M25 17L77 50L25 83" fill="white" />
  </svg>
);
export const PlayIcon = memo(Play);

const Pause = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    className="h-full w-[28px] max-sm:w-[22px]"
  >
    <path d="M44.5609 17H25V83H44.5609V17Z" fill="white" />
    <path d="M75 17H55.4391V83H75V17Z" fill="white" />
  </svg>
);
export const PauseIcon = memo(Pause);

const Fullscreen = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    className="h-full w-[28px] max-sm:w-[22px]"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M72.9678 21.3001H54.9001V13.3001H86.8001V45.2001H78.8001V26.7809L59.5335 46.1235L53.8666 40.4767L72.9678 21.3001ZM21.2999 73.1192L40.5665 53.7767L46.2334 59.4234L27.1321 78.6001H45.1999V86.6001H13.2999V54.7001H21.2999V73.1192Z"
      fill="white"
    />
  </svg>
);
export const FullscreenIcon = memo(Fullscreen);

// Hero Play Button Icon (ring with outlined play triangle, backdrop blur effect)
const HeroPlay = () => (
  <svg
    width="64"
    height="64"
    viewBox="32 32 64 64"
    fill="none"
    aria-hidden="true"
    className="drop-shadow-[0_0_12px_rgba(0,0,0,0.25)]"
  >
    <path
      d="M64 32C81.6731 32 96 46.3279 96 64.001C95.9997 81.6739 81.6729 96.001 64 96.001C46.3271 96.001 32.0003 81.6739 32 64.001C32 46.3279 46.3269 32 64 32ZM57.667 74.0078L75 64L57.667 53.9932V74.0078ZM72.333 64L59 71.6973V56.3018L72.333 64Z"
      fill="hsla(0, 5%, 92%, 1)"
      fillOpacity="0.75"
    />
  </svg>
);
export const HeroPlayIcon = memo(HeroPlay);

// Feature Icons
const Context = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1918_5425)">
      <path
        d="M0.752441 27.071L6.7777 21.0315"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
      <path
        d="M16.1857 22.3815C22.0719 22.3815 26.8436 17.6098 26.8436 11.7236C26.8436 5.83738 22.0719 1.06567 16.1857 1.06567C10.2995 1.06567 5.52783 5.83738 5.52783 11.7236C5.52783 17.6098 10.2995 22.3815 16.1857 22.3815Z"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
    </g>
    <defs>
      <clipPath id="clip0_1918_5425">
        <rect width="27.9095" height="27.8242" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const IconContext = memo(Context);

const Strategy = () => (
  <svg
    width="28"
    height="29"
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1918_5429)">
      <path
        d="M13.71 7.12003L20.3 0.530029L26.89 7.12003"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
      <path
        d="M0.75 28.03V22.39C0.75 19.28 3.27 16.75 6.39 16.75H14.67C17.78 16.75 20.31 14.23 20.31 11.11V5.46997"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
    </g>
    <defs>
      <clipPath id="clip0_1918_5429">
        <rect width="27.43" height="28.03" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const IconStrategy = memo(Strategy);

const Execution = () => (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3684 0C11.3684 6.28105 6.28105 11.3684 0 11.3684"
      stroke="#231F20"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M0 15.6316C6.28105 15.6316 11.3684 20.719 11.3684 27"
      stroke="#231F20"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M27 11.3684C20.719 11.3684 15.6316 6.28105 15.6316 0"
      stroke="#231F20"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M15.6316 27C15.6316 20.719 20.719 15.6316 27 15.6316"
      stroke="#231F20"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
);
export const IconExecution = memo(Execution);

const Optimization = () => (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1918_5440)">
      <path
        d="M5.96021 21.0297C6.92021 21.9897 8.07021 22.7697 9.35021 23.3097C10.6302 23.8497 12.0302 24.1497 13.5002 24.1497C14.9702 24.1497 16.3702 23.8497 17.6502 23.3097C18.9302 22.7697 20.0702 21.9897 21.0402 21.0297C22.0102 20.0697 22.7802 18.9197 23.3202 17.6397C23.8602 16.3597 24.1602 14.9597 24.1602 13.4897"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
      <path
        d="M21.0301 5.95984C20.0701 4.99984 18.9201 4.21984 17.6401 3.67984C16.3601 3.13984 14.9601 2.83984 13.4901 2.83984C12.0201 2.83984 10.6201 3.13984 9.34008 3.67984C8.06008 4.21984 6.92008 4.99984 5.95008 5.95984C4.98008 6.91984 4.21008 8.06984 3.67008 9.34984C3.13008 10.6298 2.83008 12.0298 2.83008 13.4998"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
      <path
        d="M24.1601 2.83984V9.16984H17.8301"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
      <path
        d="M2.84009 24.1601V17.8301H9.17009"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
    </g>
    <defs>
      <clipPath id="clip0_1918_5440">
        <rect
          width="22.82"
          height="22.82"
          fill="white"
          transform="translate(2.09009 2.08984)"
        />
      </clipPath>
    </defs>
  </svg>
);
export const IconOptimization = memo(Optimization);

// Process Icons
const InputsStrategy = () => (
  <svg
    width="21"
    height="16"
    viewBox="0 0 21 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <g clipPath="url(#clip0_1790_1847)">
      <path
        d="M15.0117 16.0101V3.89014"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
      <path
        d="M19.4805 5.01004L15.0005 0.540039L10.5305 5.01004"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
      <path
        d="M5.00391 0V12.12"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
      <path
        d="M0.532657 11L5.00266 15.47L9.47266 11"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
    </g>
    <defs>
      <clipPath id="clip0_1790_1847">
        <rect
          width="20.01"
          height="16.01"
          fill="white"
          transform="matrix(-1 0 0 1 20.0117 0)"
        />
      </clipPath>
    </defs>
  </svg>
);
export const IconInputsStrategy = memo(InputsStrategy);

const CalibrationWorkflows = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M8.16016 0V4.00426C8.16016 8.00852 15.5684 8.00852 15.5684 12.0043V16.0085"
      stroke="#231F20"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
    <path
      d="M6.97485 6.39844C4.88412 8.25573 0.75 9.01399 0.75 11.9959V16.0001"
      stroke="#231F20"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
    <path
      d="M8.16016 8V16"
      stroke="#231F20"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </svg>
);
export const IconCalibrationWorkflows = memo(CalibrationWorkflows);

const ExecutionIteration = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M10.5919 4.33643L3.04661 11.8817L0.671875 16.648L5.42977 14.2648L12.975 6.71958"
      stroke="#231F20"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
    <path
      d="M11.4844 3.4437L13.8675 1.06055L16.2507 3.4437L13.8675 5.82686"
      stroke="#231F20"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
);
export const IconExecutionIteration = memo(ExecutionIteration);

const GrowthScale = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <g clipPath="url(#clip0_1790_1882)">
      <path
        d="M0.671875 15.325L12.7747 3.22217"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
      <path
        d="M8.82031 0.849121H15.1486V7.17738"
        stroke="#231F20"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
    </g>
    <defs>
      <clipPath id="clip0_1790_1882">
        <rect
          width="15.4884"
          height="15.4884"
          fill="white"
          transform="translate(0.253906 0.255859)"
        />
      </clipPath>
    </defs>
  </svg>
);
export const IconGrowthScale = memo(GrowthScale);

// Comparison & Pricing Icons
const Check = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.52875 7.51514L6.99875 11.9851L14.4688 4.51514"
      stroke="#080A0D"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </svg>
);
export const IconCheck = memo(Check);

const Cross = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12L12 4"
      stroke="#B3B3B3"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
    <path
      d="M12 12L4 4"
      stroke="#B3B3B3"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </svg>
);
export const IconCross = memo(Cross);

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8H13M13 8L9 4M13 8L9 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const IconArrowRight = memo(ArrowRight);
