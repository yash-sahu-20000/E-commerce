import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const {logout} = useAuth();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const isDark = !prev;
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
      return isDark;
    });
  };

  const handleLogout = () => {
    logout();
    toast.success("Logout Successful")
    navigate("/admin/login");
  };
  return (
    <header
      className="sticky top-0 z-50 h-16 px-6
                 flex items-center justify-between
                 bg-white dark:bg-gray-900
                 border-b border-gray-200 dark:border-gray-800
                 transition-colors shadow-md"
    >
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Admin Panel
      </h2>

      <div className="flex items-center gap-4">
        <div className="relative">
          <FaSearch
            className="absolute top-2.5 left-3 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 text-sm rounded-lg
                       bg-gray-50 dark:bg-gray-800
                       text-gray-800 dark:text-gray-100
                       border border-gray-300 dark:border-gray-700
                       focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>


        <div className="w-9 h-9 bg-red-600 text-white flex items-center justify-center rounded-full group relative">
          A
          <div
              className="absolute top-full left-[-60px] min-w-[160px] mt-1
              bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200
              shadow-lg opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200 z-10"
          >
              <ul className="flex flex-col">
              <li className="cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700
                          hover:text-gray-900 dark:hover:text-white transition-colors" >
                  My Account
              </li>
              <li className="cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700
                          hover:text-gray-900 dark:hover:text-white transition-colors">
                  Settings
              </li>
              </ul>
          </div>
        </div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2 rounded-lg
                   text-red-500 hover:bg-red-100 dark:hover:bg-red-500/20 transition"
      >
        <IoMdLogOut />
        Logout
      </button>
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1.5 rounded-full text-sm font-medium
                     border border-gray-400 dark:border-gray-700
                     text-gray-700 dark:text-gray-200
                     hover:bg-black/10 dark:hover:bg-white/10
                     transition-all"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}
