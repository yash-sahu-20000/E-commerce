import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function AddCategory() {
  const navigate = useNavigate();

    const [category, setCategory] = useState({
    name: "",
    images: [],
  });

    const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Category:", name);
    navigate("/admin/categories");
  };

    const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (category.images.length + files.length > 1) {
      toast.error("You can upload maximum 1 images");
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
    const updatedImages = category.images.filter((_, i) => i !== index);
    setCategory({ ...category, images: updatedImages });
  };
  return (
    <div className="max-w-xl mx-auto bg-white dark:text-white dark:bg-gray-900 rounded-xl shadow p-6">
      <h1 className="text-xl font-semibold mb-6">Add Category</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-sm mb-1">Category Name</label>
          <input
            type="text"
            required
            name="name"
            value={category.name}
            onChange={handleChange}
            placeholder="Enter category name"
            className="w-full px-4 py-2 rounded-lg
            bg-gray-50 dark:bg-gray-800
            border border-gray-300 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="">
          <label className="block text-sm mb-2 text-gray-600 dark:text-gray-400">
            Category Image (max 1)
          </label>

          <label className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg
            cursor-pointer
            bg-gray-50 dark:bg-gray-800
            border-gray-300 dark:border-gray-700
            hover:border-red-500 transition">

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            <span className="text-sm text-gray-500 dark:text-gray-400">
              Click to upload image
            </span>
          </label>

          {category.images.length > 0 && (
            <div className="flex gap-3 mt-4 flex-wrap">
              {category.images.map((img, index) => (
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

        <div className="flex justify-end gap-4">
          <Button variant="outlined" onClick={() => navigate("/admin/categories")}>
            Cancel
          </Button>

          <Button
            type="submit"
            className="!bg-red-500 !text-white hover:!bg-red-600 normal-case"
          >
            Save Category
          </Button>
        </div>

      </form>
    </div>
  );
}
