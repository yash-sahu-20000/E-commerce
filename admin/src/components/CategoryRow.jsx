import { useNavigate } from "react-router-dom";

export function CategoryRow({ category }) {
  const navigate = useNavigate();
  const imageUrl =
    category.images && category.images.length > 0
      ? category.images[0]
      : "https://via.placeholder.com/50";
  return (
    <div className="flex items-center px-4 py-3 rounded-xl
      bg-gray-50 dark:bg-gray-800 hover:bg-gray-100">

      <div className="flex-[4] font-medium flex gap-3 items-center">
        <img
          src={imageUrl}
          alt={category.name}
          className="w-12 h-12 rounded object-cover border"
        />{category.name}
      </div>

      <div className="flex-[4] text-gray-600">
        {category.description || "-"}
      </div>

      <div className="flex-[2]">
        <span className={`px-2 py-1 text-xs rounded-full
          ${category.isActive
            ? "bg-green-100 text-green-700"
            : "bg-gray-200 text-gray-600"
          }`}
        >
          {category.isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <div className="flex-[2] flex justify-end">
        <button
          onClick={() =>
            navigate(`/admin/categories/delete/${category._id}`)
          }
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
