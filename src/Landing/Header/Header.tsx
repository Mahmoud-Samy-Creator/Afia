import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { navButtons } from './CustomVars';
import Logo from './Logo';
import Drawer from './Drawer';

function Header() {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    const handleCloseDrawer = () => {
        setDrawer(false);
    };

    return (
        <div className="main-header container mx-auto flex justify-between align-middle h-[8%] pt-[5px] pb-[5px]">
            <Logo />
            <div 
                className='burger-icon text-[20px] flex justify-center items-center cursor-pointer text-white'
                onClick={toggleDrawer}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
            
            <nav className="content-center">
                <ul>
                    {
                        navButtons.map((button) => (
                            <a key={button.id} href={button.link} className='content-center'><li className="color-[#274760] mr-[25px] text-[20px] text-white">{button.name}</li></a>
                        ))
                    }               
                    <a href="#">
                        <li className="text-[#274760] text-[18px] bg-white px-[12px] rounded-[20px] py-[5px] transition transition-[0.3s] hover:text-[white] hover:bg-[#1565c0] ">
                            get free quote
                        </li>
                    </a>
                </ul>
            </nav>
            {drawer && <Drawer handleCloseDrawer={handleCloseDrawer} />}
        </div>
    );
}

export default Header;

