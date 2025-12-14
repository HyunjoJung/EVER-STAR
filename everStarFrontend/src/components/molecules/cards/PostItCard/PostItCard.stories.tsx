import type { Meta, StoryObj } from '@storybook/react';
import { PostItCard } from './PostItCard';

const meta: Meta<typeof PostItCard> = {
  title: 'Molecules/Cards/PostItCard',
  component: PostItCard,
  tags: ['autodocs'],
  argTypes: {
    contents: {
      control: 'text',
      description: '포스트잇의 내용을 설정합니다.',
    },
    name: {
      control: 'text',
      description: '작성자의 이름을 설정합니다.',
    },
    color: {
      control: { type: 'select' },
      options: ['pink', 'green', 'blue', 'purple', 'gray', 'yellow'],
      description: '포스트잇의 배경 색상을 설정합니다.',
    },
    onDelete: {
      action: 'deleted',
      description: '삭제 버튼 클릭 시 호출되는 함수입니다.',
    },
    onClick: {
      action: 'clicked',
      description: '포스트잇 클릭 시 호출되는 함수입니다.',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스를 지정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostItCard>;

export const Default: Story = {
  args: {
    contents: '오늘 하루도 수고했어요! 항상 곁에 있을게요.',
    name: 'Luna',
    color: 'pink',
    onDelete: () => console.log('Delete clicked'),
  },
};

export const WithClick: Story = {
  args: {
    contents: '사랑해요! 보고 싶어요.',
    name: 'Max',
    color: 'blue',
    onDelete: () => console.log('Delete clicked'),
    onClick: () => console.log('Card clicked'),
  },
};

export const LongContent: Story = {
  args: {
    contents:
      '긴 내용을 가진 포스트잇입니다. 이 텍스트는 line-clamp-4로 제한되어 4줄까지만 표시됩니다. 나머지 내용은 생략됩니다.',
    name: 'Buddy',
    color: 'green',
    onDelete: () => console.log('Delete clicked'),
  },
};

export const ShortContent: Story = {
  args: {
    contents: '짧은 메시지',
    name: 'Coco',
    color: 'yellow',
    onDelete: () => console.log('Delete clicked'),
  },
};

export const AllColors: Story = {
  render: (args) => (
    <div className="flex gap-4 flex-wrap">
      <PostItCard {...args} color="pink" name="Pink" contents="분홍색 포스트잇" />
      <PostItCard {...args} color="green" name="Green" contents="초록색 포스트잇" />
      <PostItCard {...args} color="blue" name="Blue" contents="파란색 포스트잇" />
      <PostItCard {...args} color="purple" name="Purple" contents="보라색 포스트잇" />
      <PostItCard {...args} color="gray" name="Gray" contents="회색 포스트잇" />
      <PostItCard {...args} color="yellow" name="Yellow" contents="노란색 포스트잇" />
    </div>
  ),
  args: {
    onDelete: () => console.log('Delete clicked'),
  },
};

export const Collection: Story = {
  render: (args) => (
    <div className="flex gap-4 flex-wrap">
      <PostItCard
        {...args}
        color="pink"
        name="사랑하는 주인"
        contents="매일 산책 데려가줘서 고마워요!"
      />
      <PostItCard
        {...args}
        color="blue"
        name="가족들"
        contents="함께한 모든 순간이 소중했어요."
      />
      <PostItCard
        {...args}
        color="yellow"
        name="친구 댕댕이"
        contents="같이 놀던 시간들이 그리워요~"
      />
      <PostItCard {...args} color="green" name="동생" contents="항상 사랑해요 ♥" />
    </div>
  ),
  args: {
    onDelete: () => console.log('Delete clicked'),
    onClick: () => console.log('Card clicked'),
  },
};
