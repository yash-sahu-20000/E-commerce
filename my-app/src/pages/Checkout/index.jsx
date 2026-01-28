import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../api/axios";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart(); 
  
  const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: savedUser.name || "",
    email: savedUser.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    payment: "cod",
  });

  const totalAmount = cart.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, phone, address, city, state, zip } = formData;
    if (!name || !email || !phone || !address || !city || !state || !zip) {
      return toast.error("Please fill all required fields");
    }

    if (cart.length === 0) {
      return toast.error("Your cart is empty!");
    }

    setLoading(true);

    try {
      if (formData.payment === "cod") {
        const response = await api.post("/orders/create-order", {
          ...formData,
          items: cart,  
          total: totalAmount,
          userid: savedUser._id
        });
        
        if (response.data.success) {
          clearCart();
          toast.success("Order placed successfully! 🎉");
          navigate("/order-success", { 
            state: { orderId: response.data.order._id },
            replace: true 
          });
        }
      } else {
        toast.error('Online Payment is coming soon');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Order failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border outline-none transition-all 
                      border-gray-200 dark:border-gray-700 dark:text-white
                      focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:bg-gray-700`;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 dark:text-gray-100">
      <div className="max-w-[95%] mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Checkout</h2>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-2/3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
            <h3 className="font-bold text-xl mb-6 border-b dark:border-gray-700 pb-3">
              Shipping Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Full Name</label>
                <input name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" required />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email Address</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" required />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone Number</label>
                <input name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 98765 43210" required />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">City</label>
                <input name="city" value={formData.city} onChange={handleChange} className={inputClass} placeholder="Mumbai" required />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">State</label>
                <input name="state" value={formData.state} onChange={handleChange} className={inputClass} placeholder="Maharashtra" required />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">ZIP Code</label>
                <input name="zip" value={formData.zip} onChange={handleChange} className={inputClass} placeholder="400001" required />
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Full Address</label>
              <textarea name="address" value={formData.address} rows="3" onChange={handleChange} className={inputClass} placeholder="Street name, Building, Apartment..." required />
            </div>

            <h3 className="font-bold text-xl mt-10 mb-5 border-b dark:border-gray-700 pb-3">
              Payment Method
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${formData.payment === 'cod' ? 'border-red-500 bg-red-50 dark:bg-red-500/10' : 'border-gray-200 dark:border-gray-700'}`}>
                <input type="radio" name="payment" value="cod" checked={formData.payment === "cod"} onChange={handleChange} className="accent-red-500 w-4 h-4" />
                <span className="font-medium">Cash on Delivery</span>
              </label>

              <label className="flex items-center gap-3 p-4 border border-gray-100 dark:border-gray-800 rounded-xl opacity-40 cursor-not-allowed bg-gray-50 dark:bg-gray-900/50">
                <input type="radio" disabled />
                <span className="font-medium text-gray-500">Online Payment (Soon)</span>
              </label>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-fit sticky top-6">
              <h3 className="font-bold text-xl mb-6 border-b dark:border-gray-700 pb-3">
                Order Summary
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>No of Items</span>
                  <span className="font-medium text-gray-900 dark:text-white">{cart.length}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹{totalAmount}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium uppercase text-xs ">Free</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 border-b dark:border-gray-700 pb-4">
                  <span>Tax</span>
                  <span className="font-medium text-gray-900 dark:text-white">₹0</span>
                </div>
                <div className="flex justify-between font-bold text-2xl pt-2">
                  <span>Total</span>
                  <span className="text-red-500">₹{totalAmount}</span>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full mt-8 bg-red-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-all active:scale-[0.98] shadow-lg shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "PROCESSING..." : "PLACE ORDER"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;