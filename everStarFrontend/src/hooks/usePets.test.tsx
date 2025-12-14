import React from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useFetchPets } from './usePets';
import * as petApi from '../api/petApi';
import petReducer from '../store/slices/petSlice';

// Mock api
jest.mock('../api/petApi');

const createTestStore = () => {
  return configureStore({
    reducer: {
      pet: petReducer,
    },
  });
};

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const store = createTestStore();

  return ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
};

describe('useFetchPets', () => {
  it('fetches pets successfully', async () => {
    const mockPets = [
      { id: 1, name: 'Pet1', profileImageUrl: 'url1' },
    ];
    (petApi.fetchPets as jest.Mock).mockResolvedValue(mockPets);

    const { result } = renderHook(() => useFetchPets('dummy-token'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockPets);
    expect(petApi.fetchPets).toHaveBeenCalledWith('dummy-token');
  });

  it('does not fetch when token is missing', async () => {
    const { result } = renderHook(() => useFetchPets(''), {
      wrapper: createWrapper(),
    });

    expect(result.current.isPending).toBe(true);
    expect(result.current.fetchStatus).toBe('idle'); 
    // fetchStatus 'idle' means it's disabled or not fetching
  });
});
