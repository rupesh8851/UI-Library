// @flow

import { ChangeEvent, useMemo, useState } from 'react';

import { AutoCompleteProps, Option } from '../ts/types.ts';

export const AutoComplete = (props: AutoCompleteProps) => {
  const { options, placeholder, onSelect } = props;
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<Option>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredOptions = useMemo(() => {
    return options?.filter((option) => {
      return option.label.toLowerCase().includes(inputValue.toLowerCase());
    });
  }, [options, inputValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsDropdownOpen(true);
  };

  const handleSelectOption = (option: Option) => {
    setInputValue(option.label);
    setSelectedOption(option);
    setIsDropdownOpen(false);
    onSelect(option);
  };

  return (
    <div className="block w-56 relative">
      <input
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        className="h-10 px-2 w-full border-2 border-slate-500 rounded-md  "
      />
      {isDropdownOpen && (
        <ul className="w-full">
          {filteredOptions.length ? (
            filteredOptions?.map((option) => (
              <li
                className="text-slate-900 px-3 py-2 cursor-pointer"
                key={option.value}
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="text-slate-500 px-3 py-2"> No options found </li>
          )}
        </ul>
      )}
    </div>
  );
};
