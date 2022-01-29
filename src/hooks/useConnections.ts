import { CONNECTIONS_API } from '../consts/api';
import { useSendGetRequest } from './useSendGetRequest';

const TIMEOUT = 3000;

export const useConnections = () => {
  const { results, error } = useSendGetRequest<string>({
    api: CONNECTIONS_API,
  });

  const connections = convertConnectins(results);

  return { connections, error };
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
