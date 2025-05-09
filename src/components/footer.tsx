"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get viewport height and calculate threshold (e.g., 50% of viewport height)
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.5; // 50% of viewport height

      if (window.scrollY > scrollThreshold) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Add resize event listener to recalculate on window resize
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 z-10 w-full bg-white md:py-2 shadow-[4px_0px_10px_rgba(0,0,0,0.25)] transition-opacity duration-500 ease-in-out ${showFooter ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className='hidden md:flex justify-center items-center gap-5 px-10'>
        <Link href="https://lin.ee/NfkGrVi" target="_blank">
          <img src="/images/footer_line_pc.png" alt="footer_line_pc" className="w-[450]" />
        </Link>
        <Link href="tel:0120998707" target="_blank">
          <img src="/images/footer_phone_pc.png" alt="footer_phone_pc" className="w-[450]" />
        </Link>
      </div>
      <div className='flex justify-center items-center md:hidden'>
        <div className='flex flex-1 items-center justify-center bg-[#06C755]'>
          <Link href="https://lin.ee/NfkGrVi" target="_blank">
            <img src="/images/footer_line_sp.png" alt="footer_line_sp" className="w-[15vw] sm:w-[80]" />
          </Link>
        </div>
        <div className='flex flex-1 items-center justify-center bg-[#F59DA5]'>
          <Link href="tel:0120998707" target="_blank">
            <img src="/images/footer_phone_sp.png" alt="footer_phone_sp" className="w-[15vw] sm:w-[80] sm:p-4 p-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
