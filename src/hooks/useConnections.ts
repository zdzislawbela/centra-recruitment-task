import { CONNECTIONS_API } from '../consts/api';
import { formatConnectionsFromApi } from '../helpers/';
import { useSendGetRequest } from './useSendGetRequest';

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
