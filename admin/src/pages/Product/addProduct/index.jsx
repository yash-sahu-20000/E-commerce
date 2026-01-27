import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import api from "../../../api/axios";
import { useAuth } from "../../../context/authContext";
import useFetch from "../../../hooks/useFetch";

export default function AddProduct() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(false);
  const [sizeInput, setSizeInput] = useState("");

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

  const { data, error } = useFetch("/categories");

  useEffect(() => {
    if (!isAuthenticated) navigate("/admin/login");
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProduct({ ...product, [name]: checked });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (product.images.length + files.length > 4) {
      toast.error("You can upload maximum 4 images");
      return;
    }
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setProduct({
      ...product,
      images: [...product.images, ...previews],
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
      
      Object.keys(product).forEach(key => {
        if (key !== 'images' && key !== 'sizes') {
          formData.append(key, product[key]);
        }
      });

      product.images.forEach((img) => formData.append("images", img.file));
      product.sizes.forEach((size) => formData.append("sizes", size));

      await api.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Product created!");
      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to create product");
    } finally {
      setLoading(false);
    }
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

  return (
    <div className="mx-auto bg-white dark:text-white dark:bg-gray-900 rounded-xl shadow p-6">
      <h1 className="text-xl font-semibold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Product Name</label>
            <input
              required
              name="title"
              value={product.title}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Brand Name</label>
            <input
              name="brand"
              value={product.brand}
              onChange={handleChange}
              placeholder="Enter brand"
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
              {data?.categories?.map((cat) => (
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
                placeholder="Add size (e.g. XL, 42)"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Button variant="outlined" onClick={addSize} className="!border-red-500 !text-red-500">
                Add
              </Button>
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
            <label className="text-sm text-gray-600 dark:text-gray-400">Popular Product</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isFeatured"
              checked={product.isFeatured}
              onChange={handleCheckboxChange}
              className="accent-red-500"
            />
            <label className="text-sm text-gray-600 dark:text-gray-400">Featured Product</label>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2 text-gray-600 dark:text-gray-400">Product Images (max 4)</label>
          <label className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:border-red-500 transition">
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Click to upload images</span>
          </label>
          {product.images.length > 0 && (
            <div className="flex gap-3 mt-4 flex-wrap">
              {product.images.map((img, index) => (
                <div key={index} className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
                  <img src={img.preview} alt="preview" className="w-full h-full object-cover" />
                  <button type="button" onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-black/60 text-white text-xs w-5 h-5 rounded-full hover:bg-red-500">✕</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            rows="4"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button variant="outlined" onClick={() => navigate("/admin/products")}>Cancel</Button>
          <Button
            type="submit"
            disabled={loading}
            className={`!text-white ${loading ? "!bg-gray-400" : "!bg-red-500 hover:!bg-red-600"}`}
          >
            {loading ? "Saving..." : "Save Product"}
          </Button>
        </div>
      </form>
    </div>
  );
}