"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename, 
  WalletDropdownFundLink, 
  WalletDropdownLink, 
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance, 
} from '@coinbase/onchainkit/identity';

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-semibold text-xl mr-6">
          <Image 
            alt="Melobanc Labs" 
            className="cursor-pointer" 
            height={50} 
            width={438} 
            src={theme === 'dark' ? "/logo-black.png" : "/logo.png"}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 flex-1">
          <nav className="flex items-center space-x-4 mx-6">
            <Link href="/explore" className="text-sm font-medium">
              Explore
            </Link>
            <Link href="/creators" className="text-sm font-medium">
              For Creators
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Wallet>
            <ConnectWallet className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
              <Avatar className="h-6 w-6" />
              <Name />
            </ConnectWallet>
            <WalletDropdown>
              <Identity 
                className="px-4 pt-3 pb-2 text-foreground" 
                hasCopyAddressOnClick
              >
                <Avatar />
                <Name />
                <Address />
                <EthBalance />
              </Identity>
              <WalletDropdownBasename className="text-foreground" />
              <WalletDropdownLink
                icon="wallet"
                href="https://keys.coinbase.com"
                className="text-foreground"
              >
                Wallet
              </WalletDropdownLink>
              <WalletDropdownFundLink className="text-foreground" />
              <WalletDropdownDisconnect className="text-foreground" />
            </WalletDropdown>
          </Wallet>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center ml-auto space-x-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="/explore" className="text-sm font-medium">
                  Explore
                </Link>
                <Link href="/creators" className="text-sm font-medium">
                  For Creators
                </Link>
                <div className="pt-4">
                  <Wallet>
                    <ConnectWallet className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full">
                      <Avatar className="h-6 w-6" />
                      <Name />
                    </ConnectWallet>
                    <WalletDropdown>
                      <Identity 
                        className="px-4 pt-3 pb-2 text-foreground" 
                        hasCopyAddressOnClick
                      >
                        <Avatar />
                        <Name />
                        <Address />
                        <EthBalance />
                      </Identity>
                      <WalletDropdownBasename className="text-foreground" />
                      <WalletDropdownLink
                        icon="wallet"
                        href="https://keys.coinbase.com"
                        className="text-foreground"
                      >
                        Wallet
                      </WalletDropdownLink>
                      <WalletDropdownFundLink className="text-foreground" />
                      <WalletDropdownDisconnect className="text-foreground" />
                    </WalletDropdown>
                  </Wallet>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}