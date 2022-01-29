import React, { useState } from 'react';

import { AirportsDropDown } from '../AirportsDropDown';
import ChevronArrow from '../../../../assets/svg/chevron-arrow.svg';
import VerticalLine from '../../../../assets/svg/vertical-line.svg';

import styles from './SearchInput.module.scss';

interface Props {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  airportsList: string[];
  onDropDownClick: (city: string) => void;
  required?: boolean;
}

export const SearchInput = ({
  name,
  value,
  onChange,
  required = false,
  airportsList,
  onDropDownClick,
}: Props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleDropDownClick = (city: string) => {
    setIsDropDownOpen(false);
    onDropDownClick(city);
  };
  return (
    <div>
      <div
        onClick={() => setIsDropDownOpen(false)}
        className={isDropDownOpen ? styles.container : styles.containerHidden}
      ></div>
      <div
        className={styles.inputContainer}
        onClick={() => setIsDropDownOpen(true)}
      >
        <div className={styles.searchContainer}>
          <label htmlFor={`input-${name}`}>{name}</label>
          <input
            required={required}
            type="text"
            name={`input-${name}`}
            placeholder={isDropDownOpen || value ? '' : '_'}
            value={value}
            onChange={onChange}
          />
        </div>
        <img className={styles.downArrow} src={ChevronArrow} alt="Down arrow" />

        <img
          className={styles.splitLine}
          src={VerticalLine}
          alt="Vertical line"
        />
      </div>
      {isDropDownOpen && airportsList && (
        <AirportsDropDown
          airportsName={airportsList}
          title="Popular airports nearby"
          onClick={(city: string) => handleDropDownClick(city)}
        />
      )}
    </div>
  );
};
