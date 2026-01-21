import { useNavigate } from "react-router-dom";

export function UserRow({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center px-4 py-3 rounded-xl
      bg-gray-50 dark:bg-gray-800
      hover:bg-gray-100 dark:hover:bg-gray-700 transition">

      <div className="flex-[3] font-medium">{user.name}</div>

      <div className="flex-[4] text-gray-600 dark:text-gray-300">
        {user.email}
      </div>

      <div className="flex-[2]">{user.role}</div>

      <div className="flex-[2]">
        <span
          className={`px-2 py-1 text-xs rounded-full
          ${user.status === "active"
            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
            : "bg-gray-200 text-gray-600 dark:bg-gray-600/20 dark:text-gray-300"
          }`}
        >
          {user.status}
        </span>
      </div>

      <div className="flex-[2] flex justify-end">
        <button
          className="text-red-500 hover:underline"
          onClick={() => navigate(`/admin/users/delete/${user.id}`)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
