import React from 'react';

export const StarterIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const ProfessionalIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 16L3 14l5.5-5.5L12 12l7-7 2 2-7 7 4.5 4.5L16 19l-4.5-4.5L11 15l-6 1z" />
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const EnterpriseIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 0.5l2.5 5 5.5 0.8-4 3.9 0.9 5.3-4.9-2.6L7 15.5l0.9-5.3L4 6.3l5.5-0.8L13 0.5z" />
    <path d="M8 12l3-3 6 6" />
    <path d="M13 2.05v2.02C16.17 4.57 18.5 7.36 18.5 10.75c0 4.08-3.32 7.25-7.5 7.25s-7.5-3.17-7.5-7.25C3.5 7.36 5.83 4.57 9 4.07V2.05C5.1 2.57 2 6.06 2 10.25c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.19-3.1-7.68-7-8.2z" />
  </svg>
);
