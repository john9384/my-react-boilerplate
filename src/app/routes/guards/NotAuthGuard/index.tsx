import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {
  authLoadingSelector,
  isAuthenticatedSelector,
} from 'app/pages/auth/slice/selectors';

export const NotAuthGuard = React.memo(() => {
  const authLoading = useSelector(authLoadingSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (authLoading) return null;

  if (isAuthenticated) return <Navigate to="/" />;

  return <Outlet />;
});
