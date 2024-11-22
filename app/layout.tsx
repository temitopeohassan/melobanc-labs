import '@coinbase/onchainkit/styles.css'; 
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import { WagmiConfigProvider } from './components/wagmi-config-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melobanc Labs - Support Your Favorite Creators',
  description: 'Support creators you love with monthly memberships and exclusive content',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <WagmiConfigProvider>
            <Navbar />
            <main>{children}</main>
            <Toaster />
          </WagmiConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}   