import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import api from "../../../api/axios";

export default function UpdateHomeSlide() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [slide, setSlide] = useState({
    title: "",
    order: "",
    status: "active",
    image: null,    
    preview: null, 
    price: 0,
    link: ""
  });

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const res = await api.get(`/slides/${id}`);
        const s = res.data.slide;

        setSlide({
          title: s.title,
          order: s.order,
          status: s.status,
          image: null,
          price: s.price,
          link: s.link,
          preview: s.images?.[0] || null,
        });
      } catch (error) {
        toast.error("Failed to fetch slide");
      }
    };

    fetchSlide();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSlide({ ...slide, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSlide({
      ...slide,
      image: file,
      preview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", slide.title);
      formData.append("order", slide.order);
      formData.append("status", slide.status);
      formData.append("price", slide.price);
      formData.append("link", slide.link);

      if (slide.image) formData.append("images", slide.image);

      await api.put(`/slides/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Slide updated successfully!");
      navigate("/admin/homeslides");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to update slide");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">
      <h1 className="text-xl font-semibold mb-6">Update Home Slide</h1>

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
            required
            value={slide.order}
            onChange={handleChange}
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
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </label>
            ))}
          </div>
        </div>  

        <div className="flex justify-end gap-4 pt-4">
          <Button
            variant="outlined"
            onClick={() => navigate("/admin/homeslides")}
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
