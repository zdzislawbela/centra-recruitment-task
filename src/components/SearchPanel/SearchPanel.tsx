import React from 'react';

import { SearchButton } from './Components/SearchButton';
import { SearchInput } from './Components/SearchInput/';
import { useSearchPanel } from './useSearchPanel';

import styles from './SearchPanel.module.scss';

export const SearchPanel = () => {
  const {
    inputs,
    handleChange,
    airportsList,
    handleSubmitForm,
    handleDropDownClick,
  } = useSearchPanel();

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmitForm}
      className={styles.form}
    >
      <div className={styles.panel}>
        {inputs.map(({ name, search, updateState }, index) => (
          <SearchInput
            key={index}
            required
            name={name}
            value={search}
            airportsList={airportsList}
            onChange={({ target }) =>
              handleChange({
                value: target.value,
                updateState: updateState,
              })
            }
            onDropDownClick={(city) =>
              handleDropDownClick({ value: city, updateState: updateState })
            }
          />
        ))}

        <SearchButton onClick={handleSubmitForm} />
      </div>
    </form>
  );
};
