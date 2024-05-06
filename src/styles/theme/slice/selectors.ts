import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '.';
import { themes } from '../themes';
import { isSystemDark } from '../utils';
import { RootState } from 'store/RootState';

export const selectedTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark ? 'dark' : 'light';
    }

    return theme.selected;
  },
);
export const themeColorsSelector = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.colors.dark : themes.colors.light;
    }
    return themes.colors[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected,
);
