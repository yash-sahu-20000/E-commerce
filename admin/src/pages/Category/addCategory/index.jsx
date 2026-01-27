import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth } from "../../../context/authContext";
import toast from "react-hot-toast";
import api from "../../../api/axios";

export default function AddCategory() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(false);
  const [parents, setParents] = useState([]);

  const [categoryType, setCategoryType] = useState("root");

  const [category, setCategory] = useState({
    name: "",
    description: "",
    parent: "",
    images: [],
  });

  useEffect(() => {
    if (!isAuthenticated) navigate("/admin/login");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const res = await api.get("/categories/root");
        setParents(res.data.categories || []);
      } catch (err) {
        toast.error("Failed to load parent categories");
      }
    };

    fetchParents();
  }, []);

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", category.name);
      formData.append("description", category.description);

      if (categoryType === "child") {
        if (!category.parent) {
          toast.error("Please select a parent category");
          setLoading(false);
          return;
        }
        formData.append("parent", category.parent);
      }

      category.images.forEach((img) => {
        formData.append("images", img.file);
      });

      await api.post("/categories/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Category created!");
      navigate("/admin/categories");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (category.images.length + files.length > 1) {
      toast.error("You can upload maximum 1 image");
      return;
    }

    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setCategory({
      ...category,
      images: [...category.images, ...imagePreviews],
    });
  };

  const removeImage = (index) => {
    setCategory({
      ...category,
      images: category.images.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="mx-auto bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">
      <h1 className="text-xl font-semibold mb-6">Add Category</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm mb-2">Category Type</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="root"
                checked={categoryType === "root"}
                onChange={() => setCategoryType("root")}
              />
              Root Category
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="child"
                checked={categoryType === "child"}
                onChange={() => setCategoryType("child")}
              />
              Child Category
            </label>
          </div>
        </div>

        {categoryType === "child" && (
          <div>
            <label className="block text-sm mb-1">Parent Category</label>
            <select
              name="parent"
              value={category.parent}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Parent Category</option>
              {parents.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm mb-1">Category Name</label>
          <input
            type="text"
            name="name"
            required
            value={category.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800
            border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Description</label>
          <input
            type="text"
            name="description"
            required
            value={category.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800
            border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Category Image (max 1)</label>

          <label className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg cursor-pointer
            bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:border-red-500 transition">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            <span className="text-sm text-gray-500">Click to upload image</span>
          </label>

          {category.images.length > 0 && (
            <div className="flex gap-3 mt-4">
              {category.images.map((img, index) => (
                <div key={index} className="relative w-24 h-24 rounded-lg overflow-hidden border">
                  <img src={img.preview} alt="preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black/60 text-white text-xs w-5 h-5 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outlined" onClick={() => navigate("/admin/categories")}>
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={loading}
            className={`!text-white ${loading ? "!bg-gray-400" : "!bg-red-500 hover:!bg-red-600"}`}
          >
            {loading ? "Saving..." : "Save Category"}
          </Button>
        </div>
      </form>
    </div>
  );
}
