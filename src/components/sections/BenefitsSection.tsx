import React from 'react';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const benefits = [
  {
    icon: <span className="text-base md:text-lg font-bold">1</span>,
    title: 'Smart Lead Management',
    description:
      'AI-powered lead scoring and automated nurturing helps you focus on the hottest prospects.',
  },
  {
    icon: <span className="text-base md:text-lg font-bold">2</span>,
    title: 'Predictive Analytics',
    description:
      'Get AI-driven forecasts and insights to predict deal outcomes and optimize your sales pipeline.',
  },
  {
    icon: <span className="text-base md:text-lg font-bold">3</span>,
    title: 'Workflow Automation',
    description:
      'Automate follow-ups, task assignments, and deal progression to close more deals faster.',
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <Section paddingY="md" paddingX="xl">
      <AnimatedSection animation="fade-up">
        <SectionHeader
          eyebrow="Benefits"
          title="Why Choose VibCRM?"
          description="See how VibCRM transforms your sales process."
          alignment="left"
        />
      </AnimatedSection>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
        {/* Benefits List */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 max-w-full lg:max-w-[497px]">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <FeatureCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Dashboard Visualization */}
        <AnimatedSection animation="slide-up" delay={300}>
          <div className="relative w-full lg:w-auto flex-shrink-0">
            <div className="w-full max-w-[608px] aspect-[608/413] lg:w-[608px] lg:h-[413px] rounded-xl bg-vibcrm-primary relative overflow-hidden mx-auto" aria-hidden="true">
              <div className="absolute top-[15%] left-[43%] right-[2%] bottom-[34%] rounded-[8.34px] bg-vibcrm-card-bg">
                <div className="p-3 md:p-6 space-y-2 md:space-y-4 h-full">
                  <div className="h-2 md:h-4 bg-blue-500/20 rounded w-1/3"></div>
                  <div className="space-y-1 md:space-y-2">
                    <div className="h-1 md:h-3 bg-white/10 rounded w-full"></div>
                    <div className="h-1 md:h-3 bg-white/10 rounded w-3/4"></div>
                    <div className="h-1 md:h-3 bg-white/10 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
};
