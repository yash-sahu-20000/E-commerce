import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../../api/axios";

export default function DeleteHomeSlide() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    
    setLoading(true);
    try {

      const res = await api.delete(`/slides/${id}`);

      toast.success("Slide Deleted successfully!");
      navigate("/admin/homeslides");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to update slide");
    } finally {
      setLoading(false);
    }    
    navigate("/admin/homeslides");
  };



  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-6 mt-10">
      <h1 className="text-xl font-semibold text-red-600 mb-4">
        Delete Home Slide
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Are you sure you want to delete this slide?  
        <br />
        <strong>This action cannot be undone.</strong>
      </p>

      <div className="flex justify-end gap-4">
          <Button
            variant="outlined"
            onClick={() => navigate("/admin/homeslides")}
          >
            Cancel
          </Button>

          <Button
            onClick={handleDelete}
            disabled={loading}
            className={`!text-white ${
              loading ? "!bg-gray-400" : "!bg-red-500 hover:!bg-red-600"
            }`}
          >
            {loading ? "Deleting..." : "Delete Slide"}
          </Button>
      </div>
    </div>
  );
}
