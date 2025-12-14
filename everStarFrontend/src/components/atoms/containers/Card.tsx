import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  role?: string;
  ariaLabel?: string;
}

const variantClasses: Record<NonNullable<CardProps['variant']>, string> = {
  default: 'bg-white',
  elevated: 'bg-white shadow-md',
  outlined: 'bg-white border border-greyscaleblack-20',
};

const paddingClasses: Record<NonNullable<CardProps['padding']>, string> = {
  none: '',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
};

const roundedClasses: Record<NonNullable<CardProps['rounded']>, string> = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
};

/**
 * Card component - Base component for card-based layouts
 * Can be used as foundation for LetterCard, ProfileCard, PostItCard, etc.
 */
export const Card: React.FC<CardProps> = ({
  children,
  onClick,
  className = '',
  variant = 'default',
  padding = 'md',
  rounded = 'md',
  role,
  ariaLabel,
}) => {
  const baseClasses = 'relative';
  const interactiveClasses = onClick
    ? 'cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]'
    : '';

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${roundedClasses[rounded]} ${interactiveClasses} ${className}`.trim();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={combinedClassName}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      role={role || (onClick ? 'button' : 'article')}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

/**
 * CardHeader component - Header section of a card
 */
export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return <div className={`mb-2 ${className}`}>{children}</div>;
};

/**
 * CardBody component - Main content section of a card
 */
export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return <div className={`flex-1 ${className}`}>{children}</div>;
};

/**
 * CardFooter component - Footer section of a card
 */
export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return <div className={`mt-2 ${className}`}>{children}</div>;
};
