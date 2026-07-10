import React from 'react';
import { SiteHeader } from './SiteHeader';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-surface-darkest font-sans">
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
};
