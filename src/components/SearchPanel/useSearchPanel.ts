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

  const handleChange = ({ current, value, updateState }: HandleChange) => {
    setCurrentInput(current);
    updateState(value);
    setSearchPhrase(value);
  };

  return { from, setFrom, setTo, to, searchPhrase, handleChange, currentInput };
};
