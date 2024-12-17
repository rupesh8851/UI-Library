// @flow

import { useCallback, useState } from 'react';

import { AutoComplete } from './components/AutoComplete.tsx';
import { AutoCompleteHeader } from './components/AutoCompleteHeader.tsx';
import { options } from './ts/constant.ts';
import { Option } from './ts/types.ts';

export const DynamicSelect = () => {
  const [selectedOption, setSelectedOption] = useState<Option>();

  const onSelect = useCallback((option: Option) => {
    setSelectedOption(() => option);
  }, []);

  return (
    <div className="flex flex-col gap-y-8">
      <div className="p-4 shadow-xl rounded-md space-y-4">
        {selectedOption && (
          <AutoCompleteHeader
            title="Select Language:"
            value={selectedOption.value}
          />
        )}
        <AutoComplete
          options={options}
          onSelect={onSelect}
          placeholder="Please select a language"
        />
      </div>

      <div className="p-4 shadow-xl rounded-md space-y-4">
        <AutoCompleteHeader
          title="Searched Value:"
          value={selectedOption?.value}
        />
      </div>
    </div>
  );
};
