import { createSlice } from 'store/@reduxjs/toolkit';
import { useInjectReducer } from 'store/redux-injectors';
import { authReducers } from './reducers';
import { AuthState } from 'app/types/Auth';

export const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducers,
});

export const { actions: layoutActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
