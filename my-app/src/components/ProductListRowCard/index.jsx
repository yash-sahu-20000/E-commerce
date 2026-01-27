import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProductListRowCard({ product }) {

  const navigate = useNavigate();

  const imageUrl =
    product.images?.[0] || "https://via.placeholder.com/150";

  const handleClick = () =>{
    navigate(`/productdescription/${product._id}`)
  }

  return (
    <div className="flex gap-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 hover:cursor-pointer" onClick={handleClick}> 
      <div className="relative w-64 flex-shrink-0">
        <img
          src={imageUrl}
          alt={product.title}
          className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
        />

        {true && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            5%
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            {product.brand || "Brand"}
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {product.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {product.description || "No description available"}
          </p>

          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 mb-4">
            {product.oldPrice && (
              <span className="text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>
            )}
            <span className="text-red-500 text-xl font-semibold">
              ₹{product.price}
            </span>
          </div>
        </div>

        <button className="w-max flex items-center gap-2 border border-red-500 text-red-500 px-6 py-2 rounded-md hover:bg-red-500 hover:text-white transition">
          <FaShoppingCart />
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
