import React from 'react';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <div className="container mx-auto flex flex-col gap-2">{props.children}</div>
    </div>
  );
}

export default Layout;
