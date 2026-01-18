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
    description:
      "Experience ultimate comfort and style with these wide-leg jeans. Perfect for casual or office outings.",
    rating: 4,
    oldPrice: 799,
    price: 500,
    discount: 8,
  },
  {
    id: 2,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/o/v/xl-ts85-vebnor-original-imahhsn6swysfz9p.jpeg?q=70",
       brand: "Roadster",
    title: "Casual T-Shirt",
    description:
      "Comfortable cotton t-shirt, perfect for daily wear and casual outings.",
    rating: 5,
    oldPrice: 699,
    price: 399,
    discount: 43,
  },
  {
    id: 3,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/n/q/s/l-frml-st2-vebnor-original-imahjrx47nu9n6tg.jpeg?q=70",
       brand: "Nike",
    title: "Sports Shoes",
    description:
      "Lightweight running shoes designed for comfort and performance.",
    rating: 4,
    oldPrice: 2999,
    price: 2499,
    discount: 17,
  },
  {
    id: 4,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/u/0/m-659874-try-this-original-imaha4yaggrnszxc.jpeg?q=70",
      brand: "Fossil",
    title: "Analog Watch",
    description: "Elegant analog-digital watch, perfect for formal and casual wear.",
    rating: 3,
    oldPrice: 8999,
    price: 7499,
    discount: 17,
  },
  {
    id: 5,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/u/0/m-659874-try-this-original-imaha4yaggrnszxc.jpeg?q=70",
        brand: "Wildcraft",
    title: "Travel Backpack",
    description: "Durable travel backpack with multiple compartments for daily use.",
    rating: 5,
    oldPrice: 3999,
    price: 2999,
    discount: 25,
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
