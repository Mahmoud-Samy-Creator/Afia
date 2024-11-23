import doctorMichle from '../assets/dr.michle.png';
import './KnowFounder.css';

function KnowFounder() {
    return (
        <div className="founder container mx-[auto] mt-[250px] mb-[200px] px-[10px]">
            <div className="knowFounder bg-primary-bgColor h-[350px] rounded-[30px] flex justify-between items-center">
                <div className="content w-[70%] pl-[25px]">
                    <header className='text-[50px] font-bold mb-[25px] text-white'>Dr. Micheal Nakhla</header>
                    <KnowFounderDescription />
                </div>
                <KnowFounderImage />
            </div>
        </div>
    );
}

function KnowFounderDescription() {
    return(
        <article className='text-[20px] text-white'>
            Dr. Michel Nakla is the Founder of Afia companey,
            which can offer you the best medical services in the world.
            He is a professional doctor who has been working in the medical field for more than 20 years. <br></br>He has a lot of experience in the medical field and he is always ready to help you with your medical problems.
        </article>
    );
}
X
function KnowFounderImage() {
    return(
        <div className="image w-[350px] w-fit-content relative mt-[-300px] mr-[60px]">
            {/* <img className='w-[350px] h-[350px] mx-[auto] rounded-[50%] bg-white border border-[5px] border-primary-bgColor' src={doctorMichle} alt="" /> */}
            <img className='w-[350px] h-[350px] mx-[auto] rounded-[50%] bg-white' src={doctorMichle} alt="" />
        </div>
    );
}
export default KnowFounder;