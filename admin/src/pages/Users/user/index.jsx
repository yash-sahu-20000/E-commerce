import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import { UserRow } from "../../../components/UserRow";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";

const ITEMS_PER_PAGE = 5;

export default function Users() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, loading, error, refetch } = useFetch("/users");
  const users = data?.users || [];

  useEffect(() => {
    setCurrentPage(1);
  }, [search, users.length]);

  if (loading) {
    return (
      <p className="text-center py-10 text-gray-400">
        Loading users...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center py-10 text-red-500">
        {error}
      </p>
    );
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Users</h1>

          <div className="relative">
            <FaSearch
              className="absolute top-2.5 left-3 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search user..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
        {currentUsers.length > 0 ? (
          currentUsers.map((user) => (
            <UserRow
              key={user._id}
              user={user}
              refetch={refetch}
            />
          ))
        ) : (
          <p className="text-center text-gray-400 py-6">
            No users found
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
