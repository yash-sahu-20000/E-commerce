import React, { useState } from "react";

export default function Orders() {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleAddress = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const orders = [
    {
      id: 101,
      date: "2026-01-10",
      status: "Delivered",
      total: 2999,
      phone: "9876543210",
      address: "Flat 302, Green Heights, Andheri East, Mumbai, Maharashtra 400069 fakldsjfekjf;lkadjviadsj fcionjewfcnieja fc;ieajfnc;idajfc daijfa;dljnf;adf;iajn",
      items: [
        { id: 1, name: "Flying Machine Jeans", qty: 1, price: 500 },
        { id: 2, name: "Roadster T-Shirt", qty: 2, price: 399 },
      ],
    },
    {
      id: 102,
      date: "2026-01-12",
      status: "Shipped",
      total: 2499,
      phone: "9123456780",
      address: "21, MG Road, Indiranagar, Bangalore, Karnataka 560038",
      items: [
        { id: 3, name: "Nike Sports Shoes", qty: 1, price: 2499 },
      ],
    },
    {
      id: 103,
      date: "2026-01-15",
      status: "Pending",
      total: 7499,
      phone: "9988776655",
      address: "B-12, Civil Lines, Jaipur, Rajasthan 302006",
      items: [
        { id: 4, name: "Fossil Watch", qty: 1, price: 7499 },
      ],
    },
  ];

  return (
    <div className="bg-primary dark:bg-gray-900 transition-colors dark:text-white mx-auto min-h-screen">
      <div className="max-w-[95%] mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>

        <div className="overflow-x-auto rounded-2xl shadow-md border dark:border-gray-700">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-sm uppercase tracking-wide">
                <th className="py-4 px-6 text-left">Order ID</th>
                <th className="py-4 px-6 text-left">Date</th>
                <th className="py-4 px-6 text-left">Status</th>
                <th className="py-4 px-6 text-left">Total</th>
                <th className="py-4 px-6 text-left">Phone</th>
                <th className="py-4 px-6 text-left">Address</th>
                <th className="py-4 px-6 text-left">Items</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`text-md ${
                    index % 2 === 0
                      ? "bg-white dark:bg-gray-800"
                      : "bg-gray-50 dark:bg-gray-900"
                  } hover:bg-gray-100 dark:hover:bg-gray-700 transition-all`}
                >
                  <td className="py-4 px-6 font-semibold">#{order.id}</td>

                  <td className="py-4 px-6">{order.date}</td>

                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="py-4 px-6 font-bold">₹{order.total}</td>

                  <td className="py-4 px-6">{order.phone}</td>

                  <td className="py-4 px-6 max-w-xs">
                    <p
                      className={`text-sm transition-all duration-200 ${
                        expandedOrderId === order.id ? "" : "line-clamp-1"
                      }`}
                    >
                      {order.address}
                    </p>

                    <button
                      onClick={() => toggleAddress(order.id)}
                      className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {expandedOrderId === order.id ? "Hide" : "View"}
                    </button>
                  </td>

                  <td className="py-4 px-6">
                    {order.items.map((item) => (
                      <div key={item.id}>
                        • {item.name} × {item.qty}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
