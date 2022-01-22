import React from 'react';

//@ts-expect-error
import ChevronArrow from '../../../../assets/svg/chevron-arrow.svg';

interface Props {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchInput = ({ label, value, onChange }: Props) => {
  return (
    <div>
      <div>
        <p>{label}</p>
        <input type="text" placeholder="_" value={value} onChange={onChange} />
        <img src={ChevronArrow} alt="Down arrow" />
      </div>
    </div>
  );
};
