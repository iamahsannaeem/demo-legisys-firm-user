import { FC } from "react";

interface SendIconProps {
  color?: string;
}
export const SendIcon: FC<SendIconProps> = ({ color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 40 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ddd_76748_2279)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38Z"
          fill="#353750"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.1001 19.8V15.8H29.1001V21.8H13.9001L17.5001 25.4L16.1001 26.8L10.1001 20.8L16.1001 14.8L17.5001 16.2L13.9001 19.8H27.1001Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_ddd_76748_2279"
          x="0"
          y="0"
          width="40"
          height="42"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_76748_2279"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_76748_2279"
            result="effect2_dropShadow_76748_2279"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_76748_2279"
            result="effect3_dropShadow_76748_2279"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_76748_2279"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

SendIcon.displayName = "SendIcon";
