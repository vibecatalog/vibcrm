import React from 'react';
import { Card } from '@/components/ui/Card';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, className }) => {
  return (
    <Card className={`min-h-[300px] md:h-[363px] flex flex-col ${className}`}>
      {/* Quote */}
      <p className="text-white text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-1">
        "{quote}"
      </p>

      {/* Author */}
      <div className="border-t border-white/20 pt-6 md:pt-8">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-12 h-12 md:w-[70px] md:h-[70px] rounded-xl bg-white overflow-hidden flex-shrink-0">
            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-white text-base md:text-lg font-bold">{author.name}</h4>
            <p className="text-vibcrm-text-muted text-xs md:text-sm">{author.title}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
