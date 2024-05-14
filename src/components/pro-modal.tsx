'use client';

import { useContactModal } from '@/src/hooks/use-pro-model';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Card } from './ui/card';
import { cn } from '@/src/lib/utils';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { content } from '@/src/app/content';

const socials = [
  {
    label: 'linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/nathsouza/',
    color: 'text-blue-600',
  },
  {
    label: 'github',
    icon: Github,
    href: 'https://github.com/nathsouzadev',
    color: 'text-white-500',
  },
  {
    label: 'instagram',
    icon: Instagram,
    href: 'https://instagram.com/nathsouzadev',
    color: 'text-violet-500',
  },
  {
    label: 'twitter',
    icon: Twitter,
    href: 'https://twitter.com/nathsouzadev',
    color: 'text-blue-300',
  }
]

export const ContactModal = () => {
  const contactModal = useContactModal();

  return (
    <Dialog open={contactModal.isOpen} onOpenChange={contactModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
            <div className='flex items-center gap-x-2 font-bold py-1'>
              { content.contact }
            </div>
          </DialogTitle>
          <DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
            {socials.map(social => (
              <Card 
                key={social.href}
                className='p-3 border-black/5 flex items-center justify-between'
              >
                <Link href={social.href} target='_blank' className={cn('flex w-full cursor-pointer rounded-lg')}>
                  <div className='p-2 w-ft rounded-md flex items-center flex-1'>
                    <social.icon className={cn('w-6 h-6 mr-2', social.color)} />
                    <div className='font-semibold text-sm'>
                      {social.label}
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
};
