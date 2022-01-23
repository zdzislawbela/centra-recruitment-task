import { useState, useCallback } from 'react';
import { debounce } from 'lodash';

interface HandleChange {
  value: string;
  updateState: React.Dispatch<React.SetStateAction<string>>;
}

export const useSearchPanel = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const getMatchedAirport = (query: string) => {
    setDebouncedValue(query);

    return [];
  };

  const delayedQuery = useCallback(
    debounce((query: string) => getMatchedAirport(query), 500),
    []
  );

  const handleChange = ({ value, updateState }: HandleChange) => {
    updateState(value);
    delayedQuery(value);
  };

  return { from, setFrom, setTo, to, debouncedValue, handleChange };
};
