import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 sm:p-6 lg:p-8">
      <div className="flex-1 max-w-5xl w-full mx-auto flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-100/50">
        {children}
      </div>
    </div>
  );
};