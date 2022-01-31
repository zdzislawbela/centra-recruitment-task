import React from 'react';

import FlyCurvedLine from '../../../../assets/svg/fly-curved-line.svg';
import styles from './Background.module.scss';

interface Props {
  images: string[];
  children: React.ReactNode;
}

export const Background = ({ images, children }: Props) => (
  <>
    <div className={styles.background}>
      {images.map((image, index) => (
        <div
          key={index}
          className={styles.image}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
          }}
        />
      ))}
    </div>

    <div className={styles.children}>
      <div className={styles.flyLineContainer}>
        <img
          className={styles.flyLine}
          src={FlyCurvedLine}
          alt="Fly curved line"
        />
      </div>
      {children}
    </div>
  </>
);
