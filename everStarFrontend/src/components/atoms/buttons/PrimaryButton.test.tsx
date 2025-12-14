import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PrimaryButton } from './PrimaryButton';

describe('PrimaryButton', () => {
  const defaultProps = {
    theme: 'focus' as const,
    size: 'medium' as const,
    disabled: false,
    children: 'Click Me',
  };

  it('renders button with correct text', () => {
    render(<PrimaryButton {...defaultProps} />);
    const buttonElement = screen.getByRole('button', { name: /Click Me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<PrimaryButton {...defaultProps} onClick={handleClick} />);
    
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click when disabled', () => {
    const handleClick = jest.fn();
    render(<PrimaryButton {...defaultProps} disabled={true} onClick={handleClick} />);
    
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
    
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders label when provided', () => {
    render(<PrimaryButton {...defaultProps} label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });
});
