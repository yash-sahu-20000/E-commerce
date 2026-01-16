import React, { useState } from 'react'

function ProductDescription() {

    
  return (

    <div className="bg-primary dark:bg-gray-900 transition-colors dark:text-white mx-auto">
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
  return (
    <div className="flex gap-4 w-full md:w-1/2">
      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src="https://images.unsplash.com/photo-1512168245706-6596624d2774?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="thumb"
            className="w-20 h-24 object-cover rounded-md border cursor-pointer hover:border-black"
          />
        ))}
      </div>

      <div className="flex-1">
        <img
          src="https://media.istockphoto.com/id/1306508801/photo/beautiful-woman-standing-in-front-of-blue-background-with-smart-phone.jpg?s=2048x2048&w=is&k=20&c=1qeCv4_5wwIFfRCaEt6Q2IyMpwifzPz234byh_b9vXg="
          alt="product"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

function ProductInfo() {
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className="flex items-center gap-3">
        <span className="font-medium">Size:</span>
        {["S", "M"].map((size) => (
          <button
            key={size}
            className="px-4 py-1 border rounded-md hover:bg-black hover:text-white transition dark:hover:bg-white dark:hover:text-black"
          >
            {size}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4">
        <input
          type="number"
          min="1"
          defaultValue="1"
          className="w-16 border rounded-md px-2 py-1 dark:bg-gray-800 text-center"
        />

        <button className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
          ADD TO CART
        </button>
      </div>

      <div className="flex gap-6 mt-4 text-sm ">
        <button className="hover:underline">♡ Add to Wishlist</button>
        <button className="hover:underline">⇄ Add to Compare</button>
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
                            <p className="">
                                There are <strong>10 reviews</strong> for this product.
                            </p>
                        </div>
                    )}
                    </div>

                </div>
            </div>
        </>
  );
}


export default ProductDescription