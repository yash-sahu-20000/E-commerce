import React from 'react'
import "../../index.css"
import HomeSlider from '../../components/HomeSlider'
import CategorySlider from '../../components/CategorySlider'
import FreeShippingBanner from '../../components/FreeShipmentBanner'

function Home() {
  return (
        <div className=" bg-primary dark:bg-gray-900 transition-colors dark:text-white">
          <div className=" max-w-[95%] mx-auto px-4 py-6">
            <HomeSlider/>
            <div className='border-t-2 dark:border-gray-700 py-4 uppercase '>
              Featured Categories
            </div>
            <CategorySlider/>
            <div>
              <FreeShippingBanner />
            </div>
          </div>
        </div>
  )
}

export default Home