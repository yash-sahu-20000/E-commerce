import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Pagination from "../../../components/Pagination";

const statusStyles = {
  pending: "bg-yellow-500/20 text-yellow-400",
  shipped: "bg-blue-500/20 text-blue-400",
  delivered: "bg-green-500/20 text-green-400",
  cancelled: "bg-red-500/20 text-red-400",
};

const ITEMS_PER_PAGE = 5;

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "ORD-101",
      customer: "Yash Sahu",
      address:
        "yash@gmail.com jdsalkf fadj sf alsdkjf. fjal;f jds ;fjas f;ja",
      amount: 2499,
      status: "pending",
    },
    {
      id: "ORD-102",
      customer: "Amit Sharma",
      address: "amit@gmail.com",
      amount: 1599,
      status: "shipped",
    },
    {
      id: "ORD-103",
      customer: "Rohit Verma",
      address: "rohit@gmail.com",
      amount: 3499,
      status: "delivered",
    },
    {
      id: "ORD-104",
      customer: "Rohit Verma",
      address: "rohit@gmail.com",
      amount: 3499,
      status: "delivered",
    },
    {
      id: "ORD-105",
      customer: "Rohit Verma",
      address: "rohit@gmail.com",
      amount: 3499,
      status: "delivered",
    },
    {
      id: "ORD-106",
      customer: "Rohit Verma",
      address: "rohit@gmail.com",
      amount: 3499,
      status: "delivered",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentOrders = orders.slice(startIndex, endIndex);

  const updateStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-xl shadow p-6">

      {/* HEADER */}
      <div className="flex items-center gap-6 mb-6">
        <h1 className="text-2xl font-semibold">Orders</h1>

        <div className="relative">
          <FaSearch className="absolute top-2.5 left-3 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search order..."
            className="pl-10 pr-4 py-2 text-sm rounded-lg
            bg-gray-50 dark:bg-gray-800
            border border-gray-300 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {/* TABLE HEADER */}
      <div className="flex px-4 py-2 text-sm text-gray-400 border-b dark:border-gray-700">
        <div className="flex-[1.5]">Order ID</div>
        <div className="flex-[2]">Customer</div>
        <div className="flex-[3]">Address</div>
        <div className="flex-[1.5]">Amount</div>
        <div className="flex-[1.5]">Status</div>
        <div className="flex-[2] text-right">Actions</div>
      </div>

      {/* ROWS */}
      <div className="space-y-3 mt-3">
        {currentOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-center px-4 py-4 rounded-xl
            bg-gray-50 dark:bg-gray-800
            hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <div className="flex-[1.5] font-medium">{order.id}</div>

            <div className="flex-[2]">{order.customer}</div>

            <div className="flex-[3] text-gray-500 dark:text-gray-300 break-words">
              {order.address}
            </div>

            <div className="flex-[1.5] font-semibold">₹{order.amount}</div>

            <div className="flex-[1.5]">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
                ${statusStyles[order.status]}`}
              >
                {order.status}
              </span>
            </div>

            <div className="flex-[2] flex justify-end">
              <select
                value={order.status}
                onChange={(e) =>
                  updateStatus(order.id, e.target.value)
                }
                className="bg-white/10 border border-white/10 rounded-lg
                px-3 py-2 text-sm focus:ring-2 focus:ring-red-400"
              >
                <option value="pending">Pending</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
