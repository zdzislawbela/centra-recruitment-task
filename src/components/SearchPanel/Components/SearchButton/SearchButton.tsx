import React from 'react';
import { useNavigate } from 'react-router-dom';
//@ts-expect-error
import MagnifyingGlass from '../../../../assets/svg/magnifying-glass.svg';
import { RESULTS_ROUTE } from '../../../../consts/routes';
//@ts-expect-error
import styles from './SearchButton.module.scss';

export const SearchButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(RESULTS_ROUTE);
  };

  return (
    <button className={styles.container} onClick={handleOnClick}>
      <img
        className={styles.icon}
        src={MagnifyingGlass}
        alt="Magnifying Glass"
      />
    </button>
  );
};
