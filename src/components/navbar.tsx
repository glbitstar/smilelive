"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
// import { Menu, X, MessageSquare } from 'lucide-react';
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
          "px-4 text-lg font-bold hover:text-primary first:border-l-2 border-r-2",
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
    <header className="flex justify-center items-center sticky top-0 z-50 w-full bg-[#F59DA5] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <div className="container flex h-20 items-center justify-between max-w-[1400] px-8">
        <Logo />

        <nav className="hidden md:flex items-center">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}

        </nav>

        {/* Mobile menu button */}
        {/* <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label={mobileNavOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {mobileNavOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button> */}
      </div>

      {/* Mobile navigation */}
      {mobileNavOpen && (
        <div className="md:hidden">
          <nav className="grid gap-2 p-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center py-2 text-base font-bold transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-slate-700"
                )}
                onClick={() => setMobileNavOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
