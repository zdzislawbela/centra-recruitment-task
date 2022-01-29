import React from 'react';

import { useAppContext } from '../../context';
import { Card } from '../Card';
import { Error } from '../Error';
import { CardSkeletons } from './Components/CardSkeletons';

import styles from './AirportCards.module.scss';

export const AirportCards = () => {
  const { airports, connections, errors } = useAppContext();

  if (errors.length) {
    return <Error errors={errors} />;
  }

  const content =
    !airports || !connections ? (
      <CardSkeletons />
    ) : (
      airports.map((airport) => {
        return (
          <Card
            key={airport.id}
            src={airport.images.small}
            name={airport.name}
          />
        );
      })
    );

  return <div className={styles.container}>{content}</div>;
};
