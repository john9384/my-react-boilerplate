import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { MainWrapper } from './layouts/MainWrapper';
import { AppRoutes } from './routes';
import { ErrorBoundary } from 'react-error-boundary';
import { AppErrorBoundaryPage } from './pages/error/ErrorBoundaries/AppErrorBoundaryPage';
import { useThemeSlice } from 'styles/theme/slice';
import { useLayoutSlice } from './layouts/slice';
import { useAuthSlice } from './pages/auth/slice';

export function App() {
  useThemeSlice();
  useLayoutSlice();
  useAuthSlice();

  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - App" defaultTitle="App">
        <meta name="description" content="An App application" />
      </Helmet>
      <ErrorBoundary FallbackComponent={AppErrorBoundaryPage}>
        <MainWrapper>
          <AppRoutes />
        </MainWrapper>
      </ErrorBoundary>
      <GlobalStyle />
    </BrowserRouter>
  );
}
