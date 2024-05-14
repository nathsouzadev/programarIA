'use client';
import { Github } from 'lucide-react';
import MobileSidebar from './mobile-sidebar';
import Link from 'next/link';
import { content } from '@/src/app/content';

const Navbar = () => {
  return (
    <div className='flex items-center p-4'>
      <MobileSidebar />

      <Link href={content.repo.url} target='_blank' className='flex w-full justify-end'>
        {content.repo.label}
        <div className='ml-2'>
          <Github />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
