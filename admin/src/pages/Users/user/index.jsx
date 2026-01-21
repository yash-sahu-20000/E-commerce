import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import { UserRow } from "../../../components/UserRow";
import { useState } from "react";

const TOTAL_USERS = 12;
const ITEMS_PER_PAGE = 5;


export default function Users() {
  const navigate = useNavigate();

  const users = Array.from({ length: TOTAL_USERS }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i === 0 ? "Admin" : "User",
    status: i % 2 === 0 ? "active" : "inactive",
  }));
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TOTAL_USERS / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentUsers = users.slice(startIndex, endIndex);


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Users</h1>

          <div className="relative">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search user..."
              className="pl-10 pr-4 py-2 text-sm rounded-lg
              bg-gray-50 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </div>

      <div className="flex px-4 py-2 text-sm text-gray-500 border-b dark:border-gray-700">
        <div className="flex-[3]">Name</div>
        <div className="flex-[4]">Email</div>
        <div className="flex-[2]">Role</div>
        <div className="flex-[2]">Status</div>
        <div className="flex-[2] text-right">Actions</div>
      </div>

      <div className="space-y-3 mt-3">
        {currentUsers.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </div>

    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
