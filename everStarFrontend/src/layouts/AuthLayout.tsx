import React from 'react';
import { Outlet } from 'react-router-dom';
import bgImage from 'assets/images/bg-login.webp';

/**
 * 인증 페이지 레이아웃 (로그인, 회원가입)
 * - 배경 이미지
 * - 중앙 정렬
 */
export const AuthLayout: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover z-[-1]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 중앙 정렬 컨텐츠 */}
      <div className="flex-grow flex items-center justify-center p-4">
        <Outlet />
      </div>
    </div>
  );
};
