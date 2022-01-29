import { Airport } from '../models/Airport';
import { AIRPORTS_API } from '../consts/api';
import { useSendGetRequest } from './useSendGetRequest';

export const useAirports = () => {
  const { results, error } = useSendGetRequest<Airport[]>({
    api: AIRPORTS_API,
  });

  const airports = Array.isArray(results) ? results : undefined;

  return { airports, error };
};
