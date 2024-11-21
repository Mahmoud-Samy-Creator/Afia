import { DrawerProps } from '../../Types';
import { navButtons } from './CustomVars';


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

export default Drawer;