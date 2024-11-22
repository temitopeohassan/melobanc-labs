"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  ConnectWallet, 
  Wallet, 
  WalletDropdown, 
  WalletDropdownLink, 
  WalletDropdownDisconnect, 
} from '@coinbase/onchainkit/wallet'; 
import {
  Address,
  Avatar,
  Name,
  Badge,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import { color } from '@coinbase/onchainkit/theme';

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-semibold text-xl mr-6">
        <Image alt="Melobanc Labs" className="cursor-pointer" height={50} width={438} src="/logo.png" />
        </Link>
        
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search creators..." className="pl-8" />
          </div>
          <nav className="flex items-center space-x-4 mx-6">
            <Link href="/explore" className="text-sm font-medium">
              Explore
            </Link>
            <Link href="/creators" className="text-sm font-medium">
              For Creators
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
        <Wallet>
           <ConnectWallet className='bg-blue-800 text-white'>
    <Avatar className="h-6 w-6" />
    <Name className='text-white' />
            </ConnectWallet>
            <WalletDropdown>
            <Identity 
              className="px-4 pt-3 pb-2 hover:bg-blue-200" 
              hasCopyAddressOnClick
              schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
              >
      <Avatar />
      <Name />
      <Address />
      <EthBalance />
    </Identity>
    <WalletDropdownLink 
      className='hover:bg-blue-200' 
      icon="wallet" 
      href="https://wallet.coinbase.com"
    >
      Wallet
    </WalletDropdownLink>
    <WalletDropdownDisconnect className='hover:bg-blue-200' />
  </WalletDropdown>
            </Wallet>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}