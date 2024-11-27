// @flow

import { useCallback, useState } from 'react';

import { AutoComplete } from './components/AutoComplete.tsx';
import { options } from './ts/constant.ts';
import { Option } from './ts/types.ts';

export const DynamicSelect = () => {
  const [selectedOption, setSelectedOption] = useState<Option>();

  const onSelect = useCallback((option: Option) => {
    setSelectedOption(() => option);
  }, []);

  return (
    <div className="max-w-md mx-auto mt-20 p-4 shadow-xl rounded-md space-y-4">
      {selectedOption && (
        <div className="flex items-center space-x-2">
          <span> Selected Language: </span>
          <span className="text-slate-900 font-semibold">
            {selectedOption?.label}
          </span>
        </div>
      )}
      <div className="flex flex-col justify-center items-center">
        <AutoComplete options={options} onSelect={onSelect} />
      </div>
    </div>
  );
};
