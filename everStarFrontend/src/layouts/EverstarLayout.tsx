import React from 'react';
import { AppLayout } from './AppLayout';
import bgImage from 'assets/images/bg-everstar.webp';

/**
 * EverstarPage 전용 레이아웃
 */
export const EverstarLayout: React.FC = () => {
  return <AppLayout backgroundImage={bgImage} />;
};
