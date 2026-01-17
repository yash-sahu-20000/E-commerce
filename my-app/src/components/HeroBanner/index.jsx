import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HeroBanner() {
  return (
    <section className="mx-auto py-6 px-4">
      <div className="flex flex-col lg:flex-row gap-6">

        <div className="relative flex-[2] rounded-xl overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".hero-next",
              prevEl: ".hero-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="h-full"
          >
            <SwiperSlide>
              <HeroSlide
                image="https://images.unsplash.com/photo-1520975916090-3105956dac38"
                title="Buy New Trend Women Black Cotton Blend Top"
                price="₹1,550.00"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HeroSlide
                image="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                title="Latest Fashion Wear for Women"
                price="₹1,299.00"
              />
            </SwiperSlide>
          </Swiper>

          <NavBtn className="hero-prev left-4">
            <FaChevronLeft />
          </NavBtn>
          <NavBtn className="hero-next right-4">
            <FaChevronRight />
          </NavBtn>
        </div>

        <div className="flex flex-col gap-6 flex-[1]">
          <SideBanner
            image="https://images.unsplash.com/photo-1517841905240-472988babdf9"
            title="Buy women with low price"
            price="₹999"
          />
          <SideBanner
            image="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
            title="Buy Men's Footwear with low price"
            price="₹1500"
          />
          <SideBanner
            image="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
            title="Buy Men's Footwear with low price"
            price="₹1500"
          />
          <SideBanner
            image="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
            title="Buy Men's Footwear with low price"
            price="₹1500"
          />
          <SideBanner
            image="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
            title="Buy Men's Footwear with low price"
            price="₹1500"
          />
        </div>

      </div>
    </section>
  );
}

function HeroSlide({ image, title, price }) {
  return (
    <div
      className="flex items-center h-full rounded-xl overflow-hidden
      bg-white dark:bg-gray-800 transition-colors
      shadow-md hover:shadow-lg"
    >
      <img
        src={image}
        alt="banner"
        className="w-1/2 h-full object-cover hidden md:block"
      />

      <div className="p-6 md:p-10 max-w-xl">
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Big saving days sale
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-snug">
          {title}
        </h1>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Starting At Only{" "}
          <span className="text-red-500 font-bold text-2xl">
            {price}
          </span>
        </p>

        <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

function SideBanner({ image, title, price }) {
  return (
    <div
      className="flex items-center gap-4 p-4 rounded-xl
      bg-white dark:bg-gray-800 transition-colors
      shadow-md hover:shadow-lg"
    >
      <img
        src={image}
        alt="side-banner"
        className="w-24 h-24 object-cover rounded-lg"
      />

      <div>
        <p className="font-semibold text-gray-800 dark:text-white">
          {title}
        </p>
        <p className="text-red-500 font-bold">{price}</p>
        <button className="mt-1 text-sm font-semibold underline text-gray-700 dark:text-gray-300">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

function NavBtn({ children, className }) {
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 z-10
      bg-white dark:bg-gray-700 dark:text-white
      p-2 rounded-full shadow hover:scale-105 transition ${className}`}
    >
      {children}
    </button>
  );
}
