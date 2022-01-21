import  * as React from 'react';

import * as styles from './Airport.scss';

interface Props {
    imageSrc: string;
    name: string;
}

export const Airport = ({ imageSrc, name }: Props) => (
    <div className={styles.airport}>
        <img className={styles.image} src={imageSrc} />
        <p>{name}</p>
    </div>
)