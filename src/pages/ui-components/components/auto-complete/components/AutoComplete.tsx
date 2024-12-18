// @flow

import { ChangeEvent, useMemo, useRef, useState } from 'react';

import { AutoCompleteProps, Option } from '../ts/types.ts';

export const AutoComplete = (props: AutoCompleteProps) => {
  const { options, placeholder } = props;
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<Option>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

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
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    setTimeout(() => {
      if (!dropdownRef.current?.contains(event.relatedTarget as Node)) {
        setIsDropdownOpen(false);
      }
    }, 200);
  };

  return (
    <div
      className="block w-56 relative"
      ref={dropdownRef}
      onBlur={handleOnBlur}
    >
      <input
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setIsDropdownOpen(true)}
        className={`h-10 px-2 w-full border-2 border-slate-500 rounded-t-md focus:outline-none ${isDropdownOpen ? '' : 'rounded-b-md'} `}
      />
      {isDropdownOpen && (
        <ul className="absolute w-full z-10 bg-white border-2 border-t-0 border-slate-500 rounded-bl-md rounded-br-md max-h-44 overflow-y-auto divide-y-2 ">
          {filteredOptions.length ? (
            filteredOptions?.map((option) => (
              <li
                className={`text-slate-900 px-3 py-2 cursor-pointer hover:bg-slate-200 ${selectedOption?.value === option.value ? 'text-blue-500' : 'text-slate-900'}`}
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
