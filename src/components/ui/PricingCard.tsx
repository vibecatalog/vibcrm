import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { StarterIcon, ProfessionalIcon, EnterpriseIcon } from '@/components/icons/PricingIcons';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  icon: 'starter' | 'professional' | 'enterprise';
  isYearly: boolean;
  className?: string;
}

const iconMap = {
  starter: <StarterIcon className="w-3 h-3 md:w-4 md:h-4 text-white" />,
  professional: <ProfessionalIcon className="w-3 h-3 md:w-4 md:h-4 text-white" />,
  enterprise: <EnterpriseIcon className="w-3 h-3 md:w-4 md:h-4 text-white" />,
};

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  subtitle,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  buttonText,
  popular = false,
  icon,
  isYearly,
  className,
}) => {
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice;
  const savings = isYearly
    ? Math.round(((monthlyPrice * 12 - yearlyPrice * 12) / (monthlyPrice * 12)) * 100)
    : 0;
  return (
    <Card className={`relative min-h-[580px] lg:h-[659px] flex flex-col ${className}`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-vibcrm-primary rounded-full z-10">
          <span className="text-white text-xs md:text-sm font-medium whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
        <IconWrapper size="sm" variant="primary">
          {iconMap[icon]}
        </IconWrapper>
        <h3 className="text-white text-2xl md:text-[32px] font-bold">{name}</h3>
      </div>

      <p className="text-vibcrm-text-muted text-sm md:text-base mb-4 md:mb-6">{subtitle}</p>

      {/* Price */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-white text-3xl md:text-[40px] font-bold">${currentPrice}</span>
          <span className="text-vibcrm-text-muted text-base md:text-lg">
            /{isYearly ? 'month' : 'month'}
          </span>
        </div>
        {isYearly && savings > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-vibcrm-primary text-sm font-medium">
              Save {savings}% yearly
            </span>
            <span className="text-vibcrm-text-muted text-sm line-through">
              ${monthlyPrice}/month
            </span>
          </div>
        )}
        {isYearly && <span className="text-vibcrm-text-muted text-xs">Billed annually</span>}
      </div>

      <p className="text-vibcrm-text-muted text-sm md:text-base mb-6 md:mb-8">{description}</p>

      {/* Features */}
      <div className="space-y-4 md:space-y-6 mb-6 md:mb-8 flex-1">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-3">
            {feature.included ? (
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 md:w-6 md:h-6 text-vibcrm-text-muted flex-shrink-0" />
            )}
            <span
              className={`text-sm md:text-lg ${feature.included ? 'text-white' : 'text-vibcrm-text-muted'}`}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button variant="primary" size="md" className="w-full justify-center">
        {buttonText}
      </Button>
    </Card>
  );
};
