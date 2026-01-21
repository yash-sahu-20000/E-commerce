import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { CategoryRow } from "../../../components/CategoryRow";

const TOTAL_CATEGORIES = 8;

export default function Categories() {
  const navigate = useNavigate();

  const categories = Array.from({ length: TOTAL_CATEGORIES }, (_, i) => ({
    id: i + 1,
    name: `Category ${i + 1}`,
    slug: `category-${i + 1}`,
    status: i % 2 === 0 ? "active" : "inactive",
  }));

  return (
    <div className="bg-white dark:text-white dark:bg-gray-900 rounded-xl shadow p-6">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Categories</h1>

          <div className="relative">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search category..."
              className="pl-10 pr-4 py-2 text-sm rounded-lg
              bg-gray-50 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <Button
          className="!bg-red-500 !text-white hover:!bg-red-600 normal-case"
          onClick={() => navigate("/admin/categories/create")}
        >
          Add Category
        </Button>
      </div>

      <div className="flex px-4 py-2 text-sm text-gray-500 border-b dark:border-gray-700">
        <div className="flex-[4]">Name</div>
        <div className="flex-[4]">Slug</div>
        <div className="flex-[2]">Status</div>
        <div className="flex-[2] text-right">Actions</div>
      </div>

      <div className="space-y-3 mt-3">
        {categories.map((category) => (
          <CategoryRow key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
