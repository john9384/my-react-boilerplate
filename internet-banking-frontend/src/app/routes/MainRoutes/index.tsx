import { NotAuthGuard } from '../guards/NotAuthGuard';
import { authRoutes } from './auth';
import { useRoutes } from 'react-router-dom';
import { NotFoundPage } from 'app/pages/error/NotFoundPage';
import { navigation } from 'app/navigation';
import Home from 'app/pages/Home';
import { MainView } from 'app/layouts/MainView';

export const MainRoutes = () => {
  return useRoutes([
    {
      path: navigation.main.relativePath,
      element: (
        <MainView>
          <Home />
        </MainView>
      ),
    },
    {
      path: navigation.auth.relativePath,
      element: <NotAuthGuard />,
      children: authRoutes,
    },

    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
};
