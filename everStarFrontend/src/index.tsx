// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/noto-sans-kr/400.css';
import '@fontsource/noto-sans-kr/700.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Store } from './store/Store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// Enable MSW in development mode for portfolio demo
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
  });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

enableMocking().then(() => {
  root.render(
    // <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
    // </React.StrictMode>
  );

  reportWebVitals();
  serviceWorkerRegistration.register();
});
