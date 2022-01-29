import React, { createContext, useContext } from 'react';
import { useAirports } from '../hooks/useAirports';
import { useConnections } from '../hooks/useConnections';
import { Airport } from '../models/Airport';
import { Connection } from '../models/Connection';

interface AppSharedState {
  airportNames: string[];
  airports: Airport[];
  connections: Connection;
  errors: Error[];
}

const AppContext = createContext<AppSharedState>({} as AppSharedState);

export const AirportContext = ({ children }) => {
  const { airports, error: errorAirport } = useAirports();
  const { connections, error: errorConnection } = useConnections();
  const airportNames = airports ? airports.map(({ name }) => name) : undefined;

  const errors = [errorAirport, errorConnection].filter(Boolean);

  const value = {
    airportNames,
    airports,
    connections,
    errors,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
