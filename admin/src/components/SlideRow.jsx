import { useNavigate } from "react-router-dom";

export default function SlideRow({ slide }) {
  const navigate = useNavigate();

  const imageUrl =
    slide.images && slide.images.length > 0
      ? slide.images[0]
      : "https://via.placeholder.com/50";

  const basePath =
    slide.type === "hero"
      ? "/admin/heroslides"
      : "/admin/homeslides";

  return (
    <div
      className="flex items-center px-4 py-3 rounded-xl
      bg-gray-50 dark:bg-gray-800
      hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      <div className="flex-[4] flex items-center gap-3">
        <img
          src={imageUrl}
          alt={slide.title}
          className="w-14 h-10 rounded object-cover"
        />
        <span className="font-medium">{slide.title}</span>
      </div>

      <div className="flex-[2]">
        <span
          className={`px-2 py-1 text-xs rounded-full capitalize
          ${
            slide.type === "hero"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"
              : "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300"
          }`}
        >
          {slide.type}
        </span>
      </div>

      <div className="flex-[1]">{slide.order}</div>

      <div className="flex-[2]">
        <span
          className={`px-2 py-1 text-xs rounded-full
          ${
            slide.status === "active"
              ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
              : "bg-gray-200 text-gray-600 dark:bg-gray-600/20 dark:text-gray-300"
          }`}
        >
          {slide.status}
        </span>
      </div>

      <div className="flex-[3] flex justify-end gap-4">
        <button
          className="text-yellow-500 hover:underline"
          onClick={() => navigate(`${basePath}/update/${slide._id}`)}
        >
          Edit
        </button>

        <button
          className="text-red-500 hover:underline"
          onClick={() => navigate(`${basePath}/delete/${slide._id}`)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
