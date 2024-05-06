import { navigation } from 'app/navigation';
import Login from 'app/pages/auth/authentication/Login';
import Signup from 'app/pages/auth/onboarding/Signup';
import { NotFoundPage } from 'app/pages/error/NotFoundPage';
import { Navigate } from 'react-router-dom';

export const authRoutes = [
  {
    path: navigation.auth.signup.relativePath,
    element: <Signup />,
  },
  {
    path: navigation.auth.login.relativePath,
    element: <Login />,
  },
  {
    path: navigation.auth.staticPath,
    element: <Navigate to={navigation.auth.login.relativePath} />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
