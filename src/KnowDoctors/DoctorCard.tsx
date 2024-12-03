import DoctorRate from './DoctorRate';

function DoctorCard({imgSrc, altText, name}: {imgSrc: string, altText: string, name: string}) {
  return (
    <div className='w-[fit-content]'>
      <div className="text-center cursor-pointer bg-[white] w-[90%] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-[15px] content-center overflow-hidden relative mx-auto">
      <img
          className="w-full h-full object-cover"
          src={imgSrc}
          alt={altText}
      />
      <div
          className="block text-[16px] sm:text-[18px] md:text-[20px] w-full h-[20%] text-white bg-[#00000080] text-center flex flex-col justify-center absolute bottom-0"
          >
          <DoctorRate />
          Dr.{name}
        </div>
      </div>
      <div className="text-white block mx-auto w-[100%] text-center mt-[10px] text-[14px] sm:text-[16px] md:text-[18px]">
        Speciality
      </div>
    </div>
  );
}

export default DoctorCard;


