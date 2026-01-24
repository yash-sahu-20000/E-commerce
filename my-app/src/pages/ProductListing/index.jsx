import React, { useState } from "react";
import ProductFilterSidebar from "../../components/ProductFilterSidebar";
import ProductListContainer from "../../components/ProductListContainer";

function ProductListing() {
  const [filters, setFilters] = useState({
    categoryid: null,
    priceRange: [0, 60000],
    rating: null,
  });

  return (
    <div className="bg-primary dark:bg-gray-900 transition-colors dark:text-white min-h-screen">
      <div className="flex items-start gap-6 max-w-[95%] mx-auto px-4 py-6">
        <ProductFilterSidebar filters={filters} setFilters={setFilters} />
        <ProductListContainer filters={filters} />
      </div>
    </div>
  );
}

export default ProductListing;
