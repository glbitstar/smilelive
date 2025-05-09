import React from 'react';

export function Title({ text, val }: { text: string, val: string }) {
  return val === "title1" ? (
    <div className="h-20 bg-[linear-gradient(180deg,#F2A0E9_0%,#CE54C1_100%)] flex justify-center items-center ">
      <p className="xl:text-3xl sm:text-2xl text-xl font-bold text-shadow-[4px_4px_4px_#F59DA5]">
        <img src="/images/wand-stars-outline-left.png" alt="Image 1" className="inline-block align-middle mr-[10] xl:w-[50] sm:w-[40] w-[30]" />
        {text}
        <img src="/images/wand-stars-outline-right.png" alt="Image 2" className="inline-block align-middle ml-[10] xl:w-[50] sm:w-[40] w-[30]" />
      </p>
    </div>
  ) : (
    <div className="h-20 bg-[linear-gradient(180deg,#FBCFD3_0%,#F59DA5_100%)] flex justify-center items-center ">
      <p className="xl:text-3xl sm:text-2xl text-xl font-bold text-shadow-[4px_4px_4px_#FF84AA]">
        <img src="/images/wand-stars-outline-left.png" alt="Image 1" className="inline-block align-middle mr-[10] xl:w-[50] sm:w-[40] w-[30]" />
        {text}
        <img src="/images/wand-stars-outline-right.png" alt="Image 2" className="inline-block align-middle ml-[10] xl:w-[50] sm:w-[40] w-[30]" />
      </p>
    </div>
  )
}
