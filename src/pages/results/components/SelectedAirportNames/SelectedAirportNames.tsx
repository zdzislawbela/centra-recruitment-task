import React from 'react';

import styles from './SelectedAirportNames.module.scss';

interface Props {
  names: string[];
}

export const SelectedAirportNames = ({ names }: Props) => (
  <div className={styles.airportNames}>
    {names.map((name, index) => (
      <div className={styles.primaryText} key={index}>
        <p>{name}</p>
      </div>
    ))}
  </div>
);
