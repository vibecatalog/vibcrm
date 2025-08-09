import React from 'react';
import { cn } from '@/lib/utils';

interface IconWrapperProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'success' | 'muted';
  shape?: 'square' | 'circle';
  className?: string;
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10 md:w-12 md:h-12',
  lg: 'w-12 h-12 md:w-16 md:h-16',
  xl: 'w-16 h-16 md:w-20 md:h-20',
};

const variantMap = {
  primary: 'bg-vibcrm-primary text-white',
  secondary: 'bg-white/10 text-white',
  success: 'bg-green-500 text-white',
  muted: 'bg-gray-600 text-white',
};

const shapeMap = {
  square: 'rounded-lg md:rounded-xl',
  circle: 'rounded-full',
};

export const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  shape = 'square',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center flex-shrink-0',
        sizeMap[size],
        variantMap[variant],
        shapeMap[shape],
        className
      )}
    >
      {children}
    </div>
  );
};
