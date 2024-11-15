// @flow

import { Outlet } from 'react-router-dom';

import { Header } from './components/Header.tsx';
import { SideBar } from './components/SideBar.tsx';

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <main className="flex h-full w-full">
        <SideBar />
        <section className="h-full w-5/6">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
