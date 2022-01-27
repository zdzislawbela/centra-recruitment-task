import React from 'react';

import { useAppContext } from '../../context';
import { Card } from '../Card';
import { Loading } from '../Loading/';
import { Error } from '../Error';

import styles from './AirportCards.module.scss';

export const AirportCards = () => {
  const { airports, isLoading, error } = useAppContext();

  if (isLoading) {
    return <Loading />;
  }
  if (error || !airports) {
    return <Error />;
  }

  return (
    <div className={styles.container}>
      {airports.map((airport) => {
        return (
          <Card
            key={airport.id}
            image={airport.images.small}
            name={airport.name}
          />
        );
      })}
    </div>
  );
};
