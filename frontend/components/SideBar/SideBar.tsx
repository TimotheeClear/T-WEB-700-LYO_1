import React from 'react';
import { Menu } from '../Menu';

export const SideBar = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div>
            <div className="w-max p-2.5">
              {/* <img src="https://tailus.io/images/logo.svg" className="w-32" alt=""> */}
            </div>
            <Menu />
          </div>
          <div className="w-max -mb-3">
            <a
              href="#"
              className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:fill-cyan-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="group-hover:text-gray-700">Settings</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
