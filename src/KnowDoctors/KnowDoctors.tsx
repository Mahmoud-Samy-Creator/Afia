import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { DoctorsSlidesData } from '../data';
import DoctorCard from "./DoctorCard";



function KnowFounder() {
  return (
    <div className="knowDoctors mb-[50px] w-[100%] relative bg-primary-bgColor">
      <div className="knowDoctors-container container mx-auto w-[100%] min-h-[600px] max-h-[fit-content] mr-[auto] ml-[auto] rounded-[25px] pt-[30px] relative z-[1] content-center">
        <h1 className="text-[white] text-[64px] font-bold text-center">
          Know Your Doctors
        </h1>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default KnowFounder;

function Slider() {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '9rem',
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        arrows: true,
        pagination: false,
        breakpoints: {
          881: { perPage: 1 },
          1024: { perPage: 2 },
        },
      }}
      aria-label="My Favorite Images"
    >
      {DoctorsSlidesData.map((slide, index) => (
        <SplideSlide key={index}>
          <DoctorCard imgSrc={slide.imgSrc} altText={slide.altText} name={slide.name} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
