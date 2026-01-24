import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import api from "../../../api/axios";

export default function UpdateHeroSlide() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [slide, setSlide] = useState({
    title: "",
    order: "",
    status: "active",
    type: "hero",
    image: null,      
    preview: null,    
    price: "",
    link: ""
  });

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const res = await api.get(`/slides/${id}`);
        const s = res.data.slide;

        setSlide({
          title: s.title || "",
          order: s.order || "",
          status: s.status || "active",
          type: s.type || "hero",
          image: null,
          preview: s.images?.[0] || null, 
          price: s.price || "",
          link: s.link || ""
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch slide");
      }
    };

    fetchSlide();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSlide((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSlide((prev) => ({
      ...prev,
      image: file,
      preview: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!slide.title || !slide.order || !slide.price || !slide.link) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", slide.title);
      formData.append("order", slide.order);
      formData.append("status", slide.status);
      formData.append("type", slide.type);
      formData.append("price", slide.price);
      formData.append("link", slide.link);

      if (slide.image) {
        formData.append("images", slide.image);
      }

      await api.put(`/slides/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Slide updated successfully!");
      navigate("/admin/heroslides");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to update slide");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">
      <h1 className="text-xl font-semibold mb-6">Update Slide</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm mb-1">Slide Title</label>
          <input
            type="text"
            name="title"
            value={slide.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Slide Type</label>
          <select
            name="type"
            value={slide.type}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border"
          >
            <option value="hero">Hero Banner</option>
            <option value="heroSide">Hero Side Banner</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={slide.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Link</label>
          <input
            type="text"
            name="link"
            value={slide.link}
            onChange={handleChange}
            required
            placeholder="/products/123 or /category/men"
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Slide Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          {slide.preview && (
            <img
              src={slide.preview}
              alt="Preview"
              className="mt-3 w-full max-h-60 object-cover rounded-lg"
            />
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Display Order</label>
          <input
            type="number"
            name="order"
            value={slide.order}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Status</label>
          <div className="flex gap-6">
            {["active", "inactive"].map((s) => (
              <label key={s} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value={s}
                  checked={slide.status === s}
                  onChange={handleChange}
                />
                {s}
              </label>
            ))}
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
            {loading ? "Updating..." : "Update Slide"}
          </Button>
        </div>
      </form>
    </div>
  );
}
