import React from 'react';
import { IconWrapper } from '@/components/ui/IconWrapper';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={`flex items-start gap-4 md:gap-8 ${className}`}>
      <IconWrapper size="md" variant="primary">
        {icon}
      </IconWrapper>

      <div className="flex-1">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2 md:mb-3">{title}</h3>
        <p className="text-vibcrm-text-muted text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
