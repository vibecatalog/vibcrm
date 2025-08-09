import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { Button } from '@/components/ui/Button';

const testimonials = [
  {
    quote:
      "This platform has completely transformed how we manage our customer relationships. The intuitive interface and powerful automation features have increased our team's productivity by 300%.",
    author: {
      name: 'Alex Johnson',
      title: 'Sales Director at TechCorp',
      avatar: '/human-avatar.svg',
    },
  },
  {
    quote:
      "The AI-powered insights have helped us identify high-value prospects we would have missed otherwise. Our conversion rates have improved dramatically since implementation.",
    author: {
      name: 'Sarah Chen',
      title: 'VP of Marketing at GrowthLab',
      avatar: '/human-avatar.svg',
    },
  },
  {
    quote:
      "Outstanding customer support and seamless integration with our existing tools. The onboarding process was smooth, and we saw immediate results within the first month.",
    author: {
      name: 'Michael Rodriguez',
      title: 'Operations Manager at ScaleUp',
      avatar: '/human-avatar.svg',
    },
  },
  {
    quote:
      "The automated lead scoring has been a game-changer for our sales team. We can now focus on the most promising prospects and close deals 40% faster than before.",
    author: {
      name: 'Emily Davis',
      title: 'Head of Sales at InnovateNow',
      avatar: '/human-avatar.svg',
    },
  },
  {
    quote:
      "Excellent reporting capabilities and real-time analytics give us the insights we need to make data-driven decisions. The ROI has been exceptional.",
    author: {
      name: 'David Thompson',
      title: 'CEO at FutureTech',
      avatar: '/human-avatar.svg',
    },
  },
  {
    quote:
      "The mobile app allows our field sales team to stay connected and update customer information on the go. It's made our entire sales process more efficient and responsive.",
    author: {
      name: 'Lisa Martinez',
      title: 'Regional Sales Manager at ConnectCorp',
      avatar: '/human-avatar.svg',
    },
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  return (
    <Section paddingY="md" paddingX="xl">
      <SectionHeader
        eyebrow="Testimonials"
        title="Hear from Our Happy Customers"
        description="Discover how VibCRM has transformed sales teams just like yours."
      />

      {/* Testimonials Grid */}
      <div className="relative mb-6 md:mb-8" role="region" aria-label="Customer testimonials" aria-live="polite">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4">
            {testimonials
              .slice(currentPage * testimonialsPerPage, (currentPage + 1) * testimonialsPerPage)
              .map((testimonial, index) => (
                <div
                  key={currentPage * testimonialsPerPage + index}
                  className="opacity-0 animate-fade-in"
                >
                  <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center gap-4">
        {/* Page Indicators */}
        <div className="flex gap-2" role="tablist" aria-label="Testimonials pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                currentPage === index ? 'bg-vibcrm-primary' : 'bg-white/30'
              }`}
              aria-label={`Go to page ${index + 1}`}
              role="tab"
              aria-selected={currentPage === index}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 md:gap-6">
          <Button
            variant="secondary"
            size="sm"
            icon={<ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />}
            className="!px-3 md:!px-4 !py-3 md:!py-4 rounded-full aspect-square"
            onClick={goToPrevious}
          >
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<ArrowRight className="w-4 md:w-5 h-4 md:h-5" />}
            className="!px-3 md:!px-4 !py-3 md:!py-4 rounded-full aspect-square shadow-glow"
            onClick={goToNext}
          >
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </Section>
  );
};
