import doctor from '../../assets/doctor.png';
import './LandingContent.css';


function LandingContent() {

    function formSumbit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('form submitted');
    }

    return (
        <div className="landing-content container mx-auto h-[92%] flex">
            <div className="form w-[50%] h-[100%]">
                <div>
                    <h1 className="text-white text-[55px] mt-[195px] mb-[10px] font-bold">Transform Your Health Journey With Afia</h1>
                    <p className='text-white text-[20px] mb-[50px] w-[90%]'>Get high quality medical care you deserve with a seamless journey in Egypt.</p>
                    <form className="" onSubmit={(e) => {formSumbit(e)}}>
                        <input className="w-[90%] mb-[25px] p-[10px] rounded-[6px] outline-none" type="text" placeholder="Speciality" />
                        <textarea className="w-[90%] p-[10px] h-[100px] outline-none resize-none rounded-[6px]" placeholder="Please describ your medical treatment or issue"></textarea>
                        <input type="submit" className="w-[90%] p-[10px] mt-[25px] rounded-[6px] bg-[#274760] text-white cursor-pointer transition-[0.3s] hover:bg-[#41759e]" value="Get Free Quote" />
                    </form>
                </div>
            </div>
            <div className="image h-[100%] flex justify-center items-center w-[50%]">
                <img className=' h-[100%]' src={doctor} alt="doctor"></img>
            </div>
        </div>
    );
}



export default LandingContent;