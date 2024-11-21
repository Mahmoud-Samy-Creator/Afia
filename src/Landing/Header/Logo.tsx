import logo from '../../assets/logo.png';

function Logo() {
  return(
      <div className="logo content-center">
          <img className='w-[100px]' src={logo} alt="logo" />
      </div>
  )
}

export default Logo;