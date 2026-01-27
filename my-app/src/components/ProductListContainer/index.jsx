import ProductListCard from "../ProductListCard";
import ProductListRowCard from "../ProductListRowCard";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Pagination from "../Pagination";

export default function ProductListContainer({ filters }) {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const { categoryid: category, priceRange, rating } = filters;

  const query = new URLSearchParams({
    page: currentPage,
    limit: productsPerPage,
    ...(category && { category }),
    ...(rating && { rating }),
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
  }).toString();

  const { data, loading, error, refetch } = useFetch(`/products?${query}`);


  const products = data?.products || [];
  const totalPages = data?.totalPages || 1;

  const toggleView = () => {
    setView((prev) => (prev === "grid" ? "list" : "grid"));
  };

  useEffect(()=>{
    setCurrentPage(1);
  },[totalPages])

  if (loading) return <p className="text-center py-10 dark:text-white">Loading products...</p>;
  if (error) return <p className="text-center text-red-500 py-10">Failed to load products</p>;

  return (
    <section className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600 dark:text-gray-300">
          There are {data?.total || 0} products.
        </p>
        <button
          onClick={toggleView}
          className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition"
        >
          {view === "grid" ? "List View" : "Grid View"}
        </button>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : view === "grid" ? (
        <div className="flex flex-wrap gap-6">
          {products.map((p) => (
            <div key={p._id} className="w-full sm:w-[48%] lg:w-[23%]">
              <ProductListCard product={p} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {products.map((p) => (
            <ProductListRowCard key={p._id} product={p} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          if (page >= 1 && page <= totalPages) setCurrentPage(page);
        }}
      />
    </section>
  );
}
