import React from 'react';
import { Airport } from '../../models/Airport';
import OneChangeDots from '../../assets/svg/one-change-dots.svg';
import styles from './Banner.module.scss';

interface Props {
  airports: Airport[];
  connection: string[];
}

export const Banner = ({ airports, connection }: Props) => {
  const codeFrom = airports[0].code;
  const codeTo = airports[1].code;
  return (
    <div className={styles.banner}>
      <div className={styles.codeContainer}>
        <p className={styles.airportCode}>{codeFrom}</p>
        <img src={OneChangeDots} alt="One change dots" />
        <p className={styles.airportCode}>{codeTo}</p>
      </div>
      <div className={styles.buttonContainer}>
        {connection.length >= 1 ? (
          <p>{connection.length} changes</p>
        ) : (
          <p>direct</p>
        )}

        <button className={styles.goButton}>
          <p>Go!</p>
        </button>
      </div>
    </div>
  );
};
