import React from 'react';

import { useQueryParam } from '../../hooks/useQueryParam';
import { useAppContext } from '../../context';
import { Background } from './components/Background/';
import { BackButton } from './components/BackButton';
import { Loading } from '../../components/Loading';
import { getImagesByCode } from './helpers/getImagesByCode';
import { Error } from '../../components/Error';

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

  const images = getImagesByCode(airports, [from, to], 'full');

  return (
    <Background images={images}>
      <BackButton />
    </Background>
  );
};
