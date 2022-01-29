import { useState, useEffect, useRef } from 'react';
import { LONG_WAITING_TIME } from '../consts/api';

import { get } from './get';

interface Props {
  api: string;
}

export const useSendGetRequest = <DataType>({ api }: Props) => {
  const [results, setResults] = useState<DataType>();
  const [error, setError] = useState<Error>();
  const errorRef = useRef(error);
  const resultsRef = useRef(results);

  const send = async () => {
    const timeoutProgress = setTimeout(() => {
      const refs = [resultsRef.current, errorRef.current].every(Boolean);
      if (!refs) setError(new Error('long-waiting-time'));
    }, LONG_WAITING_TIME);

    try {
      const response = await get(api);
      setResults(response.data);
      setError(undefined);
    } catch (error) {
      setError(error);
    } finally {
      clearTimeout(timeoutProgress);
    }
  };

  useEffect(() => {
    send();
  }, []);

  return { results, error };
};
