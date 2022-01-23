import React from 'react';
import { useAirports } from '../../hooks/useAirports';
import { Card } from '../Card';
import { Loading } from '../Loading/';
import { Error } from '../Error';

//@ts-expect-error
import styles from './AirportCards.module.scss';

export const AirportCards = () => {
  const { destructuredAirports, isLoading, error } = useAirports();
  console.log({ destructuredAirports });

  if (isLoading) {
    return <Loading />;
  }
  if (error || !destructuredAirports) {
    console.log('dziala');
    return <Error />;
  }

  return (
    <div className={styles.container}>
      {destructuredAirports.map((airport) => {
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
