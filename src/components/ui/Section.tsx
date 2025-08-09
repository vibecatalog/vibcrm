import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
  paddingX?: 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'content' | 'container' | 'full';
  background?: 'transparent' | 'card' | 'dark';
  id?: string;
}

const paddingYMap = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16 lg:py-20',
  lg: 'py-16 md:py-20 lg:py-24',
  xl: 'py-20 md:py-24 lg:py-32',
};

const paddingXMap = {
  sm: 'px-4 md:px-6',
  md: 'px-4 md:px-8',
  lg: 'px-4 md:px-8 lg:px-12',
  xl: 'px-4 md:px-8 lg:px-[120px]',
};

const maxWidthMap = {
  content: 'max-w-[1280px]',
  container: 'max-w-[1440px]',
  full: 'max-w-full',
};

const backgroundMap = {
  transparent: '',
  card: 'bg-vibcrm-card-bg',
  dark: 'bg-vibcrm-bg-dark',
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  paddingY = 'md',
  paddingX = 'xl',
  maxWidth = 'content',
  background = 'transparent',
  id,
}) => {
  return (
    <section
      id={id}
      className={cn('relative', paddingYMap[paddingY], backgroundMap[background], className)}
    >
      <div className={cn('mx-auto', paddingXMap[paddingX], maxWidthMap[maxWidth])}>{children}</div>
    </section>
  );
};
