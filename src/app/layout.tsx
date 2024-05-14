import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/src/components/modal-provider';
import { ToasterProvider } from '@/src/components/toaster.provider';
import { content } from './content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: content.title,
  description: content.subtitle,
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <html lang='en'>
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </>
  );
}
