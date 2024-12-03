// import farida from './farida.png'
import pateintManager from './pateintManager.png'

function ContactCard() {
    return(
        <div className="contact-card my-auto h-[fit-content] text-center overflow-hidden">
            <div className="flex justify-center">
                <img className='w-[250px] h-[250px] rounded-full overflow-hidden ' src={pateintManager} alt="patient manager" />
            </div>
            <h3 className='my-[10px] text-[25px] text-white ml-[10px] text-[#0078a4]'>Farida</h3>
            <span className='ml-[10px] text-white'>Your personal Patient Manager</span>
            <button
                className='block w-[80%] mx-auto my-[15px] bg-white py-[10px] text-[15px] text-primary-bgColor rounded-[25px] transition transition-[0.3s]'
            >
                Ask your question
            </button>
        </div>
    )
}

export default ContactCard; 