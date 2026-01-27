import React, { useState, useMemo } from "react";
import CategoryPanel from "../CategoryPanel";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown, FaHome, FaShoppingBag, FaThLarge } from "react-icons/fa";
import { GiClothes, GiRunningShoe } from "react-icons/gi";
import Button from "@mui/material/Button";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const [openCategoryPanel, setOpenCategoryPanel] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState(null);
  

  const { data, loading, error } = useFetch("/categories/rootwithchild");

  const navCategories = data?.categories || [];

  const handleMobileItemClick = (label) => {
    setOpenMobileItem((prev) => (prev === label ? null : label));
  };
  const handleClick = (categoryId) => {
    navigate(`/productlisting?category=${categoryId}`);
  };
  const getIconForCategory = (name = "") => {
    const n = name.toLowerCase();
    if (n.includes("fashion") || n.includes("cloth")) return <GiClothes />;
    if (n.includes("footwear") || n.includes("shoe")) return <GiRunningShoe />;
    if (n.includes("bag")) return <FaShoppingBag />;
    return <FaThLarge />; 
  };

  const mobileItems = useMemo(() => {
    return navCategories.slice(0, 4).map((cat) => ({
      icon: getIconForCategory(cat.name),
      label: cat.name,
      _id: cat._id,
      children: cat.children || [],
    }));
  }, [navCategories]);

  if (loading)
    return <p className="text-center py-4">Loading categories...</p>;
  if (error)
    return (
      <p className="text-center py-4 text-red-500">
        Error loading categories
      </p>
    );

  return (
    <>
      <nav className="flex items-center gap-6 py-3 justify-between bg-white dark:bg-gray-900 z-20 px-4 shadow-md">
        <Button
          color="inherit"
          startIcon={<RiMenu2Fill />}
          endIcon={<FaAngleDown />}
          className="text-gray-700 dark:text-white normal-case"
          onClick={() => setOpenCategoryPanel(true)}
        >
          <span className="text-gray-700 dark:text-gray-300 hidden md:inline">
            Shop by Categories
          </span>
        </Button>

        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
          <li className="relative group">
            <button className="px-4 py-2 font-medium hover:underline" onClick={()=>navigate('/')}>Home</button>
          </li>
          {navCategories.map((cat) => (
            <li key={cat._id} className="relative group">
              <button className="px-4 py-2 font-medium hover:underline">
                {cat.name}
              </button>
              {cat.children?.length > 0 && (
                <ul className="absolute top-full left-0 min-w-[160px] mt-1 bg-white dark:bg-gray-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  {cat.children.map((sub) => (
                    <li
                      key={sub._id}
                      onClick={() => handleClick(sub._id)}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <ul className="flex md:hidden gap-2">
          <li className="relative group">
            <button
              aria-label="Home"
              className="text-gray-700 dark:text-white"
              onClick={() => handleMobileItemClick("Home")}
            >
              <FaHome />
            </button>
            {openMobileItem === "Home" && (
              <div className="absolute top-full left-0 min-w-[180px] z-10 rounded-lg shadow-lg py-1 px-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                <ul className="space-y-2">
                  <li className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Home 1
                  </li>
                  <li className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Home 2
                  </li>
                </ul>
              </div>
            )}
          </li>

          {mobileItems.map(({ icon, label, _id, children }) => (
            <li key={_id} className="relative group">
              <button
                aria-label={label}
                className="text-gray-700 dark:text-white"
                onClick={() => handleMobileItemClick(label)}
              >
                {icon}
              </button>

              {openMobileItem === label && (
                <div className="absolute top-full left-0 min-w-[180px] z-10 rounded-lg shadow-lg py-1 px-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                  <ul className="space-y-2">
                    {children?.length > 0 ? (
                      children.map((sub) => (
                        <li
                          key={sub._id}
                          className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                        >
                          {sub.name}
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                          {label} 1
                        </li>
                        <li className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                          {label} 2
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <CategoryPanel
        open={openCategoryPanel}
        onClose={() => setOpenCategoryPanel(false)}
      />
    </>
  );
}

export default Navigation;
