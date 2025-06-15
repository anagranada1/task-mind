import React from 'react';
import Nav from '@/components/Organisms/Nav'
import Header from '@/components/Organisms/Header';

const Index = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex min-h-screen bg-background px-4">
    <Nav />
    <div className='flex flex-1 flex-col'>
      <Header title='Panel Administrativo'/>

      <main className="flex-1 overflow-auto pl-64 pt-24">
        {children}
      </main>
    </div>
    
  </div>;
};

export default Index;