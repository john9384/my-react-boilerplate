import 'styled-components';
import { Theme as ColorTheme } from './themes';

export type Theme = {
  color: ColorTheme;
};

export type ThemeClasses = {
  color: 'theme-dark' | 'theme-light';
};

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
