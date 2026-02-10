import React from 'react';
import { HeaderZH } from './HeaderZH';
import { FooterZH } from './FooterZH';

interface LayoutZHProps {
  children: React.ReactNode;
}

export const LayoutZH = ({ children }: LayoutZHProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderZH />
      <main className="flex-grow">
        {children}
      </main>
      <FooterZH />
    </div>
  );
};
