import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { CONNECTIONS_API } from '../consts/api';

export const useConnections = () => {
  const [isLoadingConnections, setIsLoadingConnections] = useState(false);
  const [errorConnection, setErrorConnection] = useState(false);
  const [connectionsData, setConnectionsData] = useState();

  const options = {
    url: CONNECTIONS_API,
    headers: {
      auth: process.env.REACT_APP_API_KEY,
    },
  };

  const sendQuery = useCallback(async () => {
    try {
      setIsLoadingConnections(true);
      const res = await axios(options);
      setConnectionsData(res.data);
    } catch (error) {
      setErrorConnection(error);
      setTimeout(() => sendQuery(), 1000);
    } finally {
      setIsLoadingConnections(false);
    }
  }, []);

  useEffect(() => {
    sendQuery();
  }, []);

  const convertConnectins = (connectionsData: string) => {
    if (!connectionsData) return;

    const splittedByNewLine = connectionsData.split('\n');

    const convertArrayToObject = (array: string[]) => {
      return array.reduce((obj, item) => {
        const semicolonIndex = item.indexOf(':');
        const key = item.slice(0, semicolonIndex);
        const values = item.slice(semicolonIndex + 2).split(' ');
        const clearValues = values.map((value) => value.replace(',', ''));

        return {
          ...obj,
          [key]: clearValues,
        };
      }, {});
    };

    return convertArrayToObject(splittedByNewLine);
  };

  const connections = convertConnectins(connectionsData);

  return { connections, isLoadingConnections, errorConnection };
};
