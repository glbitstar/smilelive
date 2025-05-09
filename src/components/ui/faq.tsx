import React from 'react';
import parse from 'html-react-parser';

export function FAQ({ Q, A }: { Q: string, A: string }) {
  return (
    <div className="bg-white shadow-[0px_5px_20px_rgba(0,0,0,0.35)] rounded-2xl border-2 border-[#E06597] sm:mt-8 mt-5 w-[90vw] max-w-[1000px]">
      <div className="font-bold text-[#E06597] sm:pt-8 pt-6 sm:pb-3 pb-2 mx-[4%] border-b-2 xl:text-2xl sm:text-xl text-lg flex items-center sm:gap-4 gap-2">
        <p className="xl:text-4xl sm:text-3xl text-2xl">Q.</p>
        <p>
          {Q}
        </p>
      </div>
      <div className="font-bold text-[#543B2A] sm:py-8 py-4 px-[4%] xl:text-xl sm:text-lg text-sm flex sm:gap-4 gap-2">
        <p className="xl:text-4xl sm:text-3xl text-2xl">A.</p>
        <p>
          {parse(A)}
        </p>
      </div>
    </div>
  )
}
