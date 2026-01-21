import { useNavigate } from "react-router-dom";

export default function SlideRow({ slide }) {
  const navigate = useNavigate();

  const basePath =
    slide.type === "hero"
      ? "/admin/heroslides"
      : "/admin/homeslides";

  return (
    <div className="flex items-center px-4 py-3 rounded-xl
      bg-gray-50 dark:bg-gray-800
      hover:bg-gray-100 dark:hover:bg-gray-700 transition">

      <div className="flex-[5] flex items-center gap-3">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-14 h-10 rounded object-cover"
        />
        <span className="font-medium">{slide.title}</span>
      </div>

      <div className="flex-[2]">{slide.order}</div>

      <div className="flex-[2]">
        <span
          className={`px-2 py-1 text-xs rounded-full
          ${slide.status === "active"
            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
            : "bg-gray-200 text-gray-600 dark:bg-gray-600/20 dark:text-gray-300"
          }`}
        >
          {slide.status}
        </span>
      </div>

      <div className="flex-[2] flex justify-end gap-4">
        <button
          className="text-yellow-500 hover:underline"
          onClick={() => navigate(`${basePath}/update/${slide.id}`)}
        >
          Edit
        </button>

        <button
          className="text-red-500 hover:underline"
          onClick={() => navigate(`${basePath}/delete/${slide.id}`)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
