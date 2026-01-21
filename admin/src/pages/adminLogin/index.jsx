import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'

export default function AdminLogin() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!formData.email || !formData.password) {
    toast.error("Please fill all fields");
    return;
  }
  
  setLoading(true);
  try {
    await login(formData);
    toast.success("Login successful");
    navigate("/admin");    
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);      
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Urban<span className="text-yellow-500">Cart</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Admin Panel Login
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@urbancart.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-red-400
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-red-400
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-3 rounded-md transition
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#ff5a5a] hover:bg-[#f31919]"
              }`}
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
          © {new Date().getFullYear()} UrbanCart Admin
        </p>
      </div>
    </div>
  );
}
