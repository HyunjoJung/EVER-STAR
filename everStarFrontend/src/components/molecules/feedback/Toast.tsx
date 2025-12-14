import React, { useEffect } from 'react';
import { CheckCircleIcon } from 'components/atoms/icons/CheckCircle/CheckCircleIcon';
import { CloseCircleIcon } from 'components/atoms/icons/CloseCircle/CloseCircleIcon';
import { CloseIcon } from 'components/atoms/icons/Close/CloseIcon';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
  type?: ToastType;
  message: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
  showIcon?: boolean;
  closeable?: boolean;
  className?: string;
}

const typeStyles: Record<ToastType, { bg: string; border: string; icon: string }> = {
  success: {
    bg: 'bg-green-50',
    border: 'border-green-500',
    icon: 'text-green-500',
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-mainerror',
    icon: 'text-mainerror',
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    icon: 'text-blue-500',
  },
  warning: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-500',
    icon: 'text-yellow-500',
  },
};

/**
 * Toast component - Notification message
 */
export const Toast: React.FC<ToastProps> = ({
  type = 'info',
  message,
  description,
  duration = 3000,
  onClose,
  showIcon = true,
  closeable = true,
  className = '',
}) => {
  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const styles = typeStyles[type];

  const renderIcon = () => {
    if (!showIcon) return null;

    switch (type) {
      case 'success':
        return <CheckCircleIcon size={24} />;
      case 'error':
        return <CloseCircleIcon size={24} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-lg border-l-4 ${styles.bg} ${styles.border} ${className} shadow-md animate-in slide-in-from-top-5 duration-300`}
      role="alert"
      aria-live="polite"
    >
      {showIcon && <div className={`${styles.icon} flex-shrink-0 mt-0.5`}>{renderIcon()}</div>}

      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-greyscaleblack-100">{message}</p>
        {description && (
          <p className="text-xs text-greyscaleblack-60 mt-1">{description}</p>
        )}
      </div>

      {closeable && onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 text-greyscaleblack-60 hover:text-greyscaleblack-100 transition-colors"
          aria-label="닫기"
        >
          <CloseIcon size={16} />
        </button>
      )}
    </div>
  );
};

export interface ToastContainerProps {
  children: React.ReactNode;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  className?: string;
}

const positionClasses: Record<NonNullable<ToastContainerProps['position']>, string> = {
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
};

/**
 * ToastContainer component - Container for toast notifications
 */
export const ToastContainer: React.FC<ToastContainerProps> = ({
  children,
  position = 'top-right',
  className = '',
}) => {
  return (
    <div
      className={`fixed ${positionClasses[position]} z-50 flex flex-col gap-2 max-w-sm w-full ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {children}
    </div>
  );
};
