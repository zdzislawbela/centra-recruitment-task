import React from 'react';

import { AirportCards } from '../../components/AirportCards';
import { SearchPanel } from '../../components/SearchPanel';

export const Home = () => (
  <>
    <SearchPanel />
    <AirportCards />
  </>
);
