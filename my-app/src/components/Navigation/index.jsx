import React, { useState } from "react";
import Button from "@mui/material/Button";
import CategoryPanel from "../CategoryPanel";
import { RiMenu2Fill } from "react-icons/ri";
import {
  FaAngleDown,
  FaHome,
  FaShoppingBag,
} from "react-icons/fa";
import {
  GiClothes,
  GiRunningShoe,
  GiLipstick,
  GiJewelCrown,
} from "react-icons/gi";

const NAV_ITEMS = ["Home",  "Fashion",  "Footwear",  "Bag",  "Beauty",  "Wellness", "Jewellery"];

const MOBILE_ICONS = [
  { icon: <FaHome />, label: "Home" },
  { icon: <GiClothes />, label: "Fashion" },
  { icon: <GiRunningShoe />, label: "Footwear" },
  { icon: <FaShoppingBag />, label: "Bag" },
  { icon: <GiLipstick />, label: "Beauty" },
  { icon: <GiJewelCrown />, label: "Jewellery" },
];

function Navigation() {

    const [openCategoryPanel, setOpenCategoryPanel] = useState(false);
    const [openMobileItem, setOpenMobileItem] = useState(null);
    const handleMobileItemClick = (label) => {
        setOpenMobileItem((prev) => (prev === label ? null : label));
    }

  return (
    <nav className="flex items-center justify-between gap-6 py-3">
      
      <Button
        color="inherit"
        startIcon={<RiMenu2Fill />}
        endIcon={<FaAngleDown />}
        className="text-gray-700 dark:text-white normal-case"
        onClick={()=>setOpenCategoryPanel(true)}
      >
        <span color="inherit" className=" text-gray-700 dark:text-gray-300 hidden md:inline">Shop by Categories</span>
      </Button>
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
            {NAV_ITEMS.map((item) => (
                <li key={item} className="relative group">
                <button className="px-4 py-2 font-medium transition-colors">
                    {item}
                </button>
                <div
                    className="absolute top-full left-0 min-w-[160px] mt-1
                    bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200
                    rounded-lg shadow-lg opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200"
                >
                    <ul className="flex flex-col">
                    <li className="cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700
                                hover:text-gray-900 dark:hover:text-white transition-colors" >
                        {item} 1
                    </li>
                    <li className="cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700
                                hover:text-gray-900 dark:hover:text-white transition-colors">
                        {item} 2
                    </li>
                    </ul>
                </div>
                </li>
            ))}
            </ul>


      <ul className="flex md:hidden gap-1">
        {MOBILE_ICONS.map(({ icon, label }) => (
          <li key={label} className="relative group">
            <Button aria-label={label} color="inherit" className="text-gray-700 dark:text-white" onClick={()=>handleMobileItemClick(label)}>
              {icon}
            </Button>
                {openMobileItem === label && (
                    <div className=" absolute top-full left-0 min-w-[100] rounded-lg shadow-lg py-1 px-2 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                        <ul className="space-y-2">
                            <li
                            className="cursor-pointer rounded-md px-2 py-1
                                hover:bg-gray-100 hover:text-gray-900
                                dark:hover:bg-gray-700 dark:hover:text-white
                                transition-colors">
                            {label} 1
                            </li>

                            <li
                            className="cursor-pointer rounded-md px-2 py-1
                                hover:bg-gray-100 hover:text-gray-900
                                dark:hover:bg-gray-700 dark:hover:text-white
                                transition-colors"
                            >
                            {label} 2
                            </li>
                        </ul>
                    </div>
                )}
          </li>
        ))}
      </ul>
      <CategoryPanel
        open={openCategoryPanel}
        onClose={() => setOpenCategoryPanel(false)}
      />

 
    </nav>
  );
}

export default Navigation;
