import farida from './farida.png'

function ContactCard() {
    return(
        <div className="contact-card w-[300px] bg-[white] rounded-[14px] overflow-hidden">
            <div className="image w-[100%] h-[280px]">
                <img className='h-[100%] w-[100%]' src={farida} alt="patient manager" />
            </div>
            <span className='text-[10px] font-bold ml-[10px]'>PATIANT MANAGER</span>
            <h3 className='my-[10px] text-[25px] ml-[10px] text-[#0078a4]'>Farida</h3>
            <span className='ml-[10px] text-[grey]'>Your personal Patient Manager</span>
            <button className='block w-[80%] mx-auto my-[15px] bg-[#0078a4] py-[10px] text-[15px] text-white rounded-[8px] transition transition-[0.3s] hover:bg-[#0b7ea9]'>Ask your question</button>
        </div>
    )
}

export default ContactCard;