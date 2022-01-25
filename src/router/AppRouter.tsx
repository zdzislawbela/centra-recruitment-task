import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NotFound } from '../components/NotFound';
import { RESULTS_ROUTE, HOME_ROUTE } from '../consts/routes';
import { Default } from '../layouts/Default';
import { Home } from '../pages/home';
import { Results } from '../pages/results';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME_ROUTE} element={<Default component={<Home />} />} />
        <Route
          path={`${RESULTS_ROUTE}/:from/:to`}
          element={<Default component={<Results />} />}
        />
        <Route path="*" element={<Default component={<NotFound />} />} />
      </Routes>
    </Router>
  );
};
