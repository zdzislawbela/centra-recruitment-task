import React from 'react';

import styles from './Background.module.scss';

interface Props {
  images: string[];
  children: React.ReactNode;
}

export const Background = ({ images, children }: Props) => {
  return (
    <>
      <div className={styles.background}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.from}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
            }}
          />
        ))}
      </div>
      <div className={styles.children}>{children}</div>
    </>
  );
};
