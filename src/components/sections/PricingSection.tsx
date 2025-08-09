import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PricingCard } from '@/components/ui/PricingCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const plans = [
  {
    name: 'Starter',
    subtitle: 'Perfect plan to get started',
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: 'Perfect for small sales teams looking for essential CRM features.',
    features: [
      { text: 'Lead Management', included: true },
      { text: '5 Integrations', included: true },
      { text: 'Basic Analytics', included: true },
      { text: 'Email Support', included: true },
      { text: 'AI Lead Scoring', included: false },
    ],
    buttonText: 'Get Started',
    icon: 'starter' as const,
  },
  {
    name: 'Professional',
    subtitle: 'Perfect plan for growing teams!',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'For growing sales teams needing AI-powered features and automation.',
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'AI Lead Scoring', included: true },
      { text: 'Unlimited Integrations', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Priority Support', included: true },
    ],
    buttonText: 'Try Free for 14 Days',
    popular: true,
    icon: 'professional' as const,
  },
  {
    name: 'Enterprise',
    subtitle: 'Best for large sales organizations!',
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: 'Ideal for large sales teams seeking enterprise-grade CRM solutions.',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Custom Workflows', included: true },
      { text: 'Advanced AI Forecasting', included: true },
      { text: 'Custom Reporting', included: true },
      { text: 'Dedicated Account Manager', included: true },
    ],
    buttonText: 'Request a Demo',
    icon: 'enterprise' as const,
  },
];

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <Section paddingY="md" paddingX="xl">
      <AnimatedSection animation="fade-up">
        <SectionHeader
          eyebrow="Pricing"
          title="Choose the Perfect Plan for Your Sales Team"
          description="Flexible CRM pricing for sales teams of all sizes. Upgrade as you grow."
        />
      </AnimatedSection>

      {/* Billing Toggle */}
      <AnimatedSection animation="fade-up" delay={200}>
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16" role="group" aria-label="Billing period">
          <button
            type="button"
            onClick={() => setIsYearly(false)}
            className={`px-4 py-2 rounded-full border ${!isYearly ? 'bg-vibcrm-primary text-white border-vibcrm-primary' : 'border-white/16 text-vibcrm-text-muted'}`}
            aria-pressed={!isYearly}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setIsYearly(true)}
            className={`px-4 py-2 rounded-full border ${isYearly ? 'bg-vibcrm-primary text-white border-vibcrm-primary' : 'border-white/16 text-vibcrm-text-muted'}`}
            aria-pressed={isYearly}
          >
            Yearly
          </button>
        </div>
      </AnimatedSection>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {plans.map((plan, index) => (
          <AnimatedSection key={index} animation="slide-up" delay={100 * index}>
            <PricingCard {...plan} isYearly={isYearly} />
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
