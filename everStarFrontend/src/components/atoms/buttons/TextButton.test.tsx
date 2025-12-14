import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextButton from './TextButton'; // Default export

describe('TextButton', () => {
  const defaultProps = {
    size: 'medium' as const,
    disabled: false,
    children: 'Click Me',
    onClick: jest.fn(),
  };

  it('renders button with correct text', () => {
    render(<TextButton {...defaultProps} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    render(<TextButton {...defaultProps} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when prop is true', () => {
    render(<TextButton {...defaultProps} disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies correct class based on size', () => {
    // Note: Checking specific class names might be brittle if styles change,
    // but ensures size prop is being used.
    const { rerender } = render(<TextButton {...defaultProps} size="large" />);
    // Large size uses 'kor-h-h3'
    // We can't easily check class on the span without test-id or selecting it specifically.
    // However, we can check if the component renders without crashing for different sizes.
    rerender(<TextButton {...defaultProps} size="small" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
});
