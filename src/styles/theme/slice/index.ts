import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'store/@reduxjs/toolkit';
import { useInjectReducer } from 'store/redux-injectors';
import { getThemeFromStorage, saveTheme } from '../utils';
import { ThemeKeyType, ThemeState } from './types';

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || 'system',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      saveTheme(action.payload);
      state.selected = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
