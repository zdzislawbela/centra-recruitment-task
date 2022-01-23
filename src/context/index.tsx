import React, { createContext, useContext, useState } from 'react';
import { useAirports } from '../hooks/useAirports';
import { useConnections } from '../hooks/useConnections';
import { Airport } from '../models/Airport';
import { Connection } from '../models/Connection';

interface AppSharedState {
  airportNames: string[];
  airports: Airport[];
  isLoadingAirport: boolean;
  errorAirport: boolean;
  connections: Connection;
  isLoadingConnections: boolean;
  errorConnection: boolean;
}

const AppContext = createContext<AppSharedState>({} as AppSharedState);

const AppSharedState = () => {
  const { airports, isLoadingAirport, errorAirport } = useAirports();
  const { connections, isLoadingConnections, errorConnection } =
    useConnections();
  const airportNames = airports.map((airport) => {
    return airport.name;
  });

  return {
    airportNames,
    airports,
    connections,
    isLoadingAirport,
    isLoadingConnections,
    errorAirport,
    errorConnection,
  };
};

export const AirportContext = ({ children }) => {
  return (
    <AppContext.Provider value={AppSharedState()}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
