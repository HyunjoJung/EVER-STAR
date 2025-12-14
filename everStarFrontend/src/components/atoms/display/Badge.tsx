import React from 'react';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  count?: number;
  max?: number;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-greyscaleblack-60 text-white',
  primary: 'bg-mainprimary text-white',
  success: 'bg-green-500 text-white',
  error: 'bg-mainerror text-white',
  warning: 'bg-yellow-500 text-greyscaleblack-100',
  info: 'bg-blue-500 text-white',
};

const sizeClasses: Record<BadgeSize, { badge: string; text: string; dot: string }> = {
  sm: { badge: 'px-1.5 py-0.5 min-w-[18px] h-[18px]', text: 'text-[10px]', dot: 'w-1.5 h-1.5' },
  md: { badge: 'px-2 py-1 min-w-[20px] h-[20px]', text: 'text-xs', dot: 'w-2 h-2' },
  lg: { badge: 'px-2.5 py-1 min-w-[24px] h-[24px]', text: 'text-sm', dot: 'w-2.5 h-2.5' },
};

/**
 * Badge component - Small status descriptor
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  count,
  max = 99,
  className = '',
}) => {
  const displayCount = count !== undefined && count > max ? `${max}+` : count;

  if (dot) {
    return (
      <span className="relative inline-flex">
        {children}
        <span
          className={`absolute top-0 right-0 ${sizeClasses[size].dot} ${variantClasses[variant]} rounded-full border-2 border-white`}
          aria-label="notification"
        />
      </span>
    );
  }

  if (count !== undefined) {
    return (
      <span className="relative inline-flex">
        {children}
        <span
          className={`absolute -top-1 -right-1 flex items-center justify-center ${sizeClasses[size].badge} ${sizeClasses[size].text} ${variantClasses[variant]} rounded-full font-bold border-2 border-white`}
        >
          {displayCount}
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center ${sizeClasses[size].badge} ${sizeClasses[size].text} ${variantClasses[variant]} rounded-full font-bold ${className}`}
    >
      {children}
    </span>
  );
};

/**
 * StatusBadge component - Text badge for status indicators
 */
export interface StatusBadgeProps {
  status: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  return (
    <Badge variant={variant} size={size} className={className}>
      {status}
    </Badge>
  );
};
