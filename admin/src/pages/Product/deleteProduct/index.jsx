import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";

export default function DeleteProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("DELETED PRODUCT ID:", id);

    toast.success("Product deleted successfully");
    navigate("/admin/products");
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-6 mt-10">
      <h1 className="text-2xl font-semibold text-red-500 mb-4">
        Delete Product
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Are you sure you want to delete this product?  
        <span className="font-semibold text-red-500">
          {" "}This action cannot be undone.
        </span>
      </p>

      <div className="flex justify-end gap-4">
        <Button
          onClick={() => navigate(-1)}
          className="!bg-gray-300 !text-black normal-case"
        >
          Cancel
        </Button>

        <Button
          onClick={handleDelete}
          className="!bg-red-500 !text-white hover:!bg-red-600 normal-case"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
