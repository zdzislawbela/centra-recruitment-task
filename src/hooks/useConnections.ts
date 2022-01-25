import { useState, useEffect } from 'react';

import { CONNECTIONS_API } from '../consts/api';
import { get } from './get';

export const useConnections = () => {
  const [isLoadingConnections, setIsLoadingConnections] = useState(false);
  const [errorConnection, setErrorConnection] = useState(false);
  const [connectionsData, setConnectionsData] = useState();

  const sendQuery = async () => {
    try {
      setIsLoadingConnections(true);
      const response = await get(CONNECTIONS_API);
      setConnectionsData(response.data);
    } catch (error) {
      setErrorConnection(error);
      setTimeout(() => sendQuery(), 1000);
    } finally {
      setIsLoadingConnections(false);
    }
  };

  useEffect(() => {
    sendQuery();
  }, []);

  const connections = convertConnectins(connectionsData);

  return { connections, isLoadingConnections, errorConnection };
};

const convertConnectins = (connectionsData: string) => {
  if (!connectionsData) return;
  const splittedByNewLine = connectionsData.split('\n');

  return formatConnectionsFromApi(splittedByNewLine);
};

const formatConnectionsFromApi = (array: string[]) =>
  array.reduce((airportsConnections, row) => {
    const semicolonIndex = row.indexOf(':');
    const key = row.slice(0, semicolonIndex);
    const values = row.slice(semicolonIndex + 2).split(' ');
    const clearValues = values.map((value) => value.replace(',', ''));

    return {
      ...airportsConnections,
      [key]: clearValues,
    };
  }, {});
