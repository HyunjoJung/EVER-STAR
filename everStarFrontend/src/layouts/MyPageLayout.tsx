import React from 'react';
import { AppLayout } from './AppLayout';
import bgImage from 'assets/images/bg-login.webp';

/**
 * MyPage 전용 레이아웃
 */
export const MyPageLayout: React.FC = () => {
  return <AppLayout backgroundImage={bgImage} />;
};
