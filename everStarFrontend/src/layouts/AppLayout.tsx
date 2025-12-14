import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/molecules/Footer/Footer';

interface AppLayoutProps {
  backgroundImage: string;
  showFooter?: boolean;
}

/**
 * 메인 앱 레이아웃 (MyPage, EverstarPage, EarthPage)
 * - 배경 이미지 (props로 받음)
 * - 하단 고정 Footer
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
  backgroundImage,
  showFooter = true,
}) => {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover z-[-1]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Scrollable Content */}
      <div className="flex justify-center min-h-screen flex-grow">
        <Outlet />
      </div>

      {/* Fixed Footer */}
      {showFooter && <Footer className="fixed bottom-0 left-0 z-50 w-full" />}
    </div>
  );
};
