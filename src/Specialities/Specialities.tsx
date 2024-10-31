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
import "./Specialities.css";

import Cardiovascular from '../assets/Specialities/Cardiovascular procedures.png';
import Oncology from '../assets/Specialities/oncology.png';
import Ear from '../assets/Specialities/ear.png';
import ophtalmology from '../assets/Specialities/ophtalmology.png';
import orthopedics from '../assets/Specialities/orthopedics.png';
import surgery from '../assets/Specialities/surgery.png';
import Reproductive from '../assets/Specialities/Reproductive.png';
import Urology from '../assets/Specialities/urology.png';
import Dentistry from '../assets/Specialities/Dentistry.png';
import WeightLoss from '../assets/Specialities/Weight-loss.png';

const slidesData = [
  {
    imgSrc: Cardiovascular,
    altText: "Cardiovascular",
    label: "Cardiovascular",
  },
  {
    imgSrc: Oncology,
    altText: "Oncology",
    label: "Oncology",
  },
  {
    imgSrc: Ear,
    altText: "Ear, nose, and throat",
    label: "Ear, nose, and throat",
  },
  {
    imgSrc: ophtalmology,
    altText: "Ophthalmology",
    label: "Ophthalmology",
  },
  {
    imgSrc: orthopedics,
    altText: "Orthopedics",
    label: "Orthopedics",
  },
  {
    imgSrc: surgery,
    altText: "Plastic surgery",
    label: "Plastic surgery",
  },
  {
    imgSrc: Reproductive,
    altText: "Reproductive medicine",
    label: "Reproductive medicine",
  },
  {
    imgSrc: Urology,
    altText: "Urology",
    label: "Urology",
  },
  {
    imgSrc: Dentistry,
    altText: "Dentistry",
    label: "Dentistry",
  },
  {
    imgSrc: WeightLoss,
    altText: "Weight loss surgery",
    label: "Weight loss surgery",
  }
];

function Specialities() {
  return (
    <div className="departments container mx-auto mt-[100px] mb-[50px]">
      <div className="department_container w-[85%] min-h-[400px] max-h-[fit-content] bg-[#8eb9d8] mr-[auto] ml-[auto] rounded-[25px] pt-[30px]">
        <h1 className="text-[white] text-[64px] font-bold text-center">
          Departments
        </h1>
        <div className="department-slider">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Specialities;

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
          <div className="speciality-container text-center cursor-pointer bg-[white] w-[250px] h-[220px] rounded-[15px] content-center transition transition-[0.2s] hover:bg-[#317ac4] hover:text-[white]">
            <img className="speciality w-[100px] text-center mx-[auto]" src={slide.imgSrc} alt={slide.altText} />
            <span className="block text-[20px] w-[60%] text-center mx-[auto] mt-[17px]">{slide.label}</span>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
