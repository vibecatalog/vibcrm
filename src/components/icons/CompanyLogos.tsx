import React from 'react';

export const TechFlowLogo: React.FC<{ className?: string }> = ({ className = 'h-8' }) => (
  <svg className={className} viewBox="0 0 120 40" fill="currentColor">
    <path d="M10 10h20v5H15v5h12v5H15v10h-5V10z" />
    <path d="M35 10h5v25h-5V10z" />
    <path d="M50 15c5 0 8 3 8 8s-3 8-8 8-8-3-8-8 3-8 8-8zm0 4c-2 0-3 1-3 4s1 4 3 4 3-1 3-4-1-4-3-4z" />
    <path d="M70 15l5 15 5-15h5l-7 20h-6l-7-20h5z" />
    <text x="90" y="25" className="text-sm font-semibold">
      TechFlow
    </text>
  </svg>
);

export const GrowthLabsLogo: React.FC<{ className?: string }> = ({ className = 'h-8' }) => (
  <svg className={className} viewBox="0 0 140 40" fill="currentColor">
    <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 20l5 5 10-10" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="45" y="15" width="4" height="15" rx="2" />
    <rect x="52" y="12" width="4" height="18" rx="2" />
    <rect x="59" y="18" width="4" height="12" rx="2" />
    <rect x="66" y="10" width="4" height="20" rx="2" />
    <text x="80" y="25" className="text-sm font-semibold">
      GrowthLabs
    </text>
  </svg>
);

export const ScaleUpLogo: React.FC<{ className?: string }> = ({ className = 'h-8' }) => (
  <svg className={className} viewBox="0 0 120 40" fill="currentColor">
    <path d="M15 30l10-15 10 10 10-20" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="15" cy="30" r="2" />
    <circle cx="25" cy="15" r="2" />
    <circle cx="35" cy="25" r="2" />
    <circle cx="45" cy="5" r="2" />
    <text x="60" y="25" className="text-sm font-semibold">
      ScaleUp
    </text>
  </svg>
);

export const InnovateCorpLogo: React.FC<{ className?: string }> = ({ className = 'h-8' }) => (
  <svg className={className} viewBox="0 0 140 40" fill="currentColor">
    <path d="M20 10l8 20-8-5-8 5 8-20z" />
    <rect x="15" y="32" width="10" height="3" rx="1" />
    <path d="M35 15h5l5 10 5-10h5v20h-4v-12l-3 6h-2l-3-6v12h-4V15z" />
    <text x="65" y="25" className="text-sm font-semibold">
      InnovateCorp
    </text>
  </svg>
);

export const DataStreamLogo: React.FC<{ className?: string }> = ({ className = 'h-8' }) => (
  <svg className={className} viewBox="0 0 140 40" fill="currentColor">
    <path d="M10 20c0-5 4-10 10-10s10 5 10 10M15 25c0-3 2-5 5-5s5 2 5 5M12 30c0-2 1-3 3-3s3 1 3 3" />
    <path d="M35 15h8c3 0 5 2 5 5s-2 5-5 5h-3v10h-5V15zm5 5v5h3c1 0 2-1 2-2.5s-1-2.5-2-2.5h-3z" />
    <text x="60" y="25" className="text-sm font-semibold">
      DataStream
    </text>
  </svg>
);

export const CloudVentureLogo: React.FC<{ className?: string }> = ({ className = 'h-8' }) => (
  <svg className={className} viewBox="0 0 140 40" fill="currentColor">
    <path d="M25 25c-3 0-5-2-5-5 0-4 4-7 8-7 3 0 6 2 7 5 2-1 4 0 4 2 0 3-2 5-5 5H25z" />
    <path d="M15 18c1-3 4-5 7-5 2 0 4 1 5 3" />
    <path d="M45 15l8 12 8-12h5l-10 15v5h-6v-5l-10-15h5z" />
    <text x="75" y="25" className="text-sm font-semibold">
      CloudVenture
    </text>
  </svg>
);
