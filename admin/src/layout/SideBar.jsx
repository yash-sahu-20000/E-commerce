import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut, IoMdReorder } from "react-icons/io";
import { FaChevronDown, FaRegImage, FaShoppingBasket, FaUser } from "react-icons/fa";

export default function Sidebar() {


const location = useLocation();
const [openMenu, setOpenMenu] = useState(null);


useEffect(() => {
  menu.forEach(item => {
    if (item.type === "collapse") {
      const match = item.children.some(child => child.path === location.pathname);
      if (match) setOpenMenu(item.name);
    }
  });
}, [location.pathname]);

  const menu = [
    { type: "single", name: "Dashboard", path: "/admin", icon: <MdDashboard /> },
    {
      type: "collapse",
      name: "Products",
      icon: <IoMdReorder />,
      children: [
        { name: "All Products", path: "/admin/products" },
        { name: "Add Product", path: "/admin/products/add" },
      ],
    },
    {
      type: "collapse",
      name: "Home Slides",
      icon: <FaRegImage />,
      children: [
        { name: "All Slides", path: "/admin/homeslides" },
        { name: "Add Slides", path: "/admin/homeslides/add" },
      ],
    },
    {
      type: "collapse",
      name: "Hero Slides",
      icon: <FaRegImage />,
      children: [
        { name: "All Slides", path: "/admin/heroslides" },
        { name: "Add Slides", path: "/admin/heroslides/add" },
      ],
    },
    {
      type: "collapse",
      name: "Category",
      icon: <FaRegImage />,
      children: [
        { name: "All Category", path: "/admin/categories" },
        { name: "Add Category", path: "/admin/categories/add" },
      ],
    },
    { type: "single", name: "Users", path: "/admin/users", icon: <FaUser /> },
    { type: "single", name: "Orders", path: "/admin/orders", icon: <FaShoppingBasket /> }

  ];


  const toggleMenu = (name) => setOpenMenu(openMenu === name ? null : name);



  return (
    <aside className="w-64 p-5 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <h1 className="mb-10 dark:text-white">
        <svg width="220" height="60" viewBox="0 0 360 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B8962E" />
            </linearGradient>
          </defs>

          <g transform="translate(12,18)">
            <rect x="0" y="8" width="42" height="22" rx="6" fill="url(#goldGradient)" />
            <path d="M6 8 L2 0" stroke="url(#goldGradient)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="14" cy="36" r="4" fill="currentColor" />
            <circle cx="34" cy="36" r="4" fill="currentColor" />
          </g>

          <text
            x="80"
            y="55"
            fontFamily="Playfair Display, Georgia, serif"
            fontSize="40"
            fontWeight="600"
            letterSpacing="1.2"
            fill="currentColor"
          >
            Urban
            <tspan fill="url(#goldGradient)">Cart</tspan>
          </text>
        </svg>
      </h1>

      <nav className="space-y-1 text-sm">
        {menu.map((item) => {
          if (item.type === "single") {
            return (
              <NavLink
                key={item.name}
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition
                  ${
                    isActive
                      ? "bg-red-100 text-red-500 dark:bg-red-500/20"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            );
          }

          return (
            <div key={item.name}>
              <button
                onClick={() => toggleMenu(item.name)}
                className="w-full flex items-center justify-between px-4 py-2 rounded-lg
                           text-gray-600 dark:text-gray-300
                           hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <div className="flex items-center gap-3">{item.icon} {item.name}</div>
                <FaChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${openMenu === item.name ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`ml-9 overflow-hidden transition-all duration-300 ease-in-out
                  ${openMenu === item.name ? "max-h-[999px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="mt-1 flex flex-col gap-1">
                  {item.children.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      end
                      className={({ isActive }) =>
                        `px-3 py-1.5 rounded-md transition-colors duration-200
                        ${
                          isActive
                            ? "bg-red-100 text-red-500 dark:bg-red-500/20"
                            : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                        }`
                      }
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

      </nav>
    </aside>
  );
}
