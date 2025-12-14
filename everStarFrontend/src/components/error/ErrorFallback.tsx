import React from 'react';

export interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

/**
 * Generic error fallback component
 * Can be customized for different error types
 */
export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetError,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="mb-2 text-2xl font-bold text-center text-gray-900">
          문제가 발생했습니다
        </h1>

        <p className="mb-6 text-center text-gray-600">
          일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="p-4 mb-4 overflow-auto text-sm text-red-800 bg-red-100 rounded">
            <p className="font-bold">Error:</p>
            <p className="mt-1">{error.message}</p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={resetError}
            className="flex-1 px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            다시 시도
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="flex-1 px-4 py-2 font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            홈으로
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Network error fallback (API errors, fetch failures)
 */
export const NetworkErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetError,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full">
          <svg
            className="w-8 h-8 text-yellow-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        </div>

        <h1 className="mb-2 text-2xl font-bold text-center text-gray-900">
          연결 오류
        </h1>

        <p className="mb-6 text-center text-gray-600">
          네트워크 연결을 확인하고 다시 시도해주세요.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="p-4 mb-4 overflow-auto text-sm text-yellow-800 bg-yellow-100 rounded">
            <p className="font-bold">Network Error:</p>
            <p className="mt-1">{error.message}</p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={resetError}
            className="flex-1 px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            다시 시도
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="flex-1 px-4 py-2 font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            홈으로
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Not found error fallback (404)
 */
export const NotFoundFallback: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="text-6xl font-bold text-gray-300 mb-4">404</div>

        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          페이지를 찾을 수 없습니다
        </h1>

        <p className="mb-6 text-gray-600">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>

        <button
          onClick={() => (window.location.href = '/')}
          className="px-6 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
        >
          홈으로 이동
        </button>
      </div>
    </div>
  );
};

/**
 * Unauthorized error fallback (401, 403)
 */
export const UnauthorizedFallback: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
          <svg
            className="w-8 h-8 text-orange-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          접근 권한이 없습니다
        </h1>

        <p className="mb-6 text-gray-600">
          로그인이 필요하거나 권한이 없는 페이지입니다.
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => (window.location.href = '/login')}
            className="px-6 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            로그인
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="px-6 py-2 font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            홈으로
          </button>
        </div>
      </div>
    </div>
  );
};
