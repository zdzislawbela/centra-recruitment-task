import React from 'react';

import styles from './Card.module.scss';

interface Props {
  image: string;
  name: string;
}

export const Card = ({ image, name }: Props) => (
  <div className={styles.card}>
    <img className={styles.image} src={image} />
    <p className={styles.underTitle}>{name}</p>
  </div>
);
