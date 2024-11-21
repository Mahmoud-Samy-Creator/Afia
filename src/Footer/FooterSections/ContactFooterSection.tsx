import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



function ContactFooterSection() {
    return(
        <div className='contact text-white'>
            <header className='text-[35px] font-bold mb-[25px]'>Afia</header>
            <div className='flex items-center mt-[15px]'>
                <span className='icon block w-[25px] h-[25px] flex items-center justify-center rounded-[50%] bg-white text-primary-bgColor p-[15px] mr-[10px]'>
                    <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className='contact-num text-white'>+201256587423</span>
            </div>
            <div className='flex items-center mt-[15px]'>
                <span className='icon block w-[25px] h-[25px] flex items-center justify-center rounded-[50%] bg-white text-primary-bgColor p-[15px] mr-[10px]'>
                    <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <span className='contact-num text-white'>125. street Egypt</span>
            </div>
            <div className='flex items-center mt-[15px]'>
                <span className='icon block w-[25px] h-[25px] flex items-center justify-center rounded-[50%] bg-white text-primary-bgColor p-[15px] mr-[10px]'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className='contact-num text-white'>Afia@mail.com</span>
            </div>
        </div>
    );
}

export default ContactFooterSection;