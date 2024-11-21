import Header from './Header/Header';
import LandingContent from './LandingContent/LandingContent';
import './landing.css';
function Landing() {
    return (
        <div className='landing h-lvh bg-primary-bgColor relative'>
            <Header/>
            <LandingContent />
        </div>
    );
}

export default Landing;