import { ThemeKeyType, ThemeState } from './slice/types';
import { ThemeClasses } from './styled';

/* istanbul ignore next line */
export const isSystemDark = window?.matchMedia
  ? window.matchMedia('(prefers-color-scheme: light)')?.matches
  : undefined;

export function saveTheme(theme: ThemeKeyType) {
  window.localStorage && localStorage.setItem('selectedTheme', theme);
}

/* istanbul ignore next line */
export function getThemeFromStorage(): ThemeKeyType | null {
  return window.localStorage
    ? (localStorage.getItem('selectedTheme') as ThemeKeyType) || null
    : null;
}

/**
 *
 * @name convertToThemeClass
 *
 * @description This function converts the keys of the themeState objects to classNames required by styling
 *
 * @return ThemeClasses
 */
export const convertThemeToClass = (theme: ThemeState): ThemeClasses => {
  let color: ThemeClasses['color'];
  let shadow: ThemeClasses['shadow'];

  if (theme.selected === 'system') {
    color = isSystemDark ? 'theme-dark' : 'theme-light';
    shadow = isSystemDark ? 'theme-dark' : 'theme-light';
  } else {
    color = theme.selected === 'dark' ? 'theme-dark' : 'theme-light';
    shadow = theme.selected === 'dark' ? 'theme-dark' : 'theme-light';
  }

  const direction = theme.selectedDirection === 'ltr' ? 'ltr' : 'rtl';
  const border =
    theme.selectedBorderStatus === 'on'
      ? 'round-borders-on'
      : 'round-borders-off';

  return {
    color,
    shadow,
    direction,
    border,
  };
};
