import { useLocation } from 'react-router-dom';

export const useQueryParam = (queryParam: string) => {
  return new URLSearchParams(useLocation().search).get(queryParam);
};
