import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastContainer } from './Toast';
import { useState } from 'react';

const meta: Meta<typeof Toast> = {
  title: 'Molecules/Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['success', 'error', 'info', 'warning'],
      description: 'Toast의 타입을 설정합니다.',
    },
    message: {
      control: 'text',
      description: 'Toast 메시지를 설정합니다.',
    },
    description: {
      control: 'text',
      description: 'Toast 설명을 설정합니다.',
    },
    duration: {
      control: 'number',
      description: 'Toast가 자동으로 닫히는 시간 (ms). 0이면 자동으로 닫히지 않습니다.',
    },
    showIcon: {
      control: 'boolean',
      description: '아이콘 표시 여부를 설정합니다.',
    },
    closeable: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부를 설정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: 'success',
    message: '성공적으로 저장되었습니다.',
    onClose: () => console.log('Toast closed'),
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: '오류가 발생했습니다.',
    description: '다시 시도해주세요.',
    onClose: () => console.log('Toast closed'),
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: '새로운 메시지가 도착했습니다.',
    onClose: () => console.log('Toast closed'),
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: '주의가 필요합니다.',
    description: '변경사항을 저장하지 않으면 내용이 사라집니다.',
    onClose: () => console.log('Toast closed'),
  },
};

export const WithoutIcon: Story = {
  args: {
    type: 'info',
    message: '아이콘 없는 메시지입니다.',
    showIcon: false,
    onClose: () => console.log('Toast closed'),
  },
};

export const NotCloseable: Story = {
  args: {
    type: 'info',
    message: '닫을 수 없는 메시지입니다.',
    closeable: false,
    duration: 0,
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toast
        type="success"
        message="성공 메시지"
        description="작업이 성공적으로 완료되었습니다."
        onClose={() => console.log('Success closed')}
        duration={0}
      />
      <Toast
        type="error"
        message="에러 메시지"
        description="문제가 발생했습니다."
        onClose={() => console.log('Error closed')}
        duration={0}
      />
      <Toast
        type="info"
        message="정보 메시지"
        description="알림 내용입니다."
        onClose={() => console.log('Info closed')}
        duration={0}
      />
      <Toast
        type="warning"
        message="경고 메시지"
        description="주의가 필요합니다."
        onClose={() => console.log('Warning closed')}
        duration={0}
      />
    </div>
  ),
};

export const WithContainer: Story = {
  render: () => {
    const [toasts, setToasts] = useState<Array<{ id: number; type: 'success' | 'error' | 'info' | 'warning'; message: string }>>([]);

    const addToast = (type: 'success' | 'error' | 'info' | 'warning') => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, type, message: `${type} 메시지 #${id}` }]);
    };

    const removeToast = (id: number) => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
      <div>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => addToast('success')}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Success Toast
          </button>
          <button
            onClick={() => addToast('error')}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Error Toast
          </button>
          <button
            onClick={() => addToast('info')}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Info Toast
          </button>
          <button
            onClick={() => addToast('warning')}
            className="px-4 py-2 bg-yellow-500 text-white rounded"
          >
            Warning Toast
          </button>
        </div>

        <ToastContainer position="top-right">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              type={toast.type}
              message={toast.message}
              onClose={() => removeToast(toast.id)}
              duration={3000}
            />
          ))}
        </ToastContainer>
      </div>
    );
  },
};
