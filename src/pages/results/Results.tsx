import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../consts/routes';

export const Results = () => (
  <nav>
    <Link to={HOME_ROUTE}>Back</Link>
  </nav>
);
