import React from 'react';
import Link from 'next/link';
interface Indexprops {
  title: string;
  link: string;
}
const Index = ({ title = 'Title', link = '/' }: Indexprops) => {
  return (
    <Link href={link}>
      <div className='pl-4 h-16 flex justify-start text-primary items-center hover:text-white cursor-pointer hover:border-b-2 hover:bg-secondary-hover '>
        <h1 className='text-md font-bold'>{title}</h1>
      </div>
    </Link>
  );
};

export default Index;