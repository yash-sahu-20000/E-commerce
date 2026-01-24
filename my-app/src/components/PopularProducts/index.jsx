import React, { useState, useMemo } from "react";
import ProductCard from "../ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import useFetch from "../../hooks/useFetch";

export default function PopularProducts({ title }) {
  const { data: productData, loading, error } = useFetch("/products");
  const { data: categoryData } = useFetch("/categories");

  const products = productData?.products || [];
  const categories = categoryData?.categories || [];

  const [activeTab, setActiveTab] = useState("");

  const filteredProducts = useMemo(() => {
    if (!activeTab) return products;

    return products.filter(
      (product) => product.category?.name === activeTab
    );
  }, [products, activeTab]);

  return (
    <section className="w-full py-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Do not miss the current offers until the end of March.
          </p>
        </div>

        <ul className="flex gap-6 overflow-x-auto text-sm font-medium">
          <li
            onClick={() => setActiveTab("")}
            className={`cursor-pointer whitespace-nowrap pb-2 border-b-2 transition
              ${
                activeTab === ""
                  ? "border-red-500 text-red-500"
                  : "border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-white"
              }`}
          >
            All
          </li>

          {categories.map((category) => (
            <li
              key={category._id}
              onClick={() => setActiveTab(category.name)}
              className={`cursor-pointer whitespace-nowrap pb-2 border-b-2 transition
                ${
                  activeTab === category.name
                    ? "border-red-500 text-red-500"
                    : "border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-white"
                }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {loading && <p className="text-center mt-6">Loading products...</p>}
      {error && (
        <p className="text-center mt-6 text-red-500">
          Failed to load products
        </p>
      )}
    </section>
  );
}
