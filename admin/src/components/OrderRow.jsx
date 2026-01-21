import { useNavigate } from "react-router-dom";

export function OrderRow({ order }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center px-4 py-3 rounded-xl
      bg-gray-50 dark:bg-gray-800
      hover:bg-gray-100 dark:hover:bg-gray-700 transition">

      <div className="flex-[2] font-medium">#{order.id}</div>

      <div className="flex-[3]">{order.user}</div>

      <div className="flex-[2] text-gray-600 dark:text-gray-300">
        {order.date}
      </div>

      <div className="flex-[2] font-medium">₹{order.amount}</div>

      <div className="flex-[2]">{order.payment}</div>

      <div className="flex-[2]">
        <span
          className={`px-2 py-1 text-xs rounded-full
          ${order.status === "Delivered"
            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300"
          }`}
        >
          {order.status}
        </span>
      </div>

      <div className="flex-[2] flex justify-end">
        <button
          className="text-blue-500 hover:underline"
          onClick={() =>
            navigate(`/admin/orders/${order.id}`)
          }
        >
          View
        </button>
      </div>
    </div>
  );
}
