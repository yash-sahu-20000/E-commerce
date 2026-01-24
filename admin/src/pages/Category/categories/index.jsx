import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { CategoryRow } from "../../../components/CategoryRow";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 10;

export default function Categories() {
  const navigate = useNavigate();

  const { data, loading, error, refetch } = useFetch("/categories");

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const products = data?.products || [];

  useEffect(() => {
    setCurrentPage(1);
  }, [search, products.length]);

  if (loading)
    return (
      <p className="text-center py-10 text-gray-400">
        Loading Categories...
      </p>
    );
  if (error)
    return (
      <p className="text-center py-10 text-red-500">
        {error}
      </p>
    );

  const categories = data?.categories || [];
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredCategories.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCategories = filteredCategories.slice(startIndex, endIndex);

  return (
    <div className="bg-white dark:text-white dark:bg-gray-900 rounded-xl shadow p-6">
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Categories</h1>

          <div className="relative">
            <FaSearch
              className="absolute top-2.5 left-3 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search category..."
              onChange={(e)=>setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 text-sm rounded-lg
              bg-gray-50 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <Button
          className="!bg-red-500 !text-white hover:!bg-red-600 normal-case"
          onClick={() => navigate("/admin/categories/add")}
        >
          Add Category
        </Button>
      </div>

      <div className="flex px-4 py-2 text-sm text-gray-500 border-b dark:border-gray-700">
        <div className="flex-[4]">Name</div>
        <div className="flex-[4]">description</div>
        <div className="flex-[2]">Status</div>
        <div className="flex-[2] text-right">Actions</div>
      </div>

      <div className="space-y-3 mt-3">
        {currentCategories.length === 0 ? (
          <p className="text-sm text-gray-400">No categories found</p>
        ) : (
          currentCategories.map((category) => (
            <CategoryRow
              key={category._id}
              category={category}
              refetch={refetch}
            />
          ))
        )}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
