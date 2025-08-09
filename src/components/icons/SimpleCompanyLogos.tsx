import React from 'react';

// Simple geometric logos without text elements
export const TechFlowLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-24' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-sm"></div>
    </div>
    <span className="text-sm font-bold">TechFlow</span>
  </div>
);

export const GrowthLabsLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-24' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="flex gap-1">
      <div className="w-1 h-4 bg-green-500 rounded"></div>
      <div className="w-1 h-5 bg-green-500 rounded"></div>
      <div className="w-1 h-6 bg-green-500 rounded"></div>
      <div className="w-1 h-3 bg-green-500 rounded"></div>
    </div>
    <span className="text-sm font-bold">GrowthLabs</span>
  </div>
);

export const ScaleUpLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-24' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-6 h-6 border-2 border-purple-500 rounded transform rotate-45 flex items-center justify-center">
      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
    </div>
    <span className="text-sm font-bold">ScaleUp</span>
  </div>
);

export const InnovateCorpLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-24' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
      <div className="w-3 h-3 border border-white rounded"></div>
    </div>
    <span className="text-sm font-bold">InnovateCorp</span>
  </div>
);

export const DataStreamLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-24' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="flex gap-0.5">
      <div className="w-1 h-6 bg-cyan-500 rounded-full opacity-40"></div>
      <div className="w-1 h-6 bg-cyan-500 rounded-full opacity-70"></div>
      <div className="w-1 h-6 bg-cyan-500 rounded-full opacity-100"></div>
    </div>
    <span className="text-sm font-bold">DataStream</span>
  </div>
);

export const CloudVentureLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-24' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-6 h-4 bg-gray-300 rounded-full relative">
      <div className="w-3 h-3 bg-gray-400 rounded-full absolute -top-1 left-1"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full absolute -top-0.5 right-1"></div>
    </div>
    <span className="text-sm font-bold">CloudVenture</span>
  </div>
);
