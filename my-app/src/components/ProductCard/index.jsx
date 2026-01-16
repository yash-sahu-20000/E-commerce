import { FaHeart, FaShareAlt, FaExpandAlt, FaStar } from "react-icons/fa";

export default function ProductCard() {
  return (
    <div className="w-[280px] bg-white dark:bg-gray-800 rounded-xl 
                    shadow-md hover:shadow-lg transition 
                    overflow-hidden relative text-gray-900 dark:text-gray-100">
      
      <span className="absolute top-3 left-3 bg-red-500 text-white 
                       text-sm font-semibold px-2 py-1 rounded-full z-10">
        8%
      </span>

      <div className="relative group">
        <img
          src="https://images.unsplash.com/photo-1542272604-787c3835535d"
          alt="product"
          className="w-full h-[250px] object-cover group-hover:scale-105
                     transition-transform duration-300"
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 
                        space-y-3 opacity-0 group-hover:opacity-100 transition">
          <IconButton icon={<FaExpandAlt />} />
          <IconButton icon={<FaShareAlt />} />
          <IconButton icon={<FaHeart />} />
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Flying Machine
        </p>

        <h3 className="font-semibold truncate">
          Women Wide Leg Killer Jeans
        </h3>

        <div className="flex items-center gap-1 my-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-sm" />
          ))}
        </div>

        <div className="flex items-center justify-between my-3">
          <span className="text-gray-400 line-through">
            ₹1999.00
          </span>
          <span className="text-red-500 font-bold text-lg">
            ₹500.00
          </span>
        </div>

        <button
          className="w-full border-2 border-red-500 text-red-500 
                     py-2 rounded-lg font-semibold
                     hover:bg-red-500 hover:text-white
                     dark:hover:bg-red-600 transition
                     flex items-center justify-center gap-2"
        >
          🛒 ADD TO CART
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
