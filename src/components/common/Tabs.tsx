// @flow

import { FC, useState } from 'react';

import { Tab } from '../../ts/types.ts';

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeComponent, setActiveComponent] = useState<Tab>(tabs[0]);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex items-center bg-white max-h-[48px] mt-2 py-2 px-4 shadow-2xl space-x-2 ">
        {tabs?.map((tab) => {
          return (
            <button
              key={tab.label}
              className={`h-full py-2 px-2 flex items-center space-x-0.5  text-sm rounded-md cursor-pointer hover:bg-purple-500 hover:text-white ${tab.label === activeComponent.label ? 'bg-purple-500 text-white' : 'bg-white text-purple-500'}`}
              onClick={() => setActiveComponent(tab)}
            >
              {tab.icon && <tab.icon className="size-4 shrink-0" />}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="h-[calc(100vh-114px)]">{activeComponent.component}</div>
    </div>
  );
};
