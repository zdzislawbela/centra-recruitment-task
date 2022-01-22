import React from 'react';

import { SearchPanel } from '../../components/SearchPanel/SearchPanel';

import styles from './Home.module.scss';

export const Home = () => (
  <div className={styles.page}>
    <SearchPanel />
  </div>
);
