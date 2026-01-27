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
  const [sizeInput, setSizeInput] = useState(""); // Added
  const [product, setProduct] = useState({
    title: "",
    brand: "", 
    category: "",
    price: "",
    oldPrice: "", 
    discount: "",
    stock: "",
    sizes: [],
    status: "active",
    description: "",
    images: [],
    isPopular: false,
    isFeatured: false,
  });

  useEffect(() => {
    if (!productData?.product) return;

    const p = productData.product;

    setProduct({
      title: p.title || "",
      brand: p.brand || "", 
      category: p.category?._id || "",
      price: p.price || "",
      oldPrice: p.oldPrice || "", 
      discount: p.discount || "", 
      stock: p.stock || "",
      sizes: p.sizes || [], 
      status: p.status || "active",
      description: p.description || "",
      images: p.images || [],
      isPopular: !!p.isPopular,
      isFeatured: !!p.isFeatured,
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

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProduct({ ...product, [name]: checked });
  };

  const removeImage = (index) => {
    setProduct({
      ...product,
      images: product.images.filter((_, i) => i !== index),
    });
  };

  const addSize = () => {
    if (!sizeInput.trim()) return;
    if (product.sizes.includes(sizeInput.trim())) {
      toast.error("Size already added");
      return;
    }
    setProduct({ ...product, sizes: [...product.sizes, sizeInput.trim()] });
    setSizeInput("");
  };

  const removeSize = (size) => {
    setProduct({ ...product, sizes: product.sizes.filter((s) => s !== size) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("title", product.title);
      formData.append("brand", product.brand);
      formData.append("category", product.category);
      formData.append("price", product.price);
      formData.append("oldPrice", product.oldPrice);
      formData.append("discount", product.discount);
      formData.append("stock", product.stock);
      formData.append("status", product.status);
      formData.append("description", product.description);
      formData.append("isPopular", product.isPopular);
      formData.append("isFeatured", product.isFeatured);

      product.sizes.forEach((size) => formData.append("sizes", size));

      const existingImages = product.images.filter((img) => typeof img === "string");
      const newImages = product.images.filter((img) => img instanceof File);

      formData.append("existingImages", JSON.stringify(existingImages));
      newImages.forEach((file) => formData.append("images", file));

      await api.put(`/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Product updated successfully");
      navigate("/admin/products");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  if (productLoading) return <p className="text-center py-10">Loading product...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Failed to load product</p>;

  return (
    <div className="mx-auto bg-white dark:text-white dark:bg-gray-900 rounded-xl shadow p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Update Product</h1>
        <p className="text-sm text-gray-500">Modify product details and inventory</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Product Name</label>
            <input
              required
              name="title"
              value={product.title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Brand Name</label>
            <input
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Category</label>
            <select
              required
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select category</option>
              {categoryData?.categories?.map((cat) => (
                <option key={cat._id} value={cat._id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Status</label>
            <select
              name="status"
              value={product.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="active">Active</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm mb-1">Price (₹)</label>
            <input
              type="number"
              required
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Old Price (₹)</label>
            <input
              type="number"
              name="oldPrice"
              value={product.oldPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={product.discount}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Stock</label>
            <input
              type="number"
              required
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Sizes</label>
            <div className="flex gap-2">
              <input
                value={sizeInput}
                onChange={(e) => setSizeInput(e.target.value)}
                placeholder="Add size"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Button variant="outlined" onClick={addSize} className="!border-red-500 !text-red-500">Add</Button>
            </div>
            {product.sizes.length > 0 && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {product.sizes.map((size) => (
                  <span key={size} className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-600 flex items-center gap-2">
                    {size} <button type="button" onClick={() => removeSize(size)}>✕</button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isPopular"
              checked={product.isPopular}
              onChange={handleCheckboxChange}
              className="accent-red-500"
            />
            <label className="text-sm">Popular Product</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isFeatured"
              checked={product.isFeatured}
              onChange={handleCheckboxChange}
              className="accent-red-500"
            />
            <label className="text-sm">Featured Product</label>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-600 dark:text-gray-400">Product Images (max 4)</label>
          <div className="flex flex-wrap gap-4 mb-4">
            {product.images.map((img, i) => (
              <div key={i} className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
                <img
                  src={typeof img === "string" ? img : URL.createObjectURL(img)}
                  className="w-full h-full object-cover"
                  alt="Product"
                />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 bg-black/60 text-white text-xs w-5 h-5 rounded-full hover:bg-red-500"
                >✕</button>
              </div>
            ))}
          </div>
          <label className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 border-gray-300 hover:border-red-500 transition">
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
            <span className="text-sm text-gray-500">Click to upload new images</span>
          </label>
        </div>

        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            rows="4"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button variant="outlined" onClick={() => navigate("/admin/products")}>Cancel</Button>
          <Button
            type="submit"
            disabled={loading}
            className={`!text-white ${loading ? "!bg-gray-400" : "!bg-red-500 hover:!bg-red-600"}`}
          >
            {loading ? "Updating..." : "Update Product"}
          </Button>
        </div>
      </form>
    </div>
  );
}