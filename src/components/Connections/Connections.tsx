import React from 'react';

import { Airport } from '../../models/Airport';
import { Banner } from '../Banner';

import styles from './Connections.module.scss';

interface Props {
  possibleConnections: string[][];
  selectedAirports: Airport[];
}

export const Connections = ({
  possibleConnections,
  selectedAirports,
}: Props) => {
  return (
    <div className={styles.connections}>
      {possibleConnections.map((connection, index) => (
        <Banner
          key={index}
          airports={selectedAirports}
          connection={connection}
        />
      ))}
    </div>
  );
};
