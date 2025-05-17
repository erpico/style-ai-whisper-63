
import React from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-fashion-lightGray">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {children}
      </main>
      <footer className="container mx-auto px-4 py-8 mt-auto text-center text-sm text-fashion-gray">
        <p>© 2025 AI Fashion Stylist. All rights reserved.</p>
      </footer>
    </div>
  );
};
