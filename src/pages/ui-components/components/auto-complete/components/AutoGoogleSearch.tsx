// @flow

import { useCallback, useEffect, useMemo, useState } from 'react';

import { FcSearch } from 'react-icons/fc';
import { IoIosSearch } from 'react-icons/io';

export const AutoGoogleSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const fetchSuggestions = useCallback(async (value: string) => {
    const response = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${value}`,
    );
    const data = await response.json();
    setSuggestions(data[1]);
    setIsFocused(true);
  }, []);

  useEffect(() => {
    fetchSuggestions(searchValue);
  }, [searchValue]);

  const showSuggestions = useMemo(() => {
    return !!suggestions.length && isFocused;
  }, [suggestions, isFocused]);

  const onSelect = (suggestion: string) => {
    setSearchValue(suggestion);
    setIsFocused(false);
  };

  return (
    <div
      className="flex flex-col w-2/5"
      onBlur={() => {
        setTimeout(() => {
          setIsFocused(false);
        }, 200);
      }}
    >
      <div
        className={`flex items-center w-full p-2 bg-white shadow-md ${showSuggestions ? 'rounded-t-2xl' : 'rounded-2xl'}`}
      >
        <div className="size-6">
          <IoIosSearch className="h-full w-full shrink-0 " />
        </div>
        <input
          className="h-8 px-2 w-full focus:outline-none"
          value={searchValue}
          placeholder="Just Google It..."
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {showSuggestions && (
        <ul className="bg-white pb-2 max-h-40 rounded-b-2xl overflow-y-auto">
          {suggestions.map((suggestion) => {
            return (
              <li
                key={suggestion}
                className="flex items-center py-1 px-2 space-x-2 cursor-pointer hover:bg-slate-200"
                onClick={() => onSelect(suggestion)}
              >
                <span className="size-4">
                  <FcSearch className="h-full w-full shrink-0" />
                </span>
                <span>{suggestion}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
