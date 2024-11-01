import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const servicesCards = [
    {
        id: 1,
        header: "Quality",
        text: "We are committed to providing the highest medical care quality.",
        icon: <FontAwesomeIcon icon={faStar} />
    },
    // {
    //     id: 2,
    //     header: "Respect",
    //     text: "We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances.",
    //     icon: <FontAwesomeIcon icon={faHandshakeSimple} />
    // },
    {
        id: 3,
        header: "Seamless journey",
        text: "We are committed to get you the best exprience through journey in Egypt.",
        icon: <FontAwesomeIcon icon={faSun} />
    },
]

function Services() {
    return (
        <div className="services pt-[60px] pb-[60px] container mx-auto" id="services">
            <h1 className="text-center text-[#274761] text-[64px] font-bold">Our Services</h1>
            <div className="servicesCards grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[10px] mt-[70px] justify-center place-items-center">
                {servicesCards.map((card) => (
                    <div key={card.id} className="card content-center min-w-[250] max-w-[100%] w-[390px] h-[200px] rounded-[20px] border border-[#f2f2f2] shadow-[0px_2px_34px_-30px_#1565c0]">
                        <header className='text-[#274761] text-[25px] text-center font-bold'>
                            <div className='inline-block mr-[10px] w-[40px] h-[40px] bg-[#3293db] text-[white] text-[20px] text-center content-center rounded-[50%]'>
                                {card.icon}
                            </div>
                            {card.header}
                        </header>
                        <p className='text-[#274760] text-center w-[70%] ml-auto mr-auto mt-[15px]'>
                            {card.text}
                        </p>
                    </div>
                ))} 
            </div>
        </div>
    );
}

export default Services;