import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RESULTS_ROUTE } from '../../consts/routes';

import { useAppContext } from '../../context';

interface HandleUserAction {
  value: string;
  updateState: React.Dispatch<React.SetStateAction<string>>;
}

export const useSearchPanel = () => {
  const { airportNames, airports } = useAppContext();
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');

  const inputs = [
    {
      name: 'From',
      search: from,
      updateState: setFrom,
    },
    {
      name: 'To',
      search: to,
      updateState: setTo,
    },
  ];

  const handleChange = ({ value, updateState }: HandleUserAction) => {
    updateState(value);
    setSearchPhrase(value);
  };

  const handleDropDownClick = ({ value, updateState }: HandleUserAction) =>
    updateState(value);

  const airportsList = airportNames
    ? airportNames.filter(
        (name: string) =>
          name.toLocaleLowerCase().includes(searchPhrase.toLocaleLowerCase()) &&
          name !== to &&
          name !== from
      )
    : undefined;

  const handleSubmitForm = (event?: React.SyntheticEvent<Element, Event>) => {
    event.preventDefault();
    if (!from || !to) return;
    const fromAirport = airports.find(({ name }) => name === from);
    const toAirport = airports.find(({ name }) => name === to);
    if (!fromAirport || !toAirport) return;
    navigate(`${RESULTS_ROUTE}?from=${fromAirport.code}&to=${toAirport.code}`);
  };

  return {
    inputs,
    from,
    setFrom,
    setTo,
    to,
    searchPhrase,
    handleChange,
    handleDropDownClick,
    airportsList,
    handleSubmitForm,
  };
};
