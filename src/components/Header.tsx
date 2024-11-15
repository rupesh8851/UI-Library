import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../assets/Logo.gif';
import { IconsProps } from '../ts/types.ts';

export type HeaderItemProps = {
  to: string;
  label: string;
  icon?: FC<IconsProps>;
};

const headerItems: HeaderItemProps[] = [
  {
    label: 'About',
    to: '/about',
  },
];

export const Header = () => {
  return (
    <header className="flex py-2 px-4 items-center h-16 w-full bg-white shadow-xl">
      <nav className="mr-6">
        <img src={logo} className="size-12 shrink-0" alt="Logo" />
      </nav>
      <nav className="flex items-center space-x-2">
        {headerItems?.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              ` font-semibold hover:text-purple-600 hover:underline ${isActive ? 'text-purple-600' : 'text-purple-500'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
