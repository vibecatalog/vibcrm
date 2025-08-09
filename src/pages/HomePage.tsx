import React from 'react';
import { Zap, CheckCircle2, Plus, Minus } from 'lucide-react';

// Layout Components
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

// Icons
import { RocketIcon } from '@/components/icons/RocketIcon';

// UI Components
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// Section Components
import { HeroSection } from '@/components/sections/HeroSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';

// Company Logos - Simple version without SVG text
import {
  TechFlowLogo,
  GrowthLabsLogo,
  ScaleUpLogo,
  InnovateCorpLogo,
  DataStreamLogo,
  CloudVentureLogo,
} from '@/components/icons/SimpleCompanyLogos';

// Company data with logo components
const companies = [
  { name: 'TechFlow', logo: TechFlowLogo },
  { name: 'GrowthLabs', logo: GrowthLabsLogo },
  { name: 'ScaleUp', logo: ScaleUpLogo },
  { name: 'InnovateCorp', logo: InnovateCorpLogo },
  { name: 'DataStream', logo: DataStreamLogo },
  { name: 'CloudVenture', logo: CloudVentureLogo },
];

const steps = [
  {
    number: '1',
    title: 'Import Your Leads',
    visual: 'connect',
  },
  {
    number: '2',
    title: 'AI Scores & Prioritizes',
    visual: 'schedule',
  },
  {
    number: '3',
    title: 'Close More Deals',
    visual: 'measure',
  },
];

const faqs = [
  {
    question: "How does VibCRM's AI improve my sales process?",
    answer:
      "VibCRM's AI analyzes your sales data to provide intelligent lead scoring, predicts deal outcomes, and automates follow-up tasks. This helps you focus on the most promising leads and close deals faster.",
  },
  {
    question: 'Can I integrate VibCRM with my existing tools?',
    answer:
      'Yes! VibCRM integrates seamlessly with popular tools like email platforms, calendar apps, marketing automation software, and accounting systems. Our Professional plan includes unlimited integrations.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      "Absolutely! We offer a 14-day free trial with no credit card required. You'll have full access to all Professional features during your trial period.",
  },
];

