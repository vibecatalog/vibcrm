import React from 'react';

interface RocketIconProps {
  size?: number;
  className?: string;
}

export const RocketIcon: React.FC<RocketIconProps> = ({ size = 32, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity="0.4"
      d="M15.735 8.6527L17.7158 6.67194C19.9461 4.44165 22.8659 3.51654 25.9561 3.36537C27.1581 3.30657 27.759 3.27717 28.2409 3.75909C28.7229 4.24099 28.6934 4.84195 28.6346 6.0439C28.4834 9.13405 27.5583 12.0539 25.3281 14.2842L23.3473 16.265C21.7161 17.8962 21.2523 18.36 21.5947 20.1294C21.9327 21.481 22.2598 22.7898 21.277 23.7726C20.0849 24.9647 18.9974 24.9647 17.8053 23.7726L8.22736 14.1947C7.03524 13.0026 7.0352 11.9151 8.22736 10.723C9.21014 9.74016 10.519 10.0673 11.8705 10.4052C13.6399 10.7477 14.1038 10.2839 15.735 8.6527Z"
      fill="url(#paint0_linear_rocket)"
    />
    <path
      d="M15.735 8.6527L17.7158 6.67194C19.9461 4.44165 22.8659 3.51654 25.9561 3.36537C27.1581 3.30657 27.759 3.27717 28.2409 3.75909C28.7229 4.24099 28.6934 4.84195 28.6346 6.0439C28.4834 9.13404 27.5583 12.0539 25.3281 14.2842L23.3473 16.265C21.7161 17.8962 21.2523 18.36 21.5947 20.1294C21.9327 21.481 22.2598 22.7898 21.277 23.7726C20.0849 24.9647 18.9974 24.9647 17.8053 23.7726L8.22736 14.1947C7.03524 13.0026 7.0352 11.9151 8.22736 10.723C9.21014 9.74016 10.519 10.0673 11.8705 10.4052C13.6399 10.7477 14.1038 10.2839 15.735 8.6527Z"
      stroke="url(#paint1_linear_rocket)"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M22.6611 9.33337H22.6731"
      stroke="url(#paint2_linear_rocket)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33325 28.6667L9.99992 22"
      stroke="url(#paint3_linear_rocket)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M11.3333 28.6667L13.9999 26"
      stroke="url(#paint4_linear_rocket)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3.33325 20.6667L5.99992 18"
      stroke="url(#paint5_linear_rocket)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_rocket"
        x1="8.77639"
        y1="5.01758"
        x2="29.8676"
        y2="6.86918"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0695937" stopColor="#246BFD" />
        <stop offset="0.816425" stopColor="#0040C3" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_rocket"
        x1="8.77639"
        y1="5.01758"
        x2="29.8676"
        y2="6.86918"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0695937" stopColor="#246BFD" />
        <stop offset="0.816425" stopColor="#0040C3" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_rocket"
        x1="22.6619"
        y1="9.41232"
        x2="22.6739"
        y2="9.41233"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0695937" stopColor="#246BFD" />
        <stop offset="0.816425" stopColor="#0040C3" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_rocket"
        x1="3.78423"
        y1="22.5263"
        x2="10.3752"
        y2="23.1049"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0695937" stopColor="#246BFD" />
        <stop offset="0.816425" stopColor="#0040C3" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_rocket"
        x1="11.5136"
        y1="26.2105"
        x2="14.15"
        y2="26.442"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0695937" stopColor="#246BFD" />
        <stop offset="0.816425" stopColor="#0040C3" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_rocket"
        x1="3.51364"
        y1="18.2105"
        x2="6.15005"
        y2="18.442"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0695937" stopColor="#246BFD" />
        <stop offset="0.816425" stopColor="#0040C3" />
      </linearGradient>
    </defs>
  </svg>
);
