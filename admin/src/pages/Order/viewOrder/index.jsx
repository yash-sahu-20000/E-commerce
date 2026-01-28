import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPrint, FaTruck, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data, loading, error } = useFetch(`/orders/${id}`);
  const order = data?.response || data?.order; 

  if (loading) return <div className="p-10 text-center dark:text-white">Loading details...</div>;
  if (error) return <div className="p-10 text-center text-red-500 font-mono">Error: {error}</div>;
  if (!order) return <div className="p-10 text-center text-gray-400">Order not found.</div>;

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered": return "text-green-500 bg-green-50 dark:bg-green-900/20";
      case "shipped": return "text-blue-500 bg-blue-50 dark:bg-blue-900/20";
      case "cancelled": return "text-red-500 bg-red-50 dark:bg-red-900/20";
      default: return "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20";
    }
  };

  return (
    <div className=" mx-auto px-4 py-8 dark:text-white">
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors font-bold text-sm uppercase"
        >
          <FaArrowLeft /> Back to Orders
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b dark:border-gray-800 flex justify-between items-center">
              <h2 className="text-xl font-bold">Items Summary</h2>
              <span className="text-xs text-gray-400 font-mono">ID: {order._id}</span>
            </div>
            
            <div className="p-6 space-y-4">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 py-4 border-b last:border-0 dark:border-gray-800">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shrink-0">
                    <img 
                      src={item.product?.images?.[0] || 'https://via.placeholder.com/150'} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500">Unit Price: ₹{item.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">₹{item.price * item.quantity}</p>
                    <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span>₹{order.totalAmount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="text-green-500 font-bold uppercase text-[10px]">Free</span>
              </div>
              <div className="flex justify-between text-lg font-black pt-2 border-t dark:border-gray-700">
                <span>Total Amount</span>
                <span className="text-red-500">₹{order.totalAmount}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800 p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Order Status</h3>
            <div className={`px-4 py-3 rounded-xl font-black text-center uppercase text-sm ${getStatusColor(order.status)}`}>
              {order.status}
            </div>
            <p className="text-[10px] text-gray-400 mt-3 text-center uppercase tracking-tight">
              Placed on {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800 p-6 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-2 text-gray-400 mb-2 uppercase text-[10px] font-bold tracking-widest">
                <FaUser size={10} /> Customer
              </div>
              <p className="font-bold">{order.user?.name || "N/A"}</p>
              <p className="text-sm text-gray-500">{order.user?.email || "No email provided"}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-gray-400 mb-2 uppercase text-[10px] font-bold tracking-widest">
                <FaTruck size={10} /> Payment Method
              </div>
              <p className="font-bold uppercase text-sm">{order.paymentMethod}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-gray-400 mb-2 uppercase text-[10px] font-bold tracking-widest">
                <FaMapMarkerAlt size={10} /> Shipping Address
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {order.shippingAddress}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}