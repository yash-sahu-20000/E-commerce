import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import {
  FaStar,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loading";

export default function ProductFilterSidebar({ filters, setFilters }) {
  const { categoryid, priceRange, rating } = filters;

  const { data, loading } = useFetch("/categories/rootwithchild");
  const categories = data?.categories || [];

  const toggleCategory = (id) => {
    setFilters({
      ...filters,
      categoryid: categoryid === id ? null : id,
    });
  };

  return (
    <aside
      className="
        w-full lg:w-72
        bg-white dark:bg-gray-800
        p-5 rounded-2xl
        shadow-sm dark:shadow-black/20
        transition-colors duration-300
      "
    >
      <Section title="Shop by Category">
        {loading && (
          <p className="text-sm text-gray-400 animate-pulse">
            <Loader/>
          </p>
        )}

        <div className="space-y-2">
          {categories.map((cat) => (
            <CategoryItem
              key={cat._id}
              category={cat}
              selectedId={categoryid}
              onSelect={toggleCategory}
            />
          ))}
        </div>
      </Section>

      <Section title="Filter By Price">
        <Slider
          value={priceRange}
          onChange={(e, val) =>
            setFilters({ ...filters, priceRange: val })
          }
          min={0}
          max={60000}
          step={500}
          sx={{
            color: "#ef4444"
          }}
        />

        <div className="flex justify-between text-xs mt-2 text-gray-600 dark:text-gray-400">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </Section>

      <Section title="Filter By Rating">
        {[5, 4, 3, 2, 1].map((r) => (
          <div
            key={r}
            onClick={() =>
              setFilters({ ...filters, rating: rating === r ? null : r })
            }
            className="
              flex items-center gap-3
              cursor-pointer
              px-2 py-1 rounded-lg
              transition-colors
              hover:bg-gray-100 dark:hover:bg-gray-700
            "
          >
            <input
              type="checkbox"
              checked={rating === r}
              readOnly
              className="accent-red-500"
            />
            <StarRating value={r} />
          </div>
        ))}
      </Section>
    </aside>
  );
}

function CategoryItem({ category, selectedId, onSelect }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (category.children?.some(c => c._id === selectedId)) {
      setOpen(true);
    }
  }, [selectedId]);

  return (
    <div className="rounded-lg">
      <div
        className="
          flex items-center justify-between
          px-2 py-2 rounded-lg
          transition-colors dark:text-gray-500
          hover:bg-gray-100 dark:hover:bg-gray-700
        "
      >
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedId === category._id}
            onChange={() => onSelect(category._id)}
            className="accent-red-500"
          />
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {category.name}
          </span>
        </label>

        {category.children?.length > 0 && (
          <button
            onClick={() => setOpen(!open)}
            className="
              p-1 rounded
              transition-transform duration-300
              hover:scale-110
            "
          >
            {open ? (
              <FaChevronUp size={12} />
            ) : (
              <FaChevronDown size={12} />
            )}
          </button>
        )}
      </div>

      <div
        className={`
          ml-6 overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        <div className="space-y-1 pb-2">
          {category.children?.map((sub) => (
            <label
              key={sub._id}
              className="
                flex items-center gap-2
                px-2 py-1 rounded-md
                cursor-pointer text-sm
                transition-colors
                hover:bg-gray-100 dark:hover:bg-gray-700
              "
            >
              <input
                type="checkbox"
                checked={selectedId === sub._id}
                onChange={() => onSelect(sub._id)}
                className="accent-red-500"
              />
              <span className="text-gray-700 dark:text-gray-300">
                {sub.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center justify-between w-full mb-3
          group
        "
      >
        <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-700 dark:text-gray-300">
          {title}
        </h3>

        <FaChevronUp
          className={`
            text-gray-500
            transition-transform duration-300
            group-hover:text-red-500
            ${open ? "" : "rotate-180"}
          `}
        />
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {children}
      </div>
    </div>
  );
}

function StarRating({ value }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-sm ${
            i < value ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
