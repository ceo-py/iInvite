import React from "react";

export default function NavMenu() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex">
        <img src="/logo.png" alt="Logo" className="h-6 mr-3" />
        <span className="self-center text-xl font-semibold whitespace-nowrap">
          App Name
        </span>
      </div>

      <div className="flex items-center">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
          Theme
        </button>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
      </div>
    </nav>
  );
}
