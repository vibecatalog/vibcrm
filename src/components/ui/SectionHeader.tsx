import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  alignment = 'center',
  className,
  titleClassName,
  descriptionClassName,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12 md:mb-16 lg:mb-20', alignmentClasses[alignment], className)}>
      {eyebrow && (
        <span className="inline-block text-vibcrm-primary text-lg md:text-xl font-bold uppercase tracking-wide mb-4">
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          'text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight text-gradient-hero mb-6',
          titleClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'text-vibcrm-text-muted text-base md:text-xl leading-relaxed max-w-3xl',
            alignment === 'center' && 'mx-auto',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
