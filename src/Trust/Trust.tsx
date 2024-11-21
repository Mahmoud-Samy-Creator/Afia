import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import './Trust.css';

import JCI from '../assets/Trust/accredits/JCI.png';
import TEMOS from '../assets/Trust/accredits/TEMOS.png';
import GAHAR from '../assets/Trust/accredits/GAHAR.png';

import SHARM from '../assets/Trust/accredits/sharm.png';
import SOUDI from '../assets/Trust/accredits/soudi german.jpeg';
import AlAMEDA from '../assets/Trust/accredits/Alameda group.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-solid-svg-icons';


function Trust() {
    return (
        <div className="trust pt-[60px] pb-[60px] relative bg-cover bg-no-repeat">
            <div className="trust-content min-h-[400px] max-h-[fit-content] container mx-[auto] relative z-[1]">
                <h1 className="text-center text-white text-[64px] font-bold">Why you Can trust Afia ?</h1>
                <div className="trust-slider">
                    <Slider />
                </div>
            </div>
        </div>
    );
}

export default Trust;

function Slider() {
    return (
        <Splide
            options={{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                gap: '2rem',
                autoplay: true,
                interval: 3000,
                pauseOnHover: true,
                arrows: true,
                pagination: false,
            }}
        aria-label="My Favorite Images"
        >
            {/* Parterners credit */}
            <SplideSlide className=''>
                <div className='partners-accredit w-[100%] px-[35px]'>
                    <h3 className='text-white text-center text-[40px] mb-[30px]'>our partners accredited by</h3>
                    <div className="accredit-container">
                        <div className='content-center'>
                            <img className='w-[300px]' src={JCI} alt="JCI" />
                        </div>
                        <div className='content-center'>
                            <img className='w-[300px]' src={TEMOS} alt="TEMOS" />
                        </div>
                        <div className='content-center gahar'>
                            <img className='w-[300px]' src={GAHAR} alt="GAHAR" />
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide className=''>
                <div className='Hospital-accredit w-[100%] px-[35px]'>
                    <h3 className='text-white text-center text-[40px] mb-[50px]'>our partnered hospitals</h3>
                    <div className="accredit-container">
                        <div className='content-center'>
                            <img className='w-[260px] rounded-[16px]' src={AlAMEDA} alt="AlAMEDA" />
                        </div>
                        <div className='content-center'>
                            <img className='w-[260px] rounded-[16px]' src={SOUDI} alt="SOUDI" />
                        </div>
                        <div className='content-center'>
                            <img className='w-[260px] rounded-[16px]' src={SHARM} alt="SHARM" />
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide className=''>
                <div className='Hospital-accredit w-[100%] text-[40px] px-[35px]'>
                    <h3 className='text-white text-center mb-[50px]'>our doctors are board certified with</h3>
                    <div className="accredit-container">
                        <div className='content-center h-fit-content text-white h-[150px] w-[300px] text-center rounded-[14px] font-bold'>
                            <FontAwesomeIcon icon={faCheckDouble} className='text-[#FFC300] text-[35px]'/>
                            {/* <FontAwesomeIcon icon={faCertificate} className='text-[#FFC300] text-[35px]'/> */}
                            <p>excellent <br></br>  track record</p>
                        </div>
                        <div className='content-center h-fit-content text-white h-[150px] w-[300px] text-center rounded-[14px] font-bold'>
                            <FontAwesomeIcon icon={faFaceSmile} className='text-[#FFC300] text-[35px]' />
                            {/* <FontAwesomeIcon icon={faCertificate} className='text-[#FFC300] text-[35px]'/> */}
                            <p>high patient  <br></br>  satisfaction</p>
                        </div>
                        <div className='content-center h-fit-content text-white h-[150px] w-[300px] text-center rounded-[14px] font-bold'>
                            <FontAwesomeIcon icon={faHospital} className='text-[#FFC300] text-[35px]'/>
                            {/* <FontAwesomeIcon icon={faCertificate} className='text-[#FFC300] text-[35px]'/> */}
                            <p>professors in <br></br> uni-hospitals</p>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    );
}