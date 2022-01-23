import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

import { Airport } from '../models/Airport';
import { AIRPORTS_API } from '../consts/api';

export const useAirports = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState<Airport[]>([]);

  const options = {
    url: AIRPORTS_API,
    headers: {
      auth: process.env.REACT_APP_API_KEY,
    },
  };

  const sendQuery = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios(options);
      setList(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    sendQuery();
  }, []);

  const getDestructuredAirports = (airports: Airport[]) => {
    if (!Array.isArray(airports)) return;
    console.log(Array.isArray(airports));
    return airports;
  };

  const destructuredAirports = getDestructuredAirports(list);
  return { destructuredAirports, isLoading, error };
};
