import React, { useState } from 'react';
import { SearchButton } from './Components/SearchButton';
import { SearchInput } from './Components/SearchInput/';

//@ts-expect-error
import styles from './SearchPanel.module.scss';

export const SearchPanel = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleChangeFrom = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTo('');
    setFrom(event.target.value);
  };

  const handleChangeTo = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFrom('');
    setTo(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <SearchInput label="From" value={from} onChange={handleChangeFrom} />
        <SearchInput label="To" value={to} onChange={handleChangeTo} />
        <SearchButton />
      </div>

      {(from || to) && (
        <ul>
          <li>{from ? 'Warsow' : 'Lisbona'}</li>
          <li>{to ? 'Cracow' : 'Toronto'}</li>
        </ul>
      )}
    </>
  );
};
