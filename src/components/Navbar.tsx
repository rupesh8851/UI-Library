// @flow

import { NavLink } from 'react-router-dom';

import logo from '../assets/Logo.gif';

export const Navbar = () => {
  return (
    <header className="flex py-2 px-4 items-center  w-full bg-white shadow-xl">
      <nav className="mr-6">
        <img src={logo} className="size-12 shrink-0" alt="Logo" />
      </nav>
      <nav>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `hover:text-purple-600  ${isActive ? 'text-purple-600 font-bold' : 'text-purple-400'}`
          }
        >
          Home
        </NavLink>
      </nav>
    </header>
  );
};
