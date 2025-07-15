import React from 'react';
import Nav from '@/components/Organisms/Nav'
import Header from '@/components/Organisms/Header';


interface Props {
  children: React.ReactNode
  childrenTitle: string
  childrenSubitle: string
}

const Index = ({ children, childrenTitle, childrenSubitle }: Props) => {
  return <div className="flex min-h-screen bg-background px-4">
    <Nav />
    <div className='flex flex-1 flex-col'>
      <Header title='Panel Administrativo'/>
      <main className="flex flex-1 overflow-auto pl-64 pt-24 h-full justify-center">
        <div className="flex flex-col items-center h-full w-full justify-center px-4">
          <div className="container w-full px-4 py-6 h-auto">
            <h1 className="text-xl md:text-2xl font-bold">{childrenTitle}</h1>
            <h1 className="text-md md:text-xl font-medium">{childrenSubitle}</h1>
          </div>
          <div className="bg-gray-200 h-1 w-full rounded-lg"></div>
          <div className="flex flex-1 overflow-auto pt-24 pb-20 h-full w-full justify-center">
              {children}
          </div>
        </div>
     </main>
    </div>
    
  </div>;
};

export default Index;