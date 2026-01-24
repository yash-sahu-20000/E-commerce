import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import api from "../../../api/axios";

export default function ViewUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get(`/users/${id}`);
        setUser(res.data.user);
      } catch (error) {
        console.error("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-600">
        Loading user details...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-10 text-red-500">
        User not found
      </div>
    );
  }

  const cartItemsCount =
    user.cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
<div className="max-w-2xl mx-auto bg-white dark:text-white dark:bg-gray-900 rounded-xl shadow p-6 mt-10">
  <h1 className="text-xl font-semibold mb-6">User Details</h1>

  <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
    <table className="w-full text-sm">
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        <tr>
          <td className="px-4 py-3 font-medium text-gray-600 dark:text-gray-400 w-1/3">
            Name
          </td>
          <td className="px-4 py-3">{user.name}</td>
        </tr>

        <tr className="bg-gray-50 dark:bg-gray-800/50">
          <td className="px-4 py-3 font-medium text-gray-600 dark:text-gray-400">
            Email
          </td>
          <td className="px-4 py-3">{user.email}</td>
        </tr>

        <tr>
          <td className="px-4 py-3 font-medium text-gray-600 dark:text-gray-400">
            Phone
          </td>
          <td className="px-4 py-3">{user.phone || "—"}</td>
        </tr>

        <tr className="bg-gray-50 dark:bg-gray-800/50">
          <td className="px-4 py-3 font-medium text-gray-600 dark:text-gray-400">
            Role
          </td>
          <td className="px-4 py-3">
            <span
              className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                user.role === "admin"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {user.role}
            </span>
          </td>
        </tr>

        <tr>
          <td className="px-4 py-3 font-medium text-gray-600 dark:text-gray-400">
            Status
          </td>
          <td className="px-4 py-3">
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                user.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.isActive ? "Active" : "Blocked"}
            </span>
          </td>
        </tr>

        <tr className="bg-gray-50 dark:bg-gray-800/50">
          <td className="px-4 py-3 font-medium text-gray-600 dark:text-gray-400">
            Address
          </td>
          <td className="px-4 py-3">{user.address || "—"}</td>
        </tr>

        <tr>
          <td className="px-4 py-3 font-medium text-gray-600 dark:text-gray-400">
            Cart Items
          </td>
          <td className="px-4 py-3">{cartItemsCount}</td>
        </tr>

        <tr className="bg-gray-50 dark:bg-gray-800/50">
          <td className="px-4 py-3 font-medium text-gray-600 dark:text-gray-400">
            Joined
          </td>
          <td className="px-4 py-3">
            {new Date(user.createdAt).toLocaleDateString()}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="flex justify-end gap-3 mt-8">
    <Button variant="outlined" onClick={() => navigate("/admin/users")}>
      Back
    </Button>

    <Button
      className="!bg-red-500 !text-white hover:!bg-red-600 normal-case"
      onClick={() => navigate(`/admin/users/delete/${id}`)}
    >
      Delete
    </Button>
  </div>
</div>

  );
}
