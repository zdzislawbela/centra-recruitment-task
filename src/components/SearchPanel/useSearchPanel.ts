import { useState, useCallback } from 'react';

interface HandleChange {
  current: string;
  value: string;
  updateState: React.Dispatch<React.SetStateAction<string>>;
}

export const useSearchPanel = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleChange = ({ current, value, updateState }: HandleChange) => {
    setCurrentInput(current);
    updateState(value);
    setSearchPhrase(value);
  };

  const setSearchedCity = (city: string) => {
    if (!currentInput) return;
    if (currentInput === 'from') {
      setFrom(city);
    }
    if (currentInput === 'to') {
      setTo(city);
    }
    setIsDropDownOpen(false);
  };

  const handleOnFocus = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const inputName = event.target.name.includes('From') ? 'from' : 'to';
    setCurrentInput(inputName);
    setIsDropDownOpen(true);
  };

  return {
    from,
    setFrom,
    setTo,
    to,
    searchPhrase,
    handleChange,
    currentInput,
    isDropDownOpen,
    setSearchedCity,
    handleOnFocus,
  };
};
