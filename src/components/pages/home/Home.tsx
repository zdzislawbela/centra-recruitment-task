import * as React from 'react';
import { Airport } from '../../Airport/Airport';

import * as styles from './Home.scss';

export const Home = () => (
    <div className={styles.airportsList}>
        <Airport imageSrc="" name="Name" />
        <Airport imageSrc="" name="Name2" />
    </div>
)