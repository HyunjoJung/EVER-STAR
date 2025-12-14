import React from 'react';

export interface PaginationProps {
  totalPages: number;
  activePage: number;
  className?: string;
  onClick?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  activePage,
  className = '',
  onClick,
}) => {
  const dots = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleClick = (page: number) => {
    if (onClick) {
      onClick(page);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, page: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(page);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-1 py-0 relative ${className}`}
      role="navigation"
      aria-label="Pagination"
    >
      {dots.map((page) => {
        const isActive = page === activePage;
        return (
          <button
            key={page}
            className={`relative cursor-pointer transition-all ${
              isActive
                ? 'w-2.5 h-2.5 bg-tab-active rounded-[5px]'
                : 'w-1.5 h-1.5 bg-tab-inactive rounded-[3px]'
            }`}
            onClick={() => handleClick(page)}
            onKeyPress={(e) => handleKeyPress(e, page)}
            aria-label={`Page ${page}`}
            aria-current={isActive ? 'page' : undefined}
          />
        );
      })}
    </div>
  );
};
