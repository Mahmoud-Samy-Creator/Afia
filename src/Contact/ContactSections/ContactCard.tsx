// import farida from './farida.png'
import pateintManager from './pateintManager.png';

function ContactCard() {
    return(
        <div className="contact-card my-auto text-center overflow-hidden px-4 py-6 ">
            <div className="flex justify-center mb-4">
                <img className='w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden' src={pateintManager} alt="patient manager" />
            </div>
            <h3 className='my-2 text-2xl md:text-3xl lg:text-4xl text-white'>Farida</h3>
            <span className='block mb-4 text-sm md:text-base text-white'>Your personal Patient Manager</span>
            <button
                className='block w-full mx-auto py-2 bg-white text-primary-bgColor text-base md:text-lg rounded-full transition transition-[0.3s]'
            >
                Ask your question
            </button>
        </div>
    );
}

export default ContactCard;
