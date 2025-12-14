import React from 'react';
import { Label } from 'components/atoms/texts/Lable';

export interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

/**
 * FormField component - Wraps form inputs with label, error, and hint text
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  error,
  hint,
  children,
  htmlFor,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <Label text={label} required={required} htmlFor={htmlFor} font="default" />
      )}
      {children}
      {error && (
        <p className="text-xs text-mainerror mt-1" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p className="text-xs text-greyscaleblack-60 mt-1">{hint}</p>
      )}
    </div>
  );
};

export interface FormGroupProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

/**
 * FormGroup component - Groups related form fields together
 */
export const FormGroup: React.FC<FormGroupProps> = ({
  children,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {(title || description) && (
        <div className="mb-2">
          {title && (
            <h3 className="text-kor-h-h3 text-greyscaleblack-100 font-bold mb-1">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-kor-p-p3 text-greyscaleblack-60">{description}</p>
          )}
        </div>
      )}
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

/**
 * Form component - Main form container
 */
export const Form: React.FC<FormProps> = ({ children, onSubmit, className = '' }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-6 ${className}`} noValidate>
      {children}
    </form>
  );
};
