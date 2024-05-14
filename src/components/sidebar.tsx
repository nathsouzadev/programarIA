'use client';

import { routes } from '@/src/app/routes';
import { cn } from '@/src/lib/utils';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Contact } from './contact';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });


const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#5e4a95] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/' className='flex items-center pl-3 mb-14'>
          <div className='relative w-8 h-8 mr-4'>
            <Image fill alt='logo' src='/logo.png' />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            ProgramarIA
          </h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => {
            return (
              <Link
                href={route.href}
                key={route.href}
                className={cn('text-sm group flex p-3 w-full justify-start ifont-medium cursor-pointer hover:text-white rounded-lg transition border rounded border-black/40', pathName === route.href ? 'bg-white/10' : 'text-zinc-400')}
              >
                <div className='flex items-center flex-1'>
                  <route.icon className={cn('w-5 h-5 mr-3', route.color)} />
                  <span className='text-sm font-semibold'>{route.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Sidebar;
