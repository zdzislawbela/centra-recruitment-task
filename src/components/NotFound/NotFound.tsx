import React from 'react';
import { Link } from 'react-router-dom';

import { HOME_ROUTE } from '../../consts/routes';

export const NotFound = () => (
  <>
    <p>Page not found</p>
    <Link to={HOME_ROUTE}>Back</Link>
  </>
);
