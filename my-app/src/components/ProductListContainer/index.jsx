import { FaTh, FaThList } from "react-icons/fa";
import ProductListCard from "../ProductListCard";
import ProductListRowCard from "../ProductListRowCard";
import { useState } from "react";

const products = [
  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/x/c/t/s-flsw-dht002-beige-spoweary-original-imahhm45zdpyyegc.jpeg?q=70",
    brand: "Flying Machine",
    title: "Women Wide Leg Killer",
    description: "Experience ultimate comfort and style with the Flying Machine Women Wide Leg Killer Jeans. Crafted from high-quality denim, these jeans feature a trendy wide-leg design that flatters every figure. Perfect for casual outings or a day at the office, they offer a relaxed fit without compromising on fashion. Pair them with your favorite top and accessories for a chic look that turns heads wherever you go.",
    rating: 4,
    oldPrice: 799,
    price: 500,
    discount: 8,
  },
    {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/x/c/t/s-flsw-dht002-beige-spoweary-original-imahhm45zdpyyegc.jpeg?q=70",
    brand: "Flying Machine",
    title: "Women Wide Leg Killer",
    description: "Experience ultimate comfort and style with the Flying Machine Women Wide Leg Killer Jeans. Crafted from high-quality denim, these jeans feature a trendy wide-leg design that flatters every figure. Perfect for casual outings or a day at the office, they offer a relaxed fit without compromising on fashion. Pair them with your favorite top and accessories for a chic look that turns heads wherever you go.",
    rating: 4,
    oldPrice: 799,
    price: 500,
    discount: 8,
  },  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/x/c/t/s-flsw-dht002-beige-spoweary-original-imahhm45zdpyyegc.jpeg?q=70",
    brand: "Flying Machine",
    title: "Women Wide Leg Killer",
    description: "Experience ultimate comfort and style with the Flying Machine Women Wide Leg Killer Jeans. Crafted from high-quality denim, these jeans feature a trendy wide-leg design that flatters every figure. Perfect for casual outings or a day at the office, they offer a relaxed fit without compromising on fashion. Pair them with your favorite top and accessories for a chic look that turns heads wherever you go.",
    rating: 4,
    oldPrice: 799,
    price: 500,
    discount: 8,
  },  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/x/c/t/s-flsw-dht002-beige-spoweary-original-imahhm45zdpyyegc.jpeg?q=70",
    brand: "Flying Machine",
    title: "Women Wide Leg Killer",
    description: "Experience ultimate comfort and style with the Flying Machine Women Wide Leg Killer Jeans. Crafted from high-quality denim, these jeans feature a trendy wide-leg design that flatters every figure. Perfect for casual outings or a day at the office, they offer a relaxed fit without compromising on fashion. Pair them with your favorite top and accessories for a chic look that turns heads wherever you go.",
    rating: 4,
    oldPrice: 799,
    price: 500,
    discount: 8,
  },  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/x/c/t/s-flsw-dht002-beige-spoweary-original-imahhm45zdpyyegc.jpeg?q=70",
    brand: "Flying Machine",
    title: "Women Wide Leg Killer",
    description: "Experience ultimate comfort and style with the Flying Machine Women Wide Leg Killer Jeans. Crafted from high-quality denim, these jeans feature a trendy wide-leg design that flatters every figure. Perfect for casual outings or a day at the office, they offer a relaxed fit without compromising on fashion. Pair them with your favorite top and accessories for a chic look that turns heads wherever you go.",
    rating: 4,
    oldPrice: 799,
    price: 500,
    discount: 8,
  },  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/x/c/t/s-flsw-dht002-beige-spoweary-original-imahhm45zdpyyegc.jpeg?q=70",
    brand: "Flying Machine",
    title: "Women Wide Leg Killer",
    description: "Experience ultimate comfort and style with the Flying Machine Women Wide Leg Killer Jeans. Crafted from high-quality denim, these jeans feature a trendy wide-leg design that flatters every figure. Perfect for casual outings or a day at the office, they offer a relaxed fit without compromising on fashion. Pair them with your favorite top and accessories for a chic look that turns heads wherever you go.",
    rating: 4,
    oldPrice: 799,
    price: 500,
    discount: 8,
  },  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/x/c/t/s-flsw-dht002-beige-spoweary-original-imahhm45zdpyyegc.jpeg?q=70",
    brand: "Flying Machine",
    title: "Women Wide Leg Killer",
    description: "Experience ultimate comfort and style with the Flying Machine Women Wide Leg Killer Jeans. Crafted from high-quality denim, these jeans feature a trendy wide-leg design that flatters every figure. Perfect for casual outings or a day at the office, they offer a relaxed fit without compromising on fashion. Pair them with your favorite top and accessories for a chic look that turns heads wherever you go.",
    rating: 4,
    oldPrice: 799,
    price: 500,
    discount: 8,
  },  
  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/x/c/t/s-flsw-dht002-beige-spoweary-original-imahhm45zdpyyegc.jpeg?q=70",
    brand: "Flying Machine",
    title: "Women Wide Leg Killer",
    description: "Experience ultimate comfort and style with the Flying Machine Women Wide Leg Killer Jeans. Crafted from high-quality denim, these jeans feature a trendy wide-leg design that flatters every figure. Perfect for casual outings or a day at the office, they offer a relaxed fit without compromising on fashion. Pair them with your favorite top and accessories for a chic look that turns heads wherever you go.",
    rating: 4,
    oldPrice: 799,
    price: 500,
    discount: 8,
  },  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/x/c/t/s-flsw-dht002-beige-spoweary-original-imahhm45zdpyyegc.jpeg?q=70",
    brand: "Flying Machine",
    title: "Women Wide Leg Killer",
    description: "Experience ultimate comfort and style with the Flying Machine Women Wide Leg Killer Jeans. Crafted from high-quality denim, these jeans feature a trendy wide-leg design that flatters every figure. Perfect for casual outings or a day at the office, they offer a relaxed fit without compromising on fashion. Pair them with your favorite top and accessories for a chic look that turns heads wherever you go.",
    rating: 4,
    oldPrice: 799,
    price: 500,
    discount: 8,
  },
  
];

export default function ProductListContainer() {

   const [view, setView] = useState("grid");

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8; 
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
    );



  return (
    <section className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600 dark:text-gray-300">
          There are {products.length} products.
        </p>
        <button
          onClick={() =>
            setView((prev) => (prev === "grid" ? "list" : "grid"))
          }
          className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition">
          {view === "grid" ? (
            <FaThList className="w-6 h-6" />
          ) : (
            <FaTh className="w-6 h-6" />
          )}
        </button>
      </div>
        {view === "grid" ? (
            <div className="flex flex-wrap gap-6">
            {currentProducts.map((product) => (
            <div
                key={product.id}
                className="
                w-full
                sm:w-[48%]
                lg:w-[23%]
                "
            >
                <ProductListCard product={product} />
            </div>
            ))}
        </div>
        ) : (
            <div className="flex flex-col gap-6">
                {currentProducts.map((product) => (
                <div
                    key={product.id}
                    className="w-full"
                >
                    <ProductListRowCard product={product} />
                </div>
                ))}
            </div>
        )}
        <div className="flex justify-center mt-10 gap-2">
            {Array.from(
                { length: Math.ceil(products.length / productsPerPage) },
                (_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded-md border transition
                    ${
                        currentPage === index + 1
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }
                    `}
                >
                    {index + 1}
                </button>
                )
            )}
        </div>

    </section>
  );
}
