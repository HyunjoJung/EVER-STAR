import React from 'react';
import { CloseIcon } from 'components/atoms/icons/Close/CloseIcon';

type ColorKey = 'pink' | 'green' | 'blue' | 'purple' | 'gray' | 'yellow';

interface PostItCardProps {
  contents: string;
  name: string;
  color: ColorKey;
  onDelete: () => void;
  onClick?: () => void;
  className?: string;
}

const colorClasses: Record<ColorKey, string> = {
  pink: 'bg-postit-pink',
  green: 'bg-postit-green',
  blue: 'bg-postit-blue',
  purple: 'bg-postit-purple',
  gray: 'bg-postit-gray',
  yellow: 'bg-postit-yellow',
};

export const PostItCard: React.FC<PostItCardProps> = ({
  contents,
  name,
  color,
  onDelete,
  onClick,
  className = '',
}) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div
      className={`flex flex-col shadow-md p-2 w-[142px] h-[152px] ${colorClasses[color]} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
      onKeyPress={(e) => onClick && e.key === 'Enter' && onClick()}
    >
      <div className="flex items-end justify-end">
        <button
          onClick={handleDelete}
          aria-label="삭제"
          className="hover:opacity-70 transition-opacity"
        >
          <CloseIcon size={24} color="black" />
        </button>
      </div>
      <div className="flex flex-col justify-between flex-1 w-full cursor-pointer">
        <p className="max-w-full max-h-[82px] text-greyscaleblack-100 kor-p-p2 line-clamp-4 break-words">
          {contents}
        </p>
        <p className="mt-1 max-w-full max-h-[22px] mb-3 text-greyscaleblack-60 kor-p-p4 break-words overflow-y-hidden">
          {name}
        </p>
      </div>
    </div>
  );
};

// Legacy export for backward compatibility
export type IPostItCard = PostItCardProps;
