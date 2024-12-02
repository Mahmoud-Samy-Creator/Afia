import certified from '../assets/Trust/Acreditations/Certified.png';
import trackRecord from '../assets/Trust/Acreditations/trackRecord.png';
import PatientSatisfaction from '../assets/Trust/Acreditations/PatientSatisfaction.png';

function DoctorTrust() {
  return (
    <div className='Hospital-accredit min-h-[400px] h-fit-content w-[90%] mx-auto text-[40px] px-[35px] mt-[50px] bg-primary-bgColor py-[15px] rounded-[25px]'>
      <h3 className='text-white text-center text-[25px] mt-[30px] lg:text-[40px]'>Our Doctors</h3>
      <div className="accredit-container mt-[55px]">
          <div className='flex flex-col justify-between items-center h-[190px] w-[300px] text-white text-center rounded-[14px] font-bold'>
            <img
              src={trackRecord}
              alt="track"
              style={{ width: "70px", height: "70px" }}
            />
            <p className='text-[30px] mt-[25] block'>Best <br /> Certificates</p>
          </div>
          <div className='flex flex-col justify-between items-center h-[190px] w-[300px] text-white text-center rounded-[14px] font-bold'>
            <img
              src={PatientSatisfaction}
              alt="track"
              style={{ width: "70px", height: "70px" }}
            />
            <p className='text-[30px] mt-[25]'>Satisfied<br></br>Patients</p>
          </div>
          <div className='flex flex-col justify-between items-center h-[190px] w-[300px] text-white text-center rounded-[14px] font-bold'>
            <img
              src={certified}
              alt="track"
              style={{ width: "70px", height: "70px" }}
            />
            <p className="text-[30px] mt-[25]">Excellent <br /> Track Record</p>
          </div>
      </div>
  </div>
  )
}

export default DoctorTrust