import React from "react"
import { LiaShippingFastSolid } from "react-icons/lia";

export default function FreeShippingBanner() {
  return (
    <div className="w-full flex justify-center py-6 ">
      <div
        className="flex items-center justify-between gap-6
                   border border-[#d8a28f] rounded-md
                   px-6 py-4 w-full
                   text-gray-800 dark:text-white"
      >
        <div className="flex items-center gap-3 font-bold text-lg">
            <LiaShippingFastSolid className="text-2xl" />
          <span>FREE SHIPPING</span>
        </div>

    <div className="hidden md:block h-6 w-px bg-gray-300 dark:bg-gray-600" />

        <div className="text-center text-sm md:text-base flex-1">
          Free Delivery Now On Your First Order and over ₹200
        </div>

    <div className="hidden md:block h-6 w-px bg-gray-300 dark:bg-gray-600" />

        <div className="font-bold text-lg whitespace-nowrap">
          – ONLY ₹200*
        </div>
      </div>
    </div>
  )
}

