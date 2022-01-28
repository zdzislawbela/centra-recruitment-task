import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AirportContext } from './context';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <BrowserRouter>
      <AirportContext>
        <AppRouter />
      </AirportContext>
    </BrowserRouter>
  );
};
