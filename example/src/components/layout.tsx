import React, { ReactNode } from 'react';
import Header from './header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex flex-1 px-4 bg-[#00000] text-gray lg:-px-0 ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
