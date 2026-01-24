import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { OrderRow } from "../../../components/OrderRow";
import { useEffect, useState } from "react";
import Pagination from "../../../components/Pagination";

const ITEMS_PER_PAGE = 10;

export default function Orders() {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("/orders");
  const orders = data?.orders || [];


  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, orders.length]);


  if (loading) return <p className="text-center py-10 text-gray-400">Loading Orders...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;


  const filteredOrders = orders.filter((order) =>
    order._id.toLowerCase().includes(search.toLowerCase()) ||
    order.user?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  return (
    <div className="bg-white dark:text-white dark:bg-gray-900 rounded-xl shadow p-6">
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Orders</h1>

          <div className="relative">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search order..."
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 text-sm rounded-lg
                bg-gray-50 dark:bg-gray-800
                border border-gray-300 dark:border-gray-700
                focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </div>

      <div className="flex px-4 py-2 text-sm text-gray-500 border-b dark:border-gray-700">
        <div className="flex-[3]">Order ID</div>
        <div className="flex-[3]">Customer</div>
        <div className="flex-[2]">Total</div>
        <div className="flex-[2]">Status</div>
        <div className="flex-[2] text-right">Actions</div>
      </div>

      <div className="space-y-3 mt-3">
        {currentOrders.length === 0 ? (
          <p className="text-sm text-gray-400 text-center">No orders found</p>
        ) : (
          currentOrders.map((order) => (
            <OrderRow key={order._id} order={order} />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
