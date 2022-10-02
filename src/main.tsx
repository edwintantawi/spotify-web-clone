import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '~/styles/index.css';
import { App } from '~/app';

const rootContainer = document.getElementById('root') as HTMLElement;

createRoot(rootContainer).render(
  <StrictMode>
    <App />
  </StrictMode>
);
