import type { Meta, StoryObj } from '@storybook/react';
import { CircleButton } from './CircleButton';

const meta: Meta<typeof CircleButton> = {
  title: 'Atoms/Buttons/CircleButton',
  component: CircleButton,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['focus', 'hover', 'white'],
      description: '버튼의 테마를 설정합니다.',
    },
    icon: {
      control: { type: 'select' },
      options: [
        'plus',
        'mic',
        'micOff',
        'phone',
        'phoneStop',
        'video',
        'videoOff',
        'settings',
        'chat',
        'share',
        'exit',
      ],
      description: '버튼에 표시할 아이콘을 선택합니다.',
    },
    label: {
      control: 'text',
      description: '버튼 하단에 표시할 라벨입니다.',
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 설정합니다.',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 호출되는 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircleButton>;

export const Default: Story = {
  args: {
    theme: 'white',
    icon: 'plus',
    disabled: false,
    onClick: () => console.log('Button clicked'),
  },
};

export const WithLabel: Story = {
  args: {
    theme: 'white',
    icon: 'mic',
    label: '마이크',
    disabled: false,
    onClick: () => console.log('Microphone clicked'),
  },
};

export const Focus: Story = {
  args: {
    theme: 'focus',
    icon: 'phone',
    label: '전화',
    disabled: false,
    onClick: () => console.log('Phone clicked'),
  },
};

export const Hover: Story = {
  args: {
    theme: 'hover',
    icon: 'video',
    label: '비디오',
    disabled: false,
    onClick: () => console.log('Video clicked'),
  },
};

export const Disabled: Story = {
  args: {
    theme: 'white',
    icon: 'mic',
    label: '마이크 끔',
    disabled: true,
    onClick: () => console.log('This should not fire'),
  },
};

export const AllIcons: Story = {
  render: (args) => (
    <div className="flex gap-4 flex-wrap">
      <CircleButton {...args} icon="plus" label="추가" />
      <CircleButton {...args} icon="mic" label="마이크" />
      <CircleButton {...args} icon="micOff" label="음소거" />
      <CircleButton {...args} icon="phone" label="전화" />
      <CircleButton {...args} icon="phoneStop" label="종료" />
      <CircleButton {...args} icon="video" label="비디오" />
      <CircleButton {...args} icon="videoOff" label="비디오 끔" />
      <CircleButton {...args} icon="settings" label="설정" />
      <CircleButton {...args} icon="chat" label="채팅" />
      <CircleButton {...args} icon="share" label="공유" />
      <CircleButton {...args} icon="exit" label="나가기" />
    </div>
  ),
  args: {
    theme: 'white',
    disabled: false,
    onClick: () => console.log('Icon clicked'),
  },
};

export const AllThemes: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <CircleButton {...args} theme="white" label="White" />
      </div>
      <div className="flex flex-col items-center">
        <CircleButton {...args} theme="hover" label="Hover" />
      </div>
      <div className="flex flex-col items-center">
        <CircleButton {...args} theme="focus" label="Focus" />
      </div>
      <div className="flex flex-col items-center">
        <CircleButton {...args} disabled label="Disabled" />
      </div>
    </div>
  ),
  args: {
    icon: 'phone',
    theme: 'white',
    disabled: false,
    onClick: () => console.log('Theme variant clicked'),
  },
};
