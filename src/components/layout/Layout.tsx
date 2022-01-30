import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="bg-hero-tic-tac-toe dark:bg-hero-tic-tac-toe-blue dark:from-gray-900 dark:to-gray-800">
        {children}
      </div>
      <Footer />
    </>
  );
}
