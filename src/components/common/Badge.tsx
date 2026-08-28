import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'sand' | 'neutral';
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
    primary: 'bg-[#1677FF]/15 text-[#69B8FF] border border-[#1677FF]/40',
    success: 'bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/40',
    warning: 'bg-[#F59E0B]/15 text-[#FBBF24] border border-[#F59E0B]/40',
    danger: 'bg-[#EF4444]/15 text-[#F87171] border border-[#EF4444]/40',
    purple: 'bg-[#8B5CF6]/15 text-[#A78BFA] border border-[#8B5CF6]/40',
    sand: 'bg-[#E9DFCF]/15 text-[#E9DFCF] border border-[#E9DFCF]/30',
    neutral: 'bg-[#1B2D5D]/40 text-[#CBD5E1] border border-[#1F3163]'
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-semibold',
    lg: 'text-sm px-3 py-1.5 font-semibold'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full backdrop-blur-sm transition-all ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
