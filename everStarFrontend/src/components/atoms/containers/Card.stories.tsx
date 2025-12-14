import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Containers/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'elevated', 'outlined'],
      description: '카드의 스타일 변형을 설정합니다.',
    },
    padding: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md', 'lg'],
      description: '카드의 패딩을 설정합니다.',
    },
    rounded: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md', 'lg'],
      description: '카드의 모서리 둥글기를 설정합니다.',
    },
    onClick: {
      action: 'clicked',
      description: '카드 클릭 시 호출되는 함수입니다.',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스를 지정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Card Title</h3>
        <p className="text-greyscaleblack-60">This is a default card component.</p>
      </div>
    ),
    variant: 'default',
    padding: 'md',
    rounded: 'md',
  },
};

export const Elevated: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Elevated Card</h3>
        <p className="text-greyscaleblack-60">This card has a shadow effect.</p>
      </div>
    ),
    variant: 'elevated',
    padding: 'md',
    rounded: 'md',
  },
};

export const Outlined: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Outlined Card</h3>
        <p className="text-greyscaleblack-60">This card has a border outline.</p>
      </div>
    ),
    variant: 'outlined',
    padding: 'md',
    rounded: 'md',
  },
};

export const Clickable: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Clickable Card</h3>
        <p className="text-greyscaleblack-60">Click me! I have hover and active states.</p>
      </div>
    ),
    variant: 'elevated',
    padding: 'md',
    rounded: 'md',
    onClick: () => console.log('Card clicked!'),
  },
};

export const WithSections: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <h3 className="text-lg font-bold">Card with Sections</h3>
        </CardHeader>
        <CardBody>
          <p className="text-greyscaleblack-60">
            This card uses CardHeader, CardBody, and CardFooter components for better structure.
          </p>
        </CardBody>
        <CardFooter>
          <button className="px-4 py-2 bg-mainprimary text-white rounded">Action</button>
        </CardFooter>
      </>
    ),
    variant: 'elevated',
    padding: 'md',
    rounded: 'md',
  },
};

export const CustomPadding: Story = {
  args: {
    children: <p className="text-greyscaleblack-100">This card has no padding.</p>,
    variant: 'outlined',
    padding: 'none',
    rounded: 'md',
  },
};

export const LargePadding: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Large Padding</h3>
        <p className="text-greyscaleblack-60">This card has large padding for spacious layouts.</p>
      </div>
    ),
    variant: 'elevated',
    padding: 'lg',
    rounded: 'lg',
  },
};

export const NoRounding: Story = {
  args: {
    children: <p className="text-greyscaleblack-100">This card has sharp corners.</p>,
    variant: 'outlined',
    padding: 'md',
    rounded: 'none',
  },
};
