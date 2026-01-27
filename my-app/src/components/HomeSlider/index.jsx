import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import useFetch from '../../hooks/useFetch'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SLIDE_TYPE = 'home';

export default function HomeSlider() {

  const {data, loading, error} = useFetch(`/slides?type=${SLIDE_TYPE}`);
  const slides = data?.slides || [];

  if (loading)
    return (
      <p className="text-center py-10 text-gray-400">
        Loading slides...
      </p>
    );
  if (error)
    return (
      <p className="text-center py-10 text-red-500">
        {error}
      </p>
    );


  return (
    <>
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        
        {slides.length > 0 ? (
          slides.map((slide) => (
            <SwiperSlide className="group">
              <img
                src={slide.images[0]}
                alt={slide.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-400 py-6">
            No slides found
          </p>
        )}
        
        {/* <SwiperSlide className="group">
          <img
            src={slides.img}
            alt="Slide 1"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </SwiperSlide>

        <SwiperSlide className="group">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/c1786792b3252eb0.jpg?q=60"
            alt="Slide 2"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </SwiperSlide>

        <SwiperSlide className="group">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/c1786792b3252eb0.jpg?q=60"
            alt="Slide 2"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </SwiperSlide>

        <SwiperSlide className="group">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/c1786792b3252eb0.jpg?q=60"
            alt="Slide 2"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </SwiperSlide> */}
      </Swiper>
      <NavBtn className="hero-prev left-4">
        <FaChevronLeft />
      </NavBtn>
      <NavBtn className="hero-next right-4">
        <FaChevronRight />
      </NavBtn>
    </div>
    </>
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