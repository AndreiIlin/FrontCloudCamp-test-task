import React from 'react';

import { AppWithStore } from 'app';

import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWithStore />
  </React.StrictMode>,
);
