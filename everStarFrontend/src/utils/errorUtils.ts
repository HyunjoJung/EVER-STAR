/**
 * Error utility functions for handling different error types
 */

export interface ApiError {
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  statusNum?: number;
  status?: number;
}

/**
 * Check if error is a network error
 */
export const isNetworkError = (error: any): boolean => {
  return (
    error?.message === 'Network Error' ||
    error?.message === 'Failed to fetch' ||
    error?.code === 'ERR_NETWORK' ||
    !navigator.onLine
  );
};

/**
 * Check if error is unauthorized (401, 403)
 */
export const isUnauthorizedError = (error: any): boolean => {
  const status = error?.status || error?.statusNum || error?.response?.status;
  return status === 401 || status === 403;
};

/**
 * Check if error is not found (404)
 */
export const isNotFoundError = (error: any): boolean => {
  const status = error?.status || error?.statusNum || error?.response?.status;
  return status === 404;
};

/**
 * Get error message from API error
 */
export const getErrorMessage = (error: any): string => {
  if (typeof error === 'string') {
    return error;
  }

  return (
    error?.errorMessage ||
    error?.message ||
    error?.response?.data?.errorMessage ||
    error?.response?.data?.message ||
    '알 수 없는 오류가 발생했습니다'
  );
};

/**
 * Get error code from API error
 */
export const getErrorCode = (error: any): string | undefined => {
  return (
    error?.errorCode ||
    error?.response?.data?.errorCode ||
    error?.code
  );
};

/**
 * Log error to console (development) or error tracking service (production)
 */
export const logError = (
  error: Error,
  errorInfo?: { componentStack?: string },
  context?: Record<string, any>
) => {
  if (process.env.NODE_ENV === 'development') {
    console.group('🔴 Error Logged');
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    console.error('Context:', context);
    console.groupEnd();
  } else {
    // TODO: Send to error tracking service (Sentry, LogRocket, etc.)
    // Example:
    // Sentry.captureException(error, {
    //   contexts: { errorInfo, ...context },
    // });
  }
};

/**
 * Format error for user display
 */
export const formatUserError = (error: any): {
  title: string;
  message: string;
  code?: string;
} => {
  if (isNetworkError(error)) {
    return {
      title: '네트워크 오류',
      message: '인터넷 연결을 확인하고 다시 시도해주세요.',
    };
  }

  if (isUnauthorizedError(error)) {
    return {
      title: '인증 오류',
      message: '로그인이 필요하거나 권한이 없습니다.',
    };
  }

  if (isNotFoundError(error)) {
    return {
      title: '페이지를 찾을 수 없음',
      message: '요청하신 페이지가 존재하지 않습니다.',
    };
  }

  return {
    title: '오류 발생',
    message: getErrorMessage(error),
    code: getErrorCode(error),
  };
};
