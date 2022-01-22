import React from 'react';
//@ts-expect-error
import MagnifyingGlass from '../../../../assets/svg/magnifying-glass.svg';
//@ts-expect-error
import style from './SearchButton.module.scss';

export const SearchButton = () => {
  return (
    <button className={style.container}>
      <img
        className={style.icon}
        src={MagnifyingGlass}
        alt="Magnifying Glass"
      />
    </button>
  );
};
