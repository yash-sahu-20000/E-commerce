import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useFetch from "../../hooks/useFetch";

export default function HeroBanner() {
  const { data, loading, error } = useFetch("/slides?status=active");

  if (loading) return null;
  if (error) return null;

  const slides = data?.slides || [];

  const heroSlides = slides
    .filter(slide => slide.type === "hero")
    .sort((a, b) => a.order - b.order);

  const sideSlides = slides
    .filter(slide => slide.type === "heroSide")
    .sort((a, b) => a.order - b.order);

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
            {heroSlides.map(slide => (
              <SwiperSlide key={slide._id}>
                <HeroSlide
                  image={slide.images?.[0]}
                  title={slide.title}
                  price={slide.price}
                  link={slide.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <NavBtn className="hero-prev left-4">
            <FaChevronLeft />
          </NavBtn>
          <NavBtn className="hero-next right-4">
            <FaChevronRight />
          </NavBtn>
        </div>

        <div className="flex flex-col gap-6 flex-[1]">
          {sideSlides.map(slide => (
            <SideBanner
              key={slide._id}
              image={slide.images?.[0]}
              title={slide.title}
              price={slide.price}
              link={slide.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function HeroSlide({ image, title, price, link }) {
  return (
    <div className="flex items-center h-full rounded-xl overflow-hidden
      bg-white dark:bg-gray-800 shadow-md hover:shadow-lg">

      {image && (
        <img
          src={image}
          alt={title}
          className="w-1/2 h-full object-cover hidden md:block"
        />
      )}

      <div className="p-6 md:p-10 max-w-xl">
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Big saving days sale
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-4 text-lg">
          Starting At Only{" "}
          <span className="text-red-500 font-bold text-2xl">
            ₹{price}
          </span>
        </p>

        <a
          href={link}
          className="inline-block mt-6 bg-red-500 hover:bg-red-600
          text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          SHOP NOW
        </a>
      </div>
    </div>
  );
}

function SideBanner({ image, title, price, link }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl
      bg-white dark:bg-gray-800 shadow-md hover:shadow-lg">

      {image && (
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-cover rounded-lg"
        />
      )}

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-red-500 font-bold">₹{price}</p>
        <a
          href={link}
          className="mt-1 inline-block text-sm font-semibold underline"
        >
          SHOP NOW
        </a>
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

