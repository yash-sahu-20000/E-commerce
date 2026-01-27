import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";
import { FaStar } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";

export default function ProductDescription() {
  const { id } = useParams();

  const { data, loading, error} = useFetch(`/products/${id}`);
  console.log(data)
  const product = data?.product

  if (loading) return <Skeleton />;
  if (!product) return <p className="p-10">Product not found</p>;

  return (
    <div className="bg-primary dark:bg-gray-900 min-h-screen dark:text-white transition-colors">
      <div className="max-w-[95%] mx-auto px-4 py-10 flex flex-col md:flex-row gap-12">
        <ProductImages images={product.images} />
        <ProductInfo product={product} />
      </div>

      <div className="max-w-[95%] mx-auto px-4 pb-12">
        <ProductTabs
          productId={product._id}
          description={product.description}
        />
      </div>
    </div>
  );
}


function ProductImages({ images = [] }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex gap-4 w-full md:w-1/2">
      <div className="flex flex-col gap-3">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelected(img)}
            className={`w-20 h-24 object-cover rounded-lg cursor-pointer
              border transition-all duration-300
              ${
                selected === img
                  ? "border-black scale-105"
                  : "border-gray-300 hover:scale-105"
              }`}
          />
        ))}
      </div>

      <div className="flex-1 overflow-hidden rounded-xl group">
        <img
          src={selected}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-125 cursor-zoom-in"
        />
      </div>
    </div>
  );
}

function ProductInfo({ product }) {
  const [size, setSize] = useState(null);

  const handleAddToCart = () => {
    if (product.sizes?.length > 0 && !size) {
      toast.error("Please select a size");
      return;
    }

    console.log("Add to cart:", {
      productId: product._id,
      title: product.title,
      price: product.price,
      brand: product.brand,
      size,
    });

    toast.success("Added to cart");
  };

  return (
    <div className="flex flex-col gap-5 w-full md:w-1/2">
      <div className="flex items-center justify-between">
        {product.brand && (
          <span className="text-sm font-bold text-red-500 uppercase tracking-widest">
            {product.brand}
          </span>
        )}
        {product.isFeatured && (
          <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-1 rounded font-bold uppercase">
            Featured
          </span>
        )}
      </div>

      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        {product.title}
      </h1>

      <div className="flex items-center gap-3">
        <div className="flex text-yellow-400">
          {[...Array(Math.ceil(product.rating))].map((_, i) => (
            <FaStar 
              key={i} 
              size={14} 
              className={i < (product.rating || 0) ? "fill-current" : "text-gray-300"} 
            />
          ))}
        </div>
        <span className="text-sm text-gray-400">
          ({product.reviewCount || 0} Reviews)
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-red-600">₹{product.price}</span>
          {product.oldPrice && (
            <span className="line-through text-xl text-gray-400">
              ₹{product.oldPrice}
            </span>
          )}
        </div>
        
        {product.discount > 0 && (
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
        {product.description}
      </p>

      <div className="flex items-center gap-2 text-sm">
        <span className="font-medium">Availability:</span>
        {product.stock > 0 ? (
          <span className="text-green-600 font-medium">
            In Stock ({product.stock} items left)
          </span>
        ) : (
          <span className="text-red-500 font-medium">Out of Stock</span>
        )}
      </div>

      <hr className="border-gray-200 dark:border-gray-700" />

      {product.sizes?.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-sm uppercase">Select Size</span>
            <button className="text-xs text-gray-500 underline hover:text-red-500 transition">
              Size Guide
            </button>
          </div>
          <div className="flex gap-3 flex-wrap">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`min-w-[45px] h-[40px] px-3 flex items-center justify-center rounded-md border text-sm font-medium transition-all duration-200
                  ${
                    size === s
                      ? "bg-black text-white border-black scale-105 shadow-md"
                      : "border-gray-300 hover:border-black dark:border-gray-600 dark:text-white"
                  }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-2">
        <button
          onClick={handleAddToCart}
          disabled={product.stock <= 0}
          className={`flex-1 px-8 py-4 rounded-lg font-bold transition-all duration-300
            ${
              product.stock <= 0
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600 active:scale-95 shadow-sm shadow-red-200"
            }`}
        >
          {product.stock <= 0 ? "OUT OF STOCK" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
}


function ProductTabs({ productId, description }) {
  const [tab, setTab] = useState("description");

  return (
    <>
      <div className="flex gap-10 border-b border-gray-300">
        {["description", "reviews"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-3 font-semibold relative transition
              ${tab === t ? "text-red-500" : "text-gray-400"}`}
          >
            {t.toUpperCase()}
            {tab === t && (
              <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-red-500" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 animate-fadeIn">
        {tab === "description" && (
          <p className="leading-relaxed max-w-4xl">{description}</p>
        )}
        {tab === "reviews" && <Reviews productId={productId} />}
      </div>
    </>
  );
}

function Reviews({ productId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await api.get(`/reviews/${productId}`);
      setReviews(data.reviews);
    };
    fetchReviews();
  }, [productId]);

  return (
    <div className="space-y-6">
      {reviews.map((r) => (
        <div
          key={r._id}
          className="border rounded-xl p-5 transition hover:shadow-lg"
        >
          <div className="flex justify-between items-center">
            <h4 className="font-medium">{r.user.name}</h4>
            <span className="text-sm text-gray-500">
              {new Date(r.createdAt).toDateString()}
            </span>
          </div>

          <div className="flex text-yellow-400 mt-1">
            {[...Array(r.rating)].map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>

          <p className="text-sm mt-3 text-gray-600 dark:text-gray-300">
            {r.comment}
          </p>
        </div>
      ))}

      <AddReview productId={productId} onAdd={setReviews} />
    </div>
  );
}


function AddReview({ productId, onAdd }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hover, setHover] = useState(0);

  const submit = async () => {
    const { data } = await api.post(
      "/reviews",
      { productId, rating, comment }
    );

    onAdd((prev) => [data.review, ...prev]);
    setRating(0);
    setComment("");
  };

  return (
    <div className="mt-10 border rounded-xl p-6 bg-white dark:bg-gray-900">
      <h3 className="font-semibold mb-4">Add a Review</h3>

      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((s) => (
          <FaStar
            key={s}
            size={20}
            onClick={() => setRating(s)}
            onMouseEnter={() => setHover(s)}
            onMouseLeave={() => setHover(0)}
            className={`
              cursor-pointer transition-transform duration-150
              ${(hover || rating) >= s ? "text-yellow-400" : "text-gray-300"}
              hover:scale-110
            `}
          />
        ))}
      </div>


      <textarea
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review..."
        className="w-full border rounded-md p-3 focus:ring-2 focus:ring-red-500 outline-none dark:bg-gray-800"
      />

      <button
        onClick={submit}
        className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md
          transition hover:scale-105 hover:bg-red-600"
      >
        Submit Review
      </button>
    </div>
  );
}


function Skeleton() {
  return (
    <div className="p-10 animate-pulse space-y-6">
      <div className="h-8 bg-gray-300 rounded w-1/3" />
      <div className="h-64 bg-gray-300 rounded" />
    </div>
  );
}
