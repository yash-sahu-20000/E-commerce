import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth } from "../../../context/authContext";
import toast from "react-hot-toast";
import api from "../../../api/axios";

const SLIDE_TYPE = "hero";

export default function AddHeroSlide() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/admin/login");
    }
  }, [isAuthenticated, navigate]);

  const [slide, setSlide] = useState({
    title: "",
    order: "",
    status: "active",
    images: [],
    type: SLIDE_TYPE,
    price: 0,
    link: ""
  });

  const handleChange = (e) => {
    setSlide({ ...slide, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 1 || slide.images.length >= 1) {
      toast.error("Only 1 image allowed");
      return;
    }

    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setSlide({
      ...slide,
      images: [...slide.images, ...imagePreviews],
    });
  };

  const removeImage = (index) => {
    const updatedImages = slide.images.filter((_, i) => i !== index);
    setSlide({ ...slide, images: updatedImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (slide.images.length === 0) {
      toast.error("Please upload an image");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", slide.title);
      formData.append("order", slide.order);
      formData.append("status", slide.status);
      formData.append("type", SLIDE_TYPE);
      formData.append("price", slide.price);
      formData.append("link", slide.link);
      slide.images.forEach((img, index) => {
        formData.append("images", img.file)
      });

      const res = await api.post('/slides/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("Hero Sldie created!");
      navigate("/admin/heroslides");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to create slide");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">
      <h1 className="text-xl font-semibold mb-6">Add Hero Slide</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm mb-1">Slide Title</label>
          <input
            type="text"
            name="title"
            required
            value={slide.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Price</label>
          <input
            type="text"
            name="price"
            required
            value={slide.price}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Link</label>
          <input
            type="text"
            name="link"
            required
            value={slide.link}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Slide Image (1 only)</label>

          <label className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <span className="text-sm text-gray-500">Click to upload</span>
          </label>

          {slide.images.length === 1 && (
            <div className="mt-4 relative w-24 h-24">
              <img
                src={slide.images[0].preview}
                className="w-full h-full object-cover rounded"
              />
              <button
                type="button"
                onClick={() => removeImage(0)} // ✅ pass index
                className="absolute top-1 right-1 bg-black/60 text-white text-xs w-5 h-5 rounded-full"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Display Order</label>
          <input
            type="number"
            name="order"
            required
            value={slide.order}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Status</label>
          <div className="flex gap-6">
            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={slide.status === "active"}
                onChange={handleChange}
              />{" "}
              Active
            </label>

            <label>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={slide.status === "inactive"}
                onChange={handleChange}
              />{" "}
              Inactive
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button
            variant="outlined"
            onClick={() => navigate("/admin/heroslides")}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={loading}
            className={`!text-white ${
              loading ? "!bg-gray-400" : "!bg-red-500 hover:!bg-red-600"
            }`}
          >
            {loading ? "Saving..." : "Save Slide"}
          </Button>
        </div>
      </form>
    </div>
  );
}
