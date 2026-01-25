import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/register", { name, email, password, role:'user' });

      const { user, token } = res.data;

      login({ ...user, token });

      toast.success("Registration successful!");
      navigate("/"); 

    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || "Registration failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary dark:bg-gray-900 transition-colors dark:text-white mx-auto min-h-screen">
      <div className="flex items-center justify-center p-4">
        <div className="w-full bg-white dark:bg-gray-800 max-w-md rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Create your account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="mb-5">
              <input
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="mb-5 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="mb-6 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-semibold py-3 rounded-md transition ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff5a5a] hover:bg-[#f31919]"
              }`}
            >
              {loading ? "Registering..." : "REGISTER"}
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link className="text-[#ff5a5a] font-semibold cursor-pointer" to="/login">
              Login
            </Link>
          </p>

          <div className="text-center text-sm text-gray-500 my-6">
            Or continue with social account
          </div>

          <button className="w-full flex items-center justify-center gap-3 bg-transparent py-3 rounded-md font-semibold border transition hover:bg-gray-100 dark:hover:bg-gray-700">
            <FcGoogle size={22} />
            SIGN UP WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
