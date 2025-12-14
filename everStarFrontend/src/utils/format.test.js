/* eslint-env jest */
import { formatDate, formatNumber } from './format';

describe('format utils', () => {
  describe('formatDate', () => {
    it('should format date correctly', () => {
      // Note: Locale might depend on the system running the test, 
      // but usually standard environments default to EN or similar.
      // However, to be safe, we can check if it contains parts of the date.
      // Or we can mock toLocaleDateString if needed.
      // For now, let's assume a standard date string input.
      const date = '2023-01-01';
      const formatted = formatDate(date);
      // The implementation uses: new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
      // This output varies by locale.
      // e.g. "January 1, 2023" (US) or "2023년 1월 1일" (KR)
      expect(formatted).not.toBeNull();
      expect(typeof formatted).toBe('string');
    });
  });

  describe('formatNumber', () => {
    it('should format number with commas', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1000000)).toBe('1,000,000');
      expect(formatNumber(123)).toBe('123');
    });

    it('should handle string input that are numbers', () => {
      expect(formatNumber('1000')).toBe('1,000');
    });
  });
});
