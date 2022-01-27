import { useState, useEffect } from 'react';

import { Airport } from '../models/Airport';
import { AIRPORTS_API } from '../consts/api';
import { get } from './get';

export const useAirports = () => {
  const [isLoadingAirport, setIsLoadingAirport] = useState(false);
  const [errorAirport, setErrorAirport] = useState(false);
  const [airportData, setAirportData] = useState<Airport[]>([]);

  const sendQuery = async () => {
    try {
      setIsLoadingAirport(true);
      const response = await get(AIRPORTS_API);
      setAirportData(response.data);
    } catch (error) {
      setErrorAirport(error);
    } finally {
      setIsLoadingAirport(false);
    }
  };

  useEffect(() => {
    sendQuery();
  }, []);

  const airports = Array.isArray(airportData) ? airportData : undefined;

  return { airports, isLoadingAirport, errorAirport };
};
