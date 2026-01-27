import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProductListCard( {product} ) {
  const { _id, images, title, rating, price } = product;

  const { cart, dispatch } = useCart();
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();

  const inCart = cart?.some(item => item.id === _id);

  const handleClick = () =>{
    navigate(`/productdescription/${_id}`)
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    addToCart(product._id, 1);
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition overflow-hidden hover:cursor-pointer" onClick={handleClick}>
      <div className="relative">
        <img
          src={images?.[0] || './placeholder.png'}
          alt={title}
          className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
        />
        {true && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            5%
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">brand</p>
        <h3 className="font-semibold text-gray-800 dark:text-white truncate">
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

        <div className="flex items-center gap-3">
          <span className="text-gray-400 line-through">₹{price}</span>
          <span className="text-red-500 font-semibold text-lg">₹{price}</span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={inCart}
          className={`mt-4 w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition rounded-lg py-2 flex items-center justify-center gap-2 ${
            inCart ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaShoppingCart />
          {inCart ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
