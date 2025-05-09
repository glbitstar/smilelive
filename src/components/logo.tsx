import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className={cn("relative flex items-center gap-2 h-20 w-20")}>
      <Image
        src="/images/logo.png"
        alt="スマイルライブ"
        fill
        className=""
      />
    </Link>
  );
}
