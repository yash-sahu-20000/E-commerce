import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTruck, FaBoxOpen } from "react-icons/fa";

export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId;

  useEffect(() => {
    if (!orderId) {
      const timer = setTimeout(() => navigate("/"), 5000);
      return () => clearTimeout(timer);
    }
  }, [orderId, navigate]);

  if (!orderId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-2xl font-bold">No order found</h2>
        <p className="text-gray-500 mt-2">Redirecting you to home page...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          
          <div className="bg-green-500 p-8 flex flex-col items-center text-white">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md mb-4 animate-bounce">
              <FaCheckCircle size={48} />
            </div>
            <h1 className="text-3xl font-bold">Order Confirmed!</h1>
            <p className="opacity-90 mt-2">Thank you for shopping with us.</p>
          </div>

          <div className="p-8">
            <div className="text-center mb-10">
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold">
                Order Number
              </p>
              <h2 className="text-2xl font-mono font-bold text-gray-800 dark:text-white mt-1">
                #{orderId}
              </h2>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                  <FaBoxOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">Order Placed</h4>
                  <p className="text-sm text-gray-500">Your order has been saved and is being processed.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 opacity-50">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                  <FaTruck size={20} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">Shipped</h4>
                  <p className="text-sm text-gray-500">Expected delivery within 3-5 business days.</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/30 p-4 rounded-2xl mb-8">
              <p className="text-sm text-orange-800 dark:text-orange-300 leading-relaxed text-center">
                <strong>Note:</strong> Since you chose <strong>Cash on Delivery</strong>, please keep the exact amount ready to ensure a smooth delivery experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/orders"
                className="flex-1 text-center py-4 rounded-xl border border-gray-200 dark:border-gray-700 font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all dark:text-white"
              >
                View My Orders
              </Link>
              <Link
                to="/"
                className="flex-1 text-center py-4 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-200 dark:shadow-none"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-500 text-sm">
          Need help with your order? <Link to="/contact" className="text-red-500 underline">Contact Support</Link>
        </p>
      </div>
    </div>
  );
}