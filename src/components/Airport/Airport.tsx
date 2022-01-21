import React from 'react';

import styles from './Airport.module.scss';

interface Props {
  imageSrc: string;
  name: string;
}

export const Airport = ({ imageSrc, name }: Props) => (
  <div className={styles.airport}>
    <img className={styles.image} src={imageSrc} />
    <p>{name}</p>
  </div>
);
