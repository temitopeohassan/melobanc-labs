"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

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
          <Link href="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button>Create on CreatorSpace</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}