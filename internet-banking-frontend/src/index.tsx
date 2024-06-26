import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';

// Use consistent styling
import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.css';

import { App } from './app';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from './store/configureStore';
import { ThemeProvider } from './styles/theme/ThemeProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';

import reportWebVitals from './reportWebVitals';

// Initialize languages
import './locales/i18n';

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Poppins', {});

// When Poppins is loaded, add a font-family using Poppins to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOMClient.createRoot(MOUNT_NODE!).render(
  <Provider store={store}>
    <ThemeProvider>
      <HelmetProvider>
        <React.StrictMode>
          <GoogleOAuthProvider
            clientId={import.meta.env.REACT_APP_GOOGLE_CLIENT_ID}
          >
            <App />
          </GoogleOAuthProvider>
        </React.StrictMode>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>,
);

// Hot reloadable translation json files
// if (module.hot) {
//   module.hot.accept(['./locales/i18n'], () => {
//     // No need to render the App again because i18next works with the hooks
//   });
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
