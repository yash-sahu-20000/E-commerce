import { FaSearch, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { OrderRow } from "../../../components/OrderRow";
import { useEffect, useState } from "react";
import Pagination from "../../../components/Pagination";

const ITEMS_PER_PAGE = 5;

export default function Orders() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { data, loading, error, refetch } = useFetch("/orders");
  const orders = data?.response || [];

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter, orders.length]);

  if (loading) return <p className="text-center py-10 text-gray-400">Loading orders...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

const filteredOrders = orders.filter((order) => {
  const searchTerm = search.toLowerCase();
  
  const matchesSearch = 
    order._id.toLowerCase().includes(searchTerm) ||
    order.user?.name?.toLowerCase().includes(searchTerm) ||
    order.user?.email?.toLowerCase().includes(searchTerm) ||
    order.totalAmount?.toString().includes(searchTerm);

  const matchesStatus = statusFilter === "all" || order.status === statusFilter;

  return matchesSearch && matchesStatus;
});

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Orders</h1>

          <div className="relative">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search order ID or customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 text-sm rounded-lg
                bg-gray-50 dark:bg-gray-800
                border border-gray-300 dark:border-gray-700
                focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 outline-none"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="flex px-4 py-2 text-sm text-gray-500 border-b dark:border-gray-700 font-medium">
        <div className="flex-[3]">Order ID</div>
        <div className="flex-[3]">Customer</div>
        <div className="flex-[2]">Total</div>
        <div className="flex-[2]">Status</div>
        <div className="flex-[2] text-right">Actions</div>
      </div>

      <div className="space-y-3 mt-3">
        {currentOrders.length > 0 ? (
          currentOrders.map((order) => (
            <OrderRow 
              key={order._id} 
              order={order} 
              refetch={refetch} 
            />
          ))
        ) : (
          <p className="text-center text-gray-400 py-10">
            No orders found
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}