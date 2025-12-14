import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormGroup, FormField } from './FormGroup';

const meta: Meta<typeof FormGroup> = {
  title: 'Molecules/Forms/FormGroup',
  component: FormGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

export const BasicFormField: Story = {
  render: () => (
    <FormField label="이름" required>
      <input
        type="text"
        className="border border-greyscaleblack-20 rounded px-3 py-2"
        placeholder="이름을 입력하세요"
      />
    </FormField>
  ),
};

export const FormFieldWithError: Story = {
  render: () => (
    <FormField label="이메일" required error="올바른 이메일 주소를 입력해주세요">
      <input
        type="email"
        className="border border-mainerror rounded px-3 py-2"
        placeholder="example@email.com"
        defaultValue="invalid-email"
      />
    </FormField>
  ),
};

export const FormFieldWithHint: Story = {
  render: () => (
    <FormField label="비밀번호" required hint="8자 이상, 영문/숫자/특수문자 포함">
      <input
        type="password"
        className="border border-greyscaleblack-20 rounded px-3 py-2"
        placeholder="비밀번호를 입력하세요"
      />
    </FormField>
  ),
};

export const SimpleFormGroup: Story = {
  render: () => (
    <FormGroup title="기본 정보">
      <FormField label="이름" required>
        <input
          type="text"
          className="border border-greyscaleblack-20 rounded px-3 py-2"
          placeholder="이름을 입력하세요"
        />
      </FormField>
      <FormField label="이메일" required>
        <input
          type="email"
          className="border border-greyscaleblack-20 rounded px-3 py-2"
          placeholder="example@email.com"
        />
      </FormField>
    </FormGroup>
  ),
};

export const FormGroupWithDescription: Story = {
  render: () => (
    <FormGroup
      title="반려동물 정보"
      description="반려동물의 기본 정보를 입력해주세요"
    >
      <FormField label="이름" required>
        <input
          type="text"
          className="border border-greyscaleblack-20 rounded px-3 py-2"
          placeholder="반려동물 이름"
        />
      </FormField>
      <FormField label="나이">
        <input
          type="number"
          className="border border-greyscaleblack-20 rounded px-3 py-2"
          placeholder="나이"
        />
      </FormField>
      <FormField label="성별">
        <select className="border border-greyscaleblack-20 rounded px-3 py-2">
          <option value="">선택하세요</option>
          <option value="male">남아</option>
          <option value="female">여아</option>
        </select>
      </FormField>
    </FormGroup>
  ),
};

export const CompleteForm: Story = {
  render: () => (
    <Form onSubmit={(e) => console.log('Form submitted', e)}>
      <FormGroup title="회원 정보" description="기본 정보를 입력해주세요">
        <FormField label="이름" required>
          <input
            type="text"
            className="border border-greyscaleblack-20 rounded px-3 py-2"
            placeholder="이름을 입력하세요"
          />
        </FormField>
        <FormField label="이메일" required>
          <input
            type="email"
            className="border border-greyscaleblack-20 rounded px-3 py-2"
            placeholder="example@email.com"
          />
        </FormField>
        <FormField label="전화번호" hint="하이픈(-) 없이 입력해주세요">
          <input
            type="tel"
            className="border border-greyscaleblack-20 rounded px-3 py-2"
            placeholder="01012345678"
          />
        </FormField>
      </FormGroup>

      <FormGroup title="반려동물 정보">
        <FormField label="이름" required>
          <input
            type="text"
            className="border border-greyscaleblack-20 rounded px-3 py-2"
            placeholder="반려동물 이름"
          />
        </FormField>
        <FormField label="소개">
          <textarea
            className="border border-greyscaleblack-20 rounded px-3 py-2"
            rows={4}
            placeholder="반려동물을 소개해주세요"
          />
        </FormField>
      </FormGroup>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 bg-mainprimary text-white rounded px-4 py-2 hover:opacity-90"
        >
          제출
        </button>
        <button
          type="button"
          className="flex-1 bg-greyscaleblack-20 text-greyscaleblack-100 rounded px-4 py-2 hover:bg-greyscaleblack-40"
        >
          취소
        </button>
      </div>
    </Form>
  ),
};

export const FormWithValidation: Story = {
  render: () => (
    <Form>
      <FormGroup title="로그인">
        <FormField
          label="이메일"
          required
          error="이메일 형식이 올바르지 않습니다"
          htmlFor="email"
        >
          <input
            id="email"
            type="email"
            className="border border-mainerror rounded px-3 py-2"
            defaultValue="invalid"
          />
        </FormField>
        <FormField label="비밀번호" required htmlFor="password">
          <input
            id="password"
            type="password"
            className="border border-greyscaleblack-20 rounded px-3 py-2"
          />
        </FormField>
      </FormGroup>
      <button
        type="submit"
        className="w-full bg-mainprimary text-white rounded px-4 py-2"
      >
        로그인
      </button>
    </Form>
  ),
};
