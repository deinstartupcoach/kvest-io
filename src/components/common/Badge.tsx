import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'sand' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  className = ''
}) => {
  const variantStyles = {
    primary: 'bg-[#1677FF]/10 text-[#1677FF] border border-[#1677FF]/25',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-900 border border-amber-200',
    danger: 'bg-rose-50 text-rose-800 border border-rose-200',
    sand: 'bg-[#FAF6F0] text-[#5B534A] border border-[#E9DFCF]',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200'
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-0.5 font-semibold',
    lg: 'text-sm px-3 py-1 font-semibold'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md transition-all ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
