import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'


const servicesCards = [
    {
        id: 1,
        header: "Quality",
        text: "World-class health care services provided by board-certified physicians in accredited health care facilities.",
        icon: <FontAwesomeIcon icon={faStar} />
    },
    {
        id: 3,
        header: "Seamless journey",
        text: "Tailor-made medical packages and a dedicated healthcare coordinator to assist you every step of the way.",
        // icon: <FontAwesomeIcon icon={faSun} />
        icon: <FontAwesomeIcon icon={faUmbrellaBeach} />
    },
]

function Services() {
    return (
        <div className="services pt-[60px] pb-[60px] container mx-auto" id="services">
            <h1 className="text-center text-[#274761] text-[64px] font-bold">What Sets Afia APart ?</h1>
            <div className="servicesCards grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-[10px] mt-[70px] justify-center place-items-center">
                {servicesCards.map((card) => (
                    <div key={card.id} className="card content-center min-w-[250] max-w-[100%] w-[550px] h-[300px] rounded-[20px] border border-[#f2f2f2] shadow-[0px_2px_34px_-30px_#1565c0]">
                        <header className='text-[#274761] text-[30px] text-center font-bold'>
                            <div className='inline-block mr-[10px] w-[40px] h-[40px] bg-[#3293db] text-[white] text-[20px] text-center content-center rounded-[50%]'>
                                {card.icon}
                            </div>
                            {card.header}
                        </header>
                        <p className='text-[#274760] text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-[90%] sm:w-[80%] md:w-[75%] mx-auto mt-4'>
                            {card.text}
                        </p>

                    </div>
                ))} 
            </div>
        </div>
    );
}

export default Services;