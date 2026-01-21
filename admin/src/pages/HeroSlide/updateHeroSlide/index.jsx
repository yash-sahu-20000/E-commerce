import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

export default function UpdateHeroSlide() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    order: "",
    status: "active",
    image: null,
    preview: null,
  });

  useEffect(() => {
    const fetchedSlide = {
      title: `Slide ${id}`,
      order: id,
      status: id % 2 === 0 ? "inactive" : "active",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    };

    setFormData({
      title: fetchedSlide.title,
      order: fetchedSlide.order,
      status: fetchedSlide.status,
      image: null,
      preview: fetchedSlide.image,
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData({
      ...formData,
      image: file,
      preview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Slide:", { id, ...formData });
    navigate("/admin/heroslides");
  };

  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">
      <h1 className="text-xl font-semibold mb-6">Update Hero Slide</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm mb-1">Slide Title</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Slide Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          {formData.preview && (
            <img
              src={formData.preview}
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
            value={formData.order}
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
                  checked={formData.status === s}
                  onChange={handleChange}
                />
                {s}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button variant="outlined" onClick={() => navigate("/admin/heroslides")}>
            Cancel
          </Button>
          <Button type="submit" className="!bg-red-500 !text-white normal-case">
            Update Slide
          </Button>
        </div>
      </form>
    </div>
  );
}
