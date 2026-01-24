import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import api from "../../../api/axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DeleteCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await api.delete(`/categories/${id}`);
      toast.success("Category deleted successfully");
      navigate("/admin/categories");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete category"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-6 mt-10">
      <h1 className="text-xl font-semibold text-red-600 mb-4">
        Delete Category
      </h1>

      <p className="text-gray-600 mb-6">
        Are you sure you want to delete this category?
        <br />
        <strong>This action cannot be undone.</strong>
      </p>

      <div className="flex justify-end gap-4">
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Cancel
        </Button>

        <Button
          onClick={handleDelete}
          disabled={loading}
          className={`!text-white ${
            loading ? "!bg-gray-400" : "!bg-red-500"
          }`}
        >
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </div>
    </div>
  );
}
