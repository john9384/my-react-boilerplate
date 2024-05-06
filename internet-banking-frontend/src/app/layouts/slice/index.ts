import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'store/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { useInjectReducer } from 'store/redux-injectors';
import { LayoutState } from './types';
import { Screen } from 'design-system/constants/Screen';

const isDesktopScreen = () => {
  const width = window.innerWidth;
  return width > Screen.MEDIUM ? true : false;
};

export const initialState: LayoutState = {
  showSidebar: isDesktopScreen(),
  dropDownActive: false,
  showToaster: false,
  toasterMessage: '',
  toasterType: 'success',
  toasterDelay: 1,
};

const slice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    changeSidebarVisibility(state) {
      state.showSidebar = !state.showSidebar;
    },
    setVisibility(state, action: PayloadAction<boolean>) {
      state.showSidebar = action.payload;
    },
    setDropDownActive(state) {
      state.dropDownActive = !state.dropDownActive;
    },
    setToaster(
      state,
      action: PayloadAction<{
        showToaster: boolean;
        type?: 'success' | 'error' | 'warning' | 'info';
        message?: string;
        delay?: number;
      }>,
    ) {
      state.showToaster = action.payload.showToaster;
      state.toasterType = action.payload.type || 'info';
      state.toasterMessage = action.payload.message || '';
      state.toasterDelay = action.payload.delay || 1.5;
    },
  },
});

export const { actions: layoutActions } = slice;

export const useLayoutSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
