import React from 'react';
import parse from 'html-react-parser';

export function RecommendedCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-[#F2A0E9] mt-8 max-w-[1000px] sm:mx-10 mx-4">
      <p className="text-center xl:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-[#F2A0E9] sm:pt-8 pt-6 sm:pb-5 pb-3 sm:mx-[10%] mx-[5%] border-b-2">
        {title}
      </p>
      <p className="text-center xl:text-xl md:text-lg sm:text-base text-sm  font-bold text-[#543B2A] sm:py-10 py-6 px-[5%]">
        {parse(description)}
      </p>
    </div>
  )
}
