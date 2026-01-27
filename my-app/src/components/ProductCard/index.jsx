import { FaHeart, FaShareAlt, FaExpandAlt, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { _id, images, title, rating, price, stock } = product;
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (stock === 0 || isAdding) return;

    try {
      setIsAdding(true);
      await addToCart(_id, 1);
    } finally {
      setIsAdding(false);
    }
  };


  return (
    <div
      className="w-[280px] bg-white dark:bg-gray-800 rounded-xl 
                 shadow-md hover:shadow-lg transition 
                 overflow-hidden relative text-gray-900 dark:text-gray-100"
      
    >
      <span className="absolute top-3 left-3 bg-red-500 text-white 
                       text-sm font-semibold px-2 py-1 rounded-full z-10">
        8%
      </span>

      <div className="relative group">
        <img
          src={images?.[0] || "/placeholder.png"}
          alt={title}
          className="w-full h-[250px] object-cover 
                     group-hover:scale-105 transition-transform duration-300"
        />

        <div
          className="absolute right-3 top-1/2 -translate-y-1/2 
                     space-y-3 opacity-0 group-hover:opacity-100 transition"
        >
          <IconButton icon={<FaExpandAlt />} />
          <IconButton icon={<FaShareAlt />} />
          <IconButton icon={<FaHeart />} />
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          brand
        </p>

        <h3 className="font-semibold truncate">
          {title}
        </h3>

        <div className="flex items-center gap-1 my-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <FaStar
              key={s}
              size={14}
              className={`
                transition-colors
                ${rating >= s ? "text-yellow-400" : "text-gray-300"}
              `}
            />
          ))}
        </div>

        <div className="flex items-center justify-between my-3">
          <span className="text-gray-400 line-through">
            ₹{price}
          </span>
          <span className="text-red-500 font-bold text-lg">
            ₹{price}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={stock === 0 || isAdding}
          className={`w-full py-2 rounded-lg font-semibold
            flex items-center justify-center gap-2 transition
            ${
              stock === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : isAdding
                ? "bg-red-400 text-white cursor-wait"
                : "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            }`}
        >
          {isAdding ? "ADDING..." : stock === 0 ? "OUT OF STOCK" : "🛒 ADD TO CART"}
        </button>
      </div>
    </div>
  );
}

function IconButton({ icon }) {
  return (
    <div
      className="bg-white dark:bg-gray-700 
                 text-gray-700 dark:text-gray-200
                 p-3 rounded-full shadow cursor-pointer
                 hover:bg-red-500 hover:text-white transition"
    >
      {icon}
    </div>
  );
}
