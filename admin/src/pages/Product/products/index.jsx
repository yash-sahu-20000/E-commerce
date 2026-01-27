import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ProductRow } from "../../../components/ProductRow";
import Pagination from "../../../components/Pagination";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";

const ITEMS_PER_PAGE = 7;

export default function Products() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1); 
    }, 500); 

    return () => clearTimeout(handler);
  }, [search]);

  const fetchUrl = `/products?page=${currentPage}&limit=${ITEMS_PER_PAGE}${
    debouncedSearch ? `&search=${encodeURIComponent(debouncedSearch)}` : ""
  }`;

  const { data, loading, error, refetch } = useFetch(fetchUrl);
  const products = data?.products || [];
  const totalPages = data?.totalPages || 1;

  useEffect(() => {
    refetch();
  }, [currentPage, debouncedSearch]);

  if (loading)
    return <p className="text-center py-10 text-gray-400">Loading Products...</p>;

  if (error)
    return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="bg-white dark:text-white dark:bg-gray-900 rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Products</h1>
          <div className="relative">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 text-sm rounded-lg
                bg-gray-50 dark:bg-gray-800
                border border-gray-300 dark:border-gray-700
                focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <Button
          className="!bg-red-500 !text-white hover:!bg-red-600 normal-case"
          onClick={() => navigate("/admin/products/add")}
        >
          Add Product
        </Button>
      </div>

      <div className="flex px-4 py-2 text-sm text-gray-500 border-b dark:border-gray-700">
        <div className="flex-[6]">Product</div>
        <div className="flex-[2]">Category</div>
        <div className="flex-[1]">Price</div>
        <div className="flex-[1]">Stock</div>
        <div className="flex-[1]">Status</div>
        <div className="flex-[2] text-right">Actions</div>
      </div>

      <div className="space-y-3 mt-3">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductRow key={product._id} product={product} refetch={refetch} />
          ))
        ) : (
          <p className="text-center text-gray-400 py-6">No products found</p>
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
