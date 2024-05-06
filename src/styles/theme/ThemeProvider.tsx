import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { themeColorsSelector } from './slice/selectors';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice();

  const colorTheme = useSelector(themeColorsSelector);

  return (
    <OriginalThemeProvider
      theme={{
        color: colorTheme,
      }}
    >
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
