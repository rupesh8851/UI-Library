// @flow

import { AutoComplete } from './components/AutoComplete.tsx';
import { AutoGoogleSearch } from './components/AutoGoogleSearch.tsx';
import { options } from './ts/constant.ts';

export const DynamicSelect = () => {
  return (
    <div className="h-full flex p-4 gap-x-6 bg-[url('https://bgr.com/wp-content/uploads/2022/03/AdobeStock_194080021.jpeg?quality=82&strip=all')] bg-cover ">
      <AutoComplete options={options} placeholder="Please select a language" />

      <AutoGoogleSearch />
    </div>
  );
};
