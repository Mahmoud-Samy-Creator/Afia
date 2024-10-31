import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { navButtons } from './CustomVars';
import { DrawerProps } from '../../Types';
import logo from '../../assets/logo.png';


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
            <div className="logo text-[30px] font-bold content-center">
                {/* <a href="home" className='text-[40px] text-white'>Afia</a> */}
                <img className='w-[130px]' src={logo} alt="logo" />
            </div>
            <div 
                className='burger-icon text-[20px] flex justify-center items-center cursor-pointer'
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
                    <a href="home"><li className="color-[#274760] text-[18px] text-[white] bg-[#274760] px-[12px] rounded-[5px] py-[5px] transition transition-[0.3s] hover:text-[white] hover:bg-[#1565c0] ">get free quote</li></a>
                </ul>
            </nav>
            {drawer && <Drawer handleCloseDrawer={handleCloseDrawer} />}
        </div>
    );
}

export default Header;

function Drawer({ handleCloseDrawer }: DrawerProps) {
    const handleDrawerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div 
            className='screen h-full w-full absolute bg-[#0000005e] top-0 left-0'
            onClick={handleCloseDrawer}
        >
            <div 
                className='drawer h-full w-[250px] bg-[white]'
                onClick={handleDrawerClick}
            >
                <ul className='flex-col'>
                    {
                        navButtons.map((button) => (
                            <a key={button.id}><li className="color-[#274760] mt-[20px] text-[20px] text-left w-[80%] ml-[auto] mr-[auto]">{button.name}</li></a>
                        ))
                    }               
                    <a><li className="color-[#274760] text-[20px] mt-[20px] text-left w-[80%] ml-[auto] mr-[auto]">Get Free Quote</li></a>
                </ul>
            </div>
        </div>
    );
}
