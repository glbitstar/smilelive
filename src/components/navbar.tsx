"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { Menu, X, ChevronRight } from 'lucide-react';
// import { Button } from './ui/button';

export function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'ライバーとは', href: '#about' },
    { name: '報酬について', href: '#compensation' },
    { name: 'こんな人におすすめ', href: '#recommended' },
    { name: 'ライバーを完全サポート', href: '#support' },
    { name: 'お問い合わせ', href: '#contact' },
    { name: 'よくあるご質問', href: '#faq' },
  ];

  const NavLink = ({ item }: { item: { name: string; href: string } }) => {
    const isActive = pathname === item.href;

    return (
      <Link
        href={item.href}
        className={cn(
          "px-4 font-bold text-sm hover:text-primary first:border-l-2 border-r-2 transition duration-500 xl:text-lg",
          isActive
            ? "text-amber-300"
            : "text-white"
        )}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="lg:flex flex-col justify-center items-center sticky top-0 z-50 w-full bg-[#F59DA5] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <div className="container flex h-20 items-center justify-between max-w-[1400] px-8">
        <Logo />

        <nav className="hidden lg:flex items-center">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label={mobileNavOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {mobileNavOpen ? (
            <X className="h-12 w-12" />
          ) : (
            <Menu className="h-12 w-12" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileNavOpen && (
        <div className="lg:hidden">
          <nav className="">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  " flex items-center h-[70] sm:pl-10 pl-6 pr-5 sm:text-2xl text-lg font-bold transition-colors hover:text-primary bg-[#F59DA5] border-t-2 ",
                  pathname === item.href
                    ? "text-white"
                    : "text-white"
                )}
                onClick={() => setMobileNavOpen(false)}
              >
                <span className="ml-2">{item.name}</span>
                <ChevronRight className="ml-auto sm:h-10 sm:w-10" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
