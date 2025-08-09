import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-6 md:p-8',
  xl: 'p-8 md:p-12',
};

const variantMap = {
  default: 'rounded-xl bg-vibcrm-card-bg',
  elevated: 'rounded-xl bg-vibcrm-card-bg shadow-lg',
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'lg',
  hover = false,
}) => {
  return (
    <div
      className={cn(
        variantMap[variant],
        paddingMap[padding],
        hover && 'transition-transform duration-300 hover:scale-105',
        className
      )}
    >
      {children}
    </div>
  );
};
