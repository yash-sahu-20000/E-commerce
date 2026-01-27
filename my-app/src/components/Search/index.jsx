import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Search() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const { data, loading } = useFetch(
    debouncedQuery ? `/products/search?q=${debouncedQuery}` : null
  );

  const products = data?.products || [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="container mx-auto relative" ref={containerRef}>
      <div className="mx-auto">
        <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 shadow-sm">
          <FaSearch className="text-gray-500 dark:text-gray-400 text-sm" />

          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            className="w-full bg-transparent ml-3 outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>

        {open && debouncedQuery && (
          <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
            {loading ? (
              <p className="px-4 py-3 text-sm text-gray-500">
                Searching...
              </p>
            ) : products.length === 0 ? (
              <p className="px-4 py-3 text-sm text-gray-500">
                No products found
              </p>
            ) : (
              products.map((p) => (
                <div
                  key={p._id}
                  onClick={() => {
                    navigate(`/productdescription/${p._id}`);
                    setOpen(false);
                    setQuery("");
                  }}
                  className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <img
                    src={p.thumbnail}
                    alt={p.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {p.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      ₹{p.price}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
