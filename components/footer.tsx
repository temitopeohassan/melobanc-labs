"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="border-t py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* First Column */}
          <div className="md:col-span-6">
            <Link href="/" className="block mb-4">
              <Image 
                alt="Melobanc Labs" 
                height={50} 
                width={438} 
                src={theme === 'dark' ? "/logo-black.png" : "/logo.png"}
              />
            </Link>
            <p className="text-muted-foreground mb-4">
              Melobanc Labs is revolutionizing the way creators connect with their audience. 
              We provide powerful tools and a supportive community for creators to thrive.
              <Link href="/about" className="text-primary hover:underline ml-1">
                Read more
              </Link>
            </p>
          </div>

          {/* Second Column */}
          <div className="md:col-span-3">
            <h2 className="font-semibold text-lg mb-4">Menu</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-muted-foreground hover:text-primary">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-muted-foreground hover:text-primary">
                  Creators
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="md:col-span-3">
            <h2 className="font-semibold text-lg mb-4">Contact</h2>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hello@melobanc.xyz" 
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  hello@melobanc.xyz
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/melobanclabs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  https://twitter.com/melobanclabs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 