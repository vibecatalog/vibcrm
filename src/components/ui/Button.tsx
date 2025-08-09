import React from 'react';
import { cn } from '@/lib/utils';
import { componentVariants } from '@/lib/design-system';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-pill transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = componentVariants.button.variants[variant];
  const sizeClasses = componentVariants.button.sizes[size];

  return (
    <button
      className={cn(
        baseClasses,
        'rounded-full focus:ring-vibcrm-primary focus:ring-offset-vibcrm-bg-dark',
        variantClasses,
        sizeClasses,
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2 flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 flex-shrink-0">{icon}</span>}
    </button>
  );
};
