// import doctor from '../../assets/doctor.png';
import patient from '../../assets/patient.jpg';
import './LandingContent.css';


function LandingContent() {

    function formSumbit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('form submitted');
    }

    return (
        <div className="landing-content container mx-auto h-[92%] flex items-center">
            <div className="form w-[50%] h-[100%]">
                <div>
                    <h1 className="text-white text-[55px] mt-[195px] mb-[10px] font-bold">Transform Your Health Journey</h1>
                    <p className='text-white text-[20px] mb-[50px] w-[90%]'>Get high quality medical care you deserve with a seamless journey in Egypt.</p>
                    <form className="w-[90%] mx-auto lg:ml-[0]" onSubmit={(e) => {formSumbit(e)}}>
                        <input className="w-full mb-[25px] p-[10px] rounded-[6px] outline-none" type="text" placeholder="Speciality" />
                        <textarea className="w-full p-[10px] h-[100px] outline-none resize-none rounded-[6px]" placeholder="Please describe your medical treatment or issue"></textarea>
                        <div className='w-full text-center'>
                            <input
                                type="submit"
                                className="w-[50%] p-[10px] mt-[25px] rounded-[30px] bg-white text-[#274760] cursor-pointer transition-[0.3s] hover:bg-[#41759e] hover:text-white"
                                value="Get Free Quote"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="image h-[60%] flex justify-center items-center w-[50%] rounded-[25px] overflow-hidden shadow-lg">
                <img className="h-[100%] w-full" src={patient} alt="doctor"></img>
            </div>
        </div>
    );
}



export default LandingContent;