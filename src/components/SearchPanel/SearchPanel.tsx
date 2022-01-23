import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';

import { SearchButton } from './Components/SearchButton';
import { SearchInput } from './Components/SearchInput/';
import { useSearchPanel } from './useSearchPanel';

//@ts-expect-error
import styles from './SearchPanel.module.scss';

export const SearchPanel = () => {
  const { from, to, setFrom, setTo, debouncedValue, handleChange } =
    useSearchPanel();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.panel}>
          <SearchInput
            label="From"
            value={from}
            onChange={(event) =>
              handleChange({
                value: event.target.value,
                updateState: setFrom,
              })
            }
          />
          <SearchInput
            label="To"
            value={to}
            onChange={(event) =>
              handleChange({
                value: event.target.value,
                updateState: setTo,
              })
            }
          />
          <SearchButton />
        </div>
      </div>

      {(from || to) && (
        <ul>
          <li>{debouncedValue}</li>
        </ul>
      )}
    </>
  );
};
