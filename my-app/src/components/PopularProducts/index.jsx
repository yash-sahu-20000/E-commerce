import React, { useState } from "react";
import ProductCard from "../ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const TABS = [
  "Fashion",
  "Electronics",
  "Bags",
  "Footwear",
  "Groceries",
  "Beauty",
  "Wellness",
];

export default function PopularProducts(props) {
  const [activeTab, setActiveTab] = useState("Fashion");

  return (
    <section className="w-full py-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {props.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Do not miss the current offers until the end of March.
          </p>
        </div>

        <ul className="flex gap-6 overflow-x-auto text-sm font-medium">
          {TABS.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer whitespace-nowrap pb-2 border-b-2 transition
                ${
                  activeTab === tab
                    ? "border-red-500 text-red-500"
                    : "border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-white"
                }`}
            >
              {tab}
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
        {[...Array(8)].map((_, i) => (
          <SwiperSlide key={i}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
