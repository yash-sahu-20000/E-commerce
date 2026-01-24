import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import api from "../../../api/axios";
import toast from "react-hot-toast";

export default function DeleteUser() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);

  const handleDelete = async() => {
    setLoading(true);
    try {
      const res = await api.delete(`/users/${id}`);
      toast.success(res.data?.message || "User Deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to update slide");
    } finally {
      setLoading(false);
    }    
    navigate("/admin/users");

  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-6 mt-10">
      <h1 className="text-xl font-semibold text-red-600 mb-4">
        Delete User
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Are you sure you want to delete this user?  
        <br />
        <strong>This action cannot be undone.</strong>
      </p>

      <div className="flex justify-end gap-4">
        <Button variant="outlined" onClick={() => navigate("/admin/users")}>
          Cancel
        </Button>

        <Button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className={`!text-white ${
              loading ? "!bg-gray-400" : "!bg-red-500 hover:!bg-red-600"
            }`}
          >
            {loading ? "Deleting..." : "Delete User"}
        </Button>
      </div>
    </div>
  );
}
