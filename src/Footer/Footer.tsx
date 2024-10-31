import ContactFooterSection from './FooterSections/ContactFooterSection';
import PagesFooterSection from './FooterSections/PagesFooterSection';
import SubscribeFooterSection from './FooterSections/SubscribeFooterSection';
import './Footer.css';


function Footer() {
    return (
        <div className='footer bg-[#cbe6f0]'>
            <div className='footerContent py-[100px] container mx-auto flex justify-between'>
                <ContactFooterSection />
                <PagesFooterSection />
                <SubscribeFooterSection />
            </div>
            <footer className='bg-[#3a66a6]'>
                <div className='container mx-auto footer-bar-content py-[14px] flex justify-between'>
                        <span className='text-[white]'>Follow us: </span>
                        <span className='text-[white]'>Copyright © 2024 Pro Health. All rights reserved. </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;