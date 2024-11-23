import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import './TrustSection.css';

import JCI from '../assets/Trust/accredits/JCI.png';
import TEMOS from '../assets/Trust/accredits/TEMOS.png';
import GAHAR from '../assets/Trust/accredits/GAHAR.png';

import SHARM from '../assets/Trust/accredits/sharm.png';
import SOUDI from '../assets/Trust/accredits/SoudiArmani.jpeg';
import AlAMEDA from '../assets/Trust/accredits/Alameda group.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';

function Trust() {
    return (
        <div className="trust pb-[60px] relative bg-white">
            <div className="trust-content min-h-[400px] max-h-[fit-content] container mx-[auto] relative z-[1]">
                <h1 className="text-center text-primary-bgColor text-[64px] font-bold">Why you Can trust Afia ?</h1>
                <div className="trust-slider">
                  <Accreditation />
                  <DoctorTrust />
                  <Hospitals />
                </div>
            </div>
        </div>
    );
}

export default Trust;

function Accreditation() {
  return(
    <div className='partners-accredit w-[90%] mx-auto px-[35px] mt-[50px] bg-primary-bgColor py-[40px] rounded-[25px]'>
      <h3 className='text-white text-center text-[25px] lg:text-[40px] mb-[30px]'>Partners Accredited By</h3>
      <div className="accredit-container">
          <div className='content-center w-[280px] h-[280px] text-center content-center bg-white rounded-[15px]'>
              <img className='w-[200px] h-[200px]' src={JCI} alt="JCI" />
          </div>
          <div className='content-center w-[280px] h-[280px] text-center content-center bg-white rounded-[15px]'>
              <img className='w-[200px] h-[200px]' src={TEMOS} alt="TEMOS" />
          </div>
          <div className='content-center gahar w-[280px] h-[280px] text-center content-center bg-white rounded-[15px]'>
              <img className='w-[300px] h-[200px]' src={GAHAR} alt="GAHAR" />
          </div>
      </div>
    </div>
  )
}
function Hospitals() {
  return(
    <div className='Hospital-accredit w-[90%] mx-auto px-[35px] mt-[50px] bg-primary-bgColor py-[40px] rounded-[25px]'>
        <h3 className='text-white text-center text-[25px] lg:text-[40px] mb-[30px]'>Partnered Hospitals</h3>
        <div className="accredit-container">
            <div className='content-center bg-white w-[280px] h-[280px] text-center content-center rounded-[15px]'>
                <img className='w-[260px] rounded-[16px]' src={AlAMEDA} alt="AlAMEDA" />
            </div>
            <div className='content-center bg-white w-[280px] h-[280px] text-center content-center rounded-[15px]'>
                <img className='w-[300px] rounded-[16px]' src={SOUDI} alt="SOUDI" />
            </div>
            <div className='content-center bg-white w-[280px] h-[280px] text-center content-center rounded-[15px]'>
                <img className='w-[230px] rounded-[16px]' src={SHARM} alt="SHARM" />
            </div>
        </div>
    </div>
  )
}
function DoctorTrust() {
  return (
    <div className='Hospital-accredit min-h-[400px] h-fit-content w-[90%] mx-auto text-[40px] px-[35px] mt-[50px] bg-primary-bgColor py-[15px] rounded-[25px]'>
      <h3 className='text-white text-center text-[25px] mt-[30px] lg:text-[40px]'>Doctors Are Board Certified With</h3>
      <div className="accredit-container mt-[55px]">
          <div className='content-center h-fit-content text-white h-[150px] w-[300px] text-center rounded-[14px] font-bold'>
              <FontAwesomeIcon icon={faCheckDouble} className='text-white text-[60px] mb-[15px]'/>
              {/* <FontAwesomeIcon icon={faCertificate} className='text-[#FFC300] text-[35px]'/> */}
              <p className='text-[30px]'>excellent <br></br>  track record</p>
          </div>
          <div className='content-center h-fit-content text-white h-[150px] w-[300px] text-center rounded-[14px] font-bold'>
              <FontAwesomeIcon icon={faFaceSmile} className='text-white text-[60px] mb-[15px]' />
              {/* <FontAwesomeIcon icon={faCertificate} className='text-[#FFC300] text-[35px]'/> */}
              <p className='text-[30px]'>high patient  <br></br>  satisfaction</p>
          </div>
          <div className='content-center h-fit-content text-white h-[150px] w-[300px] text-center rounded-[14px] font-bold'>
              <FontAwesomeIcon icon={faHospital} className='text-white text-[60px] mb-[15px]'/>
              {/* <FontAwesomeIcon icon={faCertificate} className='text-[#FFC300] text-[35px]'/> */}
              <p className='text-[30px]'>professors in <br></br> uni-hospitals</p>
          </div>
      </div>
  </div>
  )
}