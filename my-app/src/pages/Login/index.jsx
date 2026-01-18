import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ simulate async API call
  const fakeLoginApi = async (email, password) => {
    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email === "test@test.com" && password === "123456") {
      return { email, name: "John Doe", token: "mock-jwt-token" };
    } else {
      throw new Error("Invalid email or password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const userData = await fakeLoginApi(email, password);

      login(userData);

      toast.success("Login successful");
      navigate("/");

    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary dark:bg-gray-900 transition-colors dark:text-white mx-auto">
      <div className="flex items-center justify-center p-4">
        <div className="w-full bg-white dark:bg-gray-800 max-w-md rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Login to your account
          </h2>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="mb-3 relative">
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

            <div className="text-left mb-6">
              <button type="button" className="text-sm font-medium hover:underline">
                Forgot Password?
              </button>
            </div>

            <button
              disabled={loading}
              className={`w-full text-white font-semibold py-3 rounded-md transition ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff5a5a] hover:bg-[#f31919]"
              }`}
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Not Registered?{" "}
            <Link className="text-[#ff5a5a] font-semibold cursor-pointer" to="/register">
              Sign Up
            </Link>
          </p>

          <div className="text-center text-sm text-gray-500 my-6">
            Or continue with social account
          </div>

          <button className="w-full flex items-center justify-center gap-3 bg-transparent py-3 rounded-md font-semibold border transition hover:bg-gray-100 dark:hover:bg-gray-700">
            <FcGoogle size={22} />
            LOGIN WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
