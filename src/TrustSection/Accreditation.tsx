import JCI from '../assets/Trust/accredits/JCI.png';
import TEMOS from '../assets/Trust/accredits/TEMOS.png';
import GAHAR from '../assets/Trust/accredits/GAHAR.png';

function Accreditation() {
  return(
    <div className='partners-accredit w-[90%] mx-auto px-[35px] mt-[50px] bg-primary-bgColor py-[40px] rounded-[25px]'>
      <h3 className='text-white text-center text-[25px] lg:text-[40px] mb-[30px]'>Partners Accredited By</h3>
      <div className="accredit-container">
          <div className='content-center w-[280px] h-[280px] text-center content-center rounded-[15px]'>
              <img className='' src={JCI} alt="JCI" />
          </div>
          <div className='content-center w-[280px] h-[280px] text-center content-center rounded-[15px]'>
              <img className='' src={TEMOS} alt="TEMOS" />
          </div>
          <div className='content-center gahar w-[280px] h-[280px] text-center content-center rounded-[15px]'>
              <img className='' src={GAHAR} alt="GAHAR" />
          </div>
      </div>
    </div>
  )
}

export default Accreditation