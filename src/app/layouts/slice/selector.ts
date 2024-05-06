import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.layout || initialState;

export const selectSidebarVisibility = createSelector(
  [selectSlice],
  sidebar => sidebar.showSidebar,
);

export const selectDropDownActive = createSelector(
  [selectSlice],
  sidebar => sidebar.dropDownActive,
);

export const toasterSelector = createSelector([selectSlice], toaster => ({
  showToaster: toaster.showToaster,
  toasterType: toaster.toasterType,
  toasterMessage: toaster.toasterMessage,
  toasterDelay: toaster.toasterDelay,
}));
