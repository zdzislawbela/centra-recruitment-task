import React from 'react';

import { useQueryParam } from '../../hooks/useQueryParam';
import { useAppContext } from '../../context';
import { Background } from './components/Background/';
import { BackButton } from './components/BackButton';
import { Loading } from '../../components/Loading';
import { getAirportsByCode } from '../../helpers/';
import { Error } from '../../components/Error';
import { SelectedAirportNames } from './components/SelectedAirportNames';
import { getConnections } from '../../helpers';
import { Connections } from '../../components/Connections';

export const Results = () => {
  const from = useQueryParam('from');
  const to = useQueryParam('to');
  const { airports, connections, errors } = useAppContext();

  if (!from || !to) {
    return <p>Wrong path. Missing airport code.</p>;
  }
  if (errors.length) {
    return <Error errors={errors} />;
  }
  if (!airports || !connections) {
    return <Loading />;
  }

  const selectedAirports = getAirportsByCode(airports, [from, to]);
  if (!selectedAirports) return;
  const fromAirport = selectedAirports.find((airport) => airport.code === from);
  const toAirport = selectedAirports.find((airport) => airport.code === to);

  const {
    id: fromId,
    name: fromName,
    images: { full: fromImage },
  } = fromAirport;

  const {
    id: toId,
    name: toName,
    images: { full: toImage },
  } = toAirport;

  const possibleConnections = getConnections({ connections, fromId, toId });

  return (
    <Background images={[fromImage, toImage]}>
      <BackButton />
      <SelectedAirportNames names={[fromName, toName]} />
      <Connections
        possibleConnections={possibleConnections}
        selectedAirports={selectedAirports}
      />
    </Background>
  );
};
