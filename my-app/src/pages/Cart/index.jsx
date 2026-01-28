import { useState, useEffect } from "react";
import { FaTrash, FaShoppingBag, FaArrowLeft } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

function Cart() {
  const ITEMS_PER_PAGE = 3;
  const { cart, updateCartItem, removeFromCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const totalPages = Math.ceil(cart.length / ITEMS_PER_PAGE);
  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  const paginatedItems = cart.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [cart.length, totalPages, currentPage]);

  const updateQty = (productId, qty) => {
    if (qty < 1) return;
    updateCartItem(productId, qty);
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.error("Please login to proceed to checkout");
      navigate("/login", { state: { from: "/cart" } });
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="bg-primary dark:bg-gray-900 min-h-screen transition-colors duration-300 dark:text-gray-100">
      <div className="max-w-[95%] mx-auto px-4 py-10">
        
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {cart.length} {cart.length === 1 ? "Item" : "Items"}
          </span>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-full mb-4 text-gray-400">
              <FaShoppingBag size={48} />
            </div>
            <p className="text-xl font-medium text-gray-500 dark:text-gray-400 mb-6">
              Your shopping bag is empty.
            </p>
            <Link
              to="/"
              className="flex items-center gap-2 bg-red-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-600 transition shadow-lg shadow-red-200 dark:shadow-none"
            >
              <FaArrowLeft size={14} /> Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="w-full lg:w-2/3 flex flex-col gap-5">
              {paginatedItems.map((item) => (
                <div
                  key={item.product._id}
                  className="flex flex-col sm:flex-row items-center gap-6 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 
                             bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900">
                    <img
                      src={item.product.images?.[0]}
                      alt={item.product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-lg leading-tight dark:text-white">
                        {item.product.title}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product._id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Price: <span className="text-gray-900 dark:text-gray-200 font-semibold">₹{item.product.price}</span>
                      {item.size && (
                        <> | Size: <span className="text-red-500 font-bold">{item.size}</span></>
                      )}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-900 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                        <button
                          onClick={() => updateQty(item.product._id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm disabled:opacity-30 transition-all font-bold"
                        >
                          −
                        </button>
                        <span className="w-10 text-center font-bold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.product._id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm transition-all font-bold"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-black text-gray-900 dark:text-white">
                          ₹{item.product.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              )}
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 sticky top-10">
                <h3 className="font-bold text-xl mb-6 border-b dark:border-gray-700 pb-4">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-500 dark:text-gray-400">
                    <span>Total Items</span>
                    <span className="font-bold text-gray-900 dark:text-white">{cart.length}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 dark:text-gray-400">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-900 dark:text-white">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 dark:text-gray-400 border-b dark:border-gray-700 pb-4">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold uppercase text-xs">Free</span>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <span className="font-bold text-lg">Total</span>
                    <p className="text-3xl font-black text-red-500">₹{subtotal}</p>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full text-white bg-red-500 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-red-200 dark:shadow-none hover:bg-red-600 active:scale-95 transition-all"
                >
                  Proceed to Checkout
                </button>
                
                <p className="mt-6 text-center text-[10px] text-gray-400 uppercase tracking-widest">
                  Secure Checkout Guaranteed
                </p>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;