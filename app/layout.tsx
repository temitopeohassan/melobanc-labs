import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import OnchainProviders from './OnchainProviders';
import { Toaster } from '@/components/ui/toaster';
import { ReactNode } from 'react'; // Import ReactNode

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melobanc Labs - Support Your Favorite Creators',
  description: 'Support creators you love with monthly memberships and exclusive content',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <OnchainProviders>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
        </OnchainProviders>
      </body>
    </html>
  );
}