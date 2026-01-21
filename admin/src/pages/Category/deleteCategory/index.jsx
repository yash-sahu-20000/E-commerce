import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

export default function DeleteCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("Deleted category:", id);
    navigate("/admin/categories");
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-6 mt-10">
      <h1 className="text-xl font-semibold text-red-600 mb-4">
        Delete Category
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Are you sure you want to delete this category?  
        <br />
        <strong>This action cannot be undone.</strong>
      </p>

      <div className="flex justify-end gap-4">
        <Button variant="outlined" onClick={() => navigate("/admin/categories")}>
          Cancel
        </Button>

        <Button
          className="!bg-red-500 !text-white hover:!bg-red-600 normal-case"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
