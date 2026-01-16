import React from 'react'
import ProductFilterSidebar from '../../components/ProductFilterSidebar'
import ProductListContainer from '../../components/ProductListContainer'

function ProductListing() {
    
  return (
        <div className=" bg-primary dark:bg-gray-900 transition-colors dark:text-white">
          <div className="flex items-start gap-6 max-w-[95%] mx-auto px-4 py-6">
            <ProductFilterSidebar/>
            <ProductListContainer/>
          </div>
        </div>
  )
}

export default ProductListing