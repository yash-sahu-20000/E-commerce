import { FaStar, FaShoppingCart } from "react-icons/fa";

export default function ProductListCard({ product }) {
  const {
    image,
    brand,
    title,
    rating,
    oldPrice,
    price,
    discount,
  } = product;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
        />

        {discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {discount}%
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">{brand}</p>

        <h3 className="font-semibold text-gray-800 dark:text-white truncate">
          {title}
        </h3>

        <div className="flex items-center gap-1 my-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating ? "text-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 line-through">
            ₹{oldPrice}
          </span>
          <span className="text-red-500 font-semibold text-lg">
            ₹{price}
          </span>
        </div>

        <button className="mt-4 w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition rounded-lg py-2 flex items-center justify-center gap-2">
          <FaShoppingCart />
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
