import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  reviews?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5 md:w-6 md:h-6',
  lg: 'w-6 h-6 md:w-8 md:h-8',
};

const textSizeMap = {
  sm: 'text-xs',
  md: 'text-xs md:text-sm',
  lg: 'text-sm md:text-base',
};

export const StarRating: React.FC<StarRatingProps> = ({
  rating = 5,
  maxRating = 5,
  reviews = '10,000+ reviews',
  size = 'md',
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(maxRating)].map((_, index) => (
          <Star
            key={index}
            className={`${sizeMap[size]} ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
            fill={index < rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>

      {/* Review Text */}
      <div className={`${textSizeMap[size]}`}>
        <span className="text-white font-medium">{reviews.split(' ')[0]}</span>
        <span className="text-vibcrm-text-muted ml-1">
          {reviews.split(' ').slice(1).join(' ')}
        </span>
      </div>
    </div>
  );
};
