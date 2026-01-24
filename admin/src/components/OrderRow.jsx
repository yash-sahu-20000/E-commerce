import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const STATUS_OPTIONS = ["pending", "shipped", "delivered", "cancelled"];

export function OrderRow({ order }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);

    try {
      setLoading(true);
      await api.put(`/orders/${order._id}/status`, {
        status: newStatus,
      });
      toast.success("Order status updated");
    } catch (error) {
      toast.error("Failed to update status");
      setStatus(order.status); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center px-4 py-3 rounded-xl
      bg-gray-50 dark:bg-gray-800
      hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      <div className="flex-[3] font-mono text-sm">
        #{order._id.slice(-6)}
      </div>

      <div className="flex-[3]">
        {order.user?.name || "Guest"}
      </div>

      <div className="flex-[2] font-semibold">
        ₹{order.totalAmount}
      </div>

      <div className="flex-[2]">
        <select
          value={status}
          onChange={handleStatusChange}
          disabled={loading}
          className={`px-2 py-1 text-xs rounded-full
            bg-white dark:bg-gray-700
            border border-gray-300 dark:border-gray-600
            focus:outline-none
          `}
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-[2] flex justify-end">
        <button
          onClick={() => navigate(`/admin/orders/${order._id}`)}
          className="text-red-500 hover:underline"
        >
          View
        </button>
      </div>
    </div>
  );
}
