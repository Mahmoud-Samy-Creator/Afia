import doctorsTeam from "../assets/doctorsTeam.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

function About() {
  return (
    <div className="about container pt-[60px] pb-[60px] mx-[auto]" id="about">
      <div className="about-content flex justify-between w-[85%] mx-[auto]">
        <div className="image w-[40%] content-center text-center">
          <img className="rounded-[64px]" src={doctorsTeam} alt="doctors team" />
        </div>
        <div className="w-[50%]">
          <h1 className="text-[#274761] text-[64px] font-bold">About Us</h1>
          <span className="block text-[25px] text-[#3293db] font-bold mb-[50px]">
            Afia
          </span>
          <div className="flex">
            <div className="icon mr-[15px] pt-[5px]">
              <FontAwesomeIcon
                className="text-[27px] text-[#3293db]"
                icon={faCircleRight}
              />
            </div>
            <div className="content">
              <span className="block text-[#b4babd] text-[25px] font-[400] ">
                Afia is a companey of experienced medical professionals
              </span>
              <span className="block text-[#b4babd] text-[17px] w-[82%] mt-[15px]">
                Who are committed to providing the best medical care in Egypt. and
                providing the highest medical care quality. Dedicated to providing
                top-quality healthcare services. We believe in a holistic approach
                to healthcare that focuses on treating the whole person, not just
                the illness or symptoms.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
