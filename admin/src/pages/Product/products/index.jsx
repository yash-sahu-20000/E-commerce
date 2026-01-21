import { FaSearch } from "react-icons/fa";
import { ProductRow } from "../../../components/productrow";
import Button from "@mui/material/Button";
import { useState } from "react";
import Pagination from "../../../components/Pagination";

const TOTAL_PRODUCTS = 47;        
const ITEMS_PER_PAGE = 5;


export default function Products() {
  
  const products = Array.from({ length: TOTAL_PRODUCTS }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  category: "Men",
  price: 79.8,
  stock: 79,
  status: "active",
  image:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
}));

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TOTAL_PRODUCTS / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;


  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-900 rounded-xl shadow p-6">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Products</h1>

          <div className="relative">
            <FaSearch
              className="absolute top-2.5 left-3 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 text-sm rounded-lg
              bg-gray-50 dark:bg-gray-800
              text-gray-800 dark:text-gray-100
              border border-gray-300 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <Button className="!bg-red-500 !text-white hover:!bg-red-600 normal-case !py-2 !px-4">
          Add Product
        </Button>
      </div>

      <div className="flex px-4 py-2 text-sm text-gray-500 dark:text-gray-400 border-b dark:border-gray-700">
        <div className="flex-[6]">Product</div>
        <div className="flex-[2]">Category</div>
        <div className="flex-[1]">Price</div>
        <div className="flex-[1]">Stock</div>
        <div className="flex-[1]">Status</div>
        <div className="flex-[2] text-right">Actions</div>
      </div>

      <div className="space-y-3 mt-3">
        {currentProducts.map((product) => (
          <ProductRow product={product} key={product.id} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
