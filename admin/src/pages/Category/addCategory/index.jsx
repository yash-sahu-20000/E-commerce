import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function AddCategory() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Category:", name);
    navigate("/admin/categories");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            className="w-full px-4 py-2 rounded-lg
            bg-gray-50 dark:bg-gray-800
            border border-gray-300 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-red-500"
          />
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
