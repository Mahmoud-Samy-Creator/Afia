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
import  Doctor1 from '../assets/KnowDoctors/D1.webp';
import  Doctor2 from '../assets/KnowDoctors/D2.webp';
import  Doctor3 from '../assets/KnowDoctors/D3.webp';
import  Doctor4 from '../assets/KnowDoctors/D4.webp';
import  Doctor5 from '../assets/KnowDoctors/D5.jpg';
import  Doctor6 from '../assets/KnowDoctors/D6.png';
import './KnowDoctors.css';

const slidesData = [
  {
    id: 1,
    name: "Doctor",
    specialist: "Department",
    imgSrc: Doctor1,
    altText: "",
  },
  {
    id: 3,
    name: "Doctor",
    specialist: "Department",
    imgSrc: Doctor2,
    altText: "",
  },
  {
    id: 4,
    name: "Doctor",
    specialist: "Department",
    imgSrc: Doctor3,
    altText: "",
  },
  {
    id: 5,
    name: "Doctor",
    specialist: "Department",
    imgSrc: Doctor4,
    altText: "",
  },
  {
    id: 6,
    name: "Doctor",
    specialist: "Department",
    imgSrc: Doctor5,
    altText: "",
  },
  {
    id: 7,
    name: "Doctor",
    specialist: "Department",
    imgSrc: Doctor6,
    altText: "",
  },
]

function KnowFounder() {
  return (
    <div className="knowDoctors mb-[50px] w-[100%] relative bg-cover bg-no-repeat">
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
        gap: '2rem',
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
      {slidesData.map((slide, index) => (
        <SplideSlide key={index}>
          <div className="text-center cursor-pointer bg-[white] w-[250px] h-[300px] rounded-[15px] content-center overflow-hidden relative">
            <img className="w-[100p%] h[100%] text-center mx-[auto]" src={slide.imgSrc} alt={slide.altText} />
            <span className="block text-[20px] w-[100%] h-[50px] text-white bg-[#00000080] text-center content-center mx-[auto] mt-[17px] absolute bottom-[0px] w-[100%]">{slide.name}</span>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
