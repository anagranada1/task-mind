import React from 'react';
import NavTitle from '@/components/Atoms/NavTitle';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Index = () => {
  return (
      <aside className="fixed left-0 top-0 h-screen w-64 bg-secondary shadow-lg z-50 flex flex-col">
        <img
            src="/logo.png"
            alt="TaskMind Logo"
            className="mx-auto h-40"
          />
        <div className='items-center justify-between gap-2 w-full'>
          <NavTitle title='Inicio' link='/' />
          <NavTitle title='Usuarios' link='/' />
          <NavTitle title='Proyectos' link='/' />
          <NavTitle title='Tareas' link='/' />
        </div>
      <div className='mt-auto pl-4 pb-10 flex flex-row gap-2 items-center'>
        <Avatar>
          <AvatarFallback className='bg-gray-300'>CN</AvatarFallback>
        </Avatar>
        <div className='text-sm'>
          <p>Ana Maria Granada Rodas</p>
          <p>ana.granada1@udea.edu.co</p>
        </div>
      </div>
    </aside>
  );
};

export default Index;