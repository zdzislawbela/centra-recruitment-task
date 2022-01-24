import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchButton } from './Components/SearchButton';
import { SearchInput } from './Components/SearchInput/';
import { SearchDropdown } from './Components/SearchDropdown';
import { useSearchPanel } from './useSearchPanel';
import { useAppContext } from '../../context';
import { RESULTS_ROUTE } from '../../consts/routes';
//@ts-expect-error
import VerticalLine from '../../assets/svg/vertical-line.svg';

//@ts-expect-error
import styles from './SearchPanel.module.scss';

export const SearchPanel = () => {
  const navigate = useNavigate();
  const { airportNames, airports } = useAppContext();

  const {
    from,
    to,
    setFrom,
    setTo,
    searchPhrase,
    handleChange,
    isDropDownOpen,
    setSearchedCity,
    handleOnFocus,
  } = useSearchPanel();

  const dropDownList = airportNames.filter((name: string) => {
    return name.toLocaleLowerCase().includes(searchPhrase.toLocaleLowerCase());
  });

  const handleSearchConnections = () => {
    const fromAirport = airports.find((airport) => airport.name === from);
    const toAirport = airports.find((airport) => airport.name === to);

    navigate(`${RESULTS_ROUTE}/?from=${fromAirport.code}&to=${toAirport.code}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <SearchInput
          label="From"
          value={from}
          onChange={(event) =>
            handleChange({
              current: 'from',
              value: event.target.value,
              updateState: setFrom,
            })
          }
          onFocus={handleOnFocus}
        />

        <img src={VerticalLine} alt="Vertical line" />

        <SearchInput
          label="To"
          value={to}
          onChange={(event) =>
            handleChange({
              current: 'to',
              value: event.target.value,
              updateState: setTo,
            })
          }
          onFocus={(event) => handleOnFocus(event)}
        />

        <img src={VerticalLine} alt="Vertical line" />

        <SearchButton onClick={handleSearchConnections} />
      </div>

      {isDropDownOpen && (
        <SearchDropdown
          airportsName={dropDownList}
          title="Popular airports nearby"
          onClick={setSearchedCity}
        />
      )}
    </div>
  );
};
