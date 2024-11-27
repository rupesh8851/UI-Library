// @flow

import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { IconsProps } from '../ts/types.ts';

export type SideBarItemProps = {
  to: string;
  label: string;
  icon?: FC<IconsProps>;
};

const sideBarItems: SideBarItemProps[] = [
  {
    label: 'Feeds',
    to: '/feeds',
  },
  {
    label: 'Accordion',
    to: '/accordion',
  },
  {
    label: 'Alerting System',
    to: '/alerts',
  },
  {
    label: 'Carousel',
    to: '/carousel',
  },
  {
    label: 'Comment Section',
    to: '/comments',
  },
  {
    label: 'Experiment',
    to: '/experiment',
  },
  {
    label: 'Todo',
    to: '/todo',
  },
  {
    label: 'Autocomplete',
    to: '/autocomplete',
  },
];

export const SideBar = () => {
  return (
    <aside className="p-2 w-1/6 h-full bg-gray-300">
      <nav className="divide-y-2">
        {sideBarItems?.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center space-x-1 py-2 font-semibold hover:text-purple-600 ${isActive ? 'text-purple-600' : 'text-purple-500'}`
            }
          >
            {Icon && <Icon size={12} />}
            <span>{label} </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
