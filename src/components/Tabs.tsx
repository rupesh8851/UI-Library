// @flow

import { FC, ReactNode, useState } from 'react';

import { Tab } from '../ts/types.ts';

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeComponent, setActiveComponent] = useState<ReactNode>();

  return (
    <div className="flex flex-col">
      <div className="flex items-center bg-white py-2 px-4 shadow-2xl space-x-2">
        {tabs?.map((tab) => {
          return (
            <div
              className="text-blue-400 cursor-pointer hover:underline active:underline"
              onClick={() => setActiveComponent(tab.component)}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <div>{activeComponent}</div>
    </div>
  );
};
