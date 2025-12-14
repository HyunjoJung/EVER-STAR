import React from 'react';

export interface TabProps {
  row: 'two' | 'three';
  activeTab: 'one' | 'two' | 'three';
  className?: string;
  onTabClick: (tab: 'one' | 'two' | 'three') => void;
  labels?: {
    one?: string;
    two?: string;
    three?: string;
  };
}

export const Tab: React.FC<TabProps> = ({
  row,
  activeTab,
  className = '',
  onTabClick,
  labels = {
    one: '내 정보',
    two: '반려동물 정보',
    three: '메뉴명',
  },
}) => {
  const renderTabButton = (tabKey: 'one' | 'two' | 'three', label: string) => {
    const isActive = activeTab === tabKey;
    const isInactive = activeTab !== tabKey;

    return (
      <button
        className={`flex self-stretch items-center grow gap-2 flex-1 justify-center relative ${
          isActive ? 'border-b-2 border-tab-active' : 'p-2'
        } ${isInactive ? 'p-2' : ''}`}
        onClick={() => onTabClick(tabKey)}
        aria-selected={isActive}
        role="tab"
      >
        <span
          className={`font-noto-bold w-fit text-base font-bold text-center ${
            isActive ? 'text-tab-active-text' : 'text-text-dark'
          }`}
        >
          {label}
        </span>
      </button>
    );
  };

  return (
    <div
      className={`border-b border-tab-border w-[360px] flex items-start h-10 bg-white relative ${className}`}
      role="tablist"
    >
      {renderTabButton('one', labels.one || '내 정보')}
      {renderTabButton('two', labels.two || '반려동물 정보')}
      {row === 'three' && renderTabButton('three', labels.three || '메뉴명')}
    </div>
  );
};
