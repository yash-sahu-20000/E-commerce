import React, { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import { useAuth } from "../../context/AuthContext";
import Pagination from "../../components/Pagination"; 
import { useNavigate } from "react-router-dom";
import api from "../../api/axios"; // Ensure you import your axios instance
import toast from "react-hot-toast";

export default function Orders() {
  const ITEMS_PER_PAGE = 5; 
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const navigate = useNavigate();
  
  const { isAuthenticated } = useAuth();

  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const { data, loading, error, refetch } = useFetch(user?._id ? `/orders/user/${user._id}` : null);

  const orders = data?.orders || [];

  const handleCancelOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;

    try {
      await api.put(`/orders/${orderId}/status`, { status: "cancelled" });
      toast.success("Order cancelled successfully");
      refetch();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to cancel order");
    }
  };

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const paginatedOrders = orders.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
  }, [orders.length, totalPages, currentPage]);

  const toggleAddress = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  if(!isAuthenticated) navigate('/login');
  if (loading) return <div className="p-10 text-center dark:text-white font-bold">Loading orders...</div>;
  if (error) return <div className="p-10 text-center text-red-500 font-bold font-mono">Error: {error.message}</div>;

  return (
    <div className="bg-black dark:bg-gray-900 transition-colors dark:text-white mx-auto min-h-screen">
      <div className="max-w-[95%] mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold">My Orders</h1>
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">{orders.length} Total</span>
        </div>

        {!orders.length ? (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl border dark:border-gray-700">
            <p className="text-xl font-medium text-gray-500">No orders placed yet.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto rounded-2xl shadow-md border dark:border-gray-700 mb-6">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700 text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 text-left">Order ID</th>
                    <th className="py-4 px-6 text-left">Date</th>
                    <th className="py-4 px-6 text-left">Status</th>
                    <th className="py-4 px-6 text-left">Total</th>
                    <th className="py-4 px-6 text-left">Items</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedOrders.map((order, index) => (
                    <tr key={order._id} className={`border-b dark:border-gray-700 ${index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"}`}>
                      <td className="py-4 px-6 font-mono text-xs font-semibold uppercase">#{order._id.slice(-6)}</td>
                      <td className="py-4 px-6 text-sm">{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                          order.status === "delivered" ? "bg-green-100 text-green-700" :
                          order.status === "cancelled" ? "bg-red-100 text-red-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-black text-lg">₹{order.totalAmount}</td>
                      <td className="py-4 px-6 text-sm">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="text-xs"><span className="text-red-500 font-bold">{item.quantity}x</span> {item.title}</div>
                        ))}
                      </td>
                      <td className="py-4 px-6 text-right">
                        {order.status === "pending" && (
                          <button
                            onClick={() => handleCancelOrder(order._id)}
                            className="text-[10px] bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-3 py-1 rounded-lg font-bold uppercase hover:bg-red-600 hover:text-white transition-all"
                          >
                            Cancel
                          </button>
                        )}
                        {order.status === "cancelled" && (
                          <span className="text-[10px] text-gray-400 font-bold uppercase italic">Cancelled</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
          </>
        )}
      </div>
    </div>
  );
}