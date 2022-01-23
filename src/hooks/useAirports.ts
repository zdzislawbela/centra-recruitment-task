import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { Airport } from '../models/Airport';
import { AIRPORTS_API } from '../consts/api';

export const useAirports = () => {
  const [isLoadingAirport, setIsLoadingAirport] = useState(false);
  const [errorAirport, setErrorAirport] = useState(false);
  const [airportData, setAirportData] = useState<Airport[]>([]);

  const options = {
    url: AIRPORTS_API,
    headers: {
      auth: process.env.REACT_APP_API_KEY,
    },
  };

  const sendQuery = useCallback(async () => {
    try {
      setIsLoadingAirport(true);
      const res = await axios(options);
      setAirportData(res.data);
    } catch (error) {
      setErrorAirport(error);
      setTimeout(() => sendQuery(), 1000);
    } finally {
      setIsLoadingAirport(false);
    }
  }, []);

  useEffect(() => {
    sendQuery();
  }, []);

  const airports = Array.isArray(airportData) ? airportData : undefined;

  return { airports, isLoadingAirport, errorAirport };
};
