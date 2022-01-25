import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppContext } from '../../context';
import { Background } from './components/Background/';
import { BackButton } from './components/BackButton';
import { Loading } from '../../components/Loading';
import { getImagesByCode } from './helpers/getImagesByCode';
import { Error } from '../../components/Error';

export const Results = () => {
  const { from, to } = useParams();
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
