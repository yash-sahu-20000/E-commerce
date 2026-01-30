import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function CategorySlider() {
  const { data, loading } = useFetch("/categories/root");
  const categories = data?.categories || [];
  const navigate = useNavigate();

  const handleClick = (categoryId) => {
    navigate(`/productlisting?category=${categoryId}`);
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {loading ? (<p className="text-center w-full text-gray-400 py-10">Loading categories..</p> ) : categories.length > 0 ? (
        <div className="flex gap-6">
          {categories.map((category) => (
            <div
              key={category._id}
              onClick={() => handleClick(category._id)}
              className="
                group w-40 p-5 rounded-2xl border
                bg-white dark:bg-gray-800
                shadow-sm flex flex-col items-center
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
                cursor-pointer
              "
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 mb-4">
                <img
                  src={category.images?.[0]}
                  alt={category.name}
                  className="max-h-16 object-contain"
                />
              </div>

              <h3 className="text-sm font-semibold text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center w-full text-red-500  py-10">
          No category found
        </p>
      )}
    </div>
  );
}

export default CategorySlider;
