import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 py-4 border-t border-gray-100 dark:border-gray-800">
      
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        Showing page <span className="text-gray-900 dark:text-white">{currentPage}</span> of <span className="text-gray-900 dark:text-white">{totalPages}</span>
      </p>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-white"
          aria-label="Previous Page"
        >
          <FaChevronLeft size={14} />
        </button>

        <div className="flex items-center gap-1 mx-2">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              className={`min-w-[36px] h-[36px] text-sm font-bold rounded-lg transition-all
                ${
                  currentPage === number
                    ? "bg-red-500 text-white shadow-lg shadow-red-200 dark:shadow-none"
                    : "text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500"
                }`}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-white"
          aria-label="Next Page"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;