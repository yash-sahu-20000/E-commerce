import { useNavigate } from "react-router-dom";

export function ProductRow({ product }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center px-4 py-3 rounded-xl
                    bg-gray-50 dark:bg-gray-800
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    transition">

      <div className="flex-[6] flex items-center gap-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-10 h-10 rounded object-cover"
        />
        <span className="font-medium text-gray-800 dark:text-gray-100">
          {product.title}
        </span>
      </div>

      <div className="flex-[2] text-gray-600 dark:text-gray-300">
        {product.category}
      </div>

      <div className="flex-[1] font-medium">
        ₹{product.price}
      </div>

      <div className="flex-[1]">{product.stock}</div>

      <div className="flex-[1]">
        <span className={` py-1 text-xs rounded-lg px-3 uppercase
          ${product.status === "active"
            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
            : "bg-gray-200 text-gray-600 dark:bg-gray-600/20 dark:text-gray-300"
          }`}>
          {product.status}
        </span>
      </div>

      <div className="flex-[2] flex justify-end gap-4">
        <button
          className="text-yellow-500 hover:underline"
          onClick={() => navigate(`/admin/products/update/${product.id}`)}
        >
          Edit
        </button>

        <button
          className="text-red-500 hover:underline"
          onClick={() => navigate(`/admin/products/delete/${product.id}`)}
        >
          Delete
        </button>
      </div>

    </div>
  );
}
