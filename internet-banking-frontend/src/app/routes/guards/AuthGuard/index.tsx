import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticatedSelector } from 'app/pages/auth/slice/selectors';

import { navigation } from 'app/navigation';

export const AuthGuard = React.memo(() => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (!isAuthenticated) {
    return <Navigate to={navigation.auth.login.relativePath} />;
  }

  return <Outlet />;
});
