import React from 'react';

interface LabelProps {
  text: string;
  required?: boolean;
  font?: 'kyobo' | 'default';
  className?: string;
  htmlFor?: string;
}

/**
 * Label component for form inputs
 * @deprecated prop name `prop` is deprecated, use `text` instead
 * @deprecated prop name `show` is deprecated, use `required` instead
 */
export const Label: React.FC<LabelProps> = ({
  text = '레이블',
  required = false,
  font = 'default',
  className = '',
  htmlFor,
}) => {
  return (
    <div className={`inline-flex items-start gap-1 relative ${className}`}>
      <label
        htmlFor={htmlFor}
        className={`w-fit text-xs text-text-dark text-center leading-normal relative ${
          font === 'kyobo' ? 'font-kyobo font-normal' : 'font-noto-bold font-bold'
        }`}
      >
        {text}
      </label>
      {required && (
        <span className="font-noto-bold w-fit text-xs text-required font-bold text-center leading-normal relative">
          *
        </span>
      )}
    </div>
  );
};

// Legacy export for backward compatibility
export const Lable = Label;

export type { LabelProps };
export type LableProps = LabelProps;
