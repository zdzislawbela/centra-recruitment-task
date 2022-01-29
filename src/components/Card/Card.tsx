import React from 'react';

import styles from './Card.module.scss';

interface Props {
  src: string;
  name?: string;
  loading?: boolean;
}

export const Card = ({ src, name, loading = false }: Props) => (
  <div className={styles.card}>
    <img className={loading ? styles.imageLoading : styles.image} src={src} />
    <p className={styles.underTitle}>{name}</p>
  </div>
);
