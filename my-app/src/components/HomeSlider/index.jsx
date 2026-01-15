import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HomeSlider() {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000
        }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide className="group py-6">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/14bf8d1356656ca8.jpg?q=60"
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}
