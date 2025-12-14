import React from 'react';

export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
  animation?: 'pulse' | 'wave' | 'none';
}

/**
 * Skeleton component - Loading placeholder
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  className = '',
  animation = 'pulse',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'rounded h-4';
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
      default:
        return 'rounded-md';
    }
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case 'pulse':
        return 'animate-pulse';
      case 'wave':
        return 'bg-gradient-to-r from-greyscaleblack-20 via-greyscaleblack-40 to-greyscaleblack-20 bg-[length:200%_100%] animate-[wave_1.5s_ease-in-out_infinite]';
      case 'none':
      default:
        return '';
    }
  };

  const widthStyle = width
    ? typeof width === 'number'
      ? `${width}px`
      : width
    : '100%';

  const heightStyle = height
    ? typeof height === 'number'
      ? `${height}px`
      : height
    : variant === 'text'
      ? '1rem'
      : '100%';

  return (
    <div
      className={`bg-greyscaleblack-20 ${getVariantClasses()} ${getAnimationClasses()} ${className}`}
      style={{ width: widthStyle, height: heightStyle }}
      aria-busy="true"
      aria-label="Loading..."
    />
  );
};

/**
 * SkeletonGroup component - Group of skeleton elements
 */
export interface SkeletonGroupProps {
  count?: number;
  gap?: number;
  children?: React.ReactNode;
  className?: string;
}

export const SkeletonGroup: React.FC<SkeletonGroupProps> = ({
  count = 3,
  gap = 2,
  children,
  className = '',
}) => {
  if (children) {
    return (
      <div className={`flex flex-col gap-${gap} ${className}`} aria-busy="true">
        {children}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-${gap} ${className}`} aria-busy="true">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
};
