import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SlideRow from "../../../components/SlideRow";
import Pagination from "../../../components/Pagination";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";

const ITEMS_PER_PAGE = 5;
const SLIDE_TYPE = "home";

export default function HomeSlides() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, loading, error, refetch } = useFetch(
    `/slides?type=${SLIDE_TYPE}`
  );
  const slides = data?.slides || [];

  useEffect(() => {
    setCurrentPage(1);
  }, [search, slides.length]);


  if (loading)
    return (
      <p className="text-center py-10 text-gray-400">
        Loading slides...
      </p>
    );
  if (error)
    return (
      <p className="text-center py-10 text-red-500">
        {error}
      </p>
    );


  const filteredSlides = slides.filter((slide) =>
    slide.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSlides.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentSlides = filteredSlides.slice(startIndex, endIndex);



  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Home Slides</h1>

          <div className="relative">
            <FaSearch
              className="absolute top-2.5 left-3 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search slide..."
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
          onClick={() => navigate("/admin/homeslides/add")}
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
        {currentSlides.length > 0 ? (
          currentSlides.map((slide) => (
            <SlideRow
              key={slide._id}
              slide={slide}
              refetch={refetch}
            />
          ))
        ) : (
          <p className="text-center text-gray-400 py-6">
            No slides found
          </p>
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
