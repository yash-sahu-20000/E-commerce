import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaCheckCircle, FaBox, FaArrowRight, FaHome } from "react-icons/fa";

export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const orderId = location.state?.orderId;

  if (!orderId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 dark:bg-gray-900 dark:text-white">
        <h2 className="text-xl font-bold mb-4">No order details found</h2>
        <Link to="/" className="text-red-500 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary dark:bg-gray-900 transition-colors flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
        
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-green-100 dark:bg-green-900/20 opacity-75"></div>
            <FaCheckCircle className="relative text-green-500 text-7xl" />
          </div>
        </div>

        <h1 className="text-3xl font-black mb-2 dark:text-white">Success!</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-4 mb-8 border border-dashed border-gray-200 dark:border-gray-700">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-1">
            Order Reference
          </span>
          <span className="text-lg font-mono font-bold text-red-500">
            #{orderId}
          </span>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/orders")}
            className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-4 rounded-2xl font-bold hover:bg-red-600 transition-all active:scale-95 shadow-lg shadow-red-200 dark:shadow-none"
          >
            <FaBox /> View My Orders
          </button>
          
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white py-4 rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
          >
            <FaHome /> Back to Shopping
          </button>
        </div>

        <div className="mt-8 pt-6 border-t dark:border-gray-700">
          <p className="text-xs text-gray-400">
            A confirmation email has been sent to your registered address. 
            Need help? <Link to="/contact" className="text-red-500 font-bold">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
}