import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/RootState';
import { initialState } from '.';

export const mySelector = (state: RootState) => state.auth || initialState;

export const authLoadingSelector = createSelector(
  mySelector,
  state => state.isLoading,
);

export const isAuthenticatedSelector = createSelector(
  mySelector,
  state => state.isAuthenticated,
);

export const authErrorSelector = createSelector(
  mySelector,
  state => state.error,
);
