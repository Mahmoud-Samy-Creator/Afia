import './Departemnts.css';

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

function Departments() {
  return (
    <div className="departments mx-auto w-[90%] mt-[100px] mb-[50px] py-[50px]">
      <div className="department_container w-full min-h-[500px] max-h-[fit-content] bg-primary-bgColor rounded-[25px] py-[30px]">
        <h1 className="text-white text-[64px] font-bold text-center mb-[40px]">
          Multi Speciality Focus
        </h1>
        <div className="department-section mx-auto">
          {slidesData.map((slide, index) => (
            <div key={index} className="speciality-container text-center cursor-pointer bg-white w-[250px] h-[220px] rounded-[15px] content-center transition transition-[0.2s] hover:bg-[#317ac4] hover:text-white">
              <img className="speciality w-[100px] text-center mx-[auto]" src={slide.imgSrc} alt={slide.altText} />
              <span className="block text-[20px] w-[60%] text-center mx-[auto] mt-[17px]">{slide.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;
