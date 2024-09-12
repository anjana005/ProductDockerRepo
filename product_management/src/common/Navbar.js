import React, { useState } from 'react';

const Navbar = () => {

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between h-8">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-lg font-bold">Product Website</a>
          </div>
          <div>
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/create" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Create Product</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
