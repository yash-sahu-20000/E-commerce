import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function AddHomeSlide() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    order: "",
    status: "active",
    image: null,
    preview: null,
  });

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

    console.log("Slide Data:", formData);

    navigate("/admin/home-slides");
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">

      <h1 className="text-xl font-semibold mb-6">Add Home Slide</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm mb-1">Slide Title</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter slide title"
            className="w-full px-4 py-2 rounded-lg
            bg-gray-50 dark:bg-gray-800
            border border-gray-300 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block text-sm mb-1">Slide Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm"
          />

          {formData.preview && (
            <img
              src={formData.preview}
              alt="Preview"
              className="mt-3 w-full max-h-60 object-cover rounded-lg"
            />
          )}
        </div>

        {/* ORDER */}
        <div>
          <label className="block text-sm mb-1">Display Order</label>
          <input
            type="number"
            name="order"
            required
            value={formData.order}
            onChange={handleChange}
            placeholder="1"
            className="w-full px-4 py-2 rounded-lg
            bg-gray-50 dark:bg-gray-800
            border border-gray-300 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* STATUS */}
        <div>
          <label className="block text-sm mb-2">Status</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="active"
                checked={formData.status === "active"}
                onChange={handleChange}
              />
              Active
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={formData.status === "inactive"}
                onChange={handleChange}
              />
              Inactive
            </label>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-4 pt-4">
          <Button
            variant="outlined"
            onClick={() => navigate("/admin/home-slides")}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="!bg-red-500 !text-white hover:!bg-red-600 normal-case"
          >
            Save Slide
          </Button>
        </div>

      </form>
    </div>
  );
}
