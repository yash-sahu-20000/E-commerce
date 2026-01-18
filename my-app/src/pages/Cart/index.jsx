import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const ITEMS_PER_PAGE = 3;

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 799,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    },
    {
      id: 2,
      name: "Stylish Sneakers",
      price: 2499,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    },
    {
      id: 3,
      name: "Stylish Sneakers",
      price: 2499,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    },
    {
      id: 4,
      name: "Stylish Sneakers",
      price: 2499,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    },
    {
      id: 5,
      name: "Stylish Sneakers",
      price: 2499,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    },
    {
      id: 6,
      name: "Stylish Sneakers",
      price: 2499,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    },
    {
      id: 7,
      name: "Stylish Sneakers",
      price: 2499,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    },
    {
      id: 8,
      name: "Stylish Sneakers",
      price: 2499,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cartItems.length / ITEMS_PER_PAGE);

  const paginatedItems = cartItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const updateQty = (id, qty) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, qty) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => {
      const updated = items.filter((item) => item.id !== id);
      const newTotalPages = Math.ceil(updated.length / ITEMS_PER_PAGE);
      if (currentPage > newTotalPages) {
        setCurrentPage(Math.max(1, newTotalPages));
      }
      return updated;
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-primary dark:bg-gray-900 min-h-screen transition-colors dark:text-white">
      <div className="max-w-[95%] mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
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
                          updateQty(item.id, item.quantity - 1)
                        }
                        className="px-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        −
                      </button>
                      <span className="w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQty(item.id, item.quantity + 1)
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
                      setCurrentPage((p) =>
                        Math.min(totalPages, p + 1)
                      )
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-1 border rounded disabled:opacity-40 hover:bg-red-500 hover:text-white"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2 h-fit border rounded-lg p-5 bg-white dark:bg-gray-800 dark:border-gray-700 shadow">
              <h3 className="font-semibold text-lg mb-4 text-center border-b pb-2">
                Order Summary
              </h3>

              <div className="flex justify-between text-sm mb-3">
                <span>Total Items</span>
                <span>{cartItems.length}</span>
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

              <button className="w-full text-white bg-red-500 py-3 rounded-md font-semibold hover:bg-[#ce1b1b] transition">
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
