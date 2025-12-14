import {
  isNetworkError,
  isUnauthorizedError,
  isNotFoundError,
  getErrorMessage,
  formatUserError
} from './errorUtils';

describe('errorUtils', () => {
  describe('isNetworkError', () => {
    it('returns true for network related errors', () => {
      expect(isNetworkError({ message: 'Network Error' })).toBe(true);
      expect(isNetworkError({ code: 'ERR_NETWORK' })).toBe(true);
      expect(isNetworkError({ message: 'Failed to fetch' })).toBe(true);
    });

    it('returns false for other errors', () => {
      expect(isNetworkError({ message: 'Other Error' })).toBe(false);
    });
  });

  describe('isUnauthorizedError', () => {
    it('returns true for 401 and 403 status', () => {
      expect(isUnauthorizedError({ status: 401 })).toBe(true);
      expect(isUnauthorizedError({ status: 403 })).toBe(true);
      expect(isUnauthorizedError({ response: { status: 401 } })).toBe(true);
    });

    it('returns false for other statuses', () => {
      expect(isUnauthorizedError({ status: 500 })).toBe(false);
      expect(isUnauthorizedError({ status: 200 })).toBe(false);
    });
  });

  describe('isNotFoundError', () => {
    it('returns true for 404 status', () => {
      expect(isNotFoundError({ status: 404 })).toBe(true);
      expect(isNotFoundError({ response: { status: 404 } })).toBe(true);
    });

    it('returns false for other statuses', () => {
      expect(isNotFoundError({ status: 400 })).toBe(false);
    });
  });

  describe('getErrorMessage', () => {
    it('returns string input as is', () => {
      expect(getErrorMessage('Error string')).toBe('Error string');
    });

    it('extracts errorMessage field', () => {
      expect(getErrorMessage({ errorMessage: 'Custom error' })).toBe('Custom error');
    });

    it('extracts message field', () => {
      expect(getErrorMessage({ message: 'Standard error' })).toBe('Standard error');
    });

    it('returns default message for unknown error structure', () => {
      expect(getErrorMessage({})).toBe('알 수 없는 오류가 발생했습니다');
    });
  });

  describe('formatUserError', () => {
    it('formats network error', () => {
      const result = formatUserError({ message: 'Network Error' });
      expect(result.title).toBe('네트워크 오류');
    });

    it('formats unauthorized error', () => {
      const result = formatUserError({ status: 401 });
      expect(result.title).toBe('인증 오류');
    });

    it('formats not found error', () => {
      const result = formatUserError({ status: 404 });
      expect(result.title).toBe('페이지를 찾을 수 없음');
    });

    it('formats generic error', () => {
      const result = formatUserError({ message: 'Generic failure' });
      expect(result.title).toBe('오류 발생');
      expect(result.message).toBe('Generic failure');
    });
  });
});
