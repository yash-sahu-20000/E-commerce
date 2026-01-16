import Slider from "@mui/material/Slider";
import { useState } from "react";
import { FaStar,FaChevronUp } from "react-icons/fa";

const categories = [
  "Fashion",
  "Electronics",
  "Bags",
  "Footwear",
  "Groceries",
  "Beauty",
];

export default function ProductFilterSidebar() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 60000]);

    const [rating, setRating] = useState(null);

  return (
    <aside className="w-full lg:w-72 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
      
        <Section title="Shop by Category">
        {categories.map((cat) => (
            <CheckboxRow
            key={cat}
            label={cat}
            checked={selectedCategory === cat}
            onChange={() =>
                setSelectedCategory(
                selectedCategory === cat ? null : cat
                )
            }
            />
        ))}
        </Section>


      <Section title="Filter By Price">
        <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            min={0}
            max={60000}
            step={500}
            valueLabelDisplay="auto"
            sx={{
                color: "red",
            }}
        />

        <div className="flex justify-between text-sm mt-2 text-gray-700 dark:text-gray-300">
        <span>From: Rs. {priceRange[0]}</span>
        <span>To: Rs. {priceRange[1]}</span>
        </div>

      </Section>

      <Section title="Filter By Rating">
        {[5, 4, 3, 2, 1].map((r) => (
          <div
            key={r}
            onClick={() => setRating(r)}
            className="flex items-center gap-3 cursor-pointer mb-2"
          >
            <input type="checkbox" checked={rating === r} readOnly />
            <StarRating value={r} />
          </div>
        ))}
      </Section>
    </aside>
  );
}

function Section({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mb-4"
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>

        <FaChevronUp
          className={`text-gray-500 transition-all duration-300 ${
            open ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}


function CheckboxRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 mb-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 accent-red-500"
      />
      <span className="text-gray-800 dark:text-gray-300">
        {label}
      </span>
    </label>
  );
}

function StarRating({ value }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < value ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}
