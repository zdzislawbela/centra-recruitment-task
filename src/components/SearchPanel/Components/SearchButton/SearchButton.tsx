import React from 'react';

//@ts-expect-error
import MagnifyingGlass from '../../../../assets/svg/magnifying-glass.svg';
//@ts-expect-error
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
