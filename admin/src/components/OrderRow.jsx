import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const STATUS_OPTIONS = ["pending", "shipped", "delivered", "cancelled"];

export function OrderRow({ order, refetch }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getStatusStyles = (currentStatus) => {
    switch (currentStatus) {
      case "delivered": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "shipped": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "cancelled": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default: return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    }
  };

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    
    try {
      setLoading(true);
      await api.put(`/orders/${order._id}/status`, {
        status: newStatus,
      });
      toast.success(`Order marked as ${newStatus}`);
      if (refetch) refetch(); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center px-4 py-3 rounded-xl
      bg-gray-50 dark:bg-gray-800
      hover:bg-gray-100 dark:hover:bg-gray-700 transition group"
    >
      <div className="flex-[3] font-mono text-xs font-bold">
        #{order._id}
      </div>

      <div className="flex-[3] text-sm font-medium">
        <p className="truncate pr-2">{order.user?.name || "Deleted User"}</p>
      </div>

      
      <div className="flex-[2] font-bold text-sm">
        ₹{order.totalAmount.toLocaleString()}
      </div>

      <div className="flex-[2]">
        <select
          value={order.status}
          onChange={handleStatusChange}
          disabled={loading}
          className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase cursor-pointer
            border-none focus:ring-2 focus:ring-red-500 outline-none transition-all
            ${getStatusStyles(order.status)} 
            ${loading ? "opacity-50 cursor-not-allowed" : "opacity-100"}
          `}
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s} className="bg-white dark:bg-gray-800 text-black dark:text-white uppercase font-bold">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-[2] flex justify-end">
        <button
          onClick={() => navigate(`/admin/orders/${order._id}`)}
          className="text-yellow-500  px-3 py-1.5 "
        >
          View
        </button>
      </div>
    </div>
  );
}