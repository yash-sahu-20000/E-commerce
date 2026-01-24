import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import api from "../../../api/axios";
import useFetch from "../../../hooks/useFetch";

export default function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: productData,
    loading: productLoading,
    error,
  } = useFetch(`/products/${id}`);

  const { data: categoryData } = useFetch("/categories");

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
    status: "active",
    description: "",
    images: [],
  });


  useEffect(() => {
    if (!productData?.product) return;

    const p = productData.product;

    setProduct({
      title: p.title || "",
      category: p.category?._id || "",
      price: p.price || "",
      stock: p.stock || "",
      status: p.status || "active",
      description: p.description || "",
      images: p.images || []
    });
  }, [productData]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (product.images.length + files.length > 4) {
      toast.error("Maximum 4 images allowed");
      return;
    }

    setProduct({
      ...product,
      images: [...product.images, ...files],
    });
  };


  const removeExistingImage = (index) => {
    setProduct({
      ...product,
      images: {
        ...product.images,
        existing: product.images.existing.filter((_, i) => i !== index),
      },
    });
  };

  const removeImage = (index) => {
    setProduct({
      ...product,
      images: product.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("title", product.title);
      formData.append("category", product.category);
      formData.append("price", product.price);
      formData.append("stock", product.stock);
      formData.append("status", product.status);
      formData.append("description", product.description);

      const existingImages = product.images.filter(
        (img) => typeof img === "string"
      );

      const newImages = product.images.filter(
        (img) => img instanceof File
      );

      formData.append("existingImages", JSON.stringify(existingImages));

      newImages.forEach((file) => {
        formData.append("images", file);
      });

      await api.put(`/products/${id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

      toast.success("Product updated successfully");
      navigate("/admin/products");
    } catch (err) {
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };


  if (productLoading)
    return <p className="text-center py-10">Loading product...</p>;

  if (error)
    return (
      <p className="text-center py-10 text-red-500">
        Failed to load product
      </p>
    );

return (
  <div className="mx-auto bg-white dark:text-white dark:bg-gray-900 rounded-xl shadow p-6">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Update Product
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Edit product details and images
        </p>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="!bg-red-500 !text-white hover:!bg-red-600 normal-case !px-5"
      >
        {loading ? "Updating..." : "Update Product"}
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
          className="w-full px-4 py-2 rounded-lg
          bg-gray-50 dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-500"
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
          className="w-full px-4 py-2 rounded-lg
          bg-gray-50 dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select category</option>
          {categoryData?.categories?.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
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
          className="w-full px-4 py-2 rounded-lg
          bg-gray-50 dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-500"
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
          className="w-full px-4 py-2 rounded-lg
          bg-gray-50 dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-500"
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
          className="w-full px-4 py-2 rounded-lg
          bg-gray-50 dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="active">Active</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
          Description
        </label>
        <textarea
          rows="4"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg
          bg-gray-50 dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
    </form>

    <div className="mt-8">
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
        Product Images (max 4)
      </h3>

    <div className="flex flex-wrap gap-4">
      {product.images.map((img, i) => (
        <div
          key={i}
          className="relative w-24 h-24 rounded-lg overflow-hidden border
          border-gray-300 dark:border-gray-700"
        >
          <img
            src={typeof img === "string" ? img : URL.createObjectURL(img)}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={() => removeImage(i)}
            className="absolute top-1 right-1 bg-black/60 text-white
            text-xs w-5 h-5 rounded-full hover:bg-red-500"
          >
            ✕
          </button>
        </div>
      ))}
    </div>


      <label className="mt-4 flex items-center justify-center h-32 border-2 border-dashed rounded-lg
        cursor-pointer bg-gray-50 dark:bg-gray-800
        border-gray-300 dark:border-gray-700
        hover:border-red-500 transition">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Click to upload images
        </span>
      </label>
    </div>
  </div>
);

}
