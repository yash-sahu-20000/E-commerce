function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-between mt-6">

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1.5 rounded-lg text-sm border
            ${
              currentPage === 1
                ? "text-gray-400 border-gray-200 dark:border-gray-700"
                : "hover:bg-red-100 dark:hover:bg-red-800"
            }`}
        >
          Prev
        </button>

        <div>
            <button
              disabled={true}
              className={"px-3 py-1.5 rounded-lg text-sm border hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700"}
            >
              {currentPage}
            </button>
        </div>


        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1.5 rounded-lg text-sm border
            ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-200 dark:border-gray-700"
                : "hover:bg-red-100 dark:hover:bg-red-800"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
