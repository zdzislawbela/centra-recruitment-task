import React from 'react';

import { AirportContext } from './context';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <AirportContext>
      <AppRouter />
    </AirportContext>
  );
};
