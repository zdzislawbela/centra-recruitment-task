import React from 'react';

import { useQueryParam } from '../../hooks/useQueryParam';
import { useAppContext } from '../../context';
import { Background } from './components/Background/';
import { BackButton } from './components/BackButton';
import { Loading } from '../../components/Loading';
import { getAirportsByCode } from '../../helpers/getAirportsByCode';
import { Error } from '../../components/Error';
import { SelectedAirportNames } from './components/SelectedAirportNames';

export const Results = () => {
  const from = useQueryParam('from');
  const to = useQueryParam('to');
  const { airports, errors } = useAppContext();

  if (!from || !to) {
    return <p>Wrong path. Missing airport code.</p>;
  }
  if (errors.length) {
    return <Error errors={errors} />;
  }
  if (!airports) {
    return <Loading />;
  }

  const selectedAirports = getAirportsByCode(airports, [from, to]);
  if (!selectedAirports) return;
  const images = selectedAirports.map((airport) => airport?.images.full);
  const names = selectedAirports.map((airport) => airport?.name);
  if (!images || !names) return;

  return (
    <Background images={images}>
      <BackButton />
      <SelectedAirportNames names={names} />
    </Background>
  );
};
