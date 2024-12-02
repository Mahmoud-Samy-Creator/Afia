import Norton from '../assets/Certificates/Norton.webp';
import McAfee from '../assets/Certificates/McAfee.webp';
import HIPAA from '../assets/Certificates/HIPAA.webp';
import GDPR from '../assets/Certificates/GDPR.webp';

const certificates = [
  {
    id: 1,
    name: "Norton",
    imgSrc: Norton,
  },
  {
    id: 2,
    name: "McAfee",
    imgSrc: McAfee,
  },
  {
    id: 3,
    name: "HIPAA",
    imgSrc: HIPAA,
  },
  {
    id: 4,
    name: "GDPR",
    imgSrc: GDPR,
  },
];

function Certificates() {
  return (
    <div className="online-certificates w-full h-fit-content my-[70px]">
      <div className='online-certificates-container container mx-auto w-[90%] grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          certificates.map((certificate) => {
            return (
              <div key={certificate.id} className='certificate-card flex items-center justify-center m-[10px]'>
                <img src={certificate.imgSrc} alt={certificate.name} className='h-[120px]' />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Certificates;
