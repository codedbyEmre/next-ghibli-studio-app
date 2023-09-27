'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={router.back}
      className="bg-blue-700 text-white hover:text-blue-700 hover:bg-white rounded p-3 px-4 font-medium transition-colors duration-300 text-base flex items-center gap-2 border-[0.1rem] border-blue-700 py-[0.4rem]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.25}
        stroke="currentColor"
        className="w-4 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      Back
    </button>
  );
}
