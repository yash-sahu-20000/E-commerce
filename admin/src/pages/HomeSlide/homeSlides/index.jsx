import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SlideRow from "../../../components/SlideRow";
import Pagination from "../../../components/Pagination";
import { useState } from "react";

const TOTAL_SLIDES = 8;
const ITEMS_PER_PAGE = 5;


export default function HomeSlides() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);


  const slides = Array.from({ length: TOTAL_SLIDES }, (_, i) => ({
    id: i + 1,
    title: `Slide ${i + 1}`,
    status: i % 2 === 0 ? "active" : "inactive",
    order: i + 1,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  }));

  const totalPages = Math.ceil(TOTAL_SLIDES / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;


  const currentSlides = slides.slice(startIndex, endIndex);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Home Slides</h1>

          <div className="relative">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search slide..."
              className="pl-10 pr-4 py-2 text-sm rounded-lg
              bg-gray-50 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <Button
          className="!bg-red-500 !text-white hover:!bg-red-600 normal-case"
          onClick={() => navigate("/admin/homeslides/create")}
        >
          Add Slide
        </Button>
      </div>

      <div className="flex px-4 py-2 text-sm text-gray-500 border-b dark:border-gray-700">
        <div className="flex-[5]">Slide</div>
        <div className="flex-[2]">Order</div>
        <div className="flex-[2]">Status</div>
        <div className="flex-[2] text-right">Actions</div>
      </div>

      <div className="space-y-3 mt-3">
        {currentSlides.map((slide) => (
          <SlideRow key={slide.id} slide={slide} />
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
