import { useState } from "react";
import toast from "react-hot-toast";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, address, city, state, zip } = formData;

    if (!name || !email || !phone || !address || !city || !state || !zip) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Order placed successfully 🎉");
    console.log("Checkout Data:", formData);
  };

  return (
    <div className="bg-primary dark:bg-gray-900 min-h-screen transition-colors dark:text-white">
      <div className="max-w-[95%] mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-6"
        >
          {/* LEFT — SHIPPING DETAILS */}
          <div className="w-full lg:w-2/3 bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">
              Shipping Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="input"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="input"
              />
              <input
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="input"
              />
              <input
                name="city"
                placeholder="City"
                onChange={handleChange}
                className="input"
              />
              <input
                name="state"
                placeholder="State"
                onChange={handleChange}
                className="input"
              />
              <input
                name="zip"
                placeholder="ZIP Code"
                onChange={handleChange}
                className="input"
              />
            </div>

            <textarea
              name="address"
              placeholder="Full Address"
              rows="3"
              onChange={handleChange}
              className="input mt-4"
            />

            {/* PAYMENT */}
            <h3 className="font-semibold text-lg mt-6 mb-3">
              Payment Method
            </h3>

            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={formData.payment === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-2 cursor-pointer opacity-50">
                <input type="radio" disabled />
                Online Payment (Coming Soon)
              </label>
            </div>
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 rounded-xl shadow p-6 h-fit">
            <h3 className="font-semibold text-lg mb-4 border-b pb-2 text-center">
              Order Summary
            </h3>

            <div className="flex justify-between text-sm mb-3">
              <span>Subtotal</span>
              <span>₹3298</span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>Tax</span>
              <span>₹0</span>
            </div>

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>₹3298</span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff5a5a] text-white py-3 rounded-md font-semibold hover:bg-[#f31919] transition"
            >
              PLACE ORDER
            </button>
          </div>
        </form>
      </div>

      {/* INPUT STYLE */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            background: transparent;
            outline: none;
          }
          .input:focus {
            border-color: #9ca3af;
          }
        `}
      </style>
    </div>
  );
}

export default Checkout;
