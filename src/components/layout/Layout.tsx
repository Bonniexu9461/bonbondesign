import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-text-dark overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-24 bg-[#ECE6E8]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
