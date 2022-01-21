import React from 'react';
import { Airport } from '../../components/Airport/Airport';

import styles from './Home.module.scss';

export const Home = () => (
  <div className={styles.page}>
    <Airport imageSrc="" name="Name" />
    <Airport imageSrc="" name="Name2" />
  </div>
);
