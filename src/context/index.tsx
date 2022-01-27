import React, { createContext, useContext, useState } from 'react';
import { useAirports } from '../hooks/useAirports';
import { useConnections } from '../hooks/useConnections';
import { Airport } from '../models/Airport';
import { Connection } from '../models/Connection';

interface AppSharedState {
  airportNames: string[];
  airports: Airport[];
  isLoading: boolean;
  connections: Connection;
  error: boolean;
}

const AppContext = createContext<AppSharedState>({} as AppSharedState);

export const AirportContext = ({ children }) => {
  const { airports, isLoadingAirport, errorAirport } = useAirports();
  const { connections, isLoadingConnections, errorConnection } =
    useConnections();
  const airportNames = airports.map(({ name }) => name);

  const isLoading = isLoadingAirport || isLoadingConnections;
  const error = errorAirport || errorConnection;

  const value = {
    airportNames,
    airports,
    connections,
    isLoading,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
