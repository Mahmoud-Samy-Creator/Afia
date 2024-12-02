import Accreditation from './Accreditation';
import Hospitals from './Hospitals';
import DoctorTrust from './DoctorTrust';
import './TrustSection.css';

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



