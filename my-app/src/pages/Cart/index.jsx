import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import toast from 'react-hot-toast'

function Cart() {
  const ITEMS_PER_PAGE = 3;
  const { cart, dispatch } = useCart();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cart.length / ITEMS_PER_PAGE);

  const paginatedItems = cart.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const updateQty = (id, qty) => {
    if (qty < 1) return; 
    dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });

    const newTotalPages = Math.ceil((cart.length - 1) / ITEMS_PER_PAGE);
    if (currentPage > newTotalPages) {
      setCurrentPage(Math.max(1, newTotalPages));
    }
  };



  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="bg-primary dark:bg-gray-900 min-h-screen transition-colors dark:text-white ">
      <div className="max-w-[95%] mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {paginatedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700 shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  <div className="flex-1 w-full">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">₹{item.price}</p>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() =>
                          updateQty(item.id, item.qty - 1)
                        }
                        className="px-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        −
                      </button>
                      <span className="w-8 text-center">{item.qty}</span>
                      <button
                        onClick={() =>
                          updateQty(item.id, item.qty + 1)
                        }
                        className="px-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 self-end sm:self-center"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-4">
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.max(1, p - 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-1 border rounded disabled:opacity-40 hover:bg-red-500 hover:text-white"
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
                    className="px-4 py-1 border rounded disabled:opacity-40 hover:bg-red-500 hover:text-white"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/2 h-fit border rounded-lg p-5 bg-white dark:bg-gray-800 dark:border-gray-700 shadow">
              <h3 className="font-semibold text-lg mb-4 text-center border-b pb-2">
                Order Summary
              </h3>

              <div className="flex justify-between text-sm mb-3">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between text-sm mb-3">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-sm mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between text-sm mb-3">
                <span>Tax & GST</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>₹{subtotal}</span>
              </div>

              <button
                onClick={() => toast.success("Proceed to checkout")}
                className="w-full text-white bg-red-500 py-3 rounded-md font-semibold hover:bg-[#ce1b1b] transition"
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
