import { FaBox, FaShoppingCart, FaRupeeSign, FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";
import StatCard from "../../components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex justify-between items-center bg-white dark:bg-gray-900
                      border rounded-xl p-6">
        
        <div className="flex flex-col gap-3 max-w-xl">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Good Morning, <br /> Cameron
          </h1>

          <p className="text-gray-500 dark:text-gray-400">
            Here's what happening on your store today. See the statistics at once.
          </p>

          <Link
            to="/admin/products/add"
            className="w-fit bg-red-600 text-white px-4 py-2 rounded-lg
                       hover:bg-red-700 transition"
          >
            + Add Product
          </Link>
        </div>

        <img
          src="https://plus.unsplash.com/premium_vector-1682303136986-bd37617f9b75?q=80&w=2678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="dashboard"
          className="w-64 hidden md:block rounded-lg"
        />
      </div>

      <div className="flex gap-4 flex-wrap">
        
        <StatCard
          title="New Orders"
          value="1,390"
          icon={<FaShoppingCart />}
          color="text-blue-600"
        />

        <StatCard
          title="Sales"
          value="₹57,890"
          icon={<FaRupeeSign />}
          color="text-green-600"
        />

        <StatCard
          title="Revenue"
          value="₹12,390"
          icon={<FaRupeeSign />}
          color="text-purple-600"
        />

        <StatCard
          title="Total Products"
          value="1,390"
          icon={<FaBox />}
          color="text-indigo-600"
        />
      </div>
    </div>
  );
}

