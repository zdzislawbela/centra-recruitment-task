import React, { MouseEventHandler } from 'react';

import MagnifyingGlass from '../../../../assets/svg/magnifying-glass.svg';

import styles from './SearchButton.module.scss';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export const SearchButton = ({ onClick }: Props) => {
  return (
    <button type="button" className={styles.searchButton} onClick={onClick}>
      <img
        className={styles.icon}
        src={MagnifyingGlass}
        alt="Magnifying Glass"
      />
    </button>
  );
};
