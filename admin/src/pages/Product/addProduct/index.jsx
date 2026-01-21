import { useState } from "react";
import Button from "@mui/material/Button";
import toast from 'react-hot-toast'

export default function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
    status: "active",
    description: "",
    images: [],
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (product.images.length + files.length > 4) {
      toast.error("You can upload maximum 4 images");
      return;
    }

    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setProduct({
      ...product,
      images: [...product.images, ...imagePreviews],
    });
  };

  const removeImage = (index) => {
    const updatedImages = product.images.filter((_, i) => i !== index);
    setProduct({ ...product, images: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("PRODUCT DATA:", product);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Add Product
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Create a new product for your store
          </p>
        </div>

        <Button
          onClick={handleSubmit}
          className="!bg-red-500 !text-white hover:!bg-red-600 normal-case !px-5 !py-2"
        >
          Save Product
        </Button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
            Product Name
          </label>
          <input
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Nike Air Max"
            className="w-full px-4 py-2 rounded-lg border
            bg-gray-50 dark:bg-gray-800
            text-gray-700 dark:text-gray-200
            border-gray-300 dark:border-gray-700
            focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
            Category
          </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border
            bg-gray-50 dark:bg-gray-800
            text-gray-700 dark:text-gray-200
            border-gray-300 dark:border-gray-700
            focus:ring-2 focus:ring-red-500 outline-none"
          >
            <option value="">Select category</option>
            <option>Shoes</option>
            <option>Clothing</option>
            <option>Electronics</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
            Price (₹)
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border
            bg-gray-50 dark:bg-gray-800
            text-gray-700 dark:text-gray-200
            border-gray-300 dark:border-gray-700
            focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border
            bg-gray-50 dark:bg-gray-800
            text-gray-700 dark:text-gray-200
            border-gray-300 dark:border-gray-700
            focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
            Status
          </label>
          <select
            name="status"
            value={product.status}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border
            bg-gray-50 dark:bg-gray-800
            text-gray-700 dark:text-gray-200
            border-gray-300 dark:border-gray-700
            focus:ring-2 focus:ring-red-500 outline-none"
          >
            <option value="active">Active</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-2 text-gray-600 dark:text-gray-400">
            Product Images (max 4)
          </label>

          <label className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg
            cursor-pointer
            bg-gray-50 dark:bg-gray-800
            border-gray-300 dark:border-gray-700
            hover:border-red-500 transition">

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />

            <span className="text-sm text-gray-500 dark:text-gray-400">
              Click to upload images
            </span>
          </label>

          {product.images.length > 0 && (
            <div className="flex gap-3 mt-4 flex-wrap">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 rounded-lg overflow-hidden border
                  border-gray-300 dark:border-gray-700"
                >
                  <img
                    src={img.preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black/60 text-white text-xs
                    w-5 h-5 rounded-full flex items-center justify-center hover:bg-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
            Description
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 rounded-lg border
            bg-gray-50 dark:bg-gray-800
            text-gray-700 dark:text-gray-200
            border-gray-300 dark:border-gray-700
            focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>
      </form>
    </div>
  );
}
