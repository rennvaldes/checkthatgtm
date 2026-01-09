"use client";

export function RadarBackground() {
  return (
    <div className="absolute left-[50%] -translate-x-1/2 top-[-400px] w-[1540px] h-[1540px] opacity-50 pointer-events-none animate-[spin_20s_linear_infinite]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1540.38 1540.38"
      >
        <g id="Frame 2147259861" opacity="0.5">
          <g filter="url(#filter0_i_1_1927)" id="Ellipse 22" opacity="0.2">
            <circle
              cx="770.191"
              cy="770.191"
              fill="#F9FAFA"
              fillOpacity="0.01"
              r="770"
              transform="rotate(15 770.191 770.191)"
            />
          </g>
          <g filter="url(#filter1_i_1_1927)" id="Ellipse 20" opacity="0.4">
            <circle
              cx="770.191"
              cy="770.191"
              fill="#F9FAFA"
              fillOpacity="0.01"
              r="526.544"
            />
          </g>
          <g filter="url(#filter2_i_1_1927)" id="Ellipse 19" opacity="0.6">
            <circle
              cx="770.191"
              cy="770.191"
              fill="#F9FAFA"
              fillOpacity="0.01"
              r="284.976"
            />
          </g>
          <path
            d="M1513.95 969.482C1459.18 1173.9 1327.1 1336.96 1157.6 1435.63L770.191 770.191L1513.95 969.482Z"
            fill="url(#paint0_linear_1_1927)"
            id="Subtract"
            opacity="0.2"
          />
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="1540.38"
            id="filter0_i_1_1927"
            width="1540.38"
            x="0"
            y="0"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="113.235" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.54902 0 0 0 0 0.898039 0 0 0 0 0.54902 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_1_1927"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="1053.09"
            id="filter1_i_1_1927"
            width="1053.09"
            x="243.647"
            y="243.647"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="113.235" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.54902 0 0 0 0 0.898039 0 0 0 0 0.54902 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_1_1927"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="569.951"
            id="filter2_i_1_1927"
            width="569.951"
            x="485.216"
            y="485.216"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="113.235" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.54902 0 0 0 0 0.898039 0 0 0 0 0.54902 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_1_1927"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_1927"
            x1="888.691"
            x2="1386.69"
            y1="842.691"
            y2="1234.69"
          >
            <stop stopColor="#0ABF53" stopOpacity="0" />
            <stop offset="1" stopColor="#0ABF53" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

