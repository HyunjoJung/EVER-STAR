import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MyinfoMove } from 'components/templates/MyInfoMove';
import { Profile } from 'components/templates/Profile';
import { MyInfo } from 'components/templates/MyInfo';

/**
 * 마이페이지
 * MyPageLayout에서 배경 이미지와 Footer 처리
 */
export const MyPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start flex-grow w-full">
      <Routes>
        <Route path="/" element={<MyinfoMove />} />
        <Route path="profile" element={<Profile />} />
        <Route path="myinfo" element={<MyInfo />} />
      </Routes>
    </div>
  );
};
