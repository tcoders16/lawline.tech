// src/components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-white  text-zinc-800  flex flex-col">
      <Navbar />
      <main className="flex-grow flex justify-center items-start">
        <div className="w-full max-w-4xl px-4 sm:px-8 py-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;