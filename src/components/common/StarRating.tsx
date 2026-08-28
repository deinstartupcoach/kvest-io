import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number; // 0.0 - 5.0
  maxStars?: number;
  size?: number;
  showValue?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 13,
  showValue = true
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.8;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="inline-flex items-center gap-1.5">
      <div className="flex items-center text-amber-500">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} size={size} className="fill-amber-400 text-amber-500" />
        ))}
        {hasHalfStar && <StarHalf size={size} className="fill-amber-400 text-amber-500" />}
        {Array.from({ length: Math.max(0, emptyStars) }).map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-slate-300" />
        ))}
      </div>
      {showValue && (
        <span className="font-mono text-xs font-semibold text-slate-800 bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
