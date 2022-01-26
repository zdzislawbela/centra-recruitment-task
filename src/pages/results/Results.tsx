import React from 'react';

import { useQueryParam } from '../../hooks/useQueryParam';
import { useAppContext } from '../../context';
import { Background } from './components/Background/';
import { BackButton } from './components/BackButton';
import { Loading } from '../../components/Loading';
import { getAirportsByCode } from './helpers/getAirportsByCode';
import { Error } from '../../components/Error';
import { SelectedAirportNames } from './components/SelectedAirportNames';

export const Results = () => {
  const from = useQueryParam('from');
  const to = useQueryParam('to');
  const { airports, isLoading, error } = useAppContext();

  if (error || !airports) {
    return <Error />;
  }
  if (isLoading || !airports.length) {
    return <Loading />;
  }

  const selectedAirports = getAirportsByCode(airports, [from, to]);
  const images = selectedAirports.map(({ images }) => images.full);
  const names = selectedAirports.map(({ name }) => name);

  return (
    <Background images={images}>
      <BackButton />
      <SelectedAirportNames names={names} />
    </Background>
  );
};
