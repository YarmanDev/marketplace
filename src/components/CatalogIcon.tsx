import * as React from "react";
import { SVGProps } from "react";

const CatalogIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      filter="url(#a)"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4.684H5v11.053h10V4.684ZM15 20.158H5V31.21h10V20.159ZM29 4.684H19v11.053h10V4.684ZM29 20.158H19V31.21h10V20.159Z" />
    </g>
    <defs>
      <filter
        id="a"
        x={-3}
        y={0.263}
        width={40}
        height={43.368}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_2"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default CatalogIcon;
