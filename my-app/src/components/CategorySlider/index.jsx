import React from 'react'
import useFetch from '../../hooks/useFetch';

function CategorySlider() {

    const { data, loading, error, refetch } = useFetch("/categories");
    const categories = data?.categories || [];


  return (
    <div className='flex gap-4 flex-wrap '>

        {categories.length > 0 ? (
        <div className="flex gap-6">
            {categories.map((category) => (
            <div
                key={category._id}
                className="
                group
                w-40
                p-5
                rounded-2xl
                border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-800
                shadow-sm
                flex flex-col items-center justify-center
                transition-all duration-300
                hover:shadow-xl
                hover:-translate-y-1
                cursor-pointer
                "
            >
                <div
                className="
                    w-24 h-24
                    flex items-center justify-center
                    rounded-xl
                    bg-gray-100 dark:bg-gray-700
                    mb-4
                    transition-transform duration-300
                    group-hover:scale-105
                "
                >
                <img
                    src={category.images?.[0]}
                    alt={category.name}
                    className="max-h-16 object-contain"
                />
                </div>

                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center">
                {category.name}
                </h3>
            </div>
            ))}
        </div>
        ) : (
        <p className="text-center text-gray-400 py-10">
            No category found
        </p>
        )}

    </div>
  )
}

export default CategorySlider