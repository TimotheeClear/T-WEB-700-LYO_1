import React from 'react';

export const Header = () => {
  return (
    <div className="w-full h-fit overflow bg-red-400">
      <div className="cursor-pointer select-none overflow-hidden m-3 w-10 h-10 rounded-full dark:bg-gray-600  float-right">
        <svg
          className="w-12 h-12 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};
