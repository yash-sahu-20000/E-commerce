import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

function ProductDescription() {

    
  return (

    <div className="bg-primary dark:bg-gray-900 transition-colors dark:text-white mx-auto  min-h-screen">
        <div className="max-w-[95%] mx-auto px-4 py-6 flex flex-col md:flex-row gap-10">
            <ProductImages />
            <ProductInfo />
        </div>
        <div className="max-w-[95%] mx-auto px-4 py-6 flex flex-col md:flex-row gap-10">
            <ProductTabs />
        </div>

    </div>

  )
}


function ProductImages() {
  const images = [
    "https://images.unsplash.com/photo-1512168245706-6596624d2774?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1761839257946-4616bcfafec7?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512168245706-6596624d2774?q=80&w=2670&auto=format&fit=crop",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-4 w-full md:w-1/2">
      <div className="flex flex-col gap-3">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-24 object-cover rounded-md border cursor-pointer hover:scale-105 transition
              ${
                selectedImage === img
                  ? "border-black"
                  : "border-gray-300 hover:border-black"
              }`}
          />
        ))}
      </div>

      <div className="flex-1 overflow-hidden rounded-lg group">
        <img
          src={selectedImage}
          alt="product"
          className="
            w-full h-auto object-cover
            transition-transform duration-300 ease-out
            group-hover:scale-125
            cursor-zoom-in
          "
        />
      </div>
    </div>
  );
}


function ProductInfo() {
  const [size, setSize] = useState(null);
  const handleSizeClick = (selectedSize) => {
    setSize(selectedSize === size ? null : selectedSize);
  }
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2">
      <h1 className="text-2xl font-semibold">
        Women Wide Leg Killer
      </h1>

      <div className="flex items-center gap-3 text-sm">
        <span className="text-gray-500">Brand: Flying Machine</span>
        <span className="text-yellow-500">★★★★★</span>
        <span className="text-gray-400">(10 Reviews)</span>
      </div>

      <div className="flex items-center gap-4 text-xl font-semibold">
        <span className="line-through text-gray-400">₹500</span>
        <span className="text-red-500">₹199</span>
      </div>

      <p className="text-sm text-gray-600">
        Available In Stock: <span className="text-green-600">25368 Items</span>
      </p>

      <p className="leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
      </p>

      <div className="flex items-center gap-3">
        <span className="font-medium">Size:</span>
        {["S", "M"].map((s) => (
          <button
            key={s}
            onClick={()=>handleSizeClick(s)}
            className={`
            px-4 py-1 border rounded-md transition
            ${
              size === s
                ? "bg-black text-white border-black dark:bg-white dark:text-black"
                : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            }
          `}>
            {s}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4">
        <div>
          <QuantitySelector />
        </div>

        <button className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
          ADD TO CART
        </button>
      </div>

      <div className="flex gap-6 mt-4 text-sm ">
        <button className="hover:underline">♡ Add to Wishlist</button>
        <button className="hover:underline">⇄ Add to Compare</button>
      </div>
      <div className="flex gap-6 mt-4 text-sm ">
        <div className="italic">Estimated Delivery Time: 3 days</div>
      </div>
    </div>
  );
}

function ProductTabs() {
        
    const [activeTab, setActiveTab] = useState("Reviews");
    const TABS = ["Description", "Reviews"];

  return (
        <>
            <div className="w-full py-8">
                <div className="mx-auto px-4">

                    <div className="flex gap-8 border-b border-gray-300">
                        <button
                            onClick={() => setActiveTab("description")}
                            className={`pb-3 font-semibold relative
                            ${activeTab === "description"
                                ? "text-red-500"
                                : "text-gray-400"
                            }`}
                        >
                            Description
                            {activeTab === "description" && (
                            <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-red-500" />
                            )}
                        </button>

                        <button
                            onClick={() => setActiveTab("reviews")}
                            className={`pb-3 font-semibold relative 
                            ${activeTab === "reviews"
                                ? "text-red-500"
                                : "text-gray-400"
                            }`}
                        >
                            Reviews
                            {activeTab === "reviews" && (
                            <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-red-500" />
                            )}
                        </button>
                    </div>

                    <div className="mt-6">
                    {activeTab === "description" && (
                        
                        <div>
                           <p className="">
                            This is the product description. High quality fabric, modern fit,
                            and perfect for daily use.
                            </p>
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <div>
                          <Reviews/>
                        </div>
                    )}
                    </div>

                </div>
            </div>
        </>
  );
}

function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center gap-4">
      <span className="font-medium">Qty:</span>

      <div className="flex items-center border rounded-lg overflow-hidden dark:border-gray-700">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="px-3 py-2 text-lg hover:bg-black hover:text-white transition
                     dark:hover:bg-white dark:hover:text-black"
        >
          −
        </button>

        <div className='flex items-center justify-center w-[20px]'>
          {qty}
        </div>

        <button
          onClick={() => setQty((q) => q + 1)}
          className="px-3 py-2 text-lg hover:bg-black hover:text-white transition
                     dark:hover:bg-white dark:hover:text-black"
        >
          +
        </button>
      </div>
    </div>
  );
}


function Reviews() {
  const [reviews] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      comment: "Amazing quality! Fits perfectly and looks premium.",
      date: "Jan 12, 2026",
    },
    {
      id: 2,
      name: "Ananya Gupta",
      rating: 4,
      comment: "Very comfortable. Worth the price.",
      date: "Jan 10, 2026",
    },
  ]);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

      <div className="flex items-center gap-2 mb-6">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <span className="text-sm text-gray-500">(4.8 out of 5)</span>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border rounded-lg p-4 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{review.name}</h4>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>

            <div className="flex items-center gap-1 text-yellow-400 mt-1">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
      <div>
      <AddReview />
      </div>
    </div>
  );
}


function AddReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold ">Add a review</h2>

      <div className="border rounded-lg p-4 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="mb-4 flex items-center gap-5">
          <span className="block text-sm font-medium mb-1">
            Your rating
          </span>
          <div className="flex gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={20}
                className="cursor-pointer transition"
                color={(hover || rating) >= star ? "#facc15" : "#e5e7eb"}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>

        <textarea
          placeholder="Write a Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={5}
          className="
            w-full border rounded-md p-3 text-sm
            outline-none resize-none
            focus:ring-1 focus:ring-black
            dark:bg-gray-800 dark:border-gray-700
            dark:focus:ring-white
          "
        />

        <div className="mt-4">
          <button
            className="
              px-6 py-2 rounded-md font-medium
              bg-red-500 text-white transition
              hover:bg-gray-800 dark:hover:bg-gray-500
            "
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}


export default ProductDescription