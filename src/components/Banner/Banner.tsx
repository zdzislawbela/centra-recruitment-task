import React from 'react';
import { Airport } from '../../models/Airport';
import OneChangeDots from '../../assets/svg/one-change-dots.svg';
import styles from './Banner.module.scss';

interface Props {
  airports: Airport[];
}

export const Banner = ({ airports }: Props) => {
  console.log({ airports });

  const codeFrom = airports[0].code;
  const codeTo = airports[1].code;
  return (
    <div className={styles.banner}>
      <div className={styles.codeContainer}>
        <p className={styles.airportCode}>{codeFrom}</p>
        <img src={OneChangeDots} alt="One change dots" />
        <p className={styles.airportCode}>{codeTo}</p>
      </div>
      <p>1 chagne</p>
      <button className={styles.goButton}>
        <p>Go!</p>
      </button>
    </div>
  );
};