// Micro Components
const StepVisual: React.FC<{ visual: string }> = ({ visual }) => {
  const renderVisualContent = () => {
    switch (visual) {
      case 'connect':
        return (
          <div className="absolute inset-4 md:inset-6 lg:inset-8 p-3 md:p-4 lg:p-6 space-y-2 md:space-y-3 lg:space-y-4">
            <div className="h-2 md:h-3 bg-gray-600 rounded-full w-12 md:w-16"></div>
            <div className="h-6 md:h-8 bg-gray-700 rounded flex items-center px-2 md:px-3">
              <span className="text-white text-[10px] md:text-xs">@username</span>
              <span className="text-white text-[10px] md:text-xs ml-auto">|</span>
            </div>
            <div className="h-8 md:h-12 bg-gray-700 rounded flex items-center justify-center">
              <div className="flex gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'schedule':
        return (
          <div className="absolute inset-4 md:inset-6 lg:inset-8 p-3 md:p-4 lg:p-6 space-y-2 md:space-y-3">
            <div className="h-2 md:h-3 bg-gray-600 rounded-full w-12 md:w-16"></div>
            <div className="space-y-1 md:space-y-2">
              {['w-12', 'w-20', 'w-16', 'w-8', 'w-20'].map((wClass, i) => (
                <div key={i} className="flex items-center gap-1 md:gap-2">
                  <div className={`h-0.5 md:h-1 bg-gray-700 rounded-full ${wClass}`}></div>
                  <span className="text-gray-700 text-[8px] md:text-xs">$</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'measure':
        return (
          <div className="absolute inset-4 md:inset-6 lg:inset-8 p-3 md:p-4 lg:p-6 space-y-2 md:space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-green-400" />
                <div className="space-y-0.5 md:space-y-1 flex-1">
                  <div className="h-0.5 md:h-1 bg-gray-600 rounded-full w-full"></div>
                  <div className="h-0.5 md:h-1 bg-gray-600 rounded-full w-full"></div>
                  <div className="h-0.5 md:h-1 bg-gray-600 rounded-full w-full"></div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-40 h-40 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px] rounded-2xl bg-vibcrm-primary mb-4 md:mb-6 relative overflow-hidden">
      <div className="absolute inset-4 md:inset-6 lg:inset-8 rounded-xl bg-vibcrm-bg-dark"></div>
      {renderVisualContent()}
    </div>
  );
};

// Section Components
const TrustedBySection: React.FC = () => (
  <Section paddingY="md" paddingX="xl">
    <AnimatedSection animation="fade-up">
      <div className="flex flex-col items-center gap-4 mb-12 md:mb-20">
        {/* VibCRM Logo with Rocket Icon */}
        <div className="flex items-center gap-3 mb-6">
          <RocketIcon size={48} />
          <h2 className="text-white text-xl md:text-2xl font-bold">VibCRM</h2>
        </div>
        
        <SectionHeader
          title="Trusted by over 5,000 sales teams worldwide"
          className="mb-0"
        />
      </div>
    </AnimatedSection>
    <AnimatedSection animation="fade-up" delay={200}>
      <div className="relative overflow-hidden">
        {/* Company logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-8 justify-items-center items-center">
          {companies.map((company, i) => {
            const Logo = company.logo;
            return (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                  <Logo className="h-8 md:h-10" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  </Section>
);

const HowItWorksSection: React.FC = () => (
  <Section paddingY="md" paddingX="xl">
    <AnimatedSection animation="fade-up">
      <SectionHeader
        eyebrow="How It Works"
        title="A Simple, 3-Step Process"
        description="VibCRM makes sales automation effortless—follow these easy steps to get started."
      />
    </AnimatedSection>

    {/* Steps */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20">
      {steps.map((step, index) => (
        <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
          <div className="flex flex-col items-center relative w-full md:w-auto">
            {/* Step Number */}
            <IconWrapper
              size="md"
              shape="circle"
              variant="primary"
              className="border-4 md:border-[6px] border-vibcrm-bg-dark mb-4 md:mb-6"
            >
              <span className="text-white text-lg md:text-2xl font-bold">{step.number}</span>
            </IconWrapper>

            {/* Step Visual */}
            <StepVisual visual={step.visual} />

            {/* Step Title */}
            <h3 className="text-white text-base md:text-xl font-medium text-center">
              {step.title}
            </h3>
          </div>
        </AnimatedSection>
      ))}
    </div>

    {/* CTA Button */}
    <AnimatedSection animation="fade-up" delay={300}>
      <div className="flex justify-center">
        <Button
          variant="primary"
          size="md"
          icon={<Zap className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" />}
          className="shadow-glow"
        >
          Start Your Free Trial
        </Button>
      </div>
    </AnimatedSection>
  </Section>
);

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section paddingY="md" paddingX="xl">
      <AnimatedSection animation="fade-up">
        <SectionHeader
          eyebrow="FAQ's"
          title="Got Questions? We've Got Answers"
          description="Find quick answers to the most common queries about VibCRM."
        />
      </AnimatedSection>

      {/* FAQ List */}
      <AnimatedSection animation="fade-up" delay={200}>
        <div className="space-y-0 border-t border-white/16">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/16">
              <button
                className="flex items-center justify-between w-full text-left group py-6 md:py-8"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4 md:gap-8 lg:gap-12 flex-1">
                  <span className="text-white text-lg md:text-2xl font-black w-6 md:w-8 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-white text-base md:text-xl lg:text-2xl font-medium group-hover:text-vibcrm-primary transition-colors">
                    {faq.question}
                  </h3>
                </div>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 md:w-6 md:h-6 text-vibcrm-primary flex-shrink-0 transition-colors" />
                ) : (
                  <Plus className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 group-hover:text-vibcrm-primary transition-colors" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-96 pb-6 md:pb-8' : 'max-h-0'
                }`}
              >
                <div className="pl-10 md:pl-16 lg:pl-20 pr-4">
                  <p className="text-vibcrm-text-muted text-sm md:text-base lg:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
};

const CTASection: React.FC = () => (
  <Section paddingY="md" paddingX="xl">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
      {/* Left Content */}
      <AnimatedSection animation="fade-up" className="flex-1 text-center lg:text-left">
        <span className="inline-block text-vibcrm-primary text-lg md:text-xl font-bold uppercase tracking-wide mb-4">
          Sign up today!
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight text-gradient-hero mb-6">
          Ready to Transform Your Sales Process?
        </h2>
        <p className="text-vibcrm-text-muted text-base md:text-xl leading-relaxed mb-8">
          Sign up today and take the first step toward automating your sales success.
        </p>

        <Button
          variant="primary"
          size="md"
          icon={<Zap className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" />}
          className="shadow-glow mx-auto lg:mx-0"
        >
          Start Your Free Trial
        </Button>
      </AnimatedSection>

      {/* Right Visual */}
      <AnimatedSection animation="slide-up" delay={200}>
        <div className="w-full max-w-[708px] aspect-[708/450] lg:w-[708px] lg:h-[450px] rounded-2xl bg-vibcrm-primary relative overflow-hidden">
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
    </div>
  </Section>
);

// Main HomePage Component
export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-vibcrm-bg-dark text-white overflow-x-hidden">
      <Navigation />
      <main id="main-content" role="main" aria-label="Main content">
        <HeroSection />
        <section id="features" aria-label="Features and benefits">
          <TrustedBySection />
          <BenefitsSection />
          <HowItWorksSection />
        </section>
        <section id="testimonials" aria-label="Customer testimonials" role="region">
          <TestimonialsSection />
        </section>
        <section id="pricing" aria-label="Pricing plans" role="region">
          <PricingSection />
        </section>
        <section id="resources" aria-label="Frequently asked questions" role="region">
          <FAQSection />
        </section>
        <section id="contact" aria-label="Get started" role="region">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
