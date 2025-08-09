import React from 'react';
import { Zap } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { StarRating } from '@/components/ui/StarRating';
import { LazyImage } from '@/components/ui/LazyImage';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const HeroSection: React.FC = () => {
  return (
    <Section
      className="relative min-h-[calc(100vh-100px)] flex flex-col items-center justify-center"
      paddingY="xl"
      paddingX="xl"
    >
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -left-[457px] -top-[457px] w-[2380px] h-[9402px] opacity-50 md:opacity-100">
          <svg
            width="2380"
            height="9402"
            viewBox="0 0 2380 9402"
            fill="none"
            className="w-full h-full"
            >
            <circle opacity="0.05" cx="1440" r="407" stroke="#246BFD" strokeWidth="100" />
            <circle opacity="0.05" cy="1072" r="407" stroke="#246BFD" strokeWidth="100" />
            <g filter="url(#filter0_f)">
              <circle cx="-0.5" cy="0.5" r="443.5" fill="#246BFD" fillOpacity="0.2" />
            </g>
            <defs>
              <filter
                id="filter0_f"
                x="-644"
                y="-643"
                width="1287"
                height="1287"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-[972px] flex flex-col items-center gap-8 md:gap-12 text-center">
        {/* Hero Content */}
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <h1 className="text-3xl md:text-5xl lg:text-[76px] font-bold leading-tight text-gradient-hero max-w-full px-4">
              The AI-Powered CRM That Works Smarter, So You Can Sell More
            </h1>
            <p className="text-vibcrm-text-muted text-base md:text-xl lg:text-2xl leading-relaxed max-w-[654px] px-4">
              Automate workflows, predict leads, and close deals faster with intelligent insights.
            </p>
          </div>
        </AnimatedSection>

        {/* CTA and Rating */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <Button
              variant="primary"
              size="md"
              icon={<Zap className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" />}
              className="shadow-glow"
            >
              Start Your Free Trial
            </Button>

            <StarRating reviews="10,000+ reviews" />
          </div>
        </AnimatedSection>
      </div>

      {/* Dashboard Preview - Skeleton */}
      <AnimatedSection animation="slide-up" delay={400}>
        <div className="relative z-10 w-full max-w-[1201px] aspect-[1201/854] rounded-[8px] md:rounded-[13.344px] bg-vibcrm-primary overflow-hidden mt-8 md:mt-12 lg:mt-[50px]">
          <div className="absolute inset-6 md:inset-11 rounded-lg bg-vibcrm-bg-dark">
            <div className="p-4 md:p-8 space-y-4 md:space-y-6 h-full">
              <div className="h-3 md:h-6 bg-blue-500/20 rounded w-1/3"></div>
              <div className="h-24 md:h-40 bg-white/5 rounded-lg"></div>
              <div className="flex gap-2 md:gap-4">
                <div className="flex-1 h-12 md:h-20 bg-vibcrm-card-bg rounded-lg"></div>
                <div className="flex-1 h-12 md:h-20 bg-vibcrm-card-bg rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
};
