import Header from './Header/Header';
import LandingContent from './LandingContent/LandingContent';
import './landing.css';
function Landing() {
    return (
        <div className='landing h-lvh bg-[#3a66a6] relative'>
            <Header/>
            <LandingContent />
        </div>
    );
}

export default Landing;