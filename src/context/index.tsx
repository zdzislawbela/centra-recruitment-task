import React, { createContext, useContext, useState } from 'react';
import { useAirports } from '../hooks/useAirports';
import { Airport } from '../models/Airport';

interface AppSharedState {
  airportNames: string[];
  airports: Airport[];
  isLoading: boolean;
  error: boolean;
}

const AppContext = createContext<AppSharedState>({} as AppSharedState);

const AppSharedState = () => {
  const { airports, isLoading, error } = useAirports();
  const airportNames = airports.map((airport) => {
    return airport.name;
  });

  return { airportNames, airports, isLoading, error };
};

export const AirportContext = ({ children }) => {
  return (
    <AppContext.Provider value={AppSharedState()}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
