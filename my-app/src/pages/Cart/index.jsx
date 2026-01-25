import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

function Cart() {
  const ITEMS_PER_PAGE = 3;
  const { cart, updateCartItem, removeFromCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cart.length / ITEMS_PER_PAGE);

  const paginatedItems = cart.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const formatCurrency = (num) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);

  const updateQty = (productId, qty) => {
    console.log(productId, qty)
    if (qty < 1) return;
    updateCartItem(productId, qty);
  };

  const removeItem = (productId) => {
    removeFromCart(productId);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  return (
    <div className="bg-primary dark:bg-gray-900 min-h-screen dark:text-white">
      <div className="max-w-[95%] mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {paginatedItems.map((item) => (
                <div
                  key={item.product._id}
                  className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4 
                             bg-white dark:bg-gray-800 dark:border-gray-700 shadow hover:shadow-lg transition-shadow"
                >
                  <img
                    src={item.product.images?.[0]}
                    alt={item.product.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <h4 className="font-semibold">{item.product.title}</h4>
                    <p className="text-sm text-gray-500">
                      {formatCurrency(item.product.price)}
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() =>
                          updateQty(item.product._id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                        className="px-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40"
                      >
                        −
                      </button>

                      <span className="w-8 text-center">{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQty(item.product._id, item.quantity + 1)
                        }
                        className="px-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.product._id)}
                    className="text-red-500 hover:text-red-700 self-end"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}

              {totalPages > 1 && cart.length > ITEMS_PER_PAGE && (
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-1 border rounded disabled:opacity-40"
                  >
                    Prev
                  </button>

                  <span className="text-sm">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-1 border rounded disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2 h-fit border rounded-lg p-5 
                            bg-white dark:bg-gray-800 dark:border-gray-700 shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg mb-4 text-center border-b pb-2">
                Order Summary
              </h3>

              <div className="flex justify-between text-sm mb-3">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between text-sm mb-3">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <button
                onClick={() => toast.success("Checkout coming soon 🚀")}
                className="w-full text-white bg-red-500 py-3 rounded-md 
                           font-semibold hover:bg-[#ce1b1b]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
