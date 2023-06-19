import React from 'react';

import { Routing } from 'pages';

import { withProviders } from 'app/providers';
import './index.scss';

const App = () => {
  return <Routing />;
};

export const AppWithStore = withProviders(App);
