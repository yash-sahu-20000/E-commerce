import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductFilterSidebar from "../../components/ProductFilterSidebar";
import ProductListContainer from "../../components/ProductListContainer";

function ProductListing() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [filters, setFilters] = useState({
    categoryid: null,
    priceRange: [0, 60000],
    rating: null,
  });

  useEffect(() => {
    if (categoryFromUrl) {
      setFilters((prev) => ({
        ...prev,
        categoryid: categoryFromUrl,
      }));
    }
  }, [categoryFromUrl]);

  return (
    <div className="bg-primary dark:bg-gray-900 min-h-screen">
      <div className="flex gap-6 max-w-[95%] mx-auto px-4 py-6">
        <ProductFilterSidebar filters={filters} setFilters={setFilters} />
        <ProductListContainer filters={filters} />
      </div>
    </div>
  );
}

export default ProductListing;
