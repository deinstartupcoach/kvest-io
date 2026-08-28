import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface TrendIndicatorProps {
  value?: number; // percentage, e.g. +7.2 or -3.1
  direction?: 'up' | 'down' | 'neutral' | 'stable';
  showPercentage?: boolean;
  size?: number;
}

export const TrendIndicator: React.FC<TrendIndicatorProps> = ({
  value,
  direction,
  showPercentage = true,
  size = 14
}) => {
  const calculatedDirection = direction || (value !== undefined ? (value > 0 ? 'up' : value < 0 ? 'down' : 'neutral') : 'neutral');

  if (calculatedDirection === 'up') {
    return (
      <span className="inline-flex items-center gap-0.5 text-emerald-400 font-mono text-xs font-medium">
        <TrendingUp size={size} className="text-emerald-400" />
        {showPercentage && value !== undefined && `+${value.toFixed(1)}%`}
      </span>
    );
  }

  if (calculatedDirection === 'down') {
    return (
      <span className="inline-flex items-center gap-0.5 text-rose-400 font-mono text-xs font-medium">
        <TrendingDown size={size} className="text-rose-400" />
        {showPercentage && value !== undefined && `${value.toFixed(1)}%`}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-0.5 text-slate-400 font-mono text-xs font-medium">
      <Minus size={size} className="text-slate-400" />
      {showPercentage && value !== undefined && `${value.toFixed(1)}%`}
    </span>
  );
};
