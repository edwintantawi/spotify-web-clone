import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '~/app';

const rootContainer = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
