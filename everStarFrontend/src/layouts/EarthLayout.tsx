import React from 'react';
import { AppLayout } from './AppLayout';
import bgImage from 'assets/images/bg-earth.webp';

/**
 * EarthPage 전용 레이아웃
 */
export const EarthLayout: React.FC = () => {
  return <AppLayout backgroundImage={bgImage} />;
};
