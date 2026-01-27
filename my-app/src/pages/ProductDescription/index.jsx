import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";
import { FaStar } from "react-icons/fa";

export default function ProductDescription() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        setProduct(data.product);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

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

  return (
    <div className="flex flex-col gap-5 w-full md:w-1/2">
      <h1 className="text-3xl font-semibold">{product.title}</h1>

      <div className="flex items-center gap-3">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} />
          ))}
        </div>
        <span className="text-sm text-gray-400">
          ({product.reviewCount || 0} Reviews)
        </span>
      </div>

      <div className="flex items-center gap-4 text-2xl font-semibold">
        {product.originalPrice && (
          <span className="line-through text-gray-400">
            ₹{product.originalPrice}
          </span>
        )}
        <span className="text-red-500">₹{product.price}</span>
      </div>

      <p className="text-sm">
        Stock:{" "}
        <span className="text-green-600 font-medium">
          {product.stock} Items
        </span>
      </p>

      {product.sizes?.length > 0 && (
        <div className="flex items-center gap-3">
          <span className="font-medium">Size:</span>
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-4 py-1 rounded-md border transition-all duration-300
                ${
                  size === s
                    ? "bg-black text-white scale-105"
                    : "hover:bg-black hover:text-white"
                }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <button className="mt-4 bg-red-500 text-white px-8 py-3 rounded-lg
        transition-all duration-300 hover:bg-red-600 hover:scale-105">
        ADD TO CART
      </button>
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
