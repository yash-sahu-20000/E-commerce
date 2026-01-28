import React, { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import { useAuth } from "../../context/AuthContext";
import Pagination from "../../components/Pagination"; 
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const ITEMS_PER_PAGE = 5; 
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const navigate = useNavigate();
  
  const { isAuthenticated } = useAuth();

  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const { data, loading, error } = useFetch(user?._id ? `/orders/user/${user._id}` : null);

  const orders = data?.orders || [];

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  
  const paginatedOrders = orders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [orders.length, totalPages, currentPage]);

  const toggleAddress = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  if(!isAuthenticated){
    navigate('/login');
  }
  if (loading) return <div className="p-10 text-center dark:text-white font-bold">Loading orders...</div>;
  if (error) return <div className="p-10 text-center text-red-500 font-bold font-mono">Error: {error.message}</div>;

  return (
    <div className="bg-primary dark:bg-gray-900 transition-colors dark:text-white mx-auto min-h-screen">
      <div className="max-w-[95%] mx-auto px-4 py-10">
        
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold">My Orders</h1>
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {orders.length} Total
          </span>
        </div>

        {!orders.length ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-xl font-medium text-gray-500 dark:text-gray-400">No orders placed yet.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto rounded-2xl shadow-md border dark:border-gray-700 mb-6">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700 text-sm uppercase tracking-wide">
                    <th className="py-4 px-6 text-left">Order ID</th>
                    <th className="py-4 px-6 text-left">Date</th>
                    <th className="py-4 px-6 text-left">Status</th>
                    <th className="py-4 px-6 text-left">Payment</th>
                    <th className="py-4 px-6 text-left">Total</th>
                    <th className="py-4 px-6 text-left">Address</th>
                    <th className="py-4 px-6 text-left">Items</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedOrders.map((order, index) => (
                    <tr
                      key={order._id}
                      className={`text-md border-b dark:border-gray-700 ${
                        index % 2 === 0
                          ? "bg-white dark:bg-gray-800"
                          : "bg-gray-50 dark:bg-gray-900"
                      } hover:bg-gray-100 dark:hover:bg-gray-700 transition-all`}
                    >
                      <td className="py-4 px-6 font-mono text-xs font-semibold">
                        #{order._id.slice(-6).toUpperCase()}
                      </td>

                      <td className="py-4 px-6 text-sm">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>

                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                            order.status === "delivered"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                              : order.status === "shipped"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-xs uppercase font-bold text-gray-500">
                        {order.paymentMethod}
                      </td>

                      <td className="py-4 px-6 font-black text-lg">₹{order.totalAmount}</td>

                      <td className="py-4 px-6 max-w-xs">
                        <p className={`text-xs text-gray-600 dark:text-gray-400 ${expandedOrderId === order._id ? "" : "line-clamp-1"}`}>
                          {order.shippingAddress}
                        </p>
                        <button
                          onClick={() => toggleAddress(order._id)}
                          className="mt-1 text-[10px] font-bold text-blue-500 uppercase hover:underline"
                        >
                          {expandedOrderId === order._id ? "Hide" : "Show Address"}
                        </button>
                      </td>

                      <td className="py-4 px-6 text-sm">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="whitespace-nowrap text-xs">
                            <span className="text-red-500 font-bold">{item.quantity}x</span> {item.title}
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}