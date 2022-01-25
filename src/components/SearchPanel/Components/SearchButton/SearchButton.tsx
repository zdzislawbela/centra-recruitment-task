import React from 'react';

import MagnifyingGlass from '../../../../assets/svg/magnifying-glass.svg';

import styles from './SearchButton.module.scss';

interface Props {
  onClick: () => void;
}
export const SearchButton = ({ onClick }: Props) => {
  return (
    <button className={styles.container} onClick={onClick}>
      <img
        className={styles.icon}
        src={MagnifyingGlass}
        alt="Magnifying Glass"
      />
    </button>
  );
};
