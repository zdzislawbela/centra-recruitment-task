import React from 'react';

import Airplane from '../../../../assets/svg/airplane.svg';
import DropDownLine from '../../../../assets/svg/drop-down-line.svg';
import Pin from '../../../../assets/svg/pin.svg';

import styles from './SearchDropdown.module.scss';

interface Props {
  title: string;
  airportsName: string[];
  onClick: (value: string) => void;
}

export const SearchDropdown = ({ airportsName, title, onClick }: Props) => {
  const handleOnClick = (value: string) => {
    onClick(value);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.item}>
        <img src={Airplane} alt="Airplane" />
        <p>{title}</p>
      </button>
      <img src={DropDownLine} alt="Line" />

      {airportsName.map((name, index) => (
        <button
          key={index}
          className={styles.item}
          onClick={() => handleOnClick(name)}
        >
          <img src={Pin} alt="Pin" />
          <p>{name}</p>
        </button>
      ))}
    </div>
  );
};
