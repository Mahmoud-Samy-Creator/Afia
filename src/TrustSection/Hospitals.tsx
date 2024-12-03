import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

import SHARM from '../assets/Trust/accredits/sharm.png';
import SOUDI from '../assets/Trust/accredits/SoudiArmani.jpeg';
import AlAMEDA from '../assets/Trust/accredits/Alameda group.jpg';
import DarElfoad from '../assets/Trust/accredits/DarElfoad.png';
import CHG from '../assets/Trust/accredits/CHG.png';
import Alsalam from '../assets/Trust/accredits/Alsalam.png';

const hospitalsCards = [
    {
        id: 1,
        name: "Alameda",
        imgSrc: AlAMEDA,
        altText: "Alameda",
    },
    {
        id: 2,
        name: "Soudi",
        imgSrc: SOUDI,
        altText: "Soudi",
    },
    {
        id: 3,
        name: "Sharm",
        imgSrc: SHARM,
        altText: "Sharm",
    },
    {
        id: 4,
        name: "DarElfoad",
        imgSrc: DarElfoad,
        altText: "DarElfoad",
    },
    {
        id: 5,
        name: "Alsalam",
        imgSrc: Alsalam,
        altText: "Alsalam",
    },
    {
        id: 6,
        name: "CHG",
        imgSrc: CHG,
        altText: "CHG",
    },
]

function Hospitals() {
  return(
    <div className='Hospital-accredit w-[90%] mx-auto px-[35px] mt-[50px] bg-primary-bgColor py-[40px] rounded-[25px]'>
        <h3 className='text-white text-center text-[25px] lg:text-[40px] mb-[30px]'>Partnered Hospitals</h3>
        <div>
            <Slider />
        </div>
    </div>
  )
}

function Slider() {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 3  ,
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
      {hospitalsCards.map((card, index) => (
        <SplideSlide key={index}>
          <div className='content-center bg-white w-[240px] h-[260px] text-center content-center rounded-[15px]'>
            <img className='w-[260px] rounded-[16px]' src={card.imgSrc} alt={card.altText} />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Hospitals