import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from 'app/types/Auth';

export const authReducers = {
  setIsLoading(state: AuthState, action: PayloadAction<boolean>) {
    state.isLoading = action.payload;
  },

  setIsAuthenticated(state: AuthState, action: PayloadAction<boolean>) {
    state.isAuthenticated = action.payload;
  },

  setError(state: AuthState, action: PayloadAction<any>) {
    state.error = action.payload;
  },
};
