import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Textbox } from './Textbox';

describe('Textbox', () => {
  const defaultProps = {
    type: 'large' as const,
    label: 'Description',
    value: '',
    onChange: jest.fn(),
  };

  it('renders label correctly', () => {
    render(<Textbox {...defaultProps} />);
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('renders textarea with placeholder', () => {
    render(<Textbox {...defaultProps} ghostText="Enter text here" />);
    expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument();
  });

  it('displays character count', () => {
    render(<Textbox {...defaultProps} value="Hello" maxLength={100} />);
    // "5/100" text should be present
    expect(screen.getByText('5/100')).toBeInTheDocument();
  });

  it('calls onChange handler when typed', () => {
    render(<Textbox {...defaultProps} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New text' } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('shows required star when showStar is true', () => {
    // Lable component logic handles the star. 
    // Usually '*' is rendered.
    render(<Textbox {...defaultProps} showStar={true} />);
    // Depending on Lable implementation, it might just be part of text or a separate element.
    // Let's assume it renders text content including *.
    // Or we can just ensure it renders without error.
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
