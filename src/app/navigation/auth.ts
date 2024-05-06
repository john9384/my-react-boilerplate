const origin = window.location.origin;
const BASE_PATH = 'auth';
export const authNavigation = {
  staticPath: `auth`,
  absolutePath: `${origin}/${BASE_PATH}`,
  relativePath: `/${BASE_PATH}`,

  signup: {
    staticPath: 'signup',
    absolutePath: `${origin}/${BASE_PATH}/signup`,
    relativePath: `/${BASE_PATH}/signup`,
  },
  login: {
    staticPath: 'login',
    absolutePath: `${origin}/${BASE_PATH}/login`,
    relativePath: `/${BASE_PATH}/login`,
  },
};
