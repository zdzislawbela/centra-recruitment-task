import React from 'react';

//@ts-expect-error
import ChevronArrow from '../../../../assets/svg/chevron-arrow.svg';
//@ts-expect-error
import styles from './SearchInput.module.scss';

interface Props {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ label, value, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <label htmlFor={`input-${label}`}>{label}</label>
        <input
          type="text"
          name={`input-${label}`}
          placeholder="_"
          value={value}
          onChange={onChange}
        />
      </div>
      <img src={ChevronArrow} alt="Down arrow" />
    </div>
  );
};
