import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SplashTemplate } from 'components/templates/SplashTemplate';
import { ErrorBoundary } from 'components/error';

/**
 * 최상위 레이아웃
 * - ErrorBoundary로 감싸서 전역 에러 처리
 * - Suspense로 감싸서 React Query의 lazy loading 지원
 * - 모든 페이지의 공통 래퍼
 */
export const RootLayout: React.FC = () => {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        // Production: Send to error tracking service (e.g., Sentry)
        console.error('Global error caught:', error, errorInfo);
      }}
    >
      <Suspense
        fallback={
          <div className="relative flex flex-col items-start justify-center min-h-screen bg-center bg-cover">
            <SplashTemplate type="everPage" className="z-10 w-full h-full" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
};
