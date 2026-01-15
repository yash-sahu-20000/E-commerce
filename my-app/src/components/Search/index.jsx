import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
    <div className="container mx-auto">
      <div className="mx-auto">
        <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 shadow-sm">
          
            <FaSearch className="text-gray-500 dark:text-gray-400 text-sm" />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent ml-3 outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
