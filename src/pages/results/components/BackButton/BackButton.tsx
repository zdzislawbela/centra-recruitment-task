import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HOME_ROUTE } from '../../../../consts/routes';

import LeftArrow from '../../../../assets/svg/left-arrow.svg';

import styles from './BackButton.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(HOME_ROUTE);
  };

  return (
    <button className={styles.backButton} onClick={handleOnClick}>
      <img src={LeftArrow} alt="Left arrow" />
      <p>Back</p>
    </button>
  );
};
